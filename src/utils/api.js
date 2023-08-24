// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube138.p.rapidapi.com/auto-complete/',
//   params: {
//     q: 'desp',
//     hl: 'en',
//     gl: 'US'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f820d2da24msh479b8dfff7bc2d2p15c696jsnd32bae45eb40',
//     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        'X-RapidAPI-Key': 'f820d2da24msh479b8dfff7bc2d2p15c696jsnd32bae45eb40',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};