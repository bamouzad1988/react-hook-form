// import Select from "react-select";
import { Select } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import { MenuItem } from "@mui/material";

const Form4 = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      select: {},
    },
  });
  const onSubmit = (data) => console.log(data);
  const { register } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Input {...field} />}
      />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...register("age", { required: true })}
        label="Age"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      {/* <Controller
        name="level"
        id="level"
        control={control}
        render={({ field }) => (
          <Select labelId="level-label" {...field} className="bg-red-300">
            <MenuItem value={0}>0</MenuItem>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        )}
      /> */}
      <input type="submit" className="bg-gray-500 mx-2 px-2 cursor-pointer" />
    </form>
  );
};

export default Form4;
