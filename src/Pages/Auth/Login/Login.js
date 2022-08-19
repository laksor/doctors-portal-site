import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {register, handleSubmit, formState: { errors },} = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  
  
  if (user || gUser) {
    console.log(gUser);
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
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
                {...register("email",{
                  required: {
                    value: true,
                    message: 'Email is required'
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Provide a valid email'
                  } 
                })}
                class="input input-bordered w-full max-w-xs"
              />
              {errors.email?.type === "required" && (
                <p className="ml-1 mt-2 text-red-400">{errors.email.message}</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="ml-1 mt-2 text-red-400">{errors.email.message}</p>
              )}
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required'
                  },
                  minLength: {
                    value: 6,
                    message: 'Password must be 6 characters or longer'
                  } 
                })}
                class="input input-bordered w-full max-w-xs"
              />
              {errors.password?.type === "required" && (
                <p className="ml-1 mt-2 text-red-400">{errors.password.message}</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="ml-1 mt-2 text-red-400">{errors.password.message}</p>
              )}
            </div>
            {
              loading || gLoading 
              ? <button className="btn btn-primary loading mt-3 w-full max-w-xs"> loading... </button>
              : <input
              className="btn btn-accent mt-3 w-full max-w-xs"
              type="submit"
              value="Login"
            />
            }
          </form>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline"
            onClick={() => signInWithGoogle()}>
            continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
