import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup
      .string("test")
      .required("req")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    age: yup.number("sss").positive("++").integer("int").required("req"),
  })
  .required();

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-sky-400">
      <h1>yup</h1>
      <input {...register("firstName")} placeholder="name" />
      <p className="text-red-700">{errors.firstName?.message}</p>

      <input {...register("age")} placeholder="age" />
      <p className="text-red-700">{errors.age?.message}</p>

      <input
        type="submit"
        className="bg-pink-400 px-2 rounded cursor-pointer"
      />
    </form>
  );
}
