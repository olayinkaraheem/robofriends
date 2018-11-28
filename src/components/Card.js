import React from 'react';
import { Component } from 'react';
// import robots from 'robots';

class Card extends Component {
	
	render(){

		return (
			// robots.forEach( ( item, index ) => {
				<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
					<img alt="robot_img" src={`https://robohash.org/${this.props.id}?size=200x200`} />
					<div>
						<h2>{this.props.name}</h2>
						<p>{this.props.email}</p>
					</div>
				</div>
			// })
		);
	}
}
	
// OR

// const Card = (props) => {
// 		return (
// 			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
// 				<img alt="robot_img" src={`https://robohash.org/${props.id}?200x200`} />
// 				<div>
// 					<h2>{props.name}</h2>
// 					<p>{props.email}</p>
// 				</div>
// 			</div>
// 		);
	
// }	
// OR

// const Card = (props) => {
//		const { name, email, id } = props;
// 		return (
// 			<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
// 				<img alt="robot_img" src={`https://robohash.org/${id}?200x200`} />
// 				<div>
// 					<h2>{name}</h2>
// 					<p>{email}</p>
// 				</div>
// 			</div>
// 		);
	
// }

export default Card;