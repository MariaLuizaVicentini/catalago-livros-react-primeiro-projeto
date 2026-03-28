import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function LivroForm() {
    const [titulo, setTitulo] = useState("");
    const [paginas, setPaginas] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");

    const { id } = useParams();
    // const navigate = useNavigate();

    const salvar = async (e) => {
        e.preventDefault();
        console.log("Salvar Livro..")
    }

    return (
        <div className="container card p-0 mt-5" style={{ maxWith: "500px" }}>
            <div className="card-header">
                <h5>{id ? "Editar livro" : "Novo Livro"}</h5>
            </div>
            <div className="card-body">

                <form>
                    <div className="mb-3">
                        <label className="form-label">Titulo</label>
                        <input
                            type="text"
                            className="form-control"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label">N de paginas</label>
                            <input
                                type="number"
                                className="form-control"
                                value={paginas}
                                onChange={(e) => setPaginas(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Categoria</label>
                        <select
                            className="form-select"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value=""></option>
                            <option value="Romance">Romance</option>
                            <option value="Biografia">Biografia</option>
                            <option value="Literatura">Literatura</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Descricao</label>
                        <textarea
                            className="form-control"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success" onClick={salvar}>
                        Salvar
                    </button>
                    <Link className="btn btn-warning ms-2" to={"/"}>
                        Voltar
                    </Link>
                </form>
            </div>
        </div>
    )

}
