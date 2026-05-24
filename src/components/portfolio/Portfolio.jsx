import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/silatfix.png";
import card2 from "../../assets/images/portfolio-images/JalanCepat2.png";
import card3 from "../../assets/images/portfolio-images/basket.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "SIKLUS 1",
    title: "Pencak Silat",
    link: "https://drive.google.com/drive/folders/1zfJNd44Or6W03ODVSws46NVHBEsGtUTE",
  },
  {
    id: 2,
    image: card2,
    category: "SIKLUS 2",
    title: "Jalan Cepat",
    link: "https://drive.google.com/drive/folders/14sGGAWTySy1h7qEd_3R5YHuNpdLTpeXZ",
  },
  {
    id: 3,
    image: card3,
    category: "SIKLUS 3",
    title: "Permainan Bola Basket",
    link: "https://drive.google.com/drive/folders/1H0LT_-aMtp6EjKDdtnGxY1bUmcAqcOeG",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">ARTEFAK</p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
