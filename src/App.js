import React, {Component} from 'react';
import Projects from './Projects';

class App extends Component{

constructor(props){
    super(props);
    this.state = {
        items: [],
        isLoaded: false,
        displayBio : false
    }
}

    componentDidMount(){

    let headers = new Headers();
        //to disable cors
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Credentials', 'true');
        
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "http://master.qa.ononay:8033/arge-it-dashboard/qa";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }

    toggleBio = () => {
        this.setState({displayBio : !this.state.displayBio});
    }

    render(){

        var {isLoaded,items} = this.state;
        if(!isLoaded){
            
            return <div>Loading...</div>;
        }

        else{
            console.log(items);
            return(
                <div>
                <h1>Data has been loaded</h1>
                <hr /> 
                <Projects />
                </div>
        );
    }
}
}

export default App;