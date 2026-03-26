export default function LivroList() {
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
                        <tr>
                            <td>1</td>
                            <td>O Senhor Dos Aneis</td>
                            <td>1216</td>
                            <td>Fantasia</td>
                            <td>Uma epica aventura na Terra-media</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}