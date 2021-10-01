import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

let defaultImg = "/news.jpg";
export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1, 
            date:[] ,          
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=pleaseenterAPIkey&page=${this.state.page }&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let paresedData = await data.json();
        this.setState({ articles: paresedData.articles, totalResults: paresedData.totalResults })
        this.setState({loading : false})
    }

    handlePrevious = async () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=pleaseenterAPIkey&page&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let paresedData = await data.json();        
        this.setState({
            loading : false,
            page: this.state.page - 1,
            articles: paresedData.articles,
        })
        
    }
    handleNext = async  () =>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=pleaseenterAPIkey&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let paresedData = await data.json();
        this.setState({
            loading : false,
            page: this.state.page + 1,
            articles: paresedData.articles,
        })
    }

    

    render() {
        return (
            <div className="container my-3 ">
                <h1 className="text-center mb-5">DailyNews - {this.props.heading}</h1>
                {this.state.loading && <Spinner/>}
                <div className="container my-3">
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <NewsItem key={element.url} date={element.publishedAt.slice(0,10)} title={element.title.slice(0, 51)} description={element.description == null ? "No description available" : element.description.slice(0, 85)} imageUrl={element.urlToImage == null ? defaultImg : element.urlToImage} newsUrl={element.url} />
                        })}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-primary btn-sm mx-2" onClick={this.handlePrevious} >&larr; Previous</button>
                    <button disabled={this.state.page*this.props.pageSize >= this.state.totalResults} type="button" class="btn btn-primary btn-sm mx-2" onClick={this.handleNext}>Next &rarr; </button>
                </div>


            </div >
        )
    }
}

export default News
