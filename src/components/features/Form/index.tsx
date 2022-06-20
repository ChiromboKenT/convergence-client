import React, { useState } from "react";
import useInput from "../../../hooks/useInput";
import Button from "../../standard-elements/Button";
import InputField from "../../standard-elements/InputField";

const Form = () => {
  const { isValid, errors, value, inputBlurHandler, valueChangeHandler } =
    useInput();
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = () => {
    if (isValid) {
    } else {
      setShowErrors(true);
    }
  };
  return (
    <div className="w-max h-max flex flex-col">
      <div className="flex-col pb-5">
        <h2 className="font-poppins tracking-tight font-extrabold text-center text-[38px] text-secondary ">
          Enter Details Below
        </h2>
        <h1 className="font-poppins tracking-tight font-bold text-center text-[22px] text-secondary ">
          Welcome
        </h1>
      </div>
      <form className="flex flex-col " onSubmit={() => null}>
        <InputField
          name="name"
          setBlur={inputBlurHandler}
          label="Name :"
          value={value.name}
          setValue={valueChangeHandler}
        />
        <p className="text-red-400 text-xs">
          {showErrors && errors.name.length > 0 && errors.name}
        </p>
        <InputField
          name="email"
          setBlur={inputBlurHandler}
          label="Email :"
          value={value.email}
          setValue={valueChangeHandler}
        />
        <p className="text-red-400 text-xs">
          {showErrors && errors.email.length > 0 && errors.email}
        </p>
        <InputField
          name="height"
          setBlur={inputBlurHandler}
          label="Height (cm) :"
          value={value.height}
          setValue={valueChangeHandler}
        />
      </form>
      <p className="text-red-400 text-xs">
        {showErrors && errors.height.length > 0 && errors.height}
      </p>
      <Button styles="mt-5" onClick={handleSubmit} variant="secondary">
        Submit
      </Button>
    </div>
  );
};

export default Form;
