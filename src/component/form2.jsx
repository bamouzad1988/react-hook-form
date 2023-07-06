import { useForm } from "react-hook-form";

export default function Form1() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-slate-300">
      <h1>regex</h1>
      <input
        className="m-2"
        {...register("firstName", {
          required: true,
          maxLength: 20,
          minLength: 5,
        })}
      />
      <input
        className="m-2"
        {...register("lastName", { pattern: /^[A-Za-z]+$/i, required: true })}
      />
      <input
        className="m-2"
        type="number"
        {...register("age", { min: 18, max: 99 })}
      />
      <input
        className="m-2 bg-orange-500 rounded p-1 cursor-pointer"
        type="submit"
      />
    </form>
  );
}
