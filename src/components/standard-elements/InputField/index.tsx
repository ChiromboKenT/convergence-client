import React, { ChangeEventHandler } from "react";

const InputField = ({
  name,
  label,
  value,
  setValue,
  setBlur,
}: {
  name: string;
  label: string;
  value: string;
  setBlur: ChangeEventHandler<HTMLInputElement>;
  setValue: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="flex flex-col min-w-[10rem]  mt-7">
      <label
        className="w-full text-left font-poppins font-semibold text-[16px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        name={name}
        className=" px-2 w-full bg-[transparent] border-secondary border-y-0 border-t-0 border-b-[2px] focus:border-primaryDark focus:bg-primaryLight outline-none"
        id={label}
        onChange={setValue}
        onBlur={setBlur}
      />
    </div>
  );
};

export default InputField;
