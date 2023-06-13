import { useState, useEffect } from "react";

const SelectField = (props) => {
  const { name, categories, onChange } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (categories !== undefined) {
      setIsLoading(false);
    }
  }, [categories]);


  const _handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue)
    onChange(selectedValue);
    // console.log(selectedValue)
  };

  return (
    <div>
      <label htmlFor="">{name}</label>
      <select
        name=""
        id=""
        value={selectedOption}
        onChange={_handleSelectChange}
      >
        <option value="">Select an option</option>
        {Array.isArray(categories) &&
          categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectField;
