import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faTv,
  faMicrophoneAlt,
  faChalkboardTeacher,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faTv,
  faMicrophoneAlt,
  faChalkboardTeacher,
  faInfoCircle
);

const MarketingIcons = () => {
  return (
    <div className="flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-3 h-64 content-center py-24 mb-24  border-b-2 border-custom-color-2 bg-custom-color-3">
      {/* // Live Events & Event Planning */}

      <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 text-center">
        <FontAwesomeIcon
          icon={faTv}
          className="h-20 w-20 text-black hover:scale-125 w-full overflow-hidden mx-auto text-custom-color-2"
        />
        <h4 className="w-full overflow-hidden mt-5 mb-3 text-2xl font-semibold">
          Live Events & Event Planning
        </h4>
        <p className="w-full overflow-hidden text-xl">
          Optimized for both in-office and distributed teams{" "}
        </p>
      </div>

      {/* // Public Speaking */}
      <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 text-center">
        <FontAwesomeIcon
          icon={faMicrophoneAlt}
          className="h-20 w-20 text-black hover:scale-125 w-full overflow-hidden mx-auto text-custom-color-2"
        />
        <h4 className="w-full overflow-hidden mt-5 mb-3 text-2xl font-semibold">
          Public Speaking
        </h4>
        <p className="w-full overflow-hidden text-xl">
          Get trained by elite Product Leaders{" "}
        </p>
      </div>

      {/* // Corporate Training & Online Presentation Training */}
      <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 text-center">
        <FontAwesomeIcon
          icon={faChalkboardTeacher}
          className="h-20 w-20 text-black hover:scale-125 w-full overflow-hidden mx-auto text-custom-color-2"
        />
        <h4 className="w-full overflow-hidden mt-5 mb-3 text-2xl font-semibold">
          Online Presentation Training
        </h4>
        <p className="w-full overflow-hidden text-xl">
          Optimized for both in-office and distributed teams
        </p>
      </div>

      {/* // Technical Support & Virtual Assistance */}
      <div className="w-full overflow-hidden md:my-2 md:px-2 md:w-1/2 lg:my-3 lg:px-3 lg:w-1/4 text-center">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="h-20 w-20 text-black hover:scale-125 w-full overflow-hidden mx-auto text-custom-color-2"
        />
        <h4 className="w-full overflow-hidden mt-5 mb-3 text-2xl font-semibold">
          Technical Support
        </h4>
        <p className="w-full overflow-hidden text-xl">
          Certify your team to this highest standard{" "}
        </p>
      </div>
    </div>
  );
};
export default MarketingIcons;
