import { combineReducers } from 'redux'
import  searchData  from './searchData'
import  searchText  from './searchText'
import  menu  from './menu'

export default combineReducers({ menu, searchText, searchData})

