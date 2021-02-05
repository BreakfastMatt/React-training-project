import React from 'react';
import faker from 'faker';

//Import Components
import {Comment} from "./Comment"
import {ApprovalCard} from "./ApprovalCard"

class App extends React.Component {
  render(){
    return (
      <div className="ui container comments">
        <ApprovalCard>
          {/** props.children goes in here */}
          <Comment 
            authorName="Alex" 
            timePosted="Yesterady at 3pm"
            content="This is some random comment here"
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>

        

        <Comment 
        authorName="Sam" 
        timePosted="Today at 6pm"
        content="This is another comment"
        avatar={faker.image.avatar()}
        />

        <Comment 
        authorName="August" 
        timePosted="Today at 8pm"
        content="And the final comment"
        avatar={faker.image.avatar()}
        />

      </div>
    );
  }
}

export default App;
