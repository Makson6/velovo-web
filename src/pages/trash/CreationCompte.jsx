// import React from "react";
// import { useForm } from "react-hook-form";
// import contact from "/contact-outline.svg";

// function CreationCompte() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // place mon API
//   };

//   return (
//     <div className="relative h-full">
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
//         style={{ backgroundImage: "url('connexion-bg.jpeg')" }}
//       ></div>

//       <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
//         <div className="absolute h-[65%] w-[90%] opacity-55 rounded-md flex items-center justify-center">
//           {/* <div className="flex flex-col h-[100%] rounded-lg w-[100%] text-center justify-center items-center relative overflow-hidden  bg-gray-900"> */}
//           <div className="flex flex-col h-[100%] rounded-lg w-[100%] text-center justify-center items-center relative overflow-hidden mb-8  bg-red-900">
//             <div className="bg-orange-600">
//               <div className="absolute top-0 ">
//                 <img
//                   src={contact}
//                   className="flex justify-center items-center h-24 w-12  z-20"
//                 />
//               </div>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className=" absolute left-4 top-24 w-[50%] bg-blue-600 justify-center items-center">
//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Nom :
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Nom d'utilisateur"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("nom", { required: true })}
//                   />
//                   {errors.nom && <div>Nom is required</div>}

//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Post-Nom :
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Nom d'utilisateur"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("postNom", { required: true })}
//                   />
//                   {errors.postNom && <div>Post-Nom is required</div>}

//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Numero de téléphone:
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="Nom d'utilisateur"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("telephone", { required: true })}
//                   />
//                   {errors.telephone && <div>Telephone is required</div>}

//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Adresse email :
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Nom d'utilisateur"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("email", {
//                       required: true,
//                       pattern:
//                         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                     })}
//                   />
//                   {errors.email && (
//                     <div>
//                       Email is required and must be a valid email address
//                     </div>
//                   )}
//                 </div>

//                 <div className=" absolute top-24 justify-center bg-green-600 items-center">
//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Photo de profile:
//                   </label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     className="flex justify-start ml-6 p-1 w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("photo")}
//                   />

//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Mot de passe :
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="entrez votre mot de passe"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("motDePasse", {
//                       required: true,
//                       minLength: 8,
//                     })}
//                   />
//                   {errors.motDePasse && (
//                     <div>
//                       Mot de passe is required and must be at least 8 characters
//                     </div>
//                   )}

//                   <label className="flex ml-6 text-white mb-1 justify-start">
//                     Confirmer le mot de passe :
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="confirmer le mot de passe"
//                     className="flex justify-start ml-6 p-1  w-[80%] rounded"
//                     style={{ textAlign: "center" }}
//                     {...register("confirmerMotDePasse", {
//                       required: true,
//                       minLength: 8,
//                     })}
//                   />
//                   {errors.confirmerMotDePasse && (
//                     <div>
//                       Confirmer mot de passe is required and must be at least 8
//                       characters
//                     </div>
//                   )}
//                   <button
//                     type="submit"
//                     className="bg-green-700 text-white hover:text-black py-2 px-4 mt-6 rounded-md w-[50%] overflow-hidden whitespace-nowrap"
//                   >
//                     Connecter
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreationCompte;
import React from "react";
import { useForm } from "react-hook-form";
import contact from "/contact-outline.svg";

function CreationCompte() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // place mon API
  };

  return (
    <div className="relative h-full">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover filter blur-sm z-0"
        style={{ backgroundImage: "url('connexion-bg.jpeg')" }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-transparent flex items-center justify-center z-10">
        <div className="absolute h-[65%] w-[90%] opacity-55 rounded-md flex items-center bg-yellow-400 justify-center">
              <div className="absolute top-0 ">
                <img
                  src={contact}
                  className="flex justify-center items-center h-24 w-12  z-20"
                />
                <div  className="bg-green-600 h-10 z-10"></div>
                <div  className="bg-green-600 h-10 z-10"></div>
              </div>
              <div className=" absolute top-24 justify-center bg-green-600 items-center">
                </div>
        </div>
      </div>
    </div>
  );
}

export default CreationCompte;
