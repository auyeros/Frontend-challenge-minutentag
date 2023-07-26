/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
	text: "Item"
});

export function ListItemsForNavigation(props) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const activeItemRef = useRef();

	useEffect(() => {
		// Focus the item using this effect
		activeItemRef.current.focus();
	}, [selectedIndex]);

	function handleKeyDown(event) {
		// prevent scrolling when arrow keys are pressed
		if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
			event.preventDefault();
		}
		// Add the proper logic to calculate the index that correspond to the item that should be focused.
		if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
			setSelectedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
		} else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
			setSelectedIndex((prevIndex) =>
				Math.min(prevIndex + 1, itemsList.length - 1)
			);
		}
	}

	return (
		<ul onKeyDown={handleKeyDown} tabIndex={0}>
			{itemsList.map((item, index) => (
				<li
					key={index}
					ref={index === selectedIndex ? activeItemRef : null}
					tabIndex={0}
				>
					{item.text} {index === selectedIndex ? "(Selected)" : ""}
				</li>
			))}
		</ul>
	);
}
