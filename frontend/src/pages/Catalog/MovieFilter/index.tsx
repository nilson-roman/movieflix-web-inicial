import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Genre } from "types/genre";
import { requestBackend } from "util/requests";
import Select from "react-select";

import "./styles.css";
import { AxiosRequestConfig } from "axios";

export type GenreFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    // onSubmitFilter(formData);
    console.log(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue("genre", value);

    const obj: GenreFilterData = {
      name: getValues("name"),
      genre: getValues("genre"),
    };

    console.log(value);
    onSubmitFilter(obj);
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/genres`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <Controller
        name="genre"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={selectGenres}
            isClearable
            placeholder="Gênero..."
            classNamePrefix="product-filter-select"
            onChange={(value) => handleChangeGenre(value as Genre)}
            getOptionLabel={(genre: Genre) => genre.name}
            getOptionValue={(genre: Genre) => String(genre.id)}
          />
        )}
      />
    </form>
  );
};

export default MovieFilter;
