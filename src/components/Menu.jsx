import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container">
                <Link className="navbar-brand" to="/">Catalago do livro</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to="/">Lista de Livros</Link>
                    <Link className="nav-link" to="/novo">Adicionar Livro</Link>
                </div>
            </div>
        </nav>
    )
}