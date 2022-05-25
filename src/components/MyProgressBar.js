import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import React, { Component } from 'react'

export default class MyProgressBar extends Component {
    render() {
        return (
            <>
                <h1 className="title">
                    {this.props.title}
                </h1>
                <div className="progress-bar">
                    <ProgressBar
                        percent={this.props.complition}
                        filledBackground="#6169CF"
                    >
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div className="steps complished">
                                    <img alt="user info icon"
                                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                        width="20"
                                        src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-user-user-tanah-basah-glyph-tanah-basah-7.png"
                                    />
                                    
                                </div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div className={this.props.complition > 49 ? "steps complished" : "steps"} >
                                    <img alt="experience icon"
                                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                        width="20"
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/file--v1.png"
                                    />
                                </div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div className={this.props.complition === 100 ? "steps complished" : "steps"}>
                                    <img alt="template icon"
                                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                        width="20"
                                        src="https://img.icons8.com/material-rounded/24/ffffff/edit--v1.png"
                                    />
                                </div>
                            )}
                        </Step>
                    </ProgressBar>
                </div>
            </>
        )
    }
}
/*
export default function MyProgressBar({ complition, title }) {
    return (
        <>
            <h1 className="title">
                {title}
            </h1>
            <div className="progress-bar">
                <ProgressBar
                    percent={complition}
                    filledBackground="#6169CF"
                >
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <div className="steps complished">
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/ffffff/external-user-user-tanah-basah-glyph-tanah-basah-7.png"
                                />
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <div className={complition > 49 ? "steps complished" : "steps"} >
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="https://img.icons8.com/ios-glyphs/30/ffffff/file--v1.png"
                                />
                            </div>
                        )}
                    </Step>
                    <Step transition="scale">
                        {({ accomplished }) => (
                            <div className={complition === 100 ? "steps complished" : "steps"}>
                                <img
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="https://img.icons8.com/material-rounded/24/ffffff/edit--v1.png"
                                />
                            </div>
                        )}
                    </Step>
                </ProgressBar>
            </div>
        </>
    );
}
*/