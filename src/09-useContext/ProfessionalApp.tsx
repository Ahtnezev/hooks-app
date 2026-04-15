
/**
 * Data o Declarative -> SPA
 * Framework -> renderizado del lado del servidor (liviando)
 * https://reactrouter.com/home
 */

import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const ProfessionalApp = () => {
    return (
        <div className="bg-gradient">
            <RouterProvider router={ appRouter } />
        </div>
    )
}
