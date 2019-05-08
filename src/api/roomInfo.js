import request from '@/utils/request'

//查询
export function getRoomList(data){
    return request({
        url:'/api/room/getRoom',
       method:'post',
       data
    })
}
//新增
export function addRoom(data){
    return request({
        url:'/api/room/addRoom',
        method:'post',
       data
    })
}
//修改
export function updateRoom(data){
    return request({
        url:'/api/room/updateRoom',
        method:'put',
       data
    })
}
//删除
export function deleteRoom(id){
    return request({
        url:`/api/room/deleteRoom/${id}`,
        method:'delete',
    })
}