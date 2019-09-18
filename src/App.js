import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component{
state = {displayBio : false};

    toggleBio = () => {
        this.setState({displayBio : !this.state.displayBio});
    }
    render(){
        return(
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hey I'm Ulaş.</h1>
                <p>I'm the Junior Software Engineer.</p>
                <p>And the Senior Learner :)</p>
            
            { this.state.displayBio ?  
                (
                    <div>
                        <p>This is my bio.</p>
                        <button onClick={this.toggleBio}>Show Less...</button>
                    </div>
                ) : 
                (
                    <div>
                        <button onClick={this.toggleBio}>Read More...</button>
                    </div>
                )
            }
            <hr /> 
            <Projects />
            <hr />
            <SocialProfiles />
            </div>
            

        )
    }
}

export default App;