import React from 'react';
import { connect } from 'react-redux';

export class SearchBar extends React.Component {
    state = { term : '' };

    onFormSubmit(event) { //using an arrow function instead automatically binds *this*
        event.preventDefault(); //prevents the default of form submitting on enter and just refreshing the page.
        //Take search term and pass it up to the App component which can handle the search logic
        this.props.onSubmit(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}>  {/** Using an arrow function here automatically binds *this* (could also do it on the function above) */}
                    <div className="field">
                        <label>Image Search </label>

                        {/** Alternate syntax: */}
                        {/** onChange={(event) => console.log(event.target.value)}  */}  {/** This arrow function replaces a full standalone function. */}  
                        <input 
                        type="text"  
                        value={this.state.term}  //this is needed to ensure that it is a controlled event, maybe look into this a little bit more (re-watch that section of the vid perhaps.)
                        onChange={(e) => {this.setState({term: e.target.value})}}
                        />  
                        <button type="reset" onClick={(e) => {this.setState({term: ''});}}>
                            Clear
                        </button>
   
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar; 

//How would I connect this up such that submitting the form will trigger the executeSearch action 
//Will have to plan this out on paper to figure it out.