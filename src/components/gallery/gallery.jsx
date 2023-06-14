import React, { useState, useEffect } from 'react';
import Imagecell from './imagecell';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { getFirestore, collection, getDocs, onSnapshot } from 'firebase/firestore';
import app from '../../services/firebase';

const Gallery = () => {
  const db = getFirestore(app);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'gallery'));
        const fetchedImages = [];
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            img: doc.data().url,
            caption: doc.data().name,
          };

          fetchedImages.push(data);
        });
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images from Firestore:', error);
      }
    };

    fetchImages();

    const unsubscribe = onSnapshot(collection(db, 'gallery'), (snapshot) => {
      const updatedImages = [];
      snapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          img: doc.data().url,
          caption: doc.data().name,
        };

        updatedImages.push(data);
      });
      setImages(updatedImages);
    });

    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <div id="gallery" className={``}>
      <div className="container w-[98%] md:w-[95%] lg:w-[80%] mx-auto py-6 lg:py-20">
        <h1 className="font-bold text-3xl text-center lg:text-left lg:text-4xl pb-6 lg:pb-10">MY PORTFOLIO</h1>
        <div className={images.length > 0 ? `columns-2 md:columns-3 gap-0 lg:columns-4` : `columns-1 md:columns-2 gap-2`}>
          {images.length > 0 ? (
            images.map(({ id, img, caption }, index) => (
              <Imagecell key={index} id={id} img={img} caption={caption} number={index} />
            ))
          ) : (
            <div className="col-span-3 md:col-span-4 h-[20vh] lg:col-span-5 flex flex-col items-center justify-center">
              <PhotoIcon className="w-12 h-12 text-black mb-2" />
              <p className="text-black text-lg font-semibold">No images in the Gallery</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
