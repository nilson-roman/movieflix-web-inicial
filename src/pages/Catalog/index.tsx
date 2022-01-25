import './styles.css'

const Catalog = () => {
    return (
        <div className="movie-container">
            <div className="movie-list-container">
                <h4>Tela de listagem de filmes</h4>
            </div>
            <div className="movie-list-item-container">
                <p>Acessar <a href="/movies/1">/movies/1</a></p>
                <p>Acessar <a href="/movies/2">/movies/2</a></p>
            </div>
        </div>
    )
}

export default Catalog;