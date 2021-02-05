import React from "react";
//import {render} from "react-dom";
import './App.css';

//Import components over here:
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";

class App extends React.Component {
onGreet() {
  //A function that we want to pass to the Home component and call it there
  alert("Hello!");
}

constructor(){
  super(); //Must call super first or bad errors (double check the reasoning for this)
  this.state = {
    RandomText : "The text that is random",
    homeCompMounted : true
  }
}

onChangeHeaderText(newText) {
  this.setState({
    RandomText : newText
  });
}

onChangeHomeMounted(){
  //added this to trigger the componentWillUnmount call 
  this.setState({
    homeCompMounted : !this.state.homeCompMounted  //if not mounted before, mount it and vice versa
  });
}

  render(){
    //Can have regular javascript over here
    var user = {
      name: "Anna",
      hobbies: ["Sports", "other things"]
  }

let homeComponent = "";
if (this.state.homeCompMounted) {
  homeComponent = 
    <Home 
      name={"Max"} 
      age={27} 
      user={user} 
      greet={this.onGreet}  // if I used the *this* keyword inside the onGreet function then I would have to bind *this* here 
      changeText={this.onChangeHeaderText.bind(this)} // Here I have to bind *this* as I used it within the onChangeHeaderText function
      initialTextValue = {this.state.RandomText}
      >    
        <p> Stuff contained within the Home tags are considered Props.children (note it will even include the raw tags so this will appear as a normal HTML component) </p>
    </Home>;
}

    return (
      <div>
        <p>Some text from App component.</p>
        <Header RandomText={this.state.RandomText}/>
        {homeComponent}
        <br/>
        <button onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount Home Component</button>


      </div>
    );
  }
}

export default App;
