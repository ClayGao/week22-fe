import React, {Component} from 'react';

class Write extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            author:'',
            body:''
        }
    }
    
    handlePostData = () => {
        const url = 'https://qootest.com/posts'
        const data = this.state 
        if (!data.title || !data.author || !data.body) {
            alert('Write Something :D') 
            return
        }
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }).then(
            this.setState({
                title:'',
                author:'',
                body:''
            })
          )
    }
    
    
    handleInput = (e) => {
        const inputType = e.target.className
            if(inputType === "write-article-title") {
                this.setState({title: e.target.value,})
            } else if (inputType === "write-article-editor") {
                this.setState({author: e.target.value})
            } else {
                this.setState({body: e.target.value})
            }
    }
    
    render(){
        console.log(this.state)
        const {title, author, body} = this.state
        return (
            <div  className="board">
                <form className="write-article"  onChange={this.handleInput} >
                    Title: <input type="text" className="write-article-title" value={title} />
                    Your name: <input type="text" className="write-article-editor" value={author} />
                    Content:　<textarea className="write-article-text" value={body}></textarea>
                    <input type="button" onClick={this.handlePostData} className="write-article-button" value="Send" />
                </form>
            </div>
        )
    }
 }


export default Write