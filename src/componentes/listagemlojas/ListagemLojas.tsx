import { useEffect, useState } from "react";
import './ListagemLojas.css'

interface Loja {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email:string
}

export default function ListagemLojas() {
  const [lojas, setLojas] = useState<Loja[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/lojas")
      .then((response) => response.json())
      .then((data) => setLojas(data))
      .catch((error) => console.error("Erro ao buscar lojas:", error));
  }, []);

  return (
    <main>
      <h1>Lista de Lojas</h1>
      <div className="lojas-container">
        {lojas.length > 0 ? (
          lojas.map((loja) => (
            <div key={loja.id} className="loja-card">
              <h2>{loja.nome}</h2>
              <p><strong>Endereço:</strong> {loja.endereco}</p>
              <p><strong>Telefone:</strong> {loja.telefone}</p>
              <p><strong>Email:</strong>{loja.email}</p>
            </div>
          ))
        ) : (
          <p>Nenhuma loja cadastrada ainda.</p>
        )}
      </div>
    </main>
  );
}
