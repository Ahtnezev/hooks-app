import { useEffect } from "react"
import { getUserAction } from "./api/get-user.action";





export const ClientInformation = ( { id }: { id: number } ) => {

   useEffect(() => {
      getUserAction(id)
         .then(console.log);
   }, [id]);
   

   return (
      <div className="bg-gradient flex flex-col gap-4">
         <h1>Vicente - #1304</h1>

         <p className="text-white text-2xl">Petatlán, Guerrero</p>
         <p className="text-white text-xl">Un rol del usuario</p>
      </div>
   )
}
