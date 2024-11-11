import galleryeight1 from "../assets/images/pexels-dariabuntaria.jpg"

const GallerySectionEight2 = () => {
  return (
    <section className="lg:h-screen lg:w-screen px-2 overflow-hidden relative">
      <div className="w-full h-full">
        <img src={galleryeight1} className="h-full w-full object-contain lg:object-cover"/>
      </div>
      <div className="absolute w-full top-1 pl-1 text-white text-left text-xs leading-none">
        <ul>
          <li>Saburtalo District</li>
          <li>Tbilisi, Georgia</li>
          <li>1974</li>
        </ul>
      </div>
      <div className="absolute w-full inset-0 flex items-center justify-center text-white text-center text-xs leading-none">
        <h1 className="uppercase text-[10vw] lg:text-9xl text-[#0c130c]">rough surfaces<br/>massive forms<br/> and plenty of concrete</h1>
      </div>
    </section>
  )
}

export default GallerySectionEight2;