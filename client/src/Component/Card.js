import React, { useState, useEffect } from 'react'
import '../css/Card.css'
import { Link } from 'react-router-dom';
// import {Link} from 'react-router-dom'
const Card = () => {
    const [users, setUsers] = useState([]);

    // this api i am using from dummy api

    // api fetch method
    const fetchData = async () => {
        const url = `https://dummyjson.com/users`;
        const data = await fetch(url);
        const parsedData = await data.json()
        setUsers(parsedData.users);
        // console.log(parsedData)
    }


    useEffect(() => {
        // eslint-disable-next-line 
        fetchData();
    })
    return (
        <div class="section">
            <div class="container my-5 p-3">
                <div className="row">
                {/* Map all item coming from api */}
                    {Array.isArray(users) ? users.map((item, index) => {
                        return (
                            <div class="col-md-4 my-3">
                                <div class="card" key={index}>
                                    <div class="header">
                                        <div class="avatar">
                                            <img src={item.image} alt="" width={'100px'} />
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="user-meta has-text-centered">
                                            <h3 class="username">{item.firstName}{item.lastName}</h3>
                                            <h5 class="position">{item.company.department}</h5>
                                        </div>
                                        <div class="user-bio has-text-centered">
                                            <p>{item.firstName}{item.lastName} is an {item.company.department} at the {item.company.name} Inc comany. She works very hard.</p>
                                        </div>
                                        <div class="action has-text-centered">
                                            <Link to={`/user-details/${item.id}`} class="button is-small">View profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default Card
