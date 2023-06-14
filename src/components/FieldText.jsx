import { useState } from "react";
import { Box, TextField,  } from "@mui/material";

const FieldText = (props) => {
  const { name, onChange } = props;
  const [questionAmt, setQuestionAmt] = useState("");

  const _handleQuestionChange = (e) => {
    const noOfQuestion = e.target.value;
    setQuestionAmt(noOfQuestion);
    onChange(noOfQuestion)
    // console.log(e.target.value)
  };
  return (
    <Box mt={2}  >
      <TextField
        type="number"
        value={questionAmt}
        onChange={_handleQuestionChange}
        variant="standard"
          color="secondary"
          label="Number of Questions?"
          
      />
    </Box>
  );
};

export default FieldText;
