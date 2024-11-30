import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CadastroProduto from './componentes/CadastroProduto';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
    },
    {
    path: "/cadastro-produto",
    element: <CadastroProduto/>
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)