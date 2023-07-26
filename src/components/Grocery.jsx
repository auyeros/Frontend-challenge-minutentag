/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */
import React, { useState } from "react";


function Product(props) {
	const { name, votes, onVote } = props;
	function handlePlus() {
		// logic to vote a product
		// calls the onVote function with the votes
		onVote(name, votes + 1);
	}

	function handleMinus() {
		// logic to unvote a product
		// calls the onVote function with the votes
		// prevent negative votes once votes reach 0
		if (votes > 0) {
			onVote(name, votes - 1);
		}
	}

	return (
		<li>
			<span>
				{name} - votes: {votes}
			</span>
			<button onClick={handlePlus}>+</button>
			<button onClick={handleMinus}>-</button>
		</li>
	);
}


export function Grocery({ products }) {
	const [productList, setProductList] = useState(products)

	function handleVote(name, newVotes) {
		// finds the product by name and updates its votes
		const updatedProducts = productList.map((product) =>
			product.name === name ? { ...product, votes: newVotes } : product
		);
		setProductList(updatedProducts);
	}
	return (
		<ul>
			{productList.map((product) => (
				<Product key={product.name} {...product} onVote={handleVote} />
			))}
		</ul>
	);
}
