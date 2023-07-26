/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggled by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */

import React, { useState } from "react";

export function Message() {
	const [isParagraphVisible, setIsParagraphVisible] = useState(false);

	const handleClick = () => {
		setIsParagraphVisible((prevIsParagraphVisible) => !prevIsParagraphVisible);
	};

	return (
		// anchor error can be fixed using a button and if needed can be styled to look like a anchor element using:
		// .link-button {
		// 	background-color: transparent;
		// 	border: none;
		// 	cursor: pointer;
		// 	text-decoration: underline;
		// 	display: inline;
		// 	margin: 0;
		// 	padding: 0;
		// }
		<>
			<a href="#" onClick={handleClick} role="button" tabIndex={0}>
				Want to buy a new car?
			</a>
			{isParagraphVisible && <p>Call +11 22 33 44 now!</p>}
		</>
	);
}
