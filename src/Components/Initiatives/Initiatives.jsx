import { Fade } from "react-reveal";

const Initiatives = () => {
  return (
    <>
      <div className="bg-neutral py-10">
        <Fade bottom cascade>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 md:px-40 px-8">
            {/*----------- left------------- */}
            <div className="space-y-5">
              <h2 className="text-3xl uppercase font-semibold text-secondary">
                INITIATIVES
              </h2>
              <p className="text-base text-gray-900">
                ICT Division has taken initiatives to build Digital Bangladesh.
                Our software and service industry is a billion-dollar market and
                is expected to grow our export to USD 5 Billion by 2025. We are
                serving clients in the array of domains –Financial Services,
                Telecom companies, Healthcare. Various Startup projects,
                High-Tech parks, Sheikh Kamal IT Training and Incubation Centers
                etc projects are underway across the country.
              </p>
            </div>
            {/*----------- Right------------- */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-gray-300 shadow-md hover:shadow-lg flex md:flex-nowrap flex-wrap items-center hover:-translate-y-2 duration-300 ease-in-out">
                  <div className="w-full">
                    <img
                      src="https://anjirliton.com/uploads/initiative/1674028164.jpg"
                      alt=""
                      className="w-60"
                    />
                  </div>
                  <div className="w-full md:h-full bg-gray-100 px-3 flex justify-center items-center text-secondary text-3xl font-semibold md:py-0 py-2">
                    <h2>333</h2>
                  </div>
                </div>
                <div className="border border-gray-300 shadow-md hover:shadow-lg flex md:flex-nowrap flex-wrap items-center hover:-translate-y-2 duration-300 ease-in-out">
                  <div className="w-full">
                    <img
                      src="https://anjirliton.com/uploads/initiative/1674028164.jpg"
                      alt=""
                      className="w-60"
                    />
                  </div>
                  <div className="w-full md:h-full bg-gray-100 px-3 flex justify-center items-center text-secondary text-3xl font-semibold md:py-0 py-2">
                    <h2>333</h2>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                {[1, 2, 3, 4]?.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 shadow-md hover:shadow-lg flex md:flex-nowrap flex-wrap items-center hover:-translate-y-2 duration-300 ease-in-out"
                  >
                    <div className="w-full">
                      <img
                        src="https://anjirliton.com/uploads/initiative/1674028164.jpg"
                        alt=""
                        className="w-60"
                      />
                    </div>
                    <div className="w-full md:h-full bg-gray-100 px-1 flex justify-center items-center text-secondary lg:text-xl text-lg md:py-0 py-2 font-semibold">
                      <h2>startup bangladesh</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Initiatives;
