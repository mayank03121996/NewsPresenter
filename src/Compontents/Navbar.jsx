import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export default function Navbar() {
    let [search, setSearch] = useState()
    let [q, setq] = useState("all")
    let [language, setLanguage] = useState("hi")
    let [SearchParams] = useSearchParams()
    let navigate = useNavigate()
    function postSearch(e) {
        e.preventDeafault()
        navigate(`/?q=${search}&language=${language}`)
        setSearch("")
    }

    useEffect(() => {
        setq(SearchParams.get("q") ?? "all")
        setLanguage(SearchParams.get("language") ?? "hi")
    },
        [SearchParams]
    )
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/?q=all&language=${language}`}>NewsPresenter</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={`/?q=all&language=${language}`}>All</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/?q=politics&language=${language}`}>Politics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/?q=social&language=${language}`}>Social</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/?q=sharemarket&language=${language}`}>Share Market</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/?q=sports&language=${language}`}>Sports</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/?q=cricket&language=${language}`}>Cricket</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=crime&language=${language}`}>Crime</Link></li>

                                <li><Link className="dropdown-item" to={`/?q=education&language=${language}`}>Education</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Language
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={`/?q=${q}&language=hi`}>Hindi</Link></li>
                                <li><Link className="dropdown-item" to={`/?q=${q}l&language=en`}>English</Link></li>
                            </ul>
                        </li>

                    </ul>
                    <form className="d-flex" role="search" onSubmit={postSearch}>
                        <input className="form-control me-2" onChange={(e) => setSearch(e.target.value)} value={search} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
