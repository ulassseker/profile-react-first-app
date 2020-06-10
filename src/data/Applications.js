import React, {Component} from 'react';

class Application extends Component{

    
    render(){
        const {name, link} = this.props.application;

        return(
            <div style={{display: 'inline-block', margin:10, width:'30%',  textAlign:"center"}}>
                <h3>{name}</h3>
                <a href={link} style={{fontSize:15}}>{link}</a>
            </div>
        )
    }

}

class Applications extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false
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
                .then(res => res.json(), {
                    mode :"cors",
                    headers : headers
                })
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json.propertySources[0].source
                    })
                })
                .then(items => {
                    items.map(element => {
                        console.log(element);
                    });
                })
            }
        
            toggleBio = () => {
                this.setState({displayBio : !this.state.displayBio});
            }
            

    render(){

        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        this.state.items.map(item => {
                            return(
                                <Application key={item.name} application={item}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Applications;
