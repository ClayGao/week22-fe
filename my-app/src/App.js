import React, {Component} from 'react';
import './App.scss';
import Nav from './nav'
import Post from './post'
import About from './about'

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          displayMode : 'list', // 預設為 List
      }
  }

  handleDisplayMode = mode => {
      this.setState({ displayMode : mode })
  }

  render() {
      const displayMode = this.state.displayMode
      return (
          <div className="App">
            <div className="test">
                <iframe frameborder="0" height="100%" width="100%" 
                  src="https://www.youtube.com/embed/TAIJich73NY?controls=0&modestbranding=1&autoplay=1&loop=1&playlist=TAIJich73NY&allowfullscreen=1" frameborder="0" allow="accelerometer; autoplay; encryptedMedia; gyroscope; pictureInPicture" >
                </iframe>
              </div>
              <Nav handleDisplayMode={this.handleDisplayMode} />
              
              <div className="wrapper">
                      {displayMode === 'list' && <Post />}
                      {displayMode === 'info' && <About />}
              </div>
          </div>
      )
  }
}

export default App;
