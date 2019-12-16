import React, { Suspense } from "react"
import { Route, BrowserRouter, Link, Switch } from "react-router-dom"
import HomeIndex from "./home"
const BlogIndex = React.lazy(() => import ("./blog"));
import ResumeIndex from "./resume"
import UserIndex from "./user"
import './router.less';
// import BlogIndex from './blog';
class AppRouter extends React.Component {
    
    hello(){
        console.log("hello")
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
                <div className="mainPage">
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
                        <div>{"图标"}</div>
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