import React from "react";
import InputField from "../../standard-elements/InputField";

const Form = () => {
  return (
    <div className="w-max h-max">
      <div className="flex-col pb-5">
        <h2 className="font-poppins tracking-tight font-extrabold text-center text-[38px] text-secondary ">
          Enter Details Below
        </h2>
        <h1 className="font-poppins tracking-tight font-bold text-center text-[22px] text-secondary ">
          Welcome
        </h1>
      </div>
      <form className="flex flex-col ">
        <InputField label="Name :" value="" setValue={() => true} />
        <InputField label="Email :" value="" setValue={() => true} />
        <InputField label="Height (cm) :" value="" setValue={() => true} />
      </form>
    </div>
  );
};

export default Form;
