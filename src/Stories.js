import React, { Component } from 'react';
import YandY from './YY'

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
	transition: 'transform 2s',
	transform: 'scale(2) translateX(135px) translateY(85px)',
	zIndex: 2,
	border: 'dotted black 3px',
	borderRadius: '20px',
	padding: 0
}
let unzoomed = {
	transition: 'transform 2s',
	transform: 'scale(1)',
	border: 'dotted black 3px',
	height: '300px',
	padding: 0,
	borderRadius: '20px',
	zIndex: 2
} 
class Stories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true,
			display2: false,
			play: false,
			zoomin: false
		}
	}
	zoom = () => {
		this.setState({
			zoomin: !this.state.zoomin
		})
	}
	toggle = () => {
		this.setState({
			display: !this.state.display,
			display2: false,
			play: !this.state.play
		})
	}
	toggle2 = () => {
	this.setState({
		display2: !this.state.display2,
		display: false,
		play: !this.state.play
	})
	}
	render() {
		return (
			<div style={{textAlign: 'center'}} >
			<input type="button" onClick={this.toggle} value="Yarles &amp; Yubeth" className="btn btn-info" style={{textAlign: 'center'}} /> 
			<button className="btn btn-info" onClick={this.toggle2}> Alfred and His People </button>
	
	{this.state.display && <YandY />}
	{this.state.display2 && <div className="col-md-12">
	<div className="col-md-1">
	</div>
	<div className="col-md-1">
	</div>
	<div className="col-md-8" style={{background: 'white'}}>
	<p style={titleStyle}> Alfred and His People </p>
	<hr/>
	<h1> Old History for a New Generation </h1>
	<p><strong> PREFACE </strong><br/>Deuteronomy 4:9<br/>
	“Only take heed to yourself, and diligently keep yourself, lest you forget the things your eyes have seen, and lest they depart from your heart all the days of your life. And teach them to your children and your grandchildren.”
	</p>
	<p style={{textAlign: 'left'}}> There has always been, since the days of old, since the first forms of cuneiform writing, a sense of duty, whether implied or specific, placed upon the older, dying generation, to pass along their experience, their accumulated knowledge, and their understanding of life and philosophy, to the next, sprouting generation proceeding them. Writing has always been the essential mechanism to pass on immortal information from one mortal generation to the next. The great kings and queens, priests and monks, and all those who are worth hearing from, understood this concept – namely, that their days were limited and their vision was far too expansive for their lives to carry out. Thus, the need for scribes.
	<br/><br/>	
	The truth, written on pages, read by generation after generation, may be boring, may be antiquated, but is a solid pillar on which all aspiring futures must be built upon. The greatest empires of man fall because they are lulled into ignorance. Insensibly, they forget what caused them to be extraordinary, what separated them from the pack, and they ultimately discard what past generations gave their lives for. The truth must be watched over vigilantly, passed along intentionally, and understood properly. 
	<br /><br/>
	When it is accepted, it keeps one from wrong thinking. Simply put, if you hear the truth is that you will die if you walk off a twenty-story building without anything to save you, then that truth can save you if you accept it. If you follow the truth, you won’t walk off the building and will have the freedom to live and grow.
	<br/><br/>	
	Knowledge will keep you from experimenting with the wrong thing. Experimenting, in itself, is good; it is the way we discover new truths to add to the old ones. However, experimenting in what is contrary to truth, will end in failure, the same failure that everyone else found when experimenting against the age-old truths. In our example of walking off the building, we will find that experimenting with wings like birds has created new inventions to defy gravity. But, many ignore the simple truth, when they experiment, getting too close to an edge, usually without considering the risk involved, and eventually fall to their doom. 
	<br/><br/>	
	America began as an experiment, formed in the minds of those impatient colonists, who felt their freedoms sucked from their daily lives, day after long day. It required oneness of mind among a host of sundry people with differing ideologies, backgrounds, and visions for the ideal nation. Even the best of the founding fathers could only contribute their own context: what they read to be true, what they believed to be true, and what they wanted to be true. Collectively, they had to decide together, and compromise together, to say yes to one form of government and law, while discarding many other opinions, ideas, and suggestions. In the end, there were compromises, some middle ground was reached, and there were provisions in place for fixes and changes to be made. The point is, from the annals of history, including everything they knew and believed, the founders had to choose what was true, in their experiment for a viable government. They had to find the principles, the maxims, and truths that worked and they didn’t want to experiment with what didn’t work. 
	<br/><br/>	
	Though imperfect, the system they set in place has been proven to work. The institution of government has remained the longest standing to date, without revolution upending its established principles and structure. It should be recognized as the singular piece that raised fledgling colonists to eventually be a world power and it is the lone difference that has separated us from all the other countries in our hemisphere. There is much to say about America and its rise to power, but what’s very interesting is the precepts behind its rise. And, what does that have to do with Alfred the Great, who died almost nine hundred years before America became a nation? 
	I first became aware of the Anglo-Saxon people, when I read of Thomas Jefferson’s praise and affinity for them. I had heard the Anglo-Saxon title: it was the name of a certain homeschool company, which made the books I read and studied through in my adolescence. But, never did I grasp who the peoples were, much less that they were praise-worthy and were in effect where the “English” came from. With great respect for Thomas Jefferson, his impact on America, the Constitution, and the crafting of the Declaration of Independence, I considered the Anglo-Saxons worth my time.
	<br/><br/>	
	To my disappointment, there was nothing naturally distinguishing the Anglo-Saxons from anyone else; they had their vices, their faults, and their social problems in their time of power from the end of the fifth century to the tenth. Indeed, if we are to seek out perfection among the heroes of history, we would only find that every man’s shortcomings were easily apparent and, in many ways, the enemies of good. Even after they were converted to Christianity, there remained wars among them and they kept their intrinsic, savage ways along with their worship of pagan gods, such as Woden and Thor. Even their institutions proved not to be, as Jefferson thought they were, democratic, though there were hints of it. Nevertheless, what may be gleaned from these men and women, is worth the record, worth our contemplation, and worth our admiration.  
	Out of all the history Jefferson studied, of all the forms of government, dreamt of or practiced, it was that of the Anglo-Saxons, which Jefferson chose to magnify. Jefferson was so enamored by the institution of laws held by the Anglo-Saxons, that he wrote: “Is it not better now that we return at once into that happy system of our ancestors (the Anglo-Saxons), the wisest and most perfect ever yet devised by the wit of man, as it stood before the eighth century?”1 This was written in a letter, dated in August 1776, as we know the American government was a blueprint, coming to shape – and is quite a statement at that. In sum, the Anglo-Saxons had People’s Law, which was largely adopted in the American Constitution; it was a system starting with the family and consisted of freemen who willingly submitted to an elected, limited king. There was representation of those who lived far from the king, a separation of districts for equality, and the land belonged to those who lived on it. 
	<br/><br/>	
	This structure was based largely on the Israeli system in the time of Moses. It is a simple system, but one which gives the most power to the little guys, taking away power from the top. The ruler over tens was first to address problems in his family, then the ruler of hundreds, who oversaw the ten rulers under him. The local rulers had most control. 
	<br/><br/>	
	It is true, the Anglo-Saxons were the freest people of their time – even seeing women raised to the highest office of queen. However, they were doubtlessly monarchies and they were many wars among themselves. They were as corrupt as any humans were in any age. But, we also find a good picture of their culture, when we look at hobbits portrayed in the Lord of the Rings, based largely on the Anglo-Saxons (not that there was any size comparison, for the Anglo-Saxons were a tall people). 
	<br/><br/>	
	They were similar in that both were simple, living in primitive wood houses. They wore similar clothes: bright colored and linen. They had their share of power-hungry kings, but they were for the most part humble, life-loving people. They liberally drunk themselves silly, and had comparable mannerisms. However, the biggest similarity is their love for song and poetry. This is evident in their writings and one of their most famous poets started out too ashamed to perform his turn when handed a small instrument to sing with.
	<br/><br/>
	Caedman’s story Here
	</p>
	</div>
	</div>}
	</div>
	)
	}
}

export default Stories;