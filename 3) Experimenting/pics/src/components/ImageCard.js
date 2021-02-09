import React from 'react';

class ImageCard extends React.Component{ //this displays a single 
    constructor(props) {
        super(props); //since we are extending another class we call super :)

        this.state = { spans: 0 };

        //A reference is used to access the DOM directly.
        this.imageRef = React.createRef(); // boom reference made
    }

    componentDidMount = () => {
        //adds an event listener to the image
        this.imageRef.current.addEventListener('load', this.setSpans); 
    }

    setSpans = () => {
        //Determine what span value to set for current image.
        console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans });//spans: spans can be simplified to spans
    }

    render() {
        const { description, urls } = this.props.image;  //Destructuring image into the components we care about.

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}> {/** remember that for style names, we remove the hyphens and use caml notation  */}
                <img 
                    ref={this.imageRef}  //used to reference the DOM element that is created here.
                    alt={description}
                    src={urls.regular} 
                />
            </div>
        );
    }
}

export default ImageCard;