import img2 from '../assets/images/kajetan-powolny.jpg'

const SectionTwo = () => {
  return (
    <section className="overflow-hidden h-screen">
      <div className="h-full flex items-center justify-between bg-[#0c130c]">
        <div className="flex-1">
          <p className='text-center text-2xl text-white'>not a style, but a way of life.</p>
        </div>
        <div className="flex-1">
          <img src={img2}/>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo;