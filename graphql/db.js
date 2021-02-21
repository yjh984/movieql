import axios from 'axios';

const BASE_URL='https://yts.am/api/v2/';
const LIST_MOVIES_URL =`${BASE_URL}list_movies.json?sort_by=rating`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies=async(limit,rating,year)=>{
    const {
        data:{
            data:{movies}
        }
    } = await axios(LIST_MOVIES_URL,{
        params:{
            limit,
            minimum_rating:rating,
            year
        }
    });
    return movies;
};

export const getMovie=async(id)=>{
    const {
        data:{
            data:{movie}
        }
    } = await axios(MOVIE_DETAILS_URL,{
        params:{
            movie_id:id
        }
    });
    return movie;
}

export const getSuggestions=async(id)=>{
    const {
        data:{
            data:{movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URL,{
        params:{
            movie_id:id
        }
    });
    return movies;
}



// export const getMovies= (limit, rating, year) => {
//     let REQUEST_URL=API_URL;

//     if (limit>0){
//         REQUEST_URL += `&limit=${limit}`;
//     }
//     if (rating>0) {
//         REQUEST_URL += `&minimum_rating=${rating}`;
//     }
//     if (year>0){
//         REQUEST_URL += `&query_term=${year}`;
//     }
//     REQUEST_URL += '&sort_by=rating';

//     return fetch(`${REQUEST_URL}`)
//             .then(res=> res.json())
//             .then(json=>json.data.movies);
// };
