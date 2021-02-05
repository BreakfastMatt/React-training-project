//We want to put all the code here related to configuring axios (this'll make it neater when using it in other components)
import axios from 'axios';

export default axios.create({
    //Will create an instance of the axios client with a couple of default properties
    baseURL: 'https://api.unsplash.com',
    headers: {   //can send a header object
        Authorization : 'Client-ID RPCl4bidGmIw6dWMdRY_pw7UKHgs4rQ2IYSEfne0NSI'  //this is my access key which gives me access to the unsplash API
    }
});