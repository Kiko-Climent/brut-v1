import img5 from '../assets/images/kotryna-juskaite.jpg';

const SectionFour = () => {
  return (
    <section className="overflow-hidden py-1 lg:py-3">
      {/* En dispositivos pequeños: flex-col (columna), en grandes: flex-row (fila) */}
      <div className="h-full flex flex-col-reverse lg:flex-row items-center justify-between bg-white">
        {/* Imagen se muestra primero en dispositivos pequeños */}
        <div className="flex-1 order-2 lg:order-1 mt-24 lg:mt-0">
          <p className="text-center text-xl text-black">it's all about honesty.</p>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <img src={img5} className="w-full h-screen object-cover" alt="Honesty Image" />
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
