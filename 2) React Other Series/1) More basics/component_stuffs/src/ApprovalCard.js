import React from 'react';

export const ApprovalCard = function(props) {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    {/** Comment or some other custom content in here */}
                    {props.children}
                </div>
            
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">  Approve </div>
                        <div className="ui basic red button">    Reject </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//export default ApprovalCard;  //What is the difference between this and adding the "export" keyword?