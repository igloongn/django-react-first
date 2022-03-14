import React, { useState } from 'react'
import axios from 'axios';
import { Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import VIewPost from './VIewPost';
import Myform from './Myform';

const Allform = () => {

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    console.log(fname);
    console.log(lname);

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                   <Myform />
                </Route>
                <Route path='/viewpost'>
                    <VIewPost />
                </Route>
                <Route path='*'>
                    <div>Page Not Found</div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Allform