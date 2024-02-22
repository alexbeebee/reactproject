import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',    
    params: {
        key: '952d0f60d1014ae6aaa44983fe4eef53'
    }
})