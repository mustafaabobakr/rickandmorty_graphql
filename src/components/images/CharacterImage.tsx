import React, { useState, useEffect, memo } from "react";
import { CardMedia, Chip } from "@mui/material";
import { RibbonContainer, RightCornerLargeRibbon } from "react-ribbons";

interface CharacterImageProps {
	alt: string;
	url: string;
	gender: string;
	species: string;
	status: string;
}
const CharacterImage: React.FC<CharacterImageProps> = ({ alt, url, status, gender, species }) => {
	return (
		<RibbonContainer className="ribbon">
			{status === "Dead" && (
				<RightCornerLargeRibbon backgroundColor="red" color="#f0f0f0">
					{status}
				</RightCornerLargeRibbon>
			)}
			<CardMedia
				alt={alt}
				image={url}
				width="300"
				height="300"
				loading="lazy"
				component="img"
				sx={{
					width: "300px",
					height: "300px",
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
		</RibbonContainer>
	);
};

CharacterImage.defaultProps = {};
export default CharacterImage;
