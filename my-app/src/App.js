import React, {Component} from 'react';
import './scss/App.scss';
import Nav from './nav'
import PostList from './post_list'
import Post from './post'
import About from './about'
import Write from './write'
import Home from './home'
import { BrowserRouter as Router, Route } from "react-router-dom";



class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          displayMode : 'list', 
          scrollY : window.scrollY
      }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scroll);
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.scroll);
  }
  
  scroll = () => {
    if(!window.scrollY || window.scrollY < 10) {
      this.setState({
        scrollY : window.scrollY
      })
    }
  }

  render() {
    console.log(this.state.scrollY)
      const {scrollY} = this.state
      return (
        <Router>
          <div className="App">
              <Nav isMove={scrollY}/>
              <div className="wrapper">     
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/list" exact component={PostList} />
                <Route path="/list/:listId" component={Post} />
                <Route path="/write" exact component={Write} />
              </div>
          </div>
        </Router>
      )
  }
}

export default App;
