const Contact = () => {
  return (
    <>
      <h1 className="text-7xl text-center my-16">Contact Us</h1>

      <div class="flex flex-wrap overflow-hidden md:-mx-px lg:-mx-px min-h-full my-36 ">
        <div class="w-full overflow-hidden md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 hidden lg:block">
          <img
            className="lg:ml-12"
            src="https://images.unsplash.com/photo-1611095973015-2c65f77541e1?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bWVldGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>

        <div class="w-full overflow-hidden md:my-px md:px-px md:w-1/2 lg:my-px lg:px-px lg:w-1/2 mx-auto">
          <form class=" lg:ml-12 w-full max-w-lg px-6">
            <div class="flex w-full flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <p class="text-gray-600 text-xs italic">
                  Please enter a valid email.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  type="text"
                  id="message"
                ></textarea>
                <p class="text-gray-600 text-xs italic">
                  Leave us a short message and we will get in contact with you
                  as soon as we can.
                </p>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="w-full ">
                <button
                  class="shadow bg-custom-color-2 hover:bg-teal-400 focus:shadow-outline   text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
