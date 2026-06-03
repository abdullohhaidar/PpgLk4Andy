import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "4 tahun",
    description: "  S1 PKO  ",
  },
  {
    id: 2,
    title: " 1 semester",
    description: "  Magang  ",
  },
  {
    id: 3,
    title: "1 semester",
    description: " PPL ",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-xl sm:text-2xl xl:text-3xl block">
            Hallo, Saya
            <span className="text-nowrap shrink-0 inline-block w-full lg:text-[40px]">
              Muhammad Andy Winata
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-justify leading-relaxed indent-8">
            Saya merupakan lulusan Program Sarjana (S1) Pendidikan Kepelatihan Olahraga (PKO) dari Universitas Negeri Surabaya dengan IPK 3,84 dan lulus pada tahun 2025. Saya memiliki minat dan komitmen yang kuat dalam bidang pendidikan jasmani, kepelatihan olahraga, dan pengembangan kondisi fisik. Saat ini, saya sedang menempuh Program Pendidikan Profesi Guru (PPG) di Universitas PGRI Adi Buana Surabaya serta melaksanakan Praktik Pengalaman Lapangan (PPL) di SMP Negeri 22 Surabaya. Saya berkomitmen untuk terus mengembangkan kompetensi sebagai pendidik profesional di bidang Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK).
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="https://wa.me/6281392237936"
            >
             Hubungi Saya
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-124 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>

    
    
  );
};


export default Introduction;
