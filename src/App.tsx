import { memo, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/CharactersAPI";

import { CharacterList, SkeletonList } from "@components";
//
import { Button } from "@mui/material";
import { GetCharactersQuery, GetCharactersQueryVariables } from "./gql/graphql";

import styles from "./App.module.css";

function App() {
	const [page, setPage] = useState(1);
	const { loading, error, data } = useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GET_CHARACTERS, {
		variables: {
			page: page,
		},
	});

	if (error) return <p>Error : {error.message}</p>;

	const handlePrev = () => {
		// prevent negative page
		if (page > 1) setPage((page) => page - 1);
	};

	const handleNext = () => {
		// prevent page > 34
		if (page < (data?.characters?.info?.pages || 1)) setPage((page) => page + 1);
	};
	console.log("characters:", data?.characters);
	return (
		<>
			<header className={styles["App-header"]}>
				<Button onClick={handlePrev} disabled={!data || page === 1}>
					Prev
				</Button>
				<p className={styles["App-page"]}>{page}</p>
				<Button onClick={handleNext} disabled={!data || data?.characters?.info?.next === null}>
					Next
				</Button>
			</header>
			<main className={styles["App-main"]}>
				{!data || loading ? (
					<SkeletonList numberOfItems={20} />
				) : (
					<CharacterList characters={data.characters?.results} />
				)}
			</main>
			<footer></footer>
		</>
	);
}

export default memo(App);
