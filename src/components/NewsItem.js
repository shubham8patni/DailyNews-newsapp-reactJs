import React, { Component } from 'react'


export class NewsItem extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, date} = this.props;
        return (
            
            
                    <div className="col-md-6 my-4 col-sm-6 col-lg">
                        <div class="card" style={{width: "20rem", maxWidth: "80vw"}}>
                            <img style={{maxHeight: "165px"}} class="card-img-top" src={imageUrl} alt="" />
                            <div class="card-body">
                                <h5 class="card-title">{title}...</h5>
                                <p class="card-text"><small class="text-muted">Date: {date}</small></p>
                                <p class="card-text">{description}...</p>
                                <a href={newsUrl} target="__blank" class="btn btn-sm btn-dark text-white">View More</a>
                            </div>
                        </div>
                    </div>
                    
                
        )
    }
}

export default NewsItem