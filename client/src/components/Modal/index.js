import React from "react";
import "./style.css";
import Pulse from 'react-reveal/Pulse';

export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        
            return (
                <Pulse>
                <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}
                    <div className="footerStyle">
                        
                    </div>
                </div>

            </div>
            </Pulse>
            )
        }
    }