import { useState, useEffect } from "react";
import { Box, FormControl, MenuItem, InputLabel, Select, CircularProgress } from "@mui/material";

const SelectField = (props) => {
  const { name, categories, onChange } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (categories !== undefined) {
      setIsLoading(false);
    }
  }, [categories]);

  if(isLoading) {
    <Box>
      <CircularProgress />
    </Box>
  };

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
        className="question-select-field"
        onChange={_handleSelectChange}
        color="secondary"
        sx={{  fontSize: '30px' }} 
        
      >
        {Array.isArray(categories) &&
          categories.map((category) => (
            <MenuItem key={category.id} value={category.id} className="question-select-field">
              {category.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
    </Box>
  );
};

export default SelectField;
