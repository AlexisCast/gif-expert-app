import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
	const [categories, setCategories] = useState([
		"One Punch",
		"Samurai X",
		"Dragon Ball Z",
	]);
	/* 
  const handleAdd = () => {
    setCategories([...categories, "HunterXHunter"]);
  };
   */
	return (
		<>
			<h2>GifExpertApp</h2>

			<AddCategory setCategories={setCategories}/>

			<hr />
			{/* <button onClick={handleAdd}>Agregar</button> */}
			<ol>
				{categories.map((category) => {
					return <li key={category}>{category}</li>;
				})}
			</ol>
		</>
	);
};

export default GifExpertApp;
