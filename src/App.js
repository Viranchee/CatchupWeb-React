import React, { PureComponent } from 'react';
import Table from "./Table.js";
import axios from 'axios'

import './App.css';

class App extends PureComponent {
    /* constructor() {
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
    } */    
    state = {
        hnNews: undefined ,
            hnNewsTop: undefined,
            hackerEarth: undefined,
            data: undefined
    }

    gethnNews = () => {
        axios.get('https://corsenabled.herokuapp.com/get?to=https://hnrss.org/newest.jsonfeed', {
            // axios.get('/hackernews',{
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Method': 'GET'
                  },
                  responseType: 'json'
        })
        .then(response => {
            this.setState({hnNews: response.data.items});
        })
        .then(() => {
            console.log(this.state.hnNews);
        })
        .then(() => {
            document.getElementById("posts").hidden = false
        })
        .catch(err => {
            console.log(err);
        });
    }

    getHnnewsTop = () => {
        axios.get('https://corsenabled.herokuapp.com/get?to=https://hacker-news.firebaseio.com/v0/topstories.json', {
                    responseType: 'json'
                })
                .then(response => {
                    this.setState({hnNewsTop: response.data});
                })
                .then(() => {
                    console.log(this.state.hnNewsTop);
                })
    }

    loadData = () => {
        document.getElementById("posts").hidden = true
        switch(window.location.hash.split('#')[1]) {
            case 'hackernewsTop' :
                this.getHnnewsTop();
                break;
            case 'hackernews' :
                this.gethnNews();
                break;

            default: alert("Error in loadData")
        }
        
        // console.log(window.location.hash.split('#')[1]);
    }

    changeSort = (event) => {
        console.log("changeSort:\n");
        console.log(event);
        this.countClick++;
        if (this.countClick % 2 === 0) {
            window.location.hash = "hackernewsTop";
            event.srcElement.innerHTML = "Show LATEST";
        } else {
            window.location.hash = "hackernews";
            event.target.innerHTML = "Show TOP";
        }
    }

    componentDidMount = () => {
        if (!window.location.hash) {
            document.location.hash = '#hackernews';
        } else {
            this.loadData();
        }
        window.onhashchange = this.loadData();
    }

    render = () => {
    return (<div>
        <button type="button" className="btn btn-secondary col-2" onClick = {this.loadData}>Reload data</button>
        <div>&nbsp;</div>
        <button hidden id="posts" ref={this.sort} onClick={this.changeSort} className="btn btn-secondary btn-lg col-sm-8 col-lg-10 col-md-10 col-xl-11" >Show TOP</button>
        <Table data = {this.state.hnNews}/>
    </div>);
    
}
}

export default App;