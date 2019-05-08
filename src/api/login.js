import request from '@/utils/request'
//登陆
export function adminLogin(data){
    return request({
        url:'api/admin/login',
        method:'post',
        data
    })
}
//更改密码
export function putChangePassword(data){
    return request({
        url:'api/admin/changePass',
        method:'put',
        data
    })
}