import request from '@/utils/request'

//查询
 export function getFloorList(data){
     return request({
         url:'/api/floor/getFloor',
        method:'post',
        data
     })
 }
 //新增
 export function addFloor(data){
    return request({
        url:'/api/floor/addFloor',
        method:'post',
       data
    })
}
//修改
export function updateFloor(data){
    return request({
        url:'/api/floor/updateFloor',
        method:'put',
       data
    })
}
//删除
export function deleteFloor(id){
    return request({
        url:`/api/floor/deleteFloor/${id}`,
        method:'delete',
    })
}