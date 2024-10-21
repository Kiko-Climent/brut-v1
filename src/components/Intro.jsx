const Intro = () => {
  return (
    <section className="h-screen flex flex-col leading-3">
      {/* Parte superior */}
      <div className="h-1/2 bg-white flex items-end justify-center">
        <h1 className="text-9xl text-[#0c130c] custom-line-height ">brut*</h1>
      </div>
      <div className="h-1/2 bg-[#0c130c] flex items-start justify-center">
      {/* Parte inferior */}
        <h1 className="text-9xl text-white transform rotate-180 scale-x-[-1] custom-line-height ">brut*</h1>
      </div>
    </section>
  );
}

export default Intro;
