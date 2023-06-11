import { RiMessageFill } from "react-icons/ri";
import Academy from "../Components/Academy/Academy";
import Banner from "../Components/Banner/Banner";
import Constituent from "../Components/Constituent/Constituent";
import Event from "../Components/Event/Event";
import Ideology from "../Components/Ideology/Ideology";
import Initiatives from "../Components/Initiatives/Initiatives";
import Inspiration from "../Components/Inspiration/Inspiration";
import Gallery from "../Components/Gallery/Gallery";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";
import ContactPage from "./contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Constituent />
      <Ideology />
      <Inspiration />
      <Event />
      <Academy />
      <Initiatives />
      <Gallery />
      <PhotoGallery />
      <ContactPage />
      <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full fixed bottom-7 right-7">
        <RiMessageFill className="text-2xl" />
      </div>
    </>
  );
};

export default Home;
