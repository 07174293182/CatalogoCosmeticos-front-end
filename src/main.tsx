import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
<<<<<<< HEAD
import CadastroProduto from './componentes/cadastroproduto/CadastroProduto';
import AlterarProduto from './componentes/alterarproduto/AlterarProduto';
import Header from './componentes/header/Header.tsx';
=======
import CadastroProduto from './componentes/CadastroProduto.tsx';
>>>>>>> 26cd48bbd1edc4b9bb0fab19dc84b638f9fe405e

const router = createBrowserRouter([
    {
        path: "/",
        element: <><Header/><App /></>,
      },
      {
        path: "/cadastro-produto",
        element: <><Header/><CadastroProduto/></>,
      },
      {
        path: "/alterar-produto/:id",
        element: <><Header/><AlterarProduto/></>,
      },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)