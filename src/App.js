import React, { Component, createRef } from 'react';
import Table from "./Table.js";

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            hnNews: undefined ,
            hnNewsTop: undefined,
            hackerEarth: undefined,
            data: undefined
        }
        this.loadData = this.loadData.bind(this);
        this.changeSort = this.changeSort.bind(this);
        this.sort = createRef();
        this.countClick = 0;
    }    
    
    gethnNews () {

    }

    loadData() {
        console.log(window.location.hash.split('#')[1]);
    }

    changeSort (event) {
        this.countClick++;
        if (this.countClick % 2 === 0) {
            window.location.hash = "hackernewsTop";
            event.srcElement.innerHTML = "Show LATEST";
        } else {
            window.location.hash = "hackernews";
            event.srcElement.innerHTML = "Show TOP";
        }
    }

    componentDidMount() {
        if (!window.location.hash) {
            document.location.hash = '#hackernews';
        } else {
            this.loadData();
        }
        window.onhashchange = this.loadData();
    }

    render() {
    return (<div>
        <button type="button" className="btn btn-secondary col-2" onClick = {this.loadData}>Reload data</button>
        <div>&nbsp;</div>
        <button hidden id="posts" ref={this.sort} onClick={this.changeSort} className="btn btn-secondary btn-lg col-sm-8 col-lg-10 col-md-10 col-xl-11" >Show TOP</button>
        <Table data = {this.state.data}/>
    </div>);
    
}
}

export default App;