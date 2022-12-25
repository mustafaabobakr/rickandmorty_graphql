import { memo, useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./graphql/CharactersAPI";

import { CharacterList, SkeletonList } from "@components";
//
import { Button, Pagination, Stack } from "@mui/material";
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

	if (!data?.characters?.results) {
		return (
			<>
				<header className={styles["App-header"]}>
					<Stack spacing={2}>
						<Pagination shape="rounded" variant="outlined" page={page} count={42} />
					</Stack>
				</header>
				<main className={styles["App-main"]}>
					<SkeletonList numberOfItems={20} />
				</main>
				<footer className={styles["App-footer"]}>
					<Stack spacing={2}>
						<Pagination shape="rounded" variant="outlined" page={page} count={42} />
					</Stack>
				</footer>
			</>
		);
	}

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	console.log("characters:", data?.characters);
	return (
		<>
			<header className={styles["App-header"]}>
				<Stack spacing={2}>
					<Pagination
						shape="rounded"
						variant="outlined"
						page={page}
						count={data?.characters?.info?.pages!}
						onChange={handlePaginationChange}
					/>
				</Stack>
			</header>
			<main className={styles["App-main"]}>
				{!data || loading ? (
					<SkeletonList numberOfItems={20} />
				) : (
					<CharacterList characters={data.characters?.results} />
				)}
			</main>
			<footer className={styles["App-footer"]}>
				<Stack spacing={2}>
					<Pagination
						shape="rounded"
						variant="outlined"
						page={page}
						count={data?.characters?.info?.pages!}
						onChange={handlePaginationChange}
					/>
				</Stack>
			</footer>
		</>
	);
}

export default memo(App);
