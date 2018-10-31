import React, { Component } from 'react';

let titleStyle = {
	fontSize: '2em',
	color: 'brown',
	textAlign: 'center'
}

class Gwriting extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			<div className="container col-md-12">
				<br/><br/><br/><br/>
				<div className="col-md-2">
				</div>
				<div className='col-md-8' style={{height: '800px', backgroundImage: 'linear-gradient(35deg, #CCFFFF, #FFCCCC)', borderRadius:'20px'}}>
					<h1 style={{textAlign: 'center'}}>Ghostwriting</h1>
					<h2 style={titleStyle}> Books | Articles | Inspiring Ideas </h2>
					<hr />
					<div className="col=md-3"></div>
					<div className='col-md-11'>
					<p> <strong>Why choose ghostwriting?</strong> </p>
					<p> &nbsp;&nbsp;&nbsp;&nbsp; Ghostwriting is first and foremost a collaboration between an author and a writer.
					The author has the ideas while the writer has the talent. Just as you would hire a large
					team to put together a movie, writing a professional book might require the expertise of 
					editors, publishers, and writers. Ghostwriting is the first, pivotal step to launch your
					book.
					</p>
					</div>
				</div>
			</div>
			</div>
		)
	}
}

export default Gwriting;