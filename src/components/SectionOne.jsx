import img1 from '../assets/images/pexels-connor-steinert1.jpg';

const SectionOne = () => {
  return (
    <section className="h-screen overflow-hidden">
      <div className="h-full w-full">
        <img 
          src={img1} 
          className="object-cover w-full  h-full lg:h-auto lg:object-cover" 
          alt="description"
        />
      </div>
    </section>
  );
}

export default SectionOne;
