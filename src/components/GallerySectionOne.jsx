import galleryimage1 from '../assets/images/goran-petkovic2.jpg'
import galleryimage2 from '../assets/images/goran-petkovic3.jpg'


const GallerySectionOne = () => {
  return (
    <section className="h-screen flex justify-between px-2 pt-9">
      {/* Contenedor para la imagen de la izquierda */}
      <div className="w-3/8 h-full flex items-start">
        <img
          src={galleryimage2} // Reemplaza con la ruta de tu imagen
          alt="Descripción de la imagen"
          className="w-full h-3/4 object-cover object-center" // Añade un margen inferior si es necesario
        />
      </div>
      {/* Contenedor para la imagen de la derecha */}
      <div className="w-1/2 h-full">
        <img
          src={galleryimage1} // Reemplaza con la ruta de tu imagen
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}

export default GallerySectionOne;

