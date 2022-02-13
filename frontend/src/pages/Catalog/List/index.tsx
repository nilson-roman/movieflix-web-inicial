import { AxiosRequestConfig } from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Movie } from "types/movies";
import { SpringPage } from "types/spring";
import { requestBackend } from "util/requests";
import { GenreFilterData } from "../MovieFilter";

import "./styles.css";

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: "", genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      <div>
        {page?.content.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </>
  );
};

export default List;
