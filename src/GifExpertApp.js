import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories=[]}) => {
	// const [categories, setCategories] = useState(["Dragon Ball"]);
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<>
			<h2 className="title animate__animated animate__fadeIn">GifExpertApp</h2>

			<AddCategory setCategories={setCategories} />

			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
			<footer>
				<p className="title">
					Alexis Castellanos
				</p>
			</footer>
		</>
	);
};

export default GifExpertApp;
