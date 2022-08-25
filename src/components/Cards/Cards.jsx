import React from "react";
import "./Cards.css";
import Card from "../Card/Card.jsx";

export default function Cards({ cities, onClose }) {
	return (
		<div className='cards'>
			{cities && cities.length > 0 ? (
				cities.map((c) => (
					<Card
						key={c.id}
						max={c.max}
						min={c.min}
						name={c.name}
						img={c.img}
						onClose={() => onClose(c.id)}
						id={c.id}
					/>
				))
			) : (
				<div className='emptyCards'>
					<h2 className='title'>there are not cities </h2>
					<div className='cloud'>
						<img src='../../../img/cloud.jpg' alt='' />
					</div>
				</div>
			)}
		</div>
	);
}
