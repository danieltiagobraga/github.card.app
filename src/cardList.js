import Card from './card.js';

const CardList = (props) => (
	<div>
		{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

export default CardList;