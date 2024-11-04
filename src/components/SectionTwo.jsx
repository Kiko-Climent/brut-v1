import img2 from '../assets/images/kajetan-powolny.jpg';

const SectionTwo = () => {
  return (
    <section className="overflow-hidden h-screen">
      <div className="h-full flex flex-col-reverse md:flex-row items-center justify-between bg-[#0c130c]">
        <div className="flex-1 mt-48 lg:mt-0">
          <p className="text-center text-xl text-white">not a style, but a way of life.</p>
        </div>
        <div className="flex-1">
          <img src={img2} alt="Description" />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
