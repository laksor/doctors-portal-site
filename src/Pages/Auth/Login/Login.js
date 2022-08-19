import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  if (user) {
    console.log(user);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                class="input input-bordered w-full max-w-xs"
              />
              {errors.email?.type === "required" && (
                <p className="ml-1 mt-2 text-red-400">Email is required</p>
              )}
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
                class="input input-bordered w-full max-w-xs"
              />
              
              {errors.password && (
                <p className="ml-1 mt-2 text-red-400">Password is required</p>
              )}
            </div>
            <input
              className="btn btn-accent mt-3 w-full max-w-xs"
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}
          >
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
