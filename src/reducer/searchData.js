import initState from './initState.json'
import C from '../constants'

const searchData = (state = initState.searchData, action) => {
    if (action.type === C.SET_SEARCH_DATA) {
        return action.payload;
    }

    return state;
}

export default searchData;