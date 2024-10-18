import img3 from '../assets/images/mike-hindle.jpg';
import img4 from '../assets/images/byron-breytenbach.jpg';

const SectionThree = () => {
  return (
    <section className="">
      <div className="flex gap-3">
        <img src={img3} alt="Image 1" className="w-1/2 object-cover" />
        <img src={img4} alt="Image 2" className="w-1/2 object-cover" />
      </div>
    </section>
  );
}

export default SectionThree;
