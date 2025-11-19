import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

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
			<div className="col-12 col-sm-6 col-md-8 col-lg-8 mt-4 mx-auto">
				<Jumbotron/>
				<div className="container mt-3 p-0">
					<div class="row">
						{cards.map((item, index) => (
							<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
								<Card cards={item} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;