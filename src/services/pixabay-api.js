import axios from 'axios';

 const getSearch = async (query, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    method: 'get',
    params: {
    key: '35022867-613f72081c46a1c8d0116c75d',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
       },
  });

  return response.data;
};
export default getSearch;


