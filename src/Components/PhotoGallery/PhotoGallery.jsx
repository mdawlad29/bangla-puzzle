import { Fade } from "react-reveal";

const PhotoGallery = () => {
  return (
    <>
      <div className="bg-neutral py-6 text-secondary">
        <h2 className="text-2xl font-semibold md:px-16 px-8 py-10 capitalize md:text-3xl tracking-widest">
          photo gallery
        </h2>
        <Fade bottom cascade>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-1 md:px-40 px-8">
            {[1, 2, 3, 4, 5, 6]?.map((_, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img
                    className="transition-transform duration-300 ease-in-out transform hover:scale-125 cursor-zoom-in"
                    src="https://anjirliton.com/uploads/gallery/1676722345.jpg"
                    alt="photo"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="my-7 flex justify-center">
            <button className="px-4 py-2 text-base duration-300 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-sm">
              Learn More &#8594;
            </button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default PhotoGallery;
