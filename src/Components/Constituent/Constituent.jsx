import { BsFillTelephoneFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const Constituent = () => {
  return (
    <>
      <div className="py-7 bg-secondary text-center">
        <hr className="border border-primary" />
        <Fade bottom cascade>
          <div className="py-6 space-y-10">
            <h2 className="md:text-4xl text-2xl uppercase text-neutral">
              constituent services
            </h2>
            <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-0 gap-3 md:mx-48 mx-10">
              {[1, 2, 3, 4]?.map((item, index) => (
                <div
                  key={index}
                  className="text-center flex justify-center items-center"
                >
                  <div className="flex justify-center items-center w-40 h-40 p-4 bg-primary text-neutral rounded-full">
                    <div>
                      <BsFillTelephoneFill className="text-5xl" />
                      <h2 className="text-xl py-2 hover:underline duration-300">
                        Email me
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
        <hr className="border border-primary" />
      </div>
    </>
  );
};

export default Constituent;
