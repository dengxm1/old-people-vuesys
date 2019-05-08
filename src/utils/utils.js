let local={
    save(key,value){
        sessionStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
       return JSON.parse(sessionStorage.getItem(key))||{}
    },
    remove(key){
        sessionStorage.removeItem(key)
    }
}
export default{
    install(vm){
        vm.prototype.$local=local
    }
}