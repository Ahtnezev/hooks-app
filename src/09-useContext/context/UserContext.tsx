import {createContext, useState, type FC, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;

    // methods
    login: (userId: number)  => boolean;
    logout: () => void;   
}

export const UserContext = createContext({} as UserContextProps);


// nos permite compartir algun tipo de comportamiento o estado
// de preferencia no colocar html, el provider es mas para logica de negocio
// proveedor es un: HoC -> High-Order Component
export const UserContextProvider: FC<PropsWithChildren> = ({children} ) => { //:UserContextProps || : PropsWithChildren
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User|null>(null);

    const handleLogin = (userId: number) => {
        console.log({userId});
        return true;
    }
    const handleLogout = () => {
        console.log('LOGOUT');
    }

  return <UserContext value={{
    authStatus: 'checking',
    user: user,
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>;
}
