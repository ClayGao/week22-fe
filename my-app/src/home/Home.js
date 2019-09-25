import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleData: [], 
        }
    }
 
    handleServerData = () => {
        const url = 'https://qootest.com/posts'
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(jsonData => {
                this.setState({
                    articleData: jsonData.slice(jsonData.length - 9, jsonData.length).reverse()
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
            <div>
                <div  className="board">
                    <div className="page-title">
                        About me
                    </div>
                    <div className="single-article" >        
                        <div className="single-article-text">
                            Hi, I am Clay 
                            <br />
                            I am Learing Web Frontend Develope and try to bulid my Blog with React and React-router
                            <br />
                            Maybe it looks ugly Orz.... but everything will be alright, doesn't it ?
                            <br />
                            By the way, the blog now you see won't be the latest version 
                            <br />
                            I will update week by week
                            <br />
                            So, give me some time
                            <br />
                            See you :D
                        </div>
                        <div className="single-article-editor">
                            Author: ClayGao
                        </div>
                    </div>
                    <div className="page-title">
                        The Latest Article
                    </div>
                    {articleData.map(card => (
                        <div key={card.id} 
                            className="article" 
                            onClick={() => { 
                                history.push('/list/' + card.id)
                            }}>
                            <div className="article-title">
                                {card.title}
                            </div>
                            <div className="article-text" >
                            {card.body}
                            </div>
                            <div className="article-editor">
                                Author: {card.author ? card.author : "Noname"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
 }


export default withRouter(Home) 