import { Movie } from "./movies";
import { User } from "./users";

export type Review = {
    id: number;
    text: string;
    user: User;
    movie: Movie;
}
