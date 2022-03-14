import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Myform = () => {

    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    console.log(fname);
    console.log(lname);

    return (
        <div>
            <center><h2>This is My Form</h2></center>
            <Link to="/viewpost">View Post</Link>
            <div className="w-100 d-flex justify-content-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={fname}
                            onChange={(e) => {
                                setfname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={lname}
                            onChange={(e) => {
                                setlname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            value='Add Here'
                            className='jb'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Myform