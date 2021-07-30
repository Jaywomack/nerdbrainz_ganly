const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="mb-24">
          <h1 className="text-7xl text-center mt-12 mb-24  border-b-2 pb-10">
            About
          </h1>
          <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden lg:w-1/2 flex justify-end rounded ">
              <img
                className=""
                src="/static/images/CouldBeKatie.png"
                alt=""
                style={{ height: "65%" }}
              />
            </div>
            <div className="w-full overflow-hidden lg:w-1/2 text-center">
              <div className="md:w-1/2 text-center w-full">
                <h3 className="text-5xl mb-16 text-center mt-6 lg:mt-0 w-full">
                  Katie Ganly{" "}
                </h3>
                <p className="text-gray-600 text-xl lg:text-2xl mb-12 px-12 lg:px-0">
                  A solutions focussed people person whose favorite word is
                  "excellence". If it can be done better, doesn't everyone want
                  to know how? Lover of innovation, efficiency, lifelong
                  learning and coffee.
                </p>
                <p className="text-gray-600 text-xl lg:text-2xl mb-12 px-12 lg:px-0 min-w-full">
                  10 years of marketing experience. 5 years working in corporate
                  business to business events with an end to end understanding
                  of the event life cycle from research through to planning,
                  speaker recruitment, marketing and attendee experience.
                  Working with top consultants, lawyers and practitioners from
                  global and national organisations such as IBM, Adobe, BP,
                  Deloitte, Pinsent Masons, PwC, GSK, Accenture, EY, Hilton,
                  Bloomberg, Barclays, Tesco, BT, NHS and Network Rail to name a
                  few: for over 250 face to face and online conferences,
                  workshops and in-house training sessions.
                </p>
                <p className="text-gray-600 text-xl lg:text-2xl mb-12 px-12 lg:px-0 w-full">
                  A problem: during the Pandemic, as the world was thrust
                  online, a disparity grew and is still growing, between those
                  who are quick to adapt their approach to delivering online
                  training and presentations, and those who are not. In-person
                  meetings, teachings, presentations and events are not the same
                  as online. That's a fact. A unique skill set is required to
                  deliver professional, interactive and engaging virtual
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default About;
