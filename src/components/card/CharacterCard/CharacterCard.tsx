import { memo } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button } from "@mui/material";
import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";
import { getCharacterObject } from "@utils";
import { SingleCharObj } from "@components/list/CharacterList/CharacterList";
import styles from "./CharacterCard.module.css";
import { CharacterImage } from "@components/images";

interface CharacterCardProps {
	character: SingleCharObj;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, created, episode, gender, image, location, origin, species, status } =
		getCharacterObject(character);

	return (
		<Card key={id} className={styles["card"]}>
			<CharacterImage alt={name} gender={gender} species={species} status={status} url={image} />
			<CardContent>
				<Typography gutterBottom variant="h6" component="h6">
					{name}
				</Typography>

				<section>
					<Typography variant="body1" color="text.secondary">
						Appearance {episode.length}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						Origin: {origin?.name}
					</Typography>
				</section>
			</CardContent>
			<CardActions sx={{ marginTop: "auto" }}>
				<Link to={`character/${id}`}>
					<Button size="small">Learn More</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default memo(CharacterCard);
