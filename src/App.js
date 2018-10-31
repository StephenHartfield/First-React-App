import React, { Component } from 'react';
import './App.css';
import {convertToRoman} from './converter.js'
import {photos} from './photography.js'
import {getNum} from './photography.js'
import {statusUpdate} from './photography.js'
import Stories from './Stories.js'
import song from './Music/Song.mp3'
import image1 from './Photos/11.jpg'
import Gwriting from './gwriting.js'
import axios from 'axios'
import PaddleGame from './gamefun.js'

class ControlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      input2: '',
      display: true,
      display2: false,
      tagline: ''
    };
  }
  toggle = () => {
    this.setState({
      display: !this.state.display,
      display2: false
    })
  }
  toggle2 = () => {
    this.setState({
      display2: !this.state.display2,
      display: false
    });
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
      input2: convertToRoman(event.target.value)
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
      <button onClick={this.toggle} className="btn btn-info"> Roman Numeral Converter </button>
      <button onClick={this.toggle2} className="btn btn-warning"> Game </button>
       
       {this.state.display ? <div><div className='col-md-3'></div> <div className="App col-md-6" style={{backgroundColor: 'black'}}>
        <span style={{color: 'white'}}>Input a Number</span> <input type="number" min='0' max='3999' value={this.state.input} onChange={this.handleChange}/>
        <p className="App" style={{color: 'white'}}>Roman Numerals Conversion: <strong>{this.state.input2}</strong></p>
        </div></div> : this.state.display2 ? <div>
          <PaddleGame /> 
          </div> : null}
      </div>
    );
  }
}

class Photos extends Component {
  constructor(props) {
    super(props);
    this.audio = new Audio(song);
    this.state = {
      num: 0,
      status: ' PLAY ',
      timer: null,
      play: false,
      display: true
    }
  }
  toggle = () => {
    this.setState({
      display: !this.state.display
    })
  }
  playPhoto = () => {
    if(this.state.timer != null) {
    clearInterval(this.state.timer);
    this.setState({
      status: statusUpdate(this.state.status),
      timer: null,
      play: !this.state.play
    });
   }
    else {
    this.state.timer = setInterval(() => { 
    this.setState({
      num: getNum(this.state.num + 1)
    })
  }, 5000);
    this.setState({
      status: statusUpdate(this.state.status),
      play: !this.state.play
    })
   }
   this.state.play ? this.audio.pause() : this.audio.play();
 }
  incPhoto = () => {
    this.setState({
      num: getNum(this.state.num + 1)
    });
  }
  decPhoto = () => {
    this.setState({
      num: getNum(this.state.num - 1)
    });
  }
  componentWillUnmount() {
    this.audio.pause();
  }
  render() {
    return (
      <div className="App container">
        <button onClick={this.toggle} className="btn btn-warning">Wedding Photos</button>
        {this.state.display && <div className="col-md-12">
        <div className="col-md-1"></div>
        <div className="col-md-10" style={{backgroundImage: 'linear-gradient(180deg, black, gray)', borderRadius: '100px', paddingBottom: '50px'}}>
          <h1 style={{color:'white'}} >Wedding Photos</h1>
        <input type="button" onClick={this.decPhoto} value="< " className="btn btn-info" />
        <input type="button" onClick={this.playPhoto} value={this.state.status} className="Play btn btn-success" />
         <input type="button" onClick={this.incPhoto} value=" >" className="btn btn-info" /> {this.state.num + 1}
        <div className="container">
        <div className="col-md-12">
        <div height="600px" style={{backgroundImage: 'linear-gradient(-35deg, red, white)', width: '800px', marginLeft: '120px'}} className='col-md-8'>
          <img src={photos(this.state.num)} className="img-fluid images" height='500' style={{marginTop: '20px'}} />
          <br />
          <br />
        </div>
        </div>
        </div>
        </div>
        </div>}
      </div>
    );
  }
}

// class ServerTest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = ({
//       users: [],
//       store: []
//     })
//   }
//   componentDidMount() {
//     axios.get('http://localhost:3000/posts')
//     .then(json => console.log(json));
//   }
//   render() {
//     return (
//       <div>
//       </div>
//       )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      stories: false,
      photos: false,
      projects: false,
      hovers: false,
      hoverph: false,
      hoverpr: false,
      hoverh: false
    })
  }
  hoverToggleS = () => {
    this.setState({
      hovers: !this.state.hovers,
      hoverh: false,
      hoverph: false,
      hoverpr: false
    })
  }
  hoverTogglePh = () => {
    this.setState({
      hoverph: !this.state.hoverph,
      hovers: false,
      hoverh: false,
      hoverpr: false
    })
  }

  hoverToggleH = () => {
    this.setState({
      hoverh: !this.state.hoverh,
      hovers: false,
      hoverph: false,
      hoverpr: false
    })
  }

  hoverTogglePr = () => {
    this.setState({
      hoverpr: !this.state.hoverpr,
      hoverh: false,
      hovers: false,
      hoverph: false
    })
  }
  changeStories = () => {
    this.setState({
      stories: !this.state.stories,
      photos: false,
      projects: false
    })
  }
  changePhotos = () => {
    this.setState({
      photos: !this.state.photos,
      stories: false,
      projects: false
    })
  }
  changeProjects = () => {
    this.setState({
      projects: !this.state.projects,
      stories: false,
      photos: false
    })
  }
    changeHome = () => {
    this.setState({
      projects: false,
      stories: false,
      photos: false
    })
  }
  render() {
    let projectsStyle = {
        backgroundColor: 'rgb(204, 255, 255)',
        fontSize: '2em',
        marginLeft: '10px',
        borderRadius: '10px'
    }
    let storiesStyle = {
        backgroundColor: 'rgb(204, 255, 255)',
        fontSize: '2em',
        marginLeft: '10px',
        borderRadius: '10px'
    }
    let photosStyle = {
        backgroundColor: 'rgb(204, 255, 255)',
        fontSize: '2em',
        marginLeft: '10px',
        borderRadius: '10px'
    }
    let homeStyle = {
        backgroundColor: 'rgb(204, 255, 255)',
        fontSize: '2em',
        marginLeft: '10px',
        borderRadius: '10px'
    }
    let clickedStyle = {
      backgroundColor: 'rgb(102, 179, 255)',
      boxShadow: '5px 5px 5px #5a5b61',
      fontSize: '2em',
      marginLeft: '10px',
      color: 'black',
      borderRadius: '10px'
    }
    let hoverStyle = {
      backgroundColor: 'rgb(179, 230, 255)',
      fontSize: '2em',
      marginLeft: '10px',
      borderRadius: '10px',
    }
    this.state.hoverh ? homeStyle = hoverStyle : this.state.hovers ? storiesStyle = hoverStyle : this.state.hoverph ? photosStyle = hoverStyle : this.state.hoverpr ? projectsStyle = hoverStyle : projectsStyle;
    this.state.projects ? projectsStyle = clickedStyle : this.state.stories ? storiesStyle = clickedStyle : this.state.photos ? photosStyle = clickedStyle : photosStyle;
    !this.state.projects && !this.state.stories && !this.state.photos ? homeStyle = clickedStyle : homeStyle;  
    return (
      <div style={{height: '2000px', background: 'gray no-repeat fixed center top', backgroundImage: 'url('+image1+')', backgroundSize: '100%'}}>
        <h1 className="title" style={{margin: '0px', background: 'gray'}}> Welcome to <br /> <span style={{color: 'white', fontSize: '2em'}}> The Stir Stick </span></h1>
        <div>
          <ul className="list-unstyled nav nav-tabs">
          <li> <button style={homeStyle} onMouseEnter={this.hoverToggleH} onMouseLeave={this.hoverToggleH} onClick={this.changeHome}>Home</button>  </li>
          <li onMouseEnter={this.hoverTogglePh} onMouseLeave={this.hoverTogglePh}> <button style={photosStyle} onClick={this.changePhotos}>Photos</button>  </li>
          <li> <button style={projectsStyle} onMouseEnter={this.hoverTogglePr} onMouseLeave={this.hoverTogglePr} onClick={this.changeProjects}>Projects</button> </li>
          <li> <button style={storiesStyle} onMouseEnter={this.hoverToggleS} onMouseLeave={this.hoverToggleS} onClick={this.changeStories}>Stories</button> </li>
          </ul>
        {/*<div style={{position: 'absolute', zIndex: 2}}>
          {this.state.hoverph && <div onMouseLeave={this.hoverTogglePh} style={{backgroundColor: 'rgb(179, 230, 255)', height: '70px', fontSize: '18px', font: 'Arial black', width: '220px', marginLeft: '90px', borderRadius: '10px', padding: '20px'}}> Wedding Photos <br/> </div>}
          {this.state.hoverpr && <div onMouseLeave={this.hoverTogglePr} style={{backgroundColor: 'rgb(179, 230, 255)', height: '130px', fontSize: '18px', font: 'Arial black', width: '220px', marginLeft: '195px', borderRadius:'10px', padding: '20px'}}> <div> Converter </div><hr/><div> Game </div><br/> </div>}        
          {this.state.hovers && <div onMouseLeave={this.hoverToggleS} style={{backgroundColor: 'rgb(179, 230, 255)', height: '130px', fontSize: '18px', font: 'Arial black', width: '220px', marginLeft: '310px', borderRadius:'10px', padding: '20px'}}> Yarles & Yubeth <br/><hr/> Alfred <br/> </div>}        
        </div> */}
        </div>
        {this.state.photos ? <Photos /> :
        this.state.projects ? <ControlInput/> :
        this.state.stories ? <Stories /> :
        <Gwriting />}
        </div>
    );
  }
}

export default App;
