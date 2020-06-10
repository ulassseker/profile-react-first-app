import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const {title, description, link} = this.props.project;

        return(
            <div style={{display: 'inline-block', margin:10, width:'30%',  textAlign:"center"}}>
                <h3>{title}</h3>
                {/* <img src={image} alt='project' style={{width:200, height:120}}></img> */}
                <p>{description}</p>
                <a href={link} style={{fontSize:15}}>{link}</a>
            </div>
        )
    }

    componentDidMount() {
        // let headers = new Headers();
        // //to disable cors
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // const url = "http://master.qa.ononay:8033/arge-it-dashboard/qa";
        
    
        // fetch(url,{
        //     mode:'no-cors',
        //     credentials: 'include',
        //     method:'get',
        //     headers: headers
        // })
        // .then((response)=>{
        //     console.log(response)
        //     this.setState({
        //       data: response,
        //     })
        //   })
        // .catch(console.log)

//         var data = getDataFromApiAsync();
        
// async function getDataFromApiAsync() {
//     const url = "http://master.qa.ononay:8033/arge-it-dashboard/qa";
//     try {
//       let response = await  fetch(url,{
//         mode:'no-cors'
//     })

//       let responseJson = await response.json();
//       return responseJson.movies;
//      } catch(error) {
//       console.error(error);
//     }
//   }
      }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
