import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchApi = async (searchTerm) => {
      console.log('Hi there')
      try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses)
      } catch(err) {
        setErrorMessage('Something Went Wrong')
      }
    }
  
  // Call searchAPi when component
  // is first rendered. BAD CODE!
  // searchApi('pasta') this causes an infinite loop which is why use useEffect

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage]
}
