import person from "../../assets/images/assese.jpeg";
import "./introduction.css";


const IntroductionInspiration = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-xl sm:text-2xl xl:text-1xl block ">
            
            <span className="text-nowrap shrink-0 inline-block w-full lg:text-[35px] font-bold">
              Inspirasi dan Tujuan
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify leading-relaxed indent-10">
            Inspirasi saya untuk menjadi guru berawal dari keinginan untuk membagikan ilmu yang saya miliki agar bisa bermanfaat bagi orang lain. Lingkungan keluarga yang banyak berprofesi sebagai guru juga membuat saya semakin tertarik dengan dunia pendidikan. Dari mereka, saya belajar bahwa menjadi guru bukan hanya tentang mengajar, tetapi juga tentang membimbing dan memberikan pengaruh baik bagi generasi muda.
 
           </p>

           <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify leading-relaxed indent-10">
            Bagi saya, menjadi guru tidak hanya sekadar menyampaikan materi di kelas, tetapi juga membantu siswa untuk berkembang, baik dalam akademik maupun karakter. Saya ingin menjadi guru yang bisa memberikan motivasi, inspirasi, dan membuat siswa merasa nyaman dalam proses belajar.
            Karena itu, saya ingin menjalani setiap proses dengan penuh tanggung jawab dan selalu berusaha memberikan yang terbaik dalam setiap kesempatan, sesuai dengan prinsip hidup yang saya pegang.
           </p>
           <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            - “Do the best for everything.”
           </p>
          
        </div>
        
      </div>
      <div className="max-w-124 w-full h-full max-lg:mx-auto aspect-[536/636]">
    <img
      className="shadow-2xl shadow-gray-200 w-full h-full object-cover bg-white rounded-3xl"
      src={person}
      alt="person"
    />
  </div>
    </div>
  );
};

export default IntroductionInspiration;