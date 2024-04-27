import { initializeApp } from "firebase/app";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as databaseRef, set } from 'firebase/database';
import uniqid from 'uniqid';

export async function POST(req) {
    // Initialize Firebase
    const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const database = getDatabase(app);

    const data = await req.formData();
    if(data.get('file')) {
        // Upload the file
        const file = data.get('file');
        const ext = file.name.split('.').slice(-1)[0];
        const newFileName = uniqid() + '.' + ext;
        const fileRef = storageRef(storage, 'uploads/' + newFileName);

        // Upload the file to Firebase Storage
        const snapshot = await uploadBytes(fileRef, file);
        
        // Get the download URL
        const downloadURL = await getDownloadURL(snapshot.ref);
        const validFirebaseKey = newFileName.replace(/\./g, '_');

        // Save the file metadata to Firebase Realtime Database
        const fileMetadata = {
            name: newFileName,
            size: file.size,
            type: file.type,
            url: downloadURL
        };
        const metadataRef = databaseRef(database, 'files/' + validFirebaseKey); // Use the validFirebaseKey here
        await set(metadataRef, fileMetadata);

        return Response.json(downloadURL);
    }
    return Response.json(true);
}