import { useState } from "react";

const useFormFields = (init) => {
  const [fields, setFields] = useState(init);
  const handleChange = (e) => {
    const { target } = e;
    setFields({
      ...fields,
      [target.name]: target.value,
    });
  };
  return { handleChange, fields };
};

export default useFormFields;
