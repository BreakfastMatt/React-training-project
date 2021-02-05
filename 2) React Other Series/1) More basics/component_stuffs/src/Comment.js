import React from 'react';
import PropTypes from "prop-types"


export const Comment = function(props) {
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.authorName}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {props.timePosted}
                        </span>
                    </div>
                    <div className="text">
                        {props.content}
                    </div>
                </div>
                <br/>
            </div>
    );
}

Comment.propTypes = {
    authorName : PropTypes.string,
    timePosted : PropTypes.string,
    content : PropTypes.string,
    avatar : PropTypes.string
};

//export default Comment;