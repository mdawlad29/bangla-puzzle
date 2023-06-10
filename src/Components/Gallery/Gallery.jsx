import { Fade } from "react-reveal";

const Gallery = () => {
  const videoUrl =
    "https://www.youtube.com/watch?embeds_referring_euri=https%3A%2F%2Fanjirliton.com%2F&source_ve_path=MTY0OTksMjg2NjQsMTY0NTAz&feature=emb_share&v=k0FC8biMK6A";
  return (
    <>
      <div className="bg-primary py-6 text-neutral">
        <h2 className="text-2xl font-semibold md:px-16 px-8 py-10 capitalize md:text-3xl tracking-widest">
          Video Gallery
        </h2>
        <Fade bottom cascade>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:px-40 px-8">
            {[1, 2, 3, 4, 5, 6]?.map((_, index) => (
              <div key={index} className="border">
                <iframe
                  title={`YouTube Video ${index + 1}`}
                  src={`https://www.youtube.com/embed/${
                    videoUrl.split("v=")[1]
                  }`}
                  className="w-full"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </Fade>
        <div className="my-7 flex justify-center">
          <button className="px-4 py-2 text-base duration-300 border border-neutral hover:bg-neutral hover:text-gray-900 text-neutral rounded-md">
            Learn More &#8594;
          </button>
        </div>
      </div>
    </>
  );
};

export default Gallery;
