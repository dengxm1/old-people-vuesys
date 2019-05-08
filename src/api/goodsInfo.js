import request from '@/utils/request'

//查询
export function getGoodsList(data){
    return request({
        url:'/api/goods/getGoods',
       method:'post',
       data
    })
}
//新增
export function addGoods(data){
    return request({
        url:'/api/goods/addGoods',
        method:'post',
       data
    })
}
//修改
export function updateGoods(data){
    return request({
        url:'/api/goods/updateGoods',
        method:'put',
       data
    })
}
//删除
export function deleteGoods(id){
    return request({
        url:`/api/goods/deleteGoods/${id}`,
        method:'delete',
    })
}