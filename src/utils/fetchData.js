export const exerciseOptions =  {
    method: 'GET',
   
    headers: {
        'X-RapidAPI-Key': 'afb65edf9bmshfbab2ad7ad48a7fp1ed372jsn4a3b0a6f89b0',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
     
}