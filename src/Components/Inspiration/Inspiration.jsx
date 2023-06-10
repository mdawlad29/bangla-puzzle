import { Fade } from "react-reveal";

const Inspiration = () => {
  return (
    <>
      <div className="bg-primary py-6">
        <Fade right cascade>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-3 items-center md:px-40 px-8">
            {/*----------- left------------- */}
            <div className="space-y-5 text-neutral md:pl-20">
              <h2 className="text-2xl uppercase font-semibold">
                MY LEADER AND INSPIRATION
              </h2>
              <h3 className="text-xl capitalize font-semibold">
                - Hon'ble Prime Minister Sheikh Hasina
              </h3>
              <button className="px-4 py-2 text-base duration-300 border border-neutral hover:bg-neutral hover:text-gray-900 text-neutral rounded-md">
                Learn More &#8594;
              </button>
            </div>
            {/*----------- Right------------- */}
            <div className="">
              <img
                src="https://anjirliton.com/uploads/home/1675939078.jpg"
                alt=""
                className="h-72"
              />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Inspiration;
