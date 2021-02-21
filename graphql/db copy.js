export let movies =[
    {
        id: 1,
        name: "JH Yu",
        score : 18
    },
    {
        id: 2,
        name: "Fdefu",
        score: 12
    },
    {
        id: 3,
        name: "Fpspu",
        score: 28
    },
    {
        id: 4,
        name: "Defeu",
        score: 38
    },
    {
        id: 5,
        name: "Lpdu",
        score: 15
    },
    {
        id: 6,
        name: "Edkfe",
        score: 23
    },
    {
        id: 7,
        name: "Kidfu",
        score: 17
    }   
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    // console.log(filteredMovies);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanMovies = movies.filter(movie=>id!==movie.id);
    if(movies.length>cleanMovies.length){
        movies=cleanMovies;
        return true;
    }
    else{
        return false;
    }
};

export const addMovie = (name, score)=>{
    const newMovie = {
        id:movies.length+1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}
