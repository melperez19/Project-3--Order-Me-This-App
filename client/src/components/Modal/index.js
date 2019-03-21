import React from "react";
import "./style.css";
import Fade from 'react-reveal/Fade';

export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        
            return (
                <Fade>
                <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}
                    <div className="footerStyle">
                        
                    </div>
                </div>

            </div>
            </Fade>
            )
        }
    }