import initState from './initState.json'
import C from '../constants'

const menu = (state=initState.menu, action) => {
    /* console.log("state " + state);
    console.log(action);
    console.log(action.payload); */

    if (action.type === C.CHANGE_MENU) {
        return action.payload ;
    }
    return state;
}

export default menu;