import React, {Component} from 'react';

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            writeData: [], // JSON 回傳資料
        }
    }
 
    // 串 API 取 JSON 資料
    /*
    handleServerData = () => {
        const listId = this.props.match.params.listId
        const url = 'https://jsonplaceholder.typicode.com/posts/' + listId
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
    */

    
    
    render(){
        const { articleData } = this.state
        return (
            <div  className="board">
                <form className="write-article">
                    Title: <input type="text" className="write-article-title" />
                    Your name: <input type="text" className="write-article-editor" />
                    Content:　<textarea className="write-article-text"></textarea>
                    <input type="button" className="write-article-button" value="Send" />
                </form>
            </div>
        )
    }
 }


export default Write