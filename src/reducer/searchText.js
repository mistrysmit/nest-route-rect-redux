import initState from './initState.json'
import C from '../constants'

const searchText = (state=initState.searchText,action)=>{
    if(action.type===C.CHANGE_SEARCHTEXT)
    {
        return action.payload;
    }
    return state;
}

export default searchText;