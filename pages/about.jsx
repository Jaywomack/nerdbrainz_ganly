const About = () => {
  return (
    <>
      {/* <h1 className="text-7xl text-center mt-12 mb-24  border-b-2 pb-10">
        About
      </h1> */}
      <div class="min-h-96 flex flex-wrap overflow-hidden py-20">
        {/* Image */}
        <div class="w-full overflow-hidden md:w-1/2 ">
          <img
            className="h-full w-auto pb-10"
            src="/static/images/WomenInMeeting.png"
            alt=""
          />
        </div>
        {/* h3 and p */}
        <div class="w-full overflow-hidden md:w-1/2  px-12">
          <div class="mb-8">
            <div class="text-custom-color-1 font-bold text-5xl pb-24 sm:text-center">
              Katie Ganly
            </div>
            <p class="text-gray-700 text-custom-color-2  text-xl font-bold pb-12">
              A solutions focussed people person whose favourite word is
              "excellence". If it can be done better, doesn't everyone want to
              know how? Lover of innovation, efficiency, lifelong learning and
              coffee.
            </p>
            <p class="text-gray-700 text-custom-color-2  text-xl font-bold pb-12">
              10 years of marketing experience. 5 years working in corporate
              business to business events with an end to end understanding of
              the event life cycle from research through to planning, speaker
              recruitment, marketing and attendee experience. Working with top
              consultants, lawyers and practitioners from global and national
              organisations such as IBM, Adobe, BP, Deloitte, Pinsent Masons,
              PwC, GSK, Accenture, EY, Hilton, Bloomberg, Barclays, Tesco, BT,
              NHS and Network Rail to name a few: for over 250 face to face and
              online conferences, workshops and in-house training sessions.
            </p>
            <p class="text-gray-700 text-custom-color-2  text-xl font-bold pb-12">
              A problem: during the Pandemic, as the world was thrust online, a
              disparity grew and is still growing, between those who are quick
              to adapt their approach to delivering online training and
              presentations, and those who are not. In-person meetings,
              teachings, presentations and events are not the same as online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
