import React from 'react';
import {render} from 'react-dom';

//Components
import {SeasonDisplay} from "./SeasonDisplay";

/* const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log("geolocation bad: ", err)
    ); 

    return (
        <div> 
            <SeasonDisplay
                //location={position}
            /> 
        </div>
    );
}; */

class App extends React.Component {
    //Here the *this* keyword is not used.
    state = { 
        latitude : null,
        errorMessage : ''
    };

    componentDidMount(){
        console.log("The App component was rendered to the screen (ComponentDidMount)");

        window.navigator.geolocation.getCurrentPosition(
            (position) => {  //Callback function, won't be invoked until sometime in the future when we've either succeeded or failed to get location.
                console.log(position);
                this.setState({
                    latitude:  position.coords.latitude
                });
            },
            (err) => {
                console.log("geolocation bad: ", err);
                this.setState({
                    errorMessage: err.message
                });
            }
        ); 
    }

    componentDidUpdate(prevProps, prevState){
        console.log('An update just occured', prevProps, prevState)
    }

    render() {
        //This is called conditional rendering
        if (!this.state.errorMessage && this.state.latitude) {
            return (
                <div>
                    <SeasonDisplay
                        latitude = {this.state.latitude}
                    />
                </div>
            );
        }

        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error: {this.state.errorMessage}</div>;
        }

        return <div>Loading!</div>;
    }
}

render(
    <App/>,
    document.querySelector('#root')
);