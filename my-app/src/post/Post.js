import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleData: [], // JSON 回傳資料
        }
    }
 
    // 串 API 取 JSON 資料
    handleServerData = () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(resp => {
                return resp.json()
            })
            .then(jsonData => {
                jsonData.forEach(card => card.isShow) // 多加一個布林值屬性，用以展開文章
                this.setState({
                    articleData: jsonData
                })
            })
    }
 
    // Show 出指定的文章內容
    showArticle = id => {
        const {articleData} = this.state
        this.setState({
            articleData: articleData.map(card => {
                if (card.id === id) {
                    return {
                        ...card,
                        isShow: !card.isShow
                    } 
                } return card
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
            {articleData.map(card => (
                <div key={card.id} 
                    className="article" 
                    onClick={() => { this.showArticle(card.id) }}>
                    <div className="article-title">
                        {card.title}
                    </div>
                    {card.isShow && <div className="article-text">
                        {card.body}
                    </div>}
                    <div className="article-editor">
                        Editor: {card.userId}
                    </div>
                </div>
            ))}
            </div>
        )
    }
 }


export default Post