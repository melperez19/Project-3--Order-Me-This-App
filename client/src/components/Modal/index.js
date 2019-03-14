import React from "react";
import "./style.css";


export default class Modal extends React.Component {

    render() {
        if (!this.props.show) {
            return null;
        }
        
            return (
                <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}
                    <div className="footerStyle">
                        
                    </div>
                </div>

            </div>
            )
        }
    }