import { useState, useEffect } from "react";
import { Box, FormControl, MenuItem, InputLabel, Select } from "@mui/material";

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
    <Box mt={3} >
    <FormControl variant="standard"  fullWidth>
      <InputLabel> {name} </InputLabel>
      <Select fullWidth
        value={selectedOption}
        onChange={_handleSelectChange}
        color="secondary"
        sx={{  fontSize: '30px' }} 
        
      >
        {Array.isArray(categories) &&
          categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
    </Box>
  );
};

export default SelectField;
