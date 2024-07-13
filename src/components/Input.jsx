export default function Input({ register, placeholder, type, className = '', errors, label }) {
   return (
      <div className="w-full">
         <label className="flex ml-2 text-white mb-2 justify-center">
            {label}
         </label>
         <input
            type={type}
            placeholder={placeholder}
            className={`p-2 w-full outline-none ${className}`}
            {...register("password", { required: true })}
         />
         {errors?.password && <p>Password is required</p>}
      </div>
   );
}