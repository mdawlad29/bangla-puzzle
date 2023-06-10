import { Fade } from "react-reveal";

const Event = () => {
  return (
    <>
      <Fade bottom cascade>
        <div className="bg-neutral py-14 md:px-16 px-8 flex flex-wrap">
          <h1 className="text-secondary text-4xl tracking-widest font-semibold uppercase">
            upcoming event
          </h1>
          <h6 className="text-lg pt-12 md:pl-36 px-20">No event Found</h6>
        </div>
      </Fade>
    </>
  );
};

export default Event;
