import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { registerUser } from "../http/api";
import type { AxiosError } from "axios";

// Validation schema
const schema = z.object({
  name:z.string().trim().min(1,"Name is required"),
  email:z.string().email(),
  password:z.string().min(6,"Password Must be 6 or more characters long"),
  confirmPassword:z.string()
}).refine((data)=>data.password === data.confirmPassword,{
  message:"Passwords don't match",
  path:["confirmPassword"]
})


type RegisterFormFields = z.infer<typeof schema>;

interface ErrorResponse {
  message: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (response) => {
      if (response.data.success) {
        toast.success("Registration successful. Please log in.");
        navigate("/login");
      }
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      const errorMsg =
        err?.response?.data?.message || "Something went wrong. Try again!";
      setErrMsg(errorMsg);
      toast.error(errorMsg);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterFormFields) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <div className="container">
        <div className="w-full max-w-lg p-8 rounded-lg shadow-lg bg-card/75 mx-auto pt-12 mt-8 mb-16 bg-stone-400/10">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-6 space-y-4 rounded"
          >
            <span className="text-center text-copy-primary/60">
              Enter your details below to register.
            </span>

            {mutation.isError && (
              <span className="text-sm text-red-500 text-center">{errMsg}</span>
            )}

            {/* Name */}
            <label>
              <span className="block font-semibold text-copy-secondary mb-1">
                Name
              </span>
              <input
                {...register("name")}
                placeholder="Your full name"
                className="w-full p-2 border rounded text-black placeholder:text-gray-400"
              />
              {errors.name && (
                <span className="text-sm text-red-600">
                  {errors.name.message}
                </span>
              )}
            </label>

            {/* Email */}
            <label>
              <span className="block font-semibold text-copy-secondary mb-1">
                Email
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 border rounded text-black placeholder:text-gray-400"
              />
              {errors.email && (
                <span className="text-sm text-red-600">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* Password */}
            <label>
              <span className="block font-semibold text-copy-secondary mb-1">
                Password
              </span>
              <input
                {...register("password")}
                type="password"
                placeholder="At least 6 characters"
                className="w-full p-2 border rounded text-black placeholder:text-gray-400"
              />
              {errors.password && (
                <span className="text-sm text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>
            {/* confirmPassword */}
            <label>
              <span className="block font-semibold text-copy-secondary mb-1">
                Confirm Password
              </span>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="At least 6 characters"
                className="w-full p-2 border rounded text-black placeholder:text-gray-400"
              />
              {errors.confirmPassword && (
                <span className="text-sm text-red-600">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>

            {/* Submit button */}
            <button
              type="submit"
              disabled={mutation.isPending}
              className={`bg-sky-600 text-white font-semibold py-2 rounded hover:bg-sky-500 flex items-center justify-center gap-2 ${
                mutation.isPending ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {mutation.isPending && (
                <LoaderCircle strokeWidth={2} className="animate-spin" />
              )}
              Register
            </button>

            {/* Footer links */}
            <div className="text-sm text-copy-primary text-center pt-4">
              Already have an account?{" "}
              <span
                className="text-blue-600 font-semibold cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
