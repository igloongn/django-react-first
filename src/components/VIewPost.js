import axios from 'axios'
import React from 'react'
// import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom';


const VIewPost = () => {

    const url = 'http://localhost:1234/posts/'
    axios.get(url).then(res => console.log(res)).catch(err => console.log(err))



    return (
        <div>This is React</div>
    )
}

export default VIewPost
