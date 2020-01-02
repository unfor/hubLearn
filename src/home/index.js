import React from 'react'
import "./test.less"
import buyImg from "../assets/img/icon_buy_task.png"
import testImg from "../assets/img/bg_store.png"
export default class HomeIndex extends React.Component {
    render() {
        return (
            <div className="test test2">
                <div>hello world</div>
                {/* <img src={buyImg} alt="" />
                <img src={testImg} alt="" style={{width:360,height:60}}/>
                <p>HomeIndex</p> */}
                <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

                    <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5" />
                    <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5" />

                    <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5" />
                    <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5" />

                    <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5" />
                    <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
                        stroke="orange" fill="transparent" stroke-width="5" />

                    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                        stroke="green" fill="transparent" stroke-width="5" />

                    <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5" />
                </svg>
                <svg width="200px" height="200px" version="1.1" xmlns="http://www.w3.org/2000/svg">

                    {/* <path d="M10 10 H90 V90 H10 V10" />


                    <circle cx="10" cy="10" r="2" fill="red" />
                    <circle cx="90" cy="10" r="2" fill="red" />
                    <circle cx="10" cy="90" r="2" fill="red" />
                    <circle cx="90" cy="90" r="2" fill="red" /> */}
                    <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>

                </svg>
                <svg width="325px" height="325px" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 80
                            A 45 45, 0, 0, 0, 125 125
                            L 125 80 Z" fill="green"/>
                    <path d="M230 80
                            A 45 45, 0, 1, 0, 275 125
                            L 275 80 Z" fill="red"/>
                    <path d="M80 230
                            A 45 45, 0, 0, 1, 125 275
                            L 125 230 Z" fill="purple"/>
                    <path d="M230 230
                            A 45 45, 0, 1, 1, 275 275
                            L 275 230 Z" fill="blue"/>
                </svg>
                <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    {/* <defs>
                        <style type="text/css">
                            <![CDATA[
                                #MyRect {
                                    stroke: black;
                                    fill: red;
                                }
                            ]]>
                        </style>
                    </defs> */}
                    <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
                        stroke-linecap="round" stroke-dasharray="5,10,5,10" fill="none" id="MyRect"/>
                    <path d="M 10 75 L 190 75" stroke="red"
                        stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
                </svg>
            </div>
        )
    }
}