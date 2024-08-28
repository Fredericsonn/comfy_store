import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

const client = axios.create({
    baseURL: productionUrl
});

export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
  };
  
export default client;