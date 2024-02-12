import axios from 'axios';

const carsClient= axios.create({
    baseURL:process.env.REACT_APP_SERVICES
})

export default carsClient;