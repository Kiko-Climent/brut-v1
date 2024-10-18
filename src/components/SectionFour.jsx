import img5 from '../assets/images/kotryna-juskaite.jpg'

const SectionFour = () => {
  return (
    <section className="overflow-hidden py-3">
      <div className="h-full flex items-center justify-between bg-white">
        <div className="flex-1">
          <p className='text-center text-2xl text-black'>it's all about honesty.</p>
        </div>
        <div className="flex-1">
          <img src={img5}/>
        </div>
      </div>
    </section>
  )
}

export default SectionFour;