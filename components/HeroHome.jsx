import Navbar from "./Navbar";

const HeroHome = () => {
  return (
    <header className="bg-hero-pattern z-0 min-h-screen bg-no-repeat bg-cover">
      {/* <Navbar /> */}

      <div className="flex flex-wrap content-center  justify-center h-screen">
        <div>
          <h1 className="text-5xl font-bold text-white text-center pb-3">
            Communication Management{" "}
          </h1>
          <h1 className="text-5xl font-bold text-white text-center pb-8">
            Corporate Training{" "}
          </h1>
          <h6 className="text-2xl font-medium text-white w-full md:w-6/12 lg:w-6/12 text-center mx-auto">
            Helping you host professional and engaging online meetings and
            webinars in-person meetings, teachings, presentations and events are
            not the same as online. That's a fact.
          </h6>
        </div>
      </div>
    </header>
  );
};
export default HeroHome;
