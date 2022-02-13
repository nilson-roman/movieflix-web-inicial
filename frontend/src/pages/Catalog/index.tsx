import List from './List';
import MovieFilter from './MovieFilter';
import './styles.css'

const Catalog = () => {
    return (
        <div className="movie-container">
            <div className="base-card filter-card">
                <MovieFilter onSubmitFilter={() => {}} />
            </div>
            <div>
                <List />
            </div>
            <div className="movie-list-item-container">
                <p>Acessar <a href="/movies/1">/movies/1</a></p>
                <p>Acessar <a href="/movies/2">/movies/2</a></p>
            </div>
        </div>
    )
}

export default Catalog;