import { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";
import { ArrowBack } from "@mui/icons-material";
import { CardMedia, Chip, IconButton, Skeleton, Typography } from "@mui/material";
import { getCharacterObject } from "@utils";
import { GET_SINGLE_CHARACTER } from "@graphql/CharactersAPI";
import { GetSingleCharacterQuery, GetSingleCharacterQueryVariables } from "src/gql/graphql";
import { SingleCharObj } from "@components/list/CharacterList/CharacterList";
import styles from "./CharacterPage.module.css";
import { CharacterImage } from "@components/images";

interface CharacterPageProps {}
const CharacterPage: React.FC<CharacterPageProps> = () => {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	if (!id) {
		navigate(-1);
	}
	// handle going back
	const handleBack = () => {
		navigate(-1);
	};

	const { loading, error, data } = useQuery<GetSingleCharacterQuery, GetSingleCharacterQueryVariables>(
		GET_SINGLE_CHARACTER,
		{
			variables: {
				id: id!,
			},
		}
	);

	if (loading) {
		return (
			<main className={styles["container"]}>
				<IconButton aria-label="back" size="large" onClick={handleBack}>
					<ArrowBack fontSize="inherit" />
				</IconButton>
				<article className={styles["card"]}>
					<div className={styles["card-image"]}>
						<Skeleton height={300} width={300} />
					</div>
					<div className={styles["card-content"]}>
						<Skeleton height={50} />
						<Skeleton height={20} />
						<Skeleton height={20} width={200} />
						<Skeleton height={20} width={200} />
						<Skeleton height={100} />
						<Skeleton height={100} />
					</div>
				</article>
			</main>
		);
	}
	if (!data?.character) return <p>Character not found</p>;
	if (error) return <p>Error : {error.message}</p>;

	const character = data.character;
	const { name, episode, gender, image, location, origin, species, status } = getCharacterObject(
		character as SingleCharObj
	);

	return (
		<main className={styles["container"]}>
			<IconButton aria-label="back" size="large" onClick={handleBack}>
				<ArrowBack fontSize="inherit" />
			</IconButton>
			<article className={styles["card"]}>
				<div className={styles["card-image"]}>
					<CharacterImage alt={name} gender={gender} species={species} status={status} url={image} />
				</div>
				<div className={styles["card-content"]}>
					<Typography variant="h1" component="h1">
						{name}
					</Typography>
					<Typography variant="body1" component="p">
						<strong>origin</strong> - {origin?.name}
						<br />
						<strong>location</strong> - {location?.name}
					</Typography>

					{episode && (
						<section className={styles["episodes-section"]}>
							<Typography variant="body1" component="p">
								<strong>Episodes</strong>{" "}
								<sup>
									<Chip label={episode.length} size="small" variant={"outlined"} />
								</sup>
							</Typography>
							<div className={styles["episodes"]}>
								{episode.map((ep) => (
									<div key={ep?.id} className={styles["episode-card"]}>
										<span className={styles["episode-card__title"]}>
											<small>{ep?.episode}</small>
											<strong>{ep?.name}</strong>
										</span>
										<small>{ep?.air_date}</small>
									</div>
								))}
							</div>
						</section>
					)}
				</div>
			</article>
		</main>
	);
};

CharacterPage.defaultProps = {};
export default memo(CharacterPage);
