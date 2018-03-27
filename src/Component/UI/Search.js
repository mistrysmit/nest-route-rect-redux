import React, { Component } from 'react';
const Search = ({ result = [], serachval = 'papa',menu='', SetMySearchData = f => f, onSearchChange=f=>f }) => {

    let _serachvalue ;

    return (
        <div className="form-inline my-2 my-lg-0">
        {serachval+' and '+menu}
            <input className="form-control mr-sm-2" type="text" ref={input => _serachvalue = input} onChange={() => onSearchChange(_serachvalue.value)} value={serachval}  placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" onClick={() => SetMySearchData(serachval,menu)} >Search</button>
        </div>
    )
}

export default Search;
