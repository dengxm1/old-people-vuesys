import request from '@/utils/request'

export function getSelectList(){
    return request({
        url:'https://easy-mock.com/mock/5c88f2519014e34f36e0ad5e/example/titleDate',
        method:'get'
    })
} 