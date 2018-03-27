import C from '../constants'

export const changeMenu =  menutext =>{        
        return {
        type: C.CHANGE_MENU,
        payload: menutext
    } 
}


export const chageSearchText = (value = 'papa') => ({ type: C.CHANGE_SEARCHTEXT, payload: value })
export const setData = (value = 'papa', menu ='users') => {
    const apiUrl = `https://api.github.com/search/${menu}?q=${value}`
     return fetch(apiUrl)
        
}
