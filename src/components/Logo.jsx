import icons from "../constants/icons";


export default function Logo({ classes }) {
   return (
      <img
         className={`h-16 ${classes}`}
         src={icons.logo}
         alt="logo"
      />
   );
}