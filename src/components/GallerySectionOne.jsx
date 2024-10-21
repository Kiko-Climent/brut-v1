import galleryimage1 from '../assets/images/goran-petkovic2.jpg';
import galleryimage2 from '../assets/images/goran-petkovic3.jpg';
import galleryimage3 from '../assets/images/goran-petkovic4.jpg';
import galleryimage4 from '../assets/images/ivan-aleksic.jpg';

const GallerySectionOne = () => {
  
  return (
    <section className="h-screen flex justify-between px-2 pt-9 relative">
      {/* Primera imagen sin cambios */}
      <div className="w-1/3 h-full flex items-start">
        <img
          src={galleryimage2}
          alt="Descripción de la imagen"
          className="w-full h-3/4 object-cover object-center"
        />
      </div>


      <div className="w-1/2 h-full relative group">
        <img
          src={galleryimage4}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-bottom"
        />

        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>


        <div className='absolute w-full top-2 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
            <li>Karaburma Housing Tower Building.</li>
            <li>Belgrade, Serbia</li>
            <li>1963</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GallerySectionOne;
