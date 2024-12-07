//config này dùng để defind các route, làm ntn để ở nhiều chỗ ko phải gán cứng mà
//chỉ sử dụng 1 biến khi nào muốn thay đổi endpoint thì vào đây
const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    search: '/search',
    live: 'live',
};

export default routes;
