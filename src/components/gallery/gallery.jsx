import React, { useState, useEffect } from "react";
import Imagecell from "./imagecell";
import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import app from "../../services/firebase";
import ClipLoader from "react-spinners/ClipLoader";

const Gallery = () => {
  const db = getFirestore(app);
  const [images, setImages] = useState([]);
  const [showAllImages, setShowAllImages] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
        const fetchedImages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          img: doc.data().url,
          caption: doc.data().name,
          date: doc.data().date

        }));
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();

    const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
      const updatedImages = snapshot.docs.map((doc) => ({
        id: doc.id,
        img: doc.data().url,
        caption: doc.data().name,
      }));
      setImages(updatedImages);
    });

    return () => {
      unsubscribe();
    };
  }, [db]);
  const visibleImages = showAllImages ? images : images.slice(0, 8);
  const toggleShowAllImages = () => {
    setShowAllImages((prevShowAllImages) => !prevShowAllImages);
  };

  return (
    <div id="gallery" className="">
      <div className="container px-0 w-[94%] md:w-[80%] py-[2rem] md:py-[5rem] lg:py-[7.5rem]]">
        <h4 className="font-bold text-2xl py-4" data-aos="fade-down">
          MY PORTFOLIO
        </h4>

        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <ClipLoader
              loading={isLoading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : visibleImages.length > 0 ? (
          <div className={
            visibleImages.length > 0
              ? `columns-2 md:columns-3 gap-0 lg:columns-4`
              : `columns-1 md:columns-2 gap-2`
          }
          >
            {visibleImages.map(({ id, img, caption }, index) => (
              <Imagecell
                key={id}
                id={id}
                img={img}
                caption={caption}
                number={index}
              />
            ))}
          </div>
        ) : (
          <div className="col-span-3 md:col-span-4 h-[50vh] lg:col-span-5 flex flex-col items-center justify-center">
            <PhotoIcon className="w-12 h-12 text-black mb-2" />
            <p className="text-black text-lg font-semibold">
              No images in the Gallery
            </p>
          </div>
        )}
        {!showAllImages && images.length > 8 && (
          <div className="flex justify-center items-center mt-10">
            <button
              className="text-blue-800 hover:text-blue-900 transition-colors duration-300"
              onClick={toggleShowAllImages}
            >
              <h3 className="text-lg">See More...</h3>
            </button>
          </div>
        )}



      </div>
    </div>
  );
};

export default Gallery;
