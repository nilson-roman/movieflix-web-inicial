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
        </div>
    )
}

export default Catalog;