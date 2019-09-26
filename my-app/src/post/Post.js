import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleData: [], 
        }
    }
 
    handleServerData = () => {
        const listId = this.props.match.params.listId
        const url = 'https://qootest.com/posts/' + listId
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
        return (
            <div  className="board">
                <div key={articleData.id} 
                    className="single-article" >        
                    <div className="single-article-title">
                        {articleData.title}
                    </div>
                    <ReactMarkdown 
                        className="single-article-text" 
                        source={articleData.body ? articleData.body : "Loading..."} 
                    />
                    <div className="single-article-editor">
                        {"Author: " + (articleData.author ? articleData.author : "Noname")}
                    </div>
                </div>
            </div>
        )
    }
 }


export default Post