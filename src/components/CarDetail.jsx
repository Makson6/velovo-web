import Button from "./Button";
import Gallery from "./Gallery";

export default function CarDetails() {
   const data = 'data'.split('');
   return (
      <div className="bg-red-500 flex py-5 h-full">
         <div className="flex-1 bg-green-500 flex gap-5">
            {
               data.map((item, index) => (
                  <div key={index} className="flex mb-4">
                     <Gallery text={item} className="w-20 h-20 rounded-none" />
                  </div>
               ))
            }
         </div>

         <div className="flex-1 bg-blue-500">
            <div className="flex">
               <h1 className="font-bold text-lg">Fabricant Modele</h1>
               <div className="flex">
                  <h1>LOGO</h1>
                  <p>30USD</p>
               </div>
            </div>

            <div>
               <div>
                  <h1>TOYOTA</h1>
                  <div>4 sieges</div>
               </div>
               <div>
                  <h1>Manuel</h1>
                  <p>1 Valises(s)</p>
               </div>
               <div>
                  <Button title={'Confirmer'} />
                  <Button title={'Annuler'} />
               </div>
            </div>
         </div>
      </div>
   )
}