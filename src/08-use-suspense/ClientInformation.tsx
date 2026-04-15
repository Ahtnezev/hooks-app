import { use, type Usable } from "react"
import { type User } from "./api/get-user.action";

// const userPromise = getUserAction(1);
interface Props {
   getUser: Usable<User>
}

export const ClientInformation = ({ getUser }: Props) => { // { id }: { id: number } 
   const user = use( getUser );
   // const user = use( userPromise );
   // const user = await getUserAction(id);
   // useEffect(() => {
   //    getUserAction(id)
   //       .then(console.log);
   // }, [id]);

   return (
      <div className="bg-gradient flex flex-col gap-4">
         <h1>{ user.name } - #{ user.id }</h1>

         <p className="text-white text-2xl">{ user.location }</p>
         <p className="text-white text-xl">{ user.role }</p>
      </div>
   )
}
