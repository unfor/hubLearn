import React from 'react'
import ReactDom from 'react-dom'
import AppRouter from "./router"
import '../src/home/test.less';
class App extends React.Component {
    render(){
        return (
            <div style={{color:"#333", height: "100%", width: "100%"}} className="test test2">
                <AppRouter />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))