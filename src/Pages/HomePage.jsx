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
        let response = await fetch(`https://newsdata.io/api/1/latest?q=${q}&language=${language}&apikey=pub_4d0737e327a149e98fa3cb16d6abaa99`)
        response = await response.json()
        if (response.status === "success") {
            setArticles(response.results)
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
                            url={item.link}
                            image={item.image_url}
                            date={item.pubDate}
                            source={item.source_name} />
                    })}

            </div>

        </div>


    )
}
