import { TextField } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Path, UseFormRegister } from "react-hook-form";

interface RegisterTypes {
  email: string;
  name: string;
}

type propTypes = {
  label: string;
  type: string;
  register: UseFormRegister<RegisterTypes>;
  registerValue: Path<RegisterTypes>;
};
const Input = ({ label, type, register, registerValue }: propTypes) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      label={label}
      type={type}
      fullWidth
      required
      {...register(registerValue, { required: true })}
    />
  );
};

export default Input;
