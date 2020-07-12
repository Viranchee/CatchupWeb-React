import React, { useState, useEffect } from 'react';
import Table from "./Table.js";
import axios from 'axios'

import './App.css';



function App() {
    
    const [hackerNews, setHackerNews] = useState(undefined)
    const [hackerNewsTop, setHackerNewsTop] = useState(undefined)
    
    useEffect(() => {
        if (!window.location.hash) {
            document.location.hash = '#hackernews';
        } else {
            loadData();
        }
        window.onhashchange = loadData();

        return
    }, [])

    function loadData() {
        
        document.getElementById("posts").hidden = true
        switch(window.location.hash.split('#')[1]) {
            case 'hackernewsTop' : getHnnewsTop();
            break;
            case 'hackernews' : gethnNews();
            break;
            
            default: alert("Error in loadData")
        }
        
    }


    
    function changeSort(event) {
        


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
    
    function getHnnewsTop() {
        axios.get('https://corsenabled.herokuapp.com/get?to=https://hacker-news.firebaseio.com/v0/topstories.json', {
        responseType: 'json'
    })
    .then(response => {
        setHackerNewsTop(response.data)
        console.log(hackerNewsTop);
    })
}

function gethnNews() {
    axios.get('https://corsenabled.herokuapp.com/get?to=https://hnrss.org/newest.jsonfeed', {
    // axios.get('/hackernews',{
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'GET'
    },
    responseType: 'json'
})
.then(response => {
    setHackerNews(response.data.items)
    console.log(hackerNews);
    document.getElementById("posts").hidden = false
})
.catch(err => {
    console.log(err);
});
}

let hackerNewsJSX = hackerNews ? <Table data = {hackerNews}/> : undefined 

return (
    <div>
    <button type="button" className="btn btn-secondary col-2" onClick = {loadData}>Reload data</button>
    <div>&nbsp;</div>
    <button hidden id="posts"  onClick={changeSort} className="btn btn-secondary btn-lg col-sm-8 col-lg-10 col-md-10 col-xl-11" >Show TOP</button>
    {hackerNewsJSX}
    </div>)
}
export default App;
// ref={this.sort}