import FlyingButton from 'react-flying-item'

export default function AddToCartButton({
  hasSizesOrExtras, onClick, basePrice, image
}) {
  if (!hasSizesOrExtras) {
    return (
      <div className="flying-button-parent mt-4">
        <FlyingButton
          targetTop={'5%'}
          targetLeft={'95%'}
          src={image}>
          <div className="dark: text-black" onClick={onClick} >
            Add to cart ${basePrice}
          </div>
        </FlyingButton>
      </div>
    );
  }
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`mt-4 bg-primary text-white rounded-full px-8 py-2 ${Math.random() < 0.5 ? 'jiggle' : 'pulse'}`}
      >
        <span>Add to cart (from ${basePrice})</span>
      </button>
      <style jsx>{`
        @keyframes jiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        .jiggle:hover {
          animation: jiggle 0.1s ease-in-out infinite;
        }
        .pulse:hover {
          animation: pulse 1s infinite;
        }
      `}</style>
    </>
  );
}