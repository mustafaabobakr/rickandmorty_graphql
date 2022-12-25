import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState, useEffect, memo } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface CharacterPageProps {}
const CharacterPage: React.FC<CharacterPageProps> = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	// handle going back
	const handleBack = () => {
		navigate(-1);
	};
	return (
		<main>
			<IconButton aria-label="back" size="large" onClick={handleBack}>
				<ArrowBack fontSize="inherit" />
			</IconButton>
			<h1>single char {id}</h1>
		</main>
	);
};

CharacterPage.defaultProps = {};
export default memo(CharacterPage);
