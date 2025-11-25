import React from 'react'
import { Link } from 'react-router-dom'

export default function Newsite(props){
    return (
<div className="col-xl-2 col-lg-3 col-sm-4 col-md-6 ">
                    <div className="card" >
                        <img src={props.image} className="card-img-top" alt="no image" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <div className="source">
                                <p>{props.source}</p>
                                <p>{new Date(props.date).toLocaleDateString()}</p>
                            </div>
                            <p className="card-text">{props.description}</p>
                            <Link to={props.url} className="btn btn-primary">Read full article</Link>
                        </div>
                    </div>

        </div>
    )
}
