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
