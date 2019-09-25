import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleData: [], // JSON 回傳資料
        }
    }
 
    // 串 API 取 JSON 資料
    handleServerData = () => {
        const url = 'https://qootest.com/posts'
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(jsonData => {
                this.setState({
                    articleData: jsonData
                })
            })
    }
 
    componentDidMount() {
        this.handleServerData()
    }
    
    render(){
        const { articleData } = this.state
        const {history} = this.props
        return (
            <div  className="board">
            {articleData.map(card => (
                <div key={card.id} 
                    className="article" 
                    onClick={() => { 
                        history.push('/list/' + card.id)
                    }}>
                    <div className="article-title">
                        {card.title}
                    </div>
                    <div className="article-text">
                        {card.body}
                    </div>
                    <div className="article-editor">
                        Author: {card.author}
                    </div>
                </div>
            ))}
            </div>
        )
    }
 }


export default withRouter(PostList) 