import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const About = () => {
    return ( 
         <div  className="board">
             <div className="single-article">
                 <div className="single-article-title">
                     Hi, Here is Blue Orange
                 </div>
                 <div className="single-article-text">
                     雖然是一個因應作業而誕生的小部落格，但是自己很喜歡這樣的背景
                     <br />
                     背景是取材自 Unsplash，同時也是 Trello 背景的圖片庫
                     <br />
                     大概就是這樣，未來幾周的作業將會優化這一份部落格
                     <br />
                     目前 Week21 的部分是串由老師提供的 API 
                     <br />
                 </div>
                 <div className="single-article-editor">
                        Author: Clay Gao
                 </div>
             </div>
         </div>
     )
  }


export default About