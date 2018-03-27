import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setData, chageSearchText, menutext } from '../../actions/action'
import Search from '../UI/Search';


const mapStateToProps = (state) =>
    ({
        serachval: state.searchText,
        menu: state.menu
    })

const mapDispatchToProps = dispatch =>
    ({
        SetMySearchData(v,m){
        console.log("value come from search "+v +'and  menu '+m);
        if((v)&& v!=""){
            setData(v,m)
                .then(result => result.json())
                .then(result => result.items)
            .then(items => {
                console.log(items);
                if(items && items.length>0)
                dispatch({ type: "SET_SEARCH_DATA", payload: items })
                }
            );
        }
        },
        onSearchChange(v){
            dispatch(
                chageSearchText(v)
            )
        }
    })


const Container = connect(mapStateToProps, mapDispatchToProps)(Search)

export default withRouter(Container)


