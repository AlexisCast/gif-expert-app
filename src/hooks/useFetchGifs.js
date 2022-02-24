import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs";

export const useFetchGifs = (category ) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});
	useEffect(() => {
		GetGifs(category).then((imgs) => {
         console.log('test',imgs)
			// setTimeout(() => {
				setState({
					data: imgs,
					loading: false,
				});
			// }, 3000);
		});
	}, [category]);
	return state; //{data:[],loading:true}
};
