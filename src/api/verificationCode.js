import request from '@/utils/request'

//查询
export function getResult(params){
    return request({
        url:'/api/yzm/checkImg',
         method:'get',
       params
    })
}