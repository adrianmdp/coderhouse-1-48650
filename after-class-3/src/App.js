import './App.css';
import { servicesMovie } from './services/movies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from './components';

function App() {

  const [movies, setMovies] = useState()

  const [searchparams, setSearchParams] = useSearchParams({ page: 1 })

  useEffect(() => {
    const page = parseInt(searchparams.get('page')) > 500 ? 500 : searchparams.get('page')
    servicesMovie.getTopRated({ page }).then(data => setMovies(data))
  }, [searchparams])

  const onChangePage = (pageNumber) => {
    setSearchParams({ page: pageNumber })
  }

  return (
    
      <div className="App">
      
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>Título</th>
            </tr>
          </thead>
          <tbody>
            { movies && movies.results.map(movie => (
              <tr key={movie.id}>
                <td>
                  {movie.id}
                </td>
                <td>
                  {movie.title}
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

        {movies &&
          <Pagination 
            currentPage={movies.page} 
            handleChange={onChangePage} 
            totalPages={movies.total_pages} />
        }
      </div>
  );
}

export default App;
