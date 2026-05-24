import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1">
          {data?.title}
        </p>
        <a
          href={data?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[12px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-2 xs:py-5.75 px-5 max-sm:w-full"
        >
          Studi Kasus
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
          </span>
        </a>
        {/* </p> */}
      </div>
    </div>
  );
};

export default Projects;
