import { useState } from "react";

const TextField = (props) => {
  const { name, onChange } = props;
  const [questionAmt, setQuestionAmt] = useState("");

  const _handleQuestionChange = (e) => {
    const noOfQuestion = e.target.value;
    setQuestionAmt(noOfQuestion);
    onChange(noOfQuestion)
    // console.log(e.target.value)
  };
  return (
    <div>
      <label htmlFor="">{name}</label>
      <input
        type="number"
        value={questionAmt}
        placeholder="eg: 10"
        onChange={_handleQuestionChange}
      />
    </div>
  );
};

export default TextField;
