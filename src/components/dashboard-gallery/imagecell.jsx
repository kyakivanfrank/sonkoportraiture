import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import app from "../../services/firebase";

const Imagecell = ({ id, img, caption, number }) => {
  const db = getFirestore(app);
  const storage = getStorage(app);

  const deleteImage = async (imageId, imageName) => {
    try {
      // Delete the document from Firestore
      const docRef = doc(db, "gallery", imageId);
      await deleteDoc(docRef);

      // Delete the image from Firebase Storage
      const storageRef = ref(storage, `${imageName}`);
      await deleteObject(storageRef);

      console.log(imageId, "was deleted successfully!");
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="relative h-fit mx-[4px] mb-[8px] break-inside-avoid">
      <img
        className="rounded-md grayscale-75 w-full transition-all duration-300"
        loading="lazy"
        src={img}
        alt={caption}
      />
      <button
        onClick={() => deleteImage(id, img)}
        className="rounded-[100px] p-1 hover:bg-white absolute top-[4px] right-[5px]"
      >
        <XMarkIcon className="opacity-75 w-6 text-black" />
      </button>

      <button
        id="likes"
        className="bottom-2 left-2 rounded-md items-center space-x-1 py-2 px-[10px] faintBlackBG absolute flex flex-row"
      >
        <HeartIcon className="w-3 md:w-4 lg:w-5 text-white" />
        <span className="text-white text-sm md:text-md lg:text-lg font-semibold">
          {Math.floor(Math.random() * (68 - 10 + 1)) + 10}
        </span>
      </button>
    </div>
  );
};

export default Imagecell;
