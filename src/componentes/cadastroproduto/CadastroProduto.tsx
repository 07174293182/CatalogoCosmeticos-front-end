import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CadastroProduto(){
    const navigate = useNavigate();
    const [id,setId] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")
    const [valor,setValor] = useState("")
    const [imagem,setImagem] = useState("")

    function handleForm(event:FormEvent){
        event.preventDefault();
        console.log("Tentei cadastrar produtos");
        const produto = {
            id: id,
            nome: nome,
            descricao: descricao,
            valor: valor,
            imagem: imagem
        }
        fetch("http://localhost:8000/produtos",{
            method: "POST",
            headers: {
                "Content-Type":"Application/json"
            },
            body: JSON.stringify(produto)
        }).then(response => {
            if(response.status === 200){
                alert("Produto cadastrado com sucesso")
                navigate("/")
            }
            else{
                alert("Erro ao cadastrar produto")
            }
        })
    }
    function handleId(event:ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function handleNome(event:ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function handleDescricao(event:ChangeEvent<HTMLInputElement>){
        setDescricao(event.target.value)
    }
    function handleValor(event:ChangeEvent<HTMLInputElement>){
        setValor(event.target.value)
    }
    function handleImagem(event:ChangeEvent<HTMLInputElement>){
        setImagem(event.target.value)
    }

    return(
        <>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleForm}>
            <div>
                <label htmlFor="id">Id</label>
                <input type="text" name="id" onChange={handleId}/>
            </div>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" onChange={handleNome}/>
            </div>
            <div>
                <label htmlFor="descricao">Descricao</label>
                <input type="text" name="descricao" onChange={handleDescricao}/>
            </div>
            <div>
                <label htmlFor="valor">Valor</label>
                <input type="text" name="valor" onChange={handleValor}/>
            </div>
            <div>
                <label htmlFor="imagem">Imagem</label>
                <input type="text" name="imagem" onChange={handleImagem}/>
            </div>
            <div>
                <input type="submit" value="Cadastrar Produto"/>
            </div>
        </form>
        </>
    )
}