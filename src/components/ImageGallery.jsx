/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from "react";

function Image({ src, onRemove }) {
	return (
		<div class="image">
			<img src={src} alt="Gallery" />
			<button class="remove" onClick={onRemove}>X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	//preventing error if prop "links" is not defined
	const [galleryLinks, setGalleryLinks] = useState(links || []);

	const handleRemoveImage = (index) => {
		const updatedLinks = galleryLinks.filter((link, i) => i !== index);
		setGalleryLinks(updatedLinks);
	};

	return (
		<div>
			{galleryLinks.map((link, index) => (
				<Image key={index} src={link} onRemove={() => handleRemoveImage(index)} />
			))}
		</div>
	);
}
