export const isAuthorized = (page) => {
    if (!sessionStorage.getItem('pages')) return false 
    if(sessionStorage.getItem('pages').split(',').includes(page)){
        return true
    }else {
        return false
    }
}