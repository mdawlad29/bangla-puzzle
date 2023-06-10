import { Fade } from "react-reveal";

const Academy = () => {
  return (
    <>
      <div className="bg-primary py-6">
        <Fade right cascade>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 items-center md:px-40 px-8">
            {/*----------- left------------- */}
            <div className="space-y-5 text-neutral md:pl-20">
              <h2 className="text-3xl uppercase font-semibold">
                MY JOURNEY WITH SHISHU ACADEMY
              </h2>
              <p className="text-base text-neutral">
                One of the strengths to build a golden Bengal in the ideology of
                Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our
                future generation, who are today's children. Bangladesh Shishu
                Academy is for children. Bangladesh Shishu Academy is working to
                develop latent talents including creative and gentle scholarship
                for the purpose of creating the spirit of great liberation war,
                love of country, moral education, discipline and sense of
                responsibility among the children. Under the leadership of
                Hon'ble Prime Minister Sheikh Hasina, a child friendly
                environment has been created in the country today. At present
                children's academy activities are being carried out in 64
                districts and 6 upazilas (Keshabpur, Parshuram, Mithapukur,
                Kulaura, Srinagar and Babuganj upazilas) for the creative
                development and protection of children's rights. Under this
                program, various programs are being implemented in collaboration
                with the local administration for the participation of children
                across the country.
              </p>
              <button className="px-4 py-2 text-base duration-300 border border-neutral hover:bg-neutral hover:text-gray-900 text-neutral rounded-md">
                Learn More &#8594;
              </button>
            </div>
            {/*----------- Right------------- */}
            <div className="">
              <img
                src="https://anjirliton.com/uploads/home/1675939333.jpg"
                alt=""
              />
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Academy;
