import {getMovies,getMovie,getSuggestions} from './db';

const resolvers={
    Query: {
        movies: (_,{limit, rating, year})=> getMovies(limit,rating,year),
        movie: (_,{id})=>getMovie(id),
        suggestions: (_,{id})=>getSuggestions(id)
    }
};

export default resolvers;