import React from "react";
import { useForm } from "react-hook-form";
import logoImage from "/velovo_npg-removebg-preview.png";
import { data } from "autoprefixer";

function Connexion() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.error(errors)
    // l'api
  };

  return (
    <div className="relative h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
        style={{ backgroundImage: "url('connexion-bg.jpeg')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
        <div className=" h-[75%] w-[50%] opacity-55 rounded-md flex items-center justify-center">
          <div className="flex flex-col h-[100%] rounded-lg w-[100%] text-center justify-center items-center relative  bg-gray-900">
            <div className="flex absolute top-8 right-4">
              <p className="text-black font-bold top-0 right-4 pb-1 bg-white pr-2 pl-2 cursor-pointer hover:bg-red-600 rounded-full">
                x
              </p>
            </div>
            <img
              src={logoImage}
              alt="logo de l'application"
              className="flex justify-center items-center h-24 w-44  z-20"
            />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full">
              <div className="w-full">
                <label className="flex ml-2 text-white mb-2 justify-center">
                  Nom d'utilisateur:
                </label>
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  className="p-2 w-[80%] rounded"
                  {...register("username", { required: true })}
                />
                {/* { ;.username == ' ' && <p>Username is required</p>} */}
                { data.username == ' ' && <p>Username is required</p>}
              </div>
              <div className="w-full mb-6">
                <label className="flex ml-2 text-white mb-2 justify-center">
                  Mot de passe:
                </label>
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="p-2 w-[80%] rounded"
                  {...register("password", { required: true })}
                />
                {/* {errors.password && <p>Password is required</p>} */}
              </div>
              <button className="bg-blue-700 hover:bg-blue-500 text-white hover:text-blue-700 py-2 px-4 rounded-md w-[80%]">
                Connecter
              </button>
              <p className=" text-white py-2 px-4 rounded-md w-[95%]">
                ---------- ou ----------
              </p>
            </form>
              <button className="bg-slate-300 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-[80%]">
                creer un compte
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
