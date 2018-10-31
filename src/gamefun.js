import React, {Component} from 'react';

class PaddleGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false,
			style: false
		}
	}

	toggle = () => {
		this.setState({
			show: !this.state.show
		})
		setTimeout(() => {
			createCanvas();
		}, 50);
	}

	sChange = () => {
		this.setState({
			style: !this.state.style
		})
	}

	render() {
		let hoverStyle = {
			textAlign: 'center', 
			height: '300px', 
			backgroundImage: 'linear-gradient(35deg, #CCFFFF, #FFCCCC)',
			borderRadius: '50px',
			border: 'solid black',
			fontSize: '2em'
		}
		let normalStyle = {
			backgroundColor: 'lightgray',
			height: '300px',
			borderRadius: '100px'
		}
		this.state.style ? normalStyle = hoverStyle : normalStyle;
		return (
			<div>
			{this.state.show ? <canvas id="canvasId" height='400px' width='1200px' style={{backgroundColor: 'white'}}></canvas>
			 : <div><div className='col-md-4'></div> <div className='col-md-4' onClick={this.toggle} onMouseEnter={this.sChange} onMouseLeave={this.sChange} style={normalStyle}> Start Game <hr/> Click Here <br/><br/><br/><br/> PONG: PINK BALL </div> <div className='col-md-4'></div> </div>}
			</div>
		)
	}
}

function createCanvas() {
	var canvas = document.getElementById('canvasId');
	var ctx = canvas.getContext('2d');
	
	var width = canvas.width;
	var height = canvas.height;
	var Xspeed = 3; 
	var Xspeed2 = -3; 
	var Yspeed = 3;

	function Character (x, y, xspeed, yspeed, size, color, exists, colNum) {
		this.x=x;
		this.y=y;
		this.xspeed=xspeed;
		this.yspeed=yspeed;
		this.size=size;
		this.color=color;
		this.exists=exists;
		this.colNum=colNum;
	}

	var main = new Character(250, 25, Xspeed, Yspeed, 10, 'gold', true, 0);
	var second = new Character(700, 300, Xspeed2, Yspeed, 10, 'silver', false, 0);
	var third = new Character(500, 250, Xspeed2, Yspeed+2, 10, 'pink', false, 0);

	Character.prototype.draw = function() {
		if(this.exists) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
			ctx.fillStyle = this.color;
			ctx.fill();
		}
	}

	Character.prototype.reset = function() { 
			this.colNum=0;
			setTimeout(() => {
			this.exists=true;	 
			this.y=height-this.size- 3;
			this.yspeed=Yspeed;  
			if(this.xspeed > 0) {
				this.x = width/3
				this.xspeed=Xspeed2;
			} else if(this.xspeed < 0) { this.xspeed=Xspeed;
			this.yspeed=Yspeed;
			this.x = width/1.5;
		}
		}, 2000);
	}

	Character.prototype.updated = function() {
		if(this.exists) {
			if((this.x + this.size) > width) {
				this.exists=false;
				if(this.colNum >= 5) {
					third.reset();
				}
				this.reset();
			}
			if(this.x - this.size < 0) {
				this.exists=false;
				if(this.colNum >= 5) {
					third.reset();
				}
				this.reset();
			}
			if((this.y + this.size) > height) {
				this.yspeed = -this.yspeed;
			}
			if(this.y - this.size < 0) {
				this.yspeed = -this.yspeed;
			}
			this.x += this.xspeed;
			this.y += this.yspeed;
			if(this.y-this.size > height) {
				this.reset();
			}
		}
	}

	function Paddle(x, y, sizeX, sizeY, color) {
		this.x=x;
		this.y=y;
		this.sizeX=sizeX;
		this.sizeY=sizeY;
		this.color=color;
	}

	var paddleL = new Paddle(40, width/2, 10, 90, 'blue');
	var paddleR = new Paddle(1140, width/2, 10, 90, 'blue');
	var paddleC = new Paddle(width/2, width/2, 10, 110, 'red');

  	canvas.addEventListener("mousemove", update);
	var mouseX = 100;
	var mouseY = 300;

	function update(evt) {
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;
		mouseX = evt.clientX - rect.left - root.scrollLeft;
		mouseY = evt.clientY - rect.top - root.scrollTop;
	
		// cheat
		// main.x = mouseX;
		// main.y = mouseY;
		// third.x = mouseX;
		// third.y = mouseY;

	paddleR.y=mouseY-(paddleR.sizeY/2);
	paddleL.y=mouseY-(paddleL.sizeY/2);
	paddleC.y=-mouseY+height-(paddleC.sizeY/2);
	if (paddleL.y+paddleL.sizeY > height) {
		paddleL.y = height-paddleL.sizeY;
		paddleR.y = height-paddleL.sizeY;
	}
	if (paddleL.y < 0) {
		paddleL.y = 0;
		paddleR.y = 0;
	}
	if(paddleC.y < 0) {
		paddleC.y = 0;
	}
	if(paddleC.y + paddleC.sizeY > height) {
		paddleC.y = height - paddleC.sizeY;
	}
	}

	Paddle.prototype.colorChange = function() {
		if(this.color == 'blue') {
			return this.color = 'red';
		}
		if(this.color == 'red') {
			return this.color = 'green';
		}
		if(this.color == 'green') {
			return this.color = 'purple';
		}
		if(this.color == 'purple') {
			return this.color = 'orange';
		}
		if(this.color == 'orange') {
			return this.color = 'blue';
		}	
	}

	Paddle.prototype.draw = function() {
	ctx.fillStyle = this.color;
  	ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  	}	

	Character.prototype.collisionDetect = function() {
		if(this.exists){
		var center = paddleL.y + paddleL.sizeY/2;
		var dist = this.y - center;
		var ccenter = paddleC.y + paddleC.sizeY/2;
		var distC = this.y - ccenter;

		if(this.x+this.size >= paddleR.x 
			&& this.x-this.size <= paddleR.x+paddleR.sizeX 
			&& (this.y+this.size) >= paddleR.y 
			&& (this.y-this.size) <= (paddleR.y+paddleR.sizeY)) {
			this.xspeed *= -1;
			this.yspeed = dist/5;
			paddleR.colorChange();
			this.colNum++;
		}
		if(this.x-this.size <= paddleL.x+paddleL.sizeX 
			&& this.x+this.size >= paddleL.x
			&& (this.y+this.size) >= paddleL.y 
			&& (this.y-this.size) <= (paddleL.y+paddleL.sizeY)) {
			this.xspeed *= -1;
			this.yspeed = dist/5;
			paddleL.colorChange();
			this.colNum++;
		}
		if(this.x-this.size <= paddleC.x+paddleC.sizeX 
			&& this.x+this.size >= paddleC.x
			&& (this.y+this.size) >= paddleC.y 
			&& (this.y-this.size) <= (paddleC.y+paddleC.sizeY)) {
			this.xspeed *= -2;
			this.yspeed = distC/5;
		}
	}
	}

	main.ballbounce = function() {
		if(this.exists && second.exists) {
			if(this.x+this.size > second.x-second.size && this.x-this.size < second.x+second.size
				&& this.y+this.size > second.y-second.size && this.y-this.size < second.y+second.size) {
				this.xspeed *= -1; this.yspeed *= -1;
				second.xspeed *= -1; second.yspeed *= -1;
			}
		}	
	}

	third.ballbounce = function() {
		if(this.exists && main.exists){
			if(this.x+this.size > main.x-main.size && this.x-this.size < main.x+main.size
				&& this.y+this.size > main.y-main.size && this.y-this.size < main.y+main.size) {
				this.xspeed *= -1; this.yspeed *= -1;
				main.xspeed *= -1; main.yspeed *= -1;
			}
		}	
	}
	
	var wins = 0;
	Character.prototype.check = function() {
		main.colNum >= 5 || second.colNum >= 5 ? third.exists = true : third.exists = false;
		if(third.colNum == 5) {
		 alert("5 saves - you win! Press Ok to restart.");
		 wins++;
		 localStorage.setItem('wins', wins);
		 second.reset(); third.reset();
	}
}

	
	function loop() {
	
		ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  		ctx.fillRect(0, 0, width, height);
  		ctx.fillStyle = 'gold';
  		ctx.font = '20px Arial'
  		ctx.fillText("Saves: " + main.colNum, width/2-45, 45);

  		// ctx.strokeStyle = 'silver';
  		// ctx.strokeText("Saves: " + second.colNum, width/2-45, 30);

  		if(third.exists) {
  			ctx.fillStyle = 'pink';
  			ctx.fillText("Saves: " + third.colNum, width/2-45, 15);
  		}
  		ctx.strokeStyle = 'white';
  		ctx.strokeText("Victories " + localStorage.getItem('wins'), 0, 30);  		

		main.draw();
		main.updated();
		main.collisionDetect();
		main.check();
		main.ballbounce();

		// second.draw();
		// second.updated();
		// second.collisionDetect();
		// second.check();

		third.draw();
		third.updated();
		third.collisionDetect();
		third.ballbounce();

		paddleL.draw();
		paddleR.draw();
		paddleC.draw();

		requestAnimationFrame(loop);
	}

	function instructions() {
		ctx.fillStyle = 'black';
		ctx.font = '30px Arial';
		ctx.fillText("Save yellow ball 5 times to activate pink ball. 5 saves on pink ball wins ", width/2-470, 200);
		setTimeout(() => {
		ctx.clearRect(0, 0, width, height);	
			warning();
		}, 5000);
	function warning() {
		ctx.fillStyle = 'red';
		ctx.font = '30px Arial';
		ctx.fillText('And watch out for the middle paddle!', width/2-200, 250);
		setTimeout(() => {
			loop();
		}, 2500);
	}
	}
	instructions();
}

export default PaddleGame;