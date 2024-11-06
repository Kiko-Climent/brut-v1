import galleryeight1 from "../assets/images/pexels-dariabuntaria.jpg"

const GallerySectionEight = () => {
  return (
    <section className="relative group px-2 py-0 h-screen w-screen flex items-center justify-center overflow-hidden">
      <div className="relative flex justify-center items-center h-full w-3/4">
        <img src={galleryeight1} className="h-full w-full object-cover filter invert hover:invert-0 scale-100 hover:scale-105 transition duration-500"/>
      <div className="absolute bottom-2 left-2 w-1/6 text-white text-left text-sm leading-none">
        <p>Este es el nuevo texto que quieres añadir en la parte inferior izquierda. Este es el nuevo texto que quieres añadir en la parte inferior izquierda. Este es el nuevo texto que quieres añadir en la parte inferior izquierda. Este es el nuevo texto que quieres añadir en la parte inferior izquierda.</p>
      </div>
      </div>
      <div className="absolute w-3/4 top-2 pr-3 text-white text-right text-xs leading-none">
        <ul>
          <li>Saburtalo District</li>
          <li>Tbilisi, Georgia</li>
          <li>1974</li>
        </ul>
      </div>
    </section>
  )
}

export default GallerySectionEight;