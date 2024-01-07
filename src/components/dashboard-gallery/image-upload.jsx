import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { PlusIcon } from '@heroicons/react/24/solid'
import { getFirestore, doc, setDoc, collection, onSnapshot } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../services/firebase";

const ImageUploader = ({ IsOpen, setIsOpen, images }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isSent, setIsSent] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [documentCount, setDocumentCount] = useState(0);


  const db = getFirestore(app);
  const storage = getStorage(app);

  const onDrop = async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      setUploadedImages((prevImages) => [...prevImages, file]);
    }
  };


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const uploadImagesToFirestore = async () => {
    try {
      for (const imageFile of uploadedImages) {
        const imageRef = ref(storage, `gallery/${imageFile.name}`);
        const uploadTask = uploadBytesResumable(imageRef, imageFile);

        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setUploadProgress(progress);
          },
          (error) => {
            console.error('Error uploading image:', error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const imageDocRef = doc(collection(db, 'gallery'));
              const data = {
                name: imageFile.name,
                date: Date(),
                url: downloadURL
              };
              setDoc(imageDocRef, data)
                .then(() => {
                  console.log('Image uploaded to Firestore successfully! and date()');
                })
                .catch((error) => {
                  console.error('Error uploading image to Firestore:', error);
                });
            }).catch((error) => {
              console.error('Error getting download URL:', error);
            });
          }
        );
      }

      setUploadedImages([]);
      setUploadProgress(0);
      setIsSent(true)
    } catch (error) {
      console.error('Error uploading images to Firestore:', error);
    }
  };


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'gallery'), (snapshot) => {
      setDocumentCount(snapshot.size);

    });
    return () => {
      unsubscribe();
    };
  }, [db]);


  useEffect(() => {
    let timeout;

    if (isSent) {
      timeout = setTimeout(() => {
        setIsSent(false);
      }, 10000); // Delay for 10 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isSent]);




  return (
    <div className={`fixed z-[40] inset-0 flex items-center justify-center bg-black bg-opacity-50 ${IsOpen === true ? "visible" : "hidden"}`}>
      <div className="bg-white w-[90%] lg:w-[60%] rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Drag and drop images
          <span className='float-right'>
            <button onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </h2>

        <div {...getRootProps()} className={`border-2 border-dashed p-4 mb-4 ${isDragActive ? "border-blue-500" : "border-gray-300"}`}>
          <input {...getInputProps()} />
          <p className="text-gray-500 h-40">Drag and drop images here or click to browse
            <span className='block mt-10 lg:mt-10'>
              {isSent === false ? <PlusIcon className='w-[20%] lg:w-[5%] text-gray-400 mx-auto' /> :
                <span>
                  <span className='block text-2xl text-green-800 font-bold text-center opacity-100 transition ease-in-out delay-150 duration-900'>UPLOAD SUCCESSFUL</span>
                </span>}
            </span>
          </p>
        </div>

        {uploadProgress > 0 && (
          <div className="mt-4">
            <div className="bg-gray-200 h-4 rounded">
              <div className="bg-blue-500 h-full rounded" style={{ width: `${uploadProgress}%` }}></div>
            </div>
            <p className="text-gray-500 text-sm mt-2">{uploadProgress}% uploaded</p>
          </div>
        )}

        {uploadedImages.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-2">Uploaded Images:</h3>
            <ul className='grid grid-cols-2 lg:grid-cols-8 gap-2 max-h-[30vh] lg:max-h-[10vh] overflow-y-auto'>
              {uploadedImages.map((image, index) => (
                <li key={index} className="mb-2">
                  <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} className="w-full h-20 overflow-y-hidden object-cover rounded" />
                </li>
              ))}
            </ul>
          </div>
        )}

        {uploadedImages.length > 0 ? <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={uploadImagesToFirestore} > Upload </button> : ""}

      </div>
    </div>
  );
};

export default ImageUploader;
