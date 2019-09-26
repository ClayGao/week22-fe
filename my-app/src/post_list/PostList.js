import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleData: [], 
        }
    }
 
    handleServerData = () => {
        const url = 'https://qootest.com/posts'
        axios.get(url)
            .then(resp => {
                this.setState({
                    articleData: resp.data.reverse(),
                })
            })
    }
 
    componentDidMount() {
        this.handleServerData()
    }
    
    render(){
        const { articleData} = this.state
        const {history} = this.props
        return (
            <div  className="board">
            <div className="page-title">
                Articles
            </div>
            {!articleData[0] ? 
            <div className="loading">
                Loading... 
            </div> : 
            articleData.map(card => (
                <div key={card.id} 
                    className="article" 
                    onClick={() => { 
                        history.push('/list/id=' + card.id)
                    }}>
                    <div className="article-title">
                        {card.title}
                    </div>
                    <div className="article-text">
                        {card.body}
                    </div>
                    <div className="article-editor">
                        Author: {card.author ? card.author : "Noname"}
                    </div>
                </div>
            ))}
            </div>
        )
    }
 }


export default withRouter(PostList) 