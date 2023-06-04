import { useForm } from "react-hook-form";

export default function Form1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-400 flex flex-col p-4"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <input
          className="border my-2"
          defaultValue=""
          {...register("example", { required: true })}
        />
        {errors.example && (
          <span className="text-red-700">This field is required</span>
        )}
      </div>
      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="border my-2"
        {...register("exampleRequired", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && (
        <span className="text-red-700">This field is required</span>
      )}

      <input
        className="border cursor-pointer w-min bg-green-500"
        type="submit"
      />
    </form>
  );
}
