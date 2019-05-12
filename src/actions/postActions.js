import { FETCH_POST } from './types';

export const getImages = () => dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response=>response.json())
		.then(data=>dispatch({
            type: FETCH_POST,
            payload: data
    }));
}