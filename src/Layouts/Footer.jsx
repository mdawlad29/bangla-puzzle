import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="relative">
        {/*----------- Contact form ----------- */}
        <div className="absolute -top-20 bg-primary md:mx-36 mx-8 rounded-lg px-10 py-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 items-center">
            <div className="text-neutral">
              <h2 className="text-2xl uppercase">newsletter subscribe</h2>
              <p className="text-base">
                Sign up with your email address to updates.
              </p>
            </div>
            <input
              className="px-2 py-3 rounded-md border-none focus:outline-none"
              placeholder="Enter your name"
              id="name"
              type="text"
            />
            <input
              className="px-2 py-3 rounded-md border-none focus:outline-none"
              placeholder="example@gmail.com"
              id="name"
              type="email"
            />
            <button className="w-full text-center px-4 py-3 bg-secondary text-neutral text-xl font-bold rounded-md uppercase">
              submit
            </button>
          </div>
        </div>
        {/*--------- Footer ------------ */}
        <div className="bg-secondary py-14 lg:pt-28 md:pt-48 sm:pt-40 pt-60 md:px-16 px-8 grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <Fade bottom cascade>
            <div className="text-neutral space-y-2">
              <h1 className="md:text-4xl text-2xl ">dgsa22@gmail.com</h1>
              <p className="md:text-2xl text-xl">123456789</p>
              <div className="flex items-center gap-3 text-3xl">
                <Link to="/">
                  <ImFacebook />
                </Link>
                <Link to="/">
                  <FaLinkedinIn />
                </Link>
                <Link to="/">
                  <BsTwitter />
                </Link>
                <Link to="/">
                  <AiOutlineInstagram />
                </Link>
              </div>
            </div>
          </Fade>
          <div>
            <h1 className="md:text-4xl text-2xl text-neutral">
              Bangladesh Shishu Academy , Doyel Chattor, Shabag, Dhaka-1000
            </h1>
          </div>
          <Zoom right cascade>
            <div>
              <h1 className="text-lg font-semibold text-neutral mx-20 my-10">
                ©2023 by . <br /> Proudly created with{" "}
                <Link to="/" className=" text-primary hover:text-neutral">
                  Bangla Puzzle Ltd.
                </Link>
              </h1>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Footer;
