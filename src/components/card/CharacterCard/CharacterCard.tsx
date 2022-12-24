import { useState, useEffect, memo } from "react";
import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button } from "@mui/material";
import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";
import { Character } from "@types";

import styles from "./CharacterCard.module.css";

interface CharacterCardProps {
	character: Character;
}
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	const { id, name, created, episode, gender, image, location, origin, species, status, type, url } = character;

	return (
		<Card key={id} className={styles["card"]}>
			<RibbonContainer className="ribbon">
				{status === "Dead" && (
					<RightCornerLargeRibbon backgroundColor="red" color="#f0f0f0">
						{status}
					</RightCornerLargeRibbon>
				)}
				<div className={styles["card-media"]}>
					<CardMedia
						component="img"
						alt={name}
						height="300"
						image={image}
						loading="lazy"
						sx={{
							filter: status === "Dead" ? "grayscale(100%)" : "none",
						}}
					/>
					<Chip
						label={gender}
						color="default"
						size="small"
						sx={{
							zIndex: 1,
							position: "absolute",
							bottom: "1rem",
							left: "1rem",
						}}
					/>
					<Chip
						label={species}
						color="info"
						size="small"
						variant="filled"
						sx={{
							zIndex: 1,
							position: "absolute",
							bottom: "1rem",
							right: "1rem",
						}}
					/>
				</div>
			</RibbonContainer>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{name}
				</Typography>

				<section>
					<Typography variant="body2" color="text.secondary">
						Appearance {episode.length}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Origin: {origin.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Location: {location.dimension}
					</Typography>
				</section>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default memo(CharacterCard);
