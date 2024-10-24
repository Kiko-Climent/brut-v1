import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

function UrlFirebase({ url, className }) {
  const [source, setSource] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const imageRef = storageRef(storage, url); // Crea una referencia al archivo
        const downloadUrl = await getDownloadURL(imageRef); // Obtiene la URL de descarga
        setSource(downloadUrl); // Establece la URL en el estado
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error
      }
    };

    fetchUrl();
  }, [url]); // Se ejecuta cuando cambia la URL

  if (error) {
    return <div>Error: {error}</div>; // Muestra el error si hay uno
  }

  return (
    <>
      {source ? (
        <img src={source} className={className} alt="Firebase file" /> // Muestra la imagen
      ) : (
        <div>Loading...</div> // Muestra cargando mientras se obtiene la URL
      )}
    </>
  );
}

export default UrlFirebase;