import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super(); 
//        this.age = props.age;  //This is the age that I get from the outside then I create this property within this component
        //Since we've remade age property within the Home component we can use "this.age" instead of "this.props.age"

        //Adjusted it to change state instead
        this.state = {
            age : props.age, //you shouldn't assign props to your state unless it's just an initial value
            status: 0,
            newText: props.initialTextValue
        };
        setTimeout(() => {  //Set a timeout and after 3 seconds the status will change
            this.setState({
                status: 1
            });
        }, 3000);
        console.log("Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("get derived state from props")
        return { // props
            name : props.name,
            age : props.age,
            user : props.user,
            greet : props.greet,
            changeText : props.changeText,
            initialTextValue : props.initialTextValue
         };
    }

    componentDidMount() {
        //After rendering
        console.log("Component Did mount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should component update", nextProps, nextState)
        // if(nextState.status === 1) { return false; }  //doing this means should update will trigger, but did update will not when the value of status is 1.
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("get snapshot before update", prevProps, prevState)
        return null;
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component did update", prevProps, prevState)
    }

    componentWillUnmount(){
        console.log("Component will unmount")
        //Theoretically should cancel the status timeout that was set in the constructor, but for this example I will leave it and just ignore the warning messages.
    }



    onMakeOlder() {
        //button event function
        this.setState({
            //Here we put the variables that will be changing (we may have multiple variables inside state, but in this case we just want to change age.)
            age : this.state.age + 3  //This will refer to the age during the old state and add 3 to that as the new state.
        }); //This method allows the state to change which will trigger React to look if it needs to re-render
    }

    onChangeText() {
        this.props.changeText(this.state.newText)
    }

    onHandleChange(event){
        this.setState({
            newText : event.target.value
        });
    }

    render(){
        // console.log(this.props); //this will dump all the props in the console
        //this.props.<name of property>
        return (
            <div>
                <p> And this is from the Home component</p>
                <p> Your name is {this.props.name}, your age is {this.state.age}.</p>  {/* this.state.age refers to the age stored in that state. */}
                <p> User object Name: {this.props.user.name} </p>
                <p> Status: {this.state.status} </p>
                <div>
                    <h4> Hobbies </h4>
                    <ul>  {/* This weird line loops through hobby array and returns a list of the hobbies */}
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)} 
                    </ul>
                </div>


                <hr/> {/*"This uses props indirectly to pass everything within the opening and closing home tags">*/}
                {this.props.children}  

                <hr/>
                {/* Got to bind this otherwise the this refers to the button instead of Home */}
                {/* () => this.onMakeOlder().  You'll notice that the number for age doesn't change as React doesn't re-render unless the state changes */}
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older! </button>


                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>  {/** We are binding a function from the parent component to the child component */}
                
                <hr/>
                <input type="text" value={this.state.newText} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeText.bind(this)}>Change header text</button>
            </div>
        );
    }
}

//Note this is outside of the Home class.
Home.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    user : PropTypes.object,
    greet: PropTypes.func,  //This prop is of type function. 
    changeText : PropTypes.func,
    initialTextValue : PropTypes.string
}; 