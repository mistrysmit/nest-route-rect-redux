
import React, { Component } from 'react';
import TableBodyComp from './TableBodyComp';
import TableHeadComp from './TableHeadComp';

const SearchResult = ({ result, setMenu = f => f, SetMySearchData = f => f, serachval, menu, userorrepo, match }) => {
    console.log("Hey it's from here")
    if (match) {
        if (match.path == '/' && menu != 'users') {
            setMenu(userorrepo);
            console.log(serachval, menu);
            SetMySearchData(serachval, userorrepo);
        }
        if (match.path == '/Repo' && menu != 'repositories') {
            setMenu(userorrepo);
            console.log(serachval, menu);
            SetMySearchData(serachval, userorrepo);
        }
    }


    return (<div className="container-fluid">
        {
            userorrepo + ' and ' + menu
        }


        {
            JSON.stringify(match)


        }

        <table className="table table-hover">
            <TableHeadComp result={result} />
            <TableBodyComp result={result} />
        </table>
    </div>)
}



export default SearchResult;
