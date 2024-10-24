import gallerysix1 from '../assets/images/joss-broward.jpg'
import gallerysix2 from '../assets/images/marina-reizberg.jpg'
import gallerysix3 from '../assets/images/dominic-kurniawan-central-park-sidney.jpg'



const GallerySectionSix = () => {
  return (
    <section className='h-screen flex justify-start gap-2 px-2 pb-2 overflow-hidden'>
        <div className='w-2/5 h-full flex flex-col'>
          <div className='flex h-full'>
            <img src={gallerysix2} alt="Imagen 1" className="w-full h-full object-cover object-bottom" />
          </div>
      </div>
      <div className="w-2/3 h-full relative group pt-2">
        <img
          src={gallerysix1 }
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-center"
        />
         <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>
        <div className='absolute w-full top-4 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
            <li>Northwestern University Library.</li>
            <li>Illinois, US.</li>
            <li>1970</li>
          </ul>
        </div>
        <div className='absolute w-full bottom-2 pl-2 text-justufy text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          <p>The building's design aligns with the Brutalist<br/> movement's goal of expressing the material and<br/> structural elements of the architecture, often<br/> giving buildings a sense of weight and permanence.</p>
        </div>
      </div>
    </section>
  )
}

export default GallerySectionSix;