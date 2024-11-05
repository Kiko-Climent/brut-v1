import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const GallerySectionTwo = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      // Inicializa Firestore
      const db = getFirestore();
      const storage = getStorage();

      // Obtiene el documento específico de tu colección
      const docRef = doc(db, 'gallery', 'u3vNVmgjIPOxteN067ww');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const bannerPicPath = docSnap.data().banner_pic;
        const imageRef = ref(storage, bannerPicPath);
        
        getDownloadURL(imageRef)
          .then((url) => {
            setBgImage(url);
          })
          .catch((error) => {
            console.error("Error by getting the image URL:", error);
          });
      } else {
        console.log("Couldn't find the document");
      }
    };

    fetchImage();
  }, []);

  return (
    <section className='py-2 px-2'>
      <div 
        className='h-auto lg:h-screen overflow-hidden parallax' 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
      </div>
    </section>
  );
};

export default GallerySectionTwo;
