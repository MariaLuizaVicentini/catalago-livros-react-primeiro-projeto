import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../services/api"


export default function LivroList() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        carregarLivros();
    }, [])

    const carregarLivros = async () => {
        const response = await api.get("/");
        setLivros(response.data);
    }

    const excluir = async (id) => {
        await api.delete(`/${id}`)
        carregarLivros()
    }


    return (
        <div className="container card p-0 mt-5">
            <div className="card-header">
                <h4>Livros no catalago</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titulo</th>
                            <th>Paginas</th>
                            <th>Categoria</th>
                            <th>Descricao</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => (
                            <tr key={livro.id}>
                                <td>{livro.id}</td>
                                <td>{livro.titulo}</td>
                                <td>{livro.paginas}</td>
                                <td>{livro.categoria}</td>
                                <td>{livro.descricao}</td>
                                <td>
                                    <Link
                                        className="btn btn-primary btn-sm"
                                        to={`/editar/${livro.id}`}>Editar</Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm ms-2"
                                        onClick={() => excluir(livro.id)}
                                    >Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}