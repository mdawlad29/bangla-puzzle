import { Zoom } from "react-reveal";

const Contact = () => {
  return (
    <>
      <Zoom cascade>
        <div className="bg-neutral py-14 mb-10 md:px-16 px-8 grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.886285346203!2d91.80846231541182!3d22.327276737826233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd95a93f14f7b%3A0xe90b14a35a13281!2sBangla%20Puzzle%20Limited%2C%20Chattogram%20Branch!5e0!3m2!1sen!2sbd!4v1623144562074!5m2!1sen!2sbd"
              width="600"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex justify-between text-center">
            <div className="space-y-3">
              <h2 className="md:text-2xl text-lg font-semibold">
                Present Address
              </h2>
              <p className="md:text-lg text-base text-gray-800">
                Present Address- Bangladesh Shishu Academy , Doyel Chattor,
                Shabag, Dhaka-1000
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="md:text-2xl text-lg font-semibold">
                Permanent Address
              </h2>
              <p className="md:text-lg text-base text-gray-800">
                Permanent Address- Mymensingh District Mymensingh, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Contact;
