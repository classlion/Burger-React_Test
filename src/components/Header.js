import React from "react";

const Header =(props) => 
        <header className="top">
            <div className="wrap">
                <div className="header-content">

                    <div className="header-rating">
                        <div className="header-rating-tag">Rating</div>
                        <div className="header-rating-icon">+++</div>      
                    </div>

                    <div className="header-divider"></div>
                    <h1 className="font-effect-fire-animation">{props.title}</h1>
                    <h3>
                        <span>
                            Быстрая доставка <span className="sub-header"> #Бургеров</span>
                        </span>
                    </h3>

                </div>
            </div>
        </header>                

export default Header;