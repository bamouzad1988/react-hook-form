import * as React from "react";
import { useForm } from "react-hook-form";

export default function Form6() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: [],
      radio: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(console.log)}
      className="p-4 flex flex-col bg-lime-50"
    >
      <input
        {...register("firstName", { required: true })}
        placeholder="First name"
      />
      <input
        className="my-1"
        {...register("lastName", { minLength: 2 })}
        placeholder="Last name"
      />

      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>

      <input
        className="my-1"
        {...register("checkbox")}
        type="checkbox"
        value="A"
      />
      <input
        className="my-1"
        {...register("checkbox")}
        type="checkbox"
        value="B"
      />
      <input
        className="my-1"
        {...register("checkbox")}
        type="checkbox"
        value="C"
      />

      <input className="my-1" {...register("radio")} type="radio" value="A" />
      <input className="my-1" {...register("radio")} type="radio" value="B" />
      <input className="my-1" {...register("radio")} type="radio" value="C" />

      <input
        type="submit"
        className="mt-2 bg-green-700 text-white rounded border px-2 w-min mx-auto cursor-pointer"
      />
    </form>
  );
}
