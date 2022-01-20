import { Genre } from "./genre";

export type Movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: number;
    genre: Genre;
    reviews: Genre[]
  }
  