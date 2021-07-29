import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="min-h-screen mb-24">
          <h1 className="text-7xl text-center mt-12 mb-24  border-b-2 pb-10">
            About
          </h1>
          <div className="flex flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden lg:w-1/2 flex justify-end rounded ">
              <img
                src="https://images.unsplash.com/photo-1617159986748-5206bd538f1c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByZXR0eSUyMHdvbWFuJTIwaW4lMjBzdWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="w-full overflow-hidden lg:w-1/2">
              <div className="md:w-1/2 md:ml-12">
                <h3 className="text-5xl mb-16 text-center mt-6 lg:mt-0">
                  Katie Ganly{" "}
                </h3>
                <p className="text-gray-600 text-2xl mb-12">
                  A solutions focussed people person whose favourite word is
                  "excellence". If it can be done better, doesn't everyone want
                  to know how? Lover of innovation, efficiency, lifelong
                  learning and coffee.
                </p>
                <p className="text-gray-600 text-2xl mb-12">
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
                <p className="text-gray-600 text-2xl mb-12">
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
