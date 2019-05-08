import request from '@/utils/request'

//查询
export function getEmployeeList(data){
    return request({
        url:'/api/employee/getEmployee',
       method:'post',
       data
    })
}
//新增
export function addEmployee(data){
    return request({
        url:'/api/employee/add',
        method:'post',
       data
    })
}
//修改
export function updateEmployee(data){
    return request({
        url:'/api/employee/update',
        method:'put',
       data
    })
}
//删除
export function deleteEmployee(id){
    return request({
        url:`/api/employee/${id}`,
        method:'delete',
    })
}