import {model, models, Schema} from "mongoose";

const CarouselSchema = new Schema({
  imageURL: {type:String, required:true},
}, {timestamps: true});

export const Carousel = models?.Carousel || model('Carousel', CarouselSchema);