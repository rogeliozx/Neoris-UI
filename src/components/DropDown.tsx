
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "../Types/general";

interface FormInputDropdownProps extends FormInputProps{
    options:Array<string>
}
export const FormInputDropdown: React.FC<FormInputDropdownProps> = ({
  name,
  control,
  label,
  options
}) => {
  const generateSingleOptions = () => {
    return options.map((option: any) => {
      return (
        <MenuItem key={option} value={option} className="capitalize">
          {option}
        </MenuItem>
      );
    });
  };
  return (
    <FormControl size={"small"}>
      <InputLabel  className="transform-letter" >{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select className="transform-letter"  onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};