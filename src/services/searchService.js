import request from '~/utils/request';

//Các funtion để async để gọi bất đồng bộ cùng lúc song song đc.
// export const search = async (q, type = 'less') => {
//     try {
//         //await đợi data trả về đủ mới tiếp tục hàm còn code bên ngoài phạm vi vẫn hoạt động
//         const response = await request.get('/users/3', {
//             //tự encodeURL
//             params: {
//                 q,
//                 type,
//             },
//         });
//         return response.data.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const search = async () => {
    try {
        //await đợi data trả về đủ mới tiếp tục hàm còn code bên ngoài phạm vi vẫn hoạt động
        const response = await request.get('/users');
        console.log(response.data.result);
        return response.data.result;
    } catch (error) {
        console.log(error);
    }
};
