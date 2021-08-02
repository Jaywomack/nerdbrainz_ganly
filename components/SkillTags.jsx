const SkillTags = () => {
  return (
    <div className="flex flex-wrap -mx-3 overflow-hidden lg:-mx-4 py-24 text-center bg-custom-color-2 mb-44 h-74 ">
      <div className="my-3 px-3 w-full overflow-hidden md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
        <h3 className="ml-3 text-4xl text-custom-color-3 border-b-2 border-custom-color-3 pt-12 pb-2">
          Teach
        </h3>
        <p className="w-8/12 mx-auto my-8 text-xl text-white">
          Train your talent to be equipped with relevant skills, best practices,
          and industry.
        </p>
      </div>
      <div className="my-3 px-3 w-full overflow-hidden md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
        <h3 className="text-4xl text-custom-color-3 border-b-2 border-custom-color-3 pt-12 pb-2">
          Train
        </h3>
        <p className="w-8/12 mx-auto my-8 text-xl text-white">
          Prepare and set up for success. Empower your new hires to make a
          positive impact, and grow into leaders.
        </p>
      </div>
      <div className="my-3 px-3 w-full overflow-hidden md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3">
        <h3 className=" mr-3 text-4xl text-custom-color-3 border-b-2  border-custom-color-3 pt-12 pb-2">
          Technology
        </h3>
        <p className="w-8/12 mx-auto my-8 text-xl text-white">
          Create uniformity and greater cohesion to unlock barriers that are
          inhibiting transformation and growth.
        </p>
      </div>
    </div>
  );
};

export default SkillTags;
