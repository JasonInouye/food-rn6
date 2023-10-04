import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer LZAcdcKq7uxfODQ_ynKBCUp7awjitKm-c_k9KUKTqglK-uf72itBf3e4x9BL4KCXmriu-xbSJmCyO8Lg3nP4CCgS2oblnFGrNMchnfwYIs_X7DUhnhwOHYGw6pwEZXYx'
    }
});