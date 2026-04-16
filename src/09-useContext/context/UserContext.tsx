import {type FC, type PropsWithChildren } from "react"

// interface UserContextProps {
//     children: React.ReactNode;
// }

// nos permite compartir algun tipo de comportamiento o estado
// de preferencia no colocar html, el provider es mas para logica de negocio
export const UserContextProvider: FC<PropsWithChildren> = ({children} ) => { //:UserContextProps || : PropsWithChildren
  return <>{ children }</>;
}
