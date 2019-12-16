import React, { Suspense, useState } from 'react';
var pictures = require('./../mock/pictures');
import "./blog.less";

export default class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.props.location.func && this.props.location.func();
        this.state = {
            loadFinished: false,
            pictList: pictures.default.picts.slice(0, 2),
            pictLength: 2,
        }
        this.pictRef = React.createRef();
    }

    componentDidMount() {
        if (localStorage.getItem("scrollHeight")) {
            let scrollHeight = localStorage.getItem("scrollHeight");
            this.pictRef.current.scrollTo({ top: scrollHeight, left: 0, behavior: 'smooth' });
        }
    }

    loadMorePictures() {
        if (this.state.loadFinished) {
            this.setState({ pictList: this.state.pictList.slice(0, Math.floor(this.pictRef.current.scrollTop / 600) < 2 ? 2 : Math.floor(this.pictRef.current.scrollTop / 800)) })
            if (this.state.pictList.length == 2) {
                this.setState({
                    pictLength: this.state.pictList.length,
                    loadFinished: false,
                })
            }
        } else {
            if (!this.state.loadFinished && this.pictRef.current.scrollTop >= this.state.pictList.length * 600) {
                this.setState({ pictList: pictures.default.picts.slice(0, this.state.pictLength + 2), pictLength: this.state.pictLength + 2 });
            }
            if (this.state.pictLength + 2 >= pictures.default.picts.length) {
                this.setState({
                    loadFinished: true
                });
            }
        }
    }

    componentWillUnmount() {
        localStorage.setItem("scrollHeight", this.pictRef.current.scrollTop);
    }

    //#TODO how to use this new func suspense;
    render() {
        return (
            <div ref={this.pictRef} onScroll={this.loadMorePictures.bind(this)} className="blogMain">
                {/* <Suspense fallback={<p>{"loading..."}</p>}>
                    <List />
                </Suspense> */}
                <div className="head-item">{"Welcome, leeon"}</div>
                <div>
                    {this.state.pictList.length > 0 && this.state.pictList.map((pict, index) => {
                        return <div key={pict.id} className="blog-pict">
                            <img src={pict.src} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
function List() {
    // const [user, setUser] = useState(null);
    const fetcherUser = () => new Promise((r) => {
        setTimeout(() => {
            r('leeon');
        }, 3000)
    })
    const getValue = async () => {
        let value = await fetcherUser();
        console.log(value);
        return {value};
    }
    return <Suspense fallback={<p>{"loading..."}</p>}>
        <div>{getValue().value}</div>
    </Suspense>
}