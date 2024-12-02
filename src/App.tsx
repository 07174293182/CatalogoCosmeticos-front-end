import { useEffect, useState } from "react";
import'./App.css'


type ProdutoType = {
    id:number,
    nome:string,
    descricao:string,
    valor:string,
    imagem:string
}


function App() {
    const [produtos, setProdutos] = useState<ProdutoType[]>([])
    useEffect(()=>{
        fetch("http://localhost:5174")
        .then(resposta=>resposta.json())
        .then(dados=>setProdutos(dados))
},[])
return (
    <>
    <div className='titulo-lista'>
        <h2>Lista de Produtos</h2>    
    </div>
    <div className="container-produtos">
        {produtos.map(prod=>{
            return(
                <div key={prod.id} className="produto-item">
                <h1>{prod.nome}</h1>
                <img src={prod.imagem} alt="Imagem do produto"/>
                <p>{prod.valor}</p>
                <p>{prod.descricao}</p>
                </div>
            )
        })}
    </div>
 </>
)
}


export default App