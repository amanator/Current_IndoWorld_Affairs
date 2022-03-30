import React from 'react'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    // const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const updateNews = async () => {
        // let category = "{props.category}"
        console.log(totalResults);
        setLoading(true)
        const response = await fetch('https://currentindoworldaffair.herokuapp.com/get', {
            //   mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "category": props.category })
        });
        const json = await response.json();
        // const parsedata = JSON.parse(json)
        console.log(json)
        console.log(json.articles);
        setArticle(json.articles)
        setTotalResults(json.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className="container my-5">
            <br />

            <h3 >{props.category.toUpperCase()} Headlines</h3>

            <div className="container">
                {loading? <Spinner/>:
                <div className="row">
                    {article.map((element) => {
                        return <div className="col-md-3 my-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageURL={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>


                    })}
                </div>}
            </div>

        </div>
    )
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}
News.propsType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apikey: PropTypes.string,
}

export default News
