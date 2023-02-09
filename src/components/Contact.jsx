
const Contact = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-4xl mb-2 md:mb-6 font-bold items-center justify-center text-center mt-20">
        Contact Me
      </h1>

      <div className="flex flex-col mb-10 mx-auto mt-10 mr-20 ml-20">
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9a1ab35b-7062-44b8-9956-43871537eee0"
            method="POST"
            className="flex flex-col w-full md:w-7/12"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="10"
              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-500 to-blue-700 hover:stroke-white"
            >
              Contact Me 📧
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
