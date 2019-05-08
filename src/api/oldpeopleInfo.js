import request from '@/utils/request'

//查询
export function getPeopleList(data){
    return request({
        url:'/api/oldpeple/getPeople',
       method:'post',
       data
    })
}
//新增
export function addOldpeople(data){
    return request({
        url:'/api/oldpeple/add',
        method:'post',
       data
    })
}
//修改
export function updateOldpeople(data){
    return request({
        url:'/api/oldpeple/update',
        method:'put',
       data
    })
}
//删除
export function deleteOldpeople(id){
    return request({
        url:`/api/oldpeple/${id}`,
        method:'delete',
    })
}