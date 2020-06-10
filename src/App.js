import React, {Component} from 'react';
import Projects from './Projects';
import Applications from './data/Applications';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            displayBio : false,
            app : {
                name : null,
                url : null  
             }
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
        }
    
        toggleBio = () => {
            this.setState({displayBio : !this.state.displayBio});
        }
    
    render(){

        var {isLoaded,items, app} = this.state;

        var object = {
            key: function(n) {
              return this[ Object.keys(this)[n] ];
            }
          };
          
          function key(source, idx) {
            return object.key.call(items, idx);
          }

          var appList = [];
          
          let count = 0;
          for (var c in items) {
             count++;
          }
          
          for(var i = 0 ; i<count;i += 2)
         {
            app.name = key(items, i);
            app.url = key(items, i+1);

            console.log(app)
            appList.push(app);

         }
         
         console.log(appList);
         

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