import {createContext, useState, type FC, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

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

        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null)
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        return true;
    }
    const handleLogout = () => {
        console.log('LOGOUT');
        setAuthStatus('not-authenticated');
        setUser(null);
    }

  return <UserContext value={{
    authStatus: 'checking',
    user: user,
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>;
}
