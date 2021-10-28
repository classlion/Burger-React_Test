import React from "react";
import { render } from "react-dom";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: '',
    };

    displayList = () => {
        const { display } = this.state;
        this.setState({ display: !display})  
    }

    getTitle = (restaurant) =>{
        console.log(restaurant);
        const { title, url } = restaurant;
        this.setState({title : title, url : url})
        this.setState({ title, url, display: false})
    }

    getToRestoraunt = () => {
        const { url } = this.state;
        this.props.history.push(`/restaurant/${url}`);
    }

    render(){


        return  (
            <React.Fragment>
                <div className="restaurant_select">
                    <div className="restaurant_select_top">
                        <div
                        onClick={this.displayList}
                        className="restaurant_select_top-header font-effect-outline">{this.state.title ? this.state.title : 'Выбери ресторан'}</div>
                        <div className="arrow_picker">
                            <div className="arrow_picker-up"></div>
                            <div className="arrow_picker-down"></div>
                        </div>
                        {this.state.display ? (
                        <div className="restaurant_select_bottom">
                            <ul>
                                {restaurants.map(restaurant =>
                                {return <li onClick={() => this.getTitle(restaurant)} key={restaurant.id}>{restaurant.title}</li>;
                                })}
                            </ul>
                        </div>) : null}
                    </div>
                    
                    <button>Перейти в ресторан</button>
                </div>

            </React.Fragment>
                );
    }
}

export default Landing;