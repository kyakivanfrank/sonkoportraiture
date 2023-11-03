import React, { useState, useEffect } from "react";
import Imagecell from "../components/dashboard-gallery/imagecell";
import { PlusCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";
import ImageUploader from "../components/dashboard-gallery/image-upload";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import app from "../services/firebase";
import { toast } from "react-toastify";
import Toasting from "../components/toasting";

const Dashboard = ({ onLogout }) => {
  // gallery logic starts here
  const db = getFirestore(app);
  const [images, setImages] = useState([]);
  const [numberOfImages, setNumberOfImages] = useState(0); // Add numberOfImages state
  const [IsOpen, setIsOpen] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { timeStyle: "short" });
    return timeString;
  };

  toast.success("Login successful!");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "gallery"));
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
        setNumberOfImages(fetchedImages.length); // Set the count of images
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
      }
    };

    // Fetch images initially
    fetchImages();
    // Set up real-time listener for updates
    const unsubscribe = onSnapshot(collection(db, "gallery"), (snapshot) => {
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
      setNumberOfImages(updatedImages.length); // Set the count of images
    });

    // Clean up the listener when component unmounts
    return () => {
      unsubscribe();
    };
  }, [db]);

  return (
    <>
      <Toasting />
      <div id="dashboard" className="z-[100]">
        <section className="bg-dark_primary py-5 text-white">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <div className="flex flex-row">
              <span className="flex-1 text-white text-xl font-bold">
                {getCurrentTime()}
              </span>
              <button className=" text-white" onClick={() => onLogout()}>
                <div className="flex flex-row gap-2">
                  <span className="text-white font-semibold">Log out</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <h4
              className="subtitle font-bold text-md mt-4 text-left text-white"
              data-aos="fade-down"
            >
              Dashboard
            </h4>

            <div className="flex flex-col">
              <span className="text-2xl text-white font-bold text-right my-3">
                Sonko portraiture
              </span>
              <div className="bg-white text-dark_primary p-4 rounded-lg shadow-md">
                <div className="flex flex-col gap-2">
                  <span className="text-lg">
                    Number of Images: <b>{numberOfImages}</b>
                  </span>
                </div>
              </div>

              <h4
                className="font-semibold text-md mt-4 text-center text-[orange]"
                data-aos="fade-down"
              >
                You can add or remove any photos that are displayed in the
                gallery.
                <br />
                Make sure you first compress images to at least 400kb or smaller
                (smaller sizes load quickly)
              </h4>
              {/* gallery starts here */}
              <div id="gallery" className={``}>
                <ImageUploader
                  IsOpen={IsOpen}
                  setIsOpen={setIsOpen}
                  images={images}
                />

                <h1 className="font-bold text-3xl text-center lg:text-left lg:text-4xl ">
                  MY PORTFOLIO
                </h1>
                <div
                  className={
                    images.length > 0
                      ? `columns-2 md:columns-3 gap-0 lg:columns-4`
                      : `columns-1 md:columns-2 gap-2`
                  }
                >
                  <div className="h-fit mx-1 mb-2 break-inside-avoid">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="w-[100%] text-[100%] h-[20vh] bg-[#e4e2e2c1] hover:bg-[#ffffffe4]  rounded-md"
                    >
                      <PlusCircleIcon className="w-[20%] mx-auto fill-blue-500" />
                      <span className="font-bold">add image</span>
                    </button>
                  </div>
                  {images.length > 0 ? (
                    images.map(({ id, img, caption }, index) => (
                      <Imagecell
                        key={index}
                        id={id}
                        img={img}
                        caption={caption}
                        number={index}
                      />
                    ))
                  ) : (
                    <div className="col-span-3 md:col-span-4 h-[20vh] lg:col-span-5 flex flex-col items-center justify-center">
                      <PhotoIcon className="w-12 h-12 text-black mb-2" />
                      <p className="text-black text-lg font-semibold">
                        No images in the Gallery
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
