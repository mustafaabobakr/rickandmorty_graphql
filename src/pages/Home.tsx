import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/CharactersAPI";

import { CharacterList, SkeletonList } from "@components";
//
import { Pagination, Stack } from "@mui/material";
import { GetCharactersQuery, GetCharactersQueryVariables } from "../gql/graphql";

import styles from "./Home.module.css";

function Home() {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [page, setPage] = useState(id ? parseInt(id) : 1);
	const { loading, error, data } = useQuery<GetCharactersQuery, GetCharactersQueryVariables>(GET_CHARACTERS, {
		variables: {
			page: page,
		},
	});

	if (error) return <p>Error : {error.message}</p>;

	if (!data?.characters?.results) {
		return (
			<>
				<header className={styles["Home-header"]}>
					<Stack spacing={2}>
						<Pagination shape="rounded" variant="outlined" page={page} count={42} />
					</Stack>
				</header>
				<main className={styles["Home-main"]}>
					<SkeletonList numberOfItems={20} />
				</main>
				<footer className={styles["Home-footer"]}>
					<Stack spacing={2}>
						<Pagination shape="rounded" variant="outlined" page={page} count={42} />
					</Stack>
				</footer>
			</>
		);
	}

	const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		// set route params
		navigate(`/${value}`);
	};

	console.log("characters:", data?.characters);
	return (
		<>
			<header className={styles["Home-header"]}>
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
			<main className={styles["Home-main"]}>
				{loading ? <SkeletonList numberOfItems={20} /> : <CharacterList characters={data.characters?.results} />}
			</main>
			<footer className={styles["Home-footer"]}>
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

export default memo(Home);
