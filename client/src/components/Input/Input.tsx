import { TextField } from "@mui/material";

type propTypes = {
  label: string;
  type: string;
  changeHandler: (e: string) => void;
};
const Input = ({ label, type, changeHandler }: propTypes) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      type={type}
      fullWidth
      onChange={(e) => changeHandler(e.target.value)}
      required
    />
  );
};

export default Input;
