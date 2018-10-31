import React, { Component } from 'react';
import image1 from './Photos/Y&Y2.jpg'
import introsong from './Music/Mole.mp3'
import { intro } from './YY1.json'
import { C1 } from './YY1.json'

const mainStyle = {
	textAlign: 'center',
	fontFamily: 'arial',
	paddingLeft: '20px',
	color: 'white'
}
const titleStyle = {
	textAlign: 'center',
	fontFamily: 'times new roman black sans-serif',
	fontSize: '3em'
}
let imageStyle = {
	border: 'dotted black 3px',
	height: '300px',
	padding: 0,
	borderRadius: '20px'
}
let zoomedStyle = {
	transition: 'transform ease-out 3s',
	transform: 'scale(2) translateX(133px) translateY(85px)',
	zIndex: 2,
	border: 'dotted black 3px',
	borderRadius: '20px',
	padding: 0
}
let unzoomed = {
	transition: 'transform ease-in 1s',
	transform: 'scale(1)',
	border: 'dotted black 3px',
	height: '300px',
	padding: 0,
	borderRadius: '20px',
	zIndex: 2
} 
let pages = ['INTRODUCTION', 'CHAPTER 1', 'CHAPTER 2', 'CHAPTER 3'];
let tabPages = ['Intro', 'Ch. 1', 'Ch. 2', 'Ch. 3'];

function getpages(num) {
	return pages[num];
}
function getTab(num) {
	return tabPages[num];
}

class YandY extends Component {
	constructor(props) {
		super(props);
	this.audio1 = new Audio(introsong);
		this.state = {
			play: false,
			zoomin: false,
			page: 0,
			lastpage: -1,
			nextpage: 1
		}
	}
	handleLastPage = () => {
		this.setState({
			page: this.state.page - 1,
			lastpage: this.state.lastpage - 1,
			nextpage: this.state.nextpage - 1
		})
	}
	handleNextPage = () => {
		this.setState({
			page: this.state.page + 1,
			lastpage: this.state.lastpage + 1,
			nextpage: this.state.nextpage + 1
		})
	}
	zoom = () => {
		this.setState({
			zoomin: !this.state.zoomin
		})
	}
	musicPlay = () => {
		this.setState({
			play: !this.state.play
		})
	}

	componentWillUnmount() {
		this.audio1.pause();
	}

	render() {
		this.state.play ? this.audio1.play() : this.audio1.pause();
		this.state.zoomin ? imageStyle = zoomedStyle : imageStyle = unzoomed;
		return (
			<div className="col-md-12">
				<div className="col-md-1"></div>
				<div className="col-md-10" style={{backgroundColor: 'gray'}}>
					<p style={titleStyle}> Yarles &amp; Yubeth </p>
					<hr />
					<div style={mainStyle}>{getpages(this.state.page)} <br/>
					{this.state.page > 0 && <button style={{backgroundColor: 'gray'}} onClick={this.handleLastPage}>{getTab(this.state.lastpage)}</button>}	
						{!this.state.play ? <button style={{backgroundColor: 'gray'}} onClick={this.musicPlay}> Play Music </button> : 
							<button onClick={this.musicPlay} style={{backgroundColor: 'gray'}}> Pause Music </button>}
					<button style={{backgroundColor: 'gray'}} onClick={this.handleNextPage}>{getTab(this.state.nextpage)}</button>
					</div>
					<br/> 
					{this.state.page == 0 ? 
						<div>
							<figure className='col-md-6' style={imageStyle}>
								<img src={image1} style={{width: '100%', height: '100%', borderRadius: '20px'}} onClick={this.zoom}/>
								{!this.state.zoomin && <figcaption> Click To Enlarge! </figcaption> }
							</figure>
							<div className="col-md-6">
						 		<div style={mainStyle}>{intro[0]}<br/>{intro[1]}<br/><br/>{intro[2]}<br/><br/>{intro[3]}<br/><br/>{intro[4]}</div>  
							</div> 
						</div>
					:	this.state.page == 1 ? 
					<div style={mainStyle}>{C1[0]}<br/>{C1[1]}<br/><br/>{C1[2]}<br/><br/>{C1[3]}<br/><br/>{C1[4]}<br/><br/>{C1[5]}<br/><br/>{C1[6]}<br/><br/>{C1[7]}<br/><br/>{C1[8]}<br/><br/>{C1[9]}<br/><br/>{C1[10]}<br/><br/>{C1[11]}<br/><br/>{C1[12]}<br/><br/>{C1[13]}<br/><br/>{C1[14]}<br/><br/>{C1[15]}<br/><br/>{C1[16]}</div> 
					:   this.state.page == 2 ? 
					<div style={mainStyle}>This was the next thing to happen<br/> And then this <br/> And that <br/> and the other thing</div> : null}	
				</div>
			</div>
		)
	}
}

export default YandY;