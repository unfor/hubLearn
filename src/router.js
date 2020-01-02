import React, { Suspense } from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import HomeIndex from "./home"
const BlogIndex = React.lazy(() => import ("./blog"));
import ResumeIndex from "./resume"
import UserIndex from "./user"
import './router.less';
import html2canvas from 'html2canvas';
import Canvas2Image from './canvas2image.js';
// import BlogIndex from './blog';
class AppRouter extends React.Component {
    
    hello(){
        console.log("hello")
    }

    capture(container, options = {}){
        return html2canvas(container, options).then((canvas) => {
            const image1 = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
            return image1;
        })
    }

    render() {
        let userInfo = {
            name: "leeon",
            sex: "male"
        }
        let blogPath = {
            pathname: '/blog',
            state: userInfo,
            func: this.hello,
        }

        return (
            <BrowserRouter>
                <div id="mainPage" className="mainPage">
                    <div className="leftBar">
                        <ul>
                            <li><Link to="/home">home</Link></li>
                            <li><Link to={blogPath}>blog</Link></li>
                            <li><Link to="/resume">resume</Link></li>
                            <li><Link to="/user">user</Link></li>
                        </ul>
                    </div>
                    <div className="rightContent">
                        {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
                        <Switch>
                            {/* exact */}
                            <Route path="/home" component={HomeIndex} />
                            <Suspense fallback={<p>{"loading..."}</p>}>
                                <Route exact path="/blog" component={BlogIndex} />
                            </Suspense>
                            <Route exact path="/resume" component={ResumeIndex} />
                            <Route exact path="/user" component={UserIndex} />
                        </Switch>
                    </div>
                    <div className="topBar">
                        <div onClick={this.capture}>{"图标"}</div>
                        <div>{"图标"}</div>
                        <div>{"图标"}</div>
                        <div>{"图标"}</div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;