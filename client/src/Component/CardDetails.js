import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
const CardDetails = () => {
    const [user, setUsers] = useState([])
    const {id} = useParams();
    const fetchData = async () => {
        const fetchurl = `https://dummyjson.com/users/${id}`;
        const data = await fetch(fetchurl);
        const parsedData = await data.json()
        setUsers(parsedData)
        // console.log(parsedData)
    }
    useEffect(() => {
        // eslint-disable-next-line 
        fetchData();
    })
    return (
        <div className='container mt-5' >
            <div className="row">
                <div className="card my-5" >
                    <div className="row">
                        <div className="col-md-3">
                            <img src={user.image} className="img-fluid rounded-start" alt="..." width={'400px'} />
                        </div>
                        <div className="col-md-8 d-flex">
                            <div className="card-body">
                                <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                                <p className="card-text"><b>Email :</b>{user.email}</p>
                                <p className="card-text"><b>ID :</b>{user.id}</p>
                                <p className="card-text"><b>gender :</b>{user.gender}</p>
                                <p className="card-text"><b>UserName :</b>{user.username}</p>
                                <p className="card-text"><b>phone :</b>{user.phone}</p>
                                <p><b>Date of Birth :</b>{user.birthDate}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
