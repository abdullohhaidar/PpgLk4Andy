import Introduction from "../components/introduction/Introduction";
import IntroductionRegion from "../components/introduction/IntroductionRegion";
import IntroductionInspiration from "../components/introduction/IntroductionInspiration";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <IntroductionRegion />
          <IntroductionInspiration />
          
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Blog />
      </div>
      <div className="introduction-blog-background">
        <div className="content">
          <Profile />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
