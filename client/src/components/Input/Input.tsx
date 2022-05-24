import { TextField } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
