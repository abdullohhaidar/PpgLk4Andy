import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/IntrumenPerangkat.png";
import img3 from "../../assets/images//blog/instrumenPublik.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const blogData = [
  
  {
    id: 2,
    image: img2,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Instrumen Perangkat",
    link: "https://drive.google.com/drive/folders/1tbjce6-TR_fvuInoKgEWshGUYhouLr5w",
  },
  {
    id: 3,
    image: img3,
    date: "22 Oct, 2020",
    comments: 246,
    title: "Instrumen Praktik",
    link: "https://drive.google.com/drive/folders/1XNDS2DE5ozJeIgMPowZhWNNUqDlkzeJQ",
  },
  

];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative " id="blog">
      <div className="max-w-185 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">LAMPIRAN INSTRUMEN</p>
       
      </div>
      <div className="flex justify-center">
        <Swiper
          grabCursor={true}
          breakpoints={custom_breakpoints}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {blogData?.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!w-[450px] mb-10 flex justify-center"
            >
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full cursor-pointer"
              >
                <MonoBlog data={data} key={index} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
};

export default Blog;
