/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
	return <input ref={ref} {...props} />;
});

export const TextInput = React.forwardRef((props, ref) => {
	return <Input ref={ref} {...props} />;
});

// Custom hook to handle ref forwarding
const useForwardedRef = (ref) => {
	const innerRef = useRef(null);

	useEffect(() => {
		if (ref) {
			if (typeof ref === "function") {
				ref(innerRef.current);
			} else {
				ref.current = innerRef.current;
			}
		}
	}, [ref]);

	return innerRef;
};

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export const FocusableInput = React.forwardRef(({ focused }, ref) => {
	const inputRef = useForwardedRef(ref);
	// Use useEffect to handle focus on mounting and when focused prop changes
	useEffect(() => {
		// Function to handle focus logic
		const handleFocus = () => {
			if (focused && inputRef.current) {
				inputRef.current.focus();
			}
		};

		handleFocus();
	}, [focused, inputRef]);
	return <TextInput ref={inputRef} />;
});
