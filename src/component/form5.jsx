import { useForm } from "react-hook-form";

export default function Form5() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-slate-400 flex justify-between"
    >
      <input
        {...register("firstName", { required: true, minLength: 5 })}
        aria-invalid={errors.firstName ? "true" : "false"}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert" className="text-red-900">
          First name is required
        </p>
      )}
      {errors.firstName?.type === "minLength" && (
        <p role="alert" className="text-red-900">
          MIN lenght is 5 character
        </p>
      )}

      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && (
        <p role="alert" className="text-red-900">
          {errors.mail?.message}
        </p>
      )}

      <input
        type="submit"
        className="bg-stone-700 cursor-pointer px-1 rounded text-white hover:bg-slate-500"
      />
    </form>
  );
}
