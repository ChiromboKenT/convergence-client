import React, { useState } from "react";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";
import Button from "../../standard-elements/Button";
import InputField from "../../standard-elements/InputField";

const Form = () => {
  const url = process.env.REACT_APP_HOST;
  const { post } = useHttp(
    url || "https://convergence-assessment-api.herokuapp.com"
  );
  const { isValid, errors, value, inputBlurHandler, valueChangeHandler } =
    useInput();
  const [showErrors, setShowErrors] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async () => {
    if (isValid) {
      setLoading(true);
      try {
        const response = await post({
          url: "/users",
          data: value,
        });
        if (response) setSuccess(true);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
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
        {loading ? "loading..." : "Submit"}
      </Button>
      {success && (
        <p className="text-red-400 text-xs bg-white">Email Sent Successfully</p>
      )}
    </div>
  );
};

export default Form;
