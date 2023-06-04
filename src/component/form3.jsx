import { useForm } from "react-hook-form";
import React from "react";

const Form3 = () => {
  // The following component is an example of your existing Input Component
  const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} />
    </>
  );

  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label>{label}</label>
      <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  ));
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-slate-200">
      <Input label="First Name" register={register} required />
      <Select label="Age" {...register("Age")} />
      <input
        type="submit"
        className="mx-2 px-2 rounded bg-green-950 text-yellow-100 cursor-pointer"
      />
    </form>
  );
};
export default Form3;
