import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

function ProductGallery({ images = [], productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Reset selected image whenever variant images change
  useEffect(() => {
    setSelectedImage(0);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-3xl bg-slate-100 text-slate-400">
        No image available
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="group relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white">

        <img
          src={images[selectedImage]}
          alt={`${productName} ${selectedImage + 1}`}
          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
        />

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute right-4 top-4 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            {selectedImage + 1} / {images.length}
          </div>
        )}

        {/* Expand Decorative Icon */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
          <Expand size={18} className="text-slate-700" />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-slate-900 hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-slate-900 hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">

          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              onClick={() => setSelectedImage(index)}
              className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition ${
                selectedImage === index
                  ? "border-primary shadow-md"
                  : "border-transparent hover:border-slate-300"
              }`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="h-full w-full rounded-lg object-contain"
              />
            </button>
          ))}

        </div>
      )}
    </div>
  );
}

export default ProductGallery;