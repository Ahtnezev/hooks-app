
/**
 * Data o Declarative -> SPA
 * Framework -> renderizado del lado del servidor (liviando)
 * https://reactrouter.com/home
 */

import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"
import { UserContextProvider } from "./context/UserContext"

export const ProfessionalApp = () => {
    return (
        // check the components tab firefox to know wheres the UserContextProvider inthe tree
        <UserContextProvider>
            {/* childs */}
            <div className="bg-gradient">
                <RouterProvider router={ appRouter } />
            </div>
        </UserContextProvider>
    )
}
