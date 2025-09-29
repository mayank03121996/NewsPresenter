import React, { useEffect, useState } from 'react'
import Newsitem from '../Compontents/Newsitem'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function HomePage() {

    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [q, setq] = useState("all")
    let [language, setLanguage] = useState("hi")
    let [SearchParams] = useSearchParams()


    useEffect(() => {
        let q = SearchParams.get("q") ?? "all"
        setq(q)
        let language = SearchParams.get("language") ?? "hi"
        setLanguage(language)
        getAPIData(q, language)
    }, [SearchParams]
    )

    async function getAPIData(q, language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&apiKey=c803afdb44fc4e2eb719704a025c8ca8`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)

        }
    }


    return (

        <div className='container-fluid my-3'>
            <h5> {q} News </h5>
            <div className="row">
                {
                    articles.map((item, index) => {
                        return <Newsitem
                            key={index}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            image={item.urltoImage}
                            date={item.publishedAt}
                            source={item.source.name} />
                    })}

            </div>

        </div>


    )
}
