import { Header, Footer, ListCard, ResCard, Card } from "../../components";
import data from "../../assets/data.json";

export const Home = () => {
	return (
		<div>
			<Header />
			<main>
				<div className="component-display-container home vertical-cards flex-items">
					{data.data.map((users) => (
						<ListCard title={users.author} />
					))}
				</div>
				<ResCard />
				<div class="component-display-container home vertical-cards flex-items">
					{data.data.map((users) => (
						<Card title={users.author} image={users.image} />
					))}
				</div>
				<Footer image={data.data.image} />
			</main>
		</div>
	);
};
