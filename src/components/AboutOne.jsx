import aboutphoto from '../assets/images/pexels-aleksandr-neplokhov1.jpg'

const AboutOne = () => {
//   return (
//     <section className="h-screen bg-[#0c130c] overflow-hidden w-screen">
//       <div className='flex items-center pl-2 w-full gap-2'>
//         <div className="text-white text-justify w-1/3 flex-col">
//           <h1 className='border-b border-white leading-tight'>about</h1>
//           <p className="text-xs hyphens-manual">
//             The primary purpose of this page is purely educational. It explores the fascinating world of brutalist architecture, reflecting my strong inclination towards this design style, not only in architecture but across all fields of design. I believe that the raw, minimalist aesthetic of brutalism 
//             captures a unique blend of form and function, challenging conventional design norms and encouraging a deeper appreciation of structure.
//             I would also like to extend my heartfelt gratitude to the talented photographers whose work is featured here. Their stunning imagery brings this architectural style to life and helps convey the beauty and significance of brutalism in our built environment.
//             Thank you for visiting this page, and I hope you find it informative and inspiring!  
//           </p>
//           <h1 className='border-b border-white leading-tight mt-4'>photographers</h1>
//           <p className="text-xs">Alexandr Neplokhov<br/>Goran Petkovic<br/>Ivan Aleksic<br/>Joel Filipe<br/>Katejan Powolny<br/>Kotryna Juskaite<br/>Mike Hindle<br/>Pavel Neznanov.</p>
//           <p className='text-lg leading-none text-baseline mt-4'>Brutalist<br/>Brutalista<br/>ブルータリスト<br/>Бруталист<br/>Μπρουταλιστής<br/>브루탈리스트</p>     
//         </div>
//         <div className="flex-schrink">
//           <img 
//           src={aboutphoto}
//           className='object-cover h-full'/>
//         </div>
//       </div>
//     </section>
//   )
// }
return (
  <section className="h-screen bg-[#0c130c] overflow-hidden w-screen text-white">
    <div className="h-full flex flex-col-reverse text-justify">
      <div className="px-2 flex w-full gap-2 py-2">
        <div className="w-7/12">
          <h1 className="border-b border-white text-sm">about</h1>
          <p className="text-xs hyphens-manual">
            The primary purpose of this page is purely educational. It explores the fascinating world of brutalist architecture, reflecting my strong inclination towards this design style, not only in architecture but across all fields of design. I believe that the raw, minimalist aesthetic of brutalism 
            captures a unique blend of form and function, challenging conventional design norms and encouraging a deeper appreciation of structure.
            I would also like to extend my heartfelt gratitude to the talented photographers whose work is featured here. Their stunning imagery brings this architectural style to life and helps convey the beauty and significance of brutalism in our built environment.
            Thank you for visiting this page, and I hope you find it informative and inspiring!
          </p>
        </div>
        <div className="w-5/12">
          <h1 className="border-b border-white text-sm">photographers</h1>
          <p className="text-xs">
            Alexandr Neplokhov<br />Goran Petkovic<br />Ivan Aleksic<br />Joel Filipe<br />Katejan Powolny<br />Kotryna Juskaite<br />Mike Hindle<br />Pavel Neznanov.
          </p>
          <p className="text-lg leading-none mt-4">
            Brutalist<br />Brutalista<br />ブルータリスト<br />Бруталист<br />Μπρουταλιστής<br />브루탈리스트
          </p>
        </div>
      </div>
      <div className="flex-1 h-full overflow-hidden">
        <img
          src={aboutphoto}
          className="object-cover h-full w-full object-center"
        />
      </div>
    </div>
  </section>
);

}

export default AboutOne;