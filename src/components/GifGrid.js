import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);
	useEffect(() => {
		GetGifs();
	}, []);
	const GetGifs = async () => {
		const url =
			"http://api.giphy.com/v1/gifs/search?q=Naruto&limit=10&api_key=oBJaWvD8oC03bP7ULhrHGNOkar6Jns6Y";
		const resp = await fetch(url);
		const { data } = await resp.json();
		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			};
		});
		// console.log(data);
		setImages(gifs);
		console.log(gifs);
	};
	// GetGifs();
	return (
		<div>
			<h3>{category}</h3>

			{images.map((img) => (
				<GifGridItem key={img.key} {...img} />
			))}
		</div>
	);
};
