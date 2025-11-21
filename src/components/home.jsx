import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "cosa1",
		description: "Nose1",
	},
	{
		image: "https://picsum.photos/id/17/200/300",
		title: "cosa2",
		description: "Nose2",
	},
	{
		image: "https://picsum.photos/id/28/200/300",
		title: "cosa3",
		description: "Nose3",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "cosa4",
		description: "Nose4",
	}
];

const Home = () => {
	return (
		<div className="">
            <Navbar/>
			<div className="container mx-auto mt-3">
				<Jumbotron/>
				<div class="row mt-3">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-12 col-md-6 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;