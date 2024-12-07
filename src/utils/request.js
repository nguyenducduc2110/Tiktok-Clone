//file này dùng để chỉ cần cung cấp url:users/search
//còn phần domian khai báo config đến lúc chỉ cần nối chuỗi vs endpoint
import axios from 'axios';

//Method create tương tự method reqired và thêm chức năng nối param default của create vs url của method
const request = axios.create({
    //baseURL: 'https://tiktok.fullstack.edu.vn/api',
    baseURL: process.env.REACT_APP_BASE_URL,
});

export default request;
