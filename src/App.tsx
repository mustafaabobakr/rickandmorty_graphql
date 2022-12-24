import { memo } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql";

import { CharacterList, SkeletonList } from "@components";
import { CharactersResponse } from "@types";
//
import "./App.css";

function App() {
	const { loading, error, data } = useQuery<CharactersResponse>(GET_CHARACTERS);

	if (loading) return <SkeletonList numberOfItems={20} />;
	if (error) return <p>Error : {error.message}</p>;
	if (!data) return <p>API is Empty</p>;

	const { characters } = data;
	console.log("data:", data);

	return (
		<>
			<header></header>
			<main>
				<CharacterList characters={characters.results} />
			</main>
			<footer></footer>
		</>
	);
}

export default memo(App);
