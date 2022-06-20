import React from "react";

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
      <form className="flex flex-col">
        <label>Name</label>
        <input />
        <label>Height</label>
        <input />
        <label>Email</label>
        <input />
      </form>
    </div>
  );
};

export default Form;
