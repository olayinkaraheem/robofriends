import React from 'react';
import Card from './Card';

const CardsList = ({ robots }) => {
	console.log('CardList')

	return (
		<div>
		{
			robots.map((robot, index)=>{
				return <Card key={index} id={robot.id} name={robot.name} email={robot.email}/>;
			})
		} 
		</div>
	);

};

export default CardsList;