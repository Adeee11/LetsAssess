import { TextField } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Path, UseFormRegister } from "react-hook-form";

interface RegisterTypes {
  email?: string;
  name?: string;
  password?: string;
}

type propTypes = {
  label: string;
  type: string;
  register: UseFormRegister<RegisterTypes>;
  registerValue: Path<RegisterTypes>;
  id: string;
};
const Input = ({ id, label, type, register, registerValue }: propTypes) => {
  return (
    <TextField
      id={id}
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
