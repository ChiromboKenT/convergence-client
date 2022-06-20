import React from "react";

const InputField = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col min-w-[10rem]  mb-7">
      <label
        className="w-full text-left font-poppins font-semibold text-[16px]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full bg-[transparent] border-secondary border-y-0 border-t-0 border-b-[2px] focus:border-primaryDark focus:bg-primaryLight outline-none"
        id={label}
      />
    </div>
  );
};

export default InputField;
