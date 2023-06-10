import { Fade } from "react-reveal";

const Ideology = () => {
  return (
    <>
      <div className="bg-neutral pt-10 md:px-40 px-8">
        <Fade left cascade>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-14 gap-8">
            {/*----------- left------------- */}
            <div className="pt-20">
              <img
                src="https://anjirliton.com/frontend/images/gallery/row-image-Mujib100.png"
                alt=""
                className="h-72"
              />
            </div>
            {/*----------- Right------------- */}
            <div className="space-y-5 pt-10">
              <h2 className="text-3xl text-gray-700 uppercase font-semibold">
                the ideology
              </h2>
              <p className="text-base text-gray-500">
                My greatest strength is the love for my people, My greatest
                weakness is that I love them too much.
              </p>
              <h3 className="text-2xl text-gray-700 capitalize font-semibold">
                -Bangabandhu Sheikh Mujibur Rahman
              </h3>
              <button className="px-4 py-2 text-base duration-300 border border-gray-500 hover:bg-gray-500 hover:text-neutral text-gray-700 rounded-md">
                Learn More &#8594;
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Ideology;
