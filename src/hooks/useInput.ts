import { ChangeEventHandler, useEffect, useState } from "react";

// Hook for managing form input values.
// validateValue is a function that returns a boolean indicating whether the input value is valid.
// validateValue takes the form input as an argument. It has to be a string.
export interface IForm {
  name: string;
  height: string;
  email: string;
}

const initialFormState: IForm = {
  name: "",
  height: "",
  email: "",
};

const errorFormState: IForm = {
  name: "Name field is required",
  height: "Height field is required",
  email: "Email field is required",
};
const useInput = () => {
  const [formData, setFormData] = useState<IForm>(initialFormState);

  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const valueChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target!;

    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const inputBlurHandler = (event: any) => {
    setIsTouched(true);
  };

  const reset = () => {
    setFormData(initialFormState);
    setIsTouched(false);
  };

  useEffect(() => {
    if (Object.values(formData).every((field) => field.length > 0)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData, formData.email, formData.height, formData.name]);

  return {
    value: formData,
    errors: {
      name: formData.name.length > 0 ? "" : errorFormState.name,
      email: formData.email.length > 0 ? "" : errorFormState.email,
      height: formData.height.length > 0 ? "" : errorFormState.height,
    },
    valueChangeHandler,
    inputBlurHandler,
    isValid,
    isTouched,
    reset,
  };
};

export default useInput;
