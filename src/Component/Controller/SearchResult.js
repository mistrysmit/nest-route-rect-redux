import React,{ Component } from "react";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setData, chageSearchText } from '../../actions/action'
import SearchResult from "../UI/SearchResult";
import C from '../../constants'
/* 
class TestSearch extends Component{

    constructor(props){
        super(props)

    }
    componentDidMount(){
        console.log(this.props);
        this.props.setMenu(this.props.userorrepo);
        this.props.testMedth();
    }

    render(){
        return (<SearchResult/>);
    }
}
 */

const mapStateToProps = (state,props) =>
    ({
                result: state.searchData,
                serachval: state.searchText,
                menu: state.menu,
                userorrepo: props.userorrepo
    })
const mapDispatchToProps = (dispatch,oldProp) =>
    ({
        setMenu(v){
            console.log(v);
            dispatch({
                type:C.CHANGE_MENU,
                payload: v
            })
        },
        SetMySearchData(v, m) {
            console.log("value come from search " + v + 'and  menu ' + m);
            if ((v) && v != "") {
                setData(v, m)
                    .then(result => result.json())
                    .then(result => result.items)
                    .then(items => {
                    
                    if (items && items.length > 0){
                        console.log(items);
                    /* dispatch(
                        {
                             type: "SET_SEARCH_DATA", payload: items }
                    ) */
                     dispatch({type: "SET_SEARCH_DATA", payload: items})
                }
                }
                );
            }
        }
    })

const Container = connect(mapStateToProps, mapDispatchToProps)(SearchResult)
//const Container = connect(mapStateToProps, mapDispatchToProps)(TestSearch)

export default withRouter(Container)


