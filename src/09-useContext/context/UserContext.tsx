import { createContext, useEffect, useState, type FC, type PropsWithChildren } from "react"
import { users, type User } from "../data/user-mock.data";

// interface UserContextProps {
//     children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    // state
    authStatus: AuthStatus;
    user: User | null;
    isAuthenticated: boolean;

    // methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);


// nos permite compartir algun tipo de comportamiento o estado
// de preferencia no colocar html, el provider es mas para logica de negocio
// proveedor es un: HoC -> High-Order Component
export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => { //:UserContextProps || : PropsWithChildren
    const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User | null>(null);

    const handleLogin = (userId: number) => {
        console.log({ userId });

        const user = users.find(user => user.id === userId);
        if (!user) {
            console.log(`User not found ${userId}`);
            setUser(null)
            setAuthStatus('not-authenticated');
            return false;
        }

        setUser(user);
        setAuthStatus('authenticated');
        localStorage.setItem('userId', userId.toString());
        return true;
    }

    const handleLogout = () => {
        console.log('LOGOUT');
        setAuthStatus('not-authenticated');
        setUser(null);
        localStorage.removeItem('userId');
    }

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            handleLogin(+storedUserId); //convert to number with + symbol
            return;
        }

        handleLogout();

    }, []);
    


  return <UserContext value={{
    authStatus: 'checking',
    isAuthenticated: authStatus === 'authenticated',
    user: user,
    login: handleLogin,
    logout: handleLogout
  }}>{ children }</UserContext>;
}
