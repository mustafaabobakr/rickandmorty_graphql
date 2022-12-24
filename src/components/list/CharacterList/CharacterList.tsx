import { memo } from "react";
import { Character } from "@types";
import styles from "./CharacterList.module.css";
import CharacterCard from "@components/card/CharacterCard";

interface CharacterListProps {
	characters: Character[];
}
const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
	return (
		<section className={styles["container"]}>
			{characters.map((character) => {
				//
				return <CharacterCard key={character.id} character={character} />;
			})}
		</section>
	);
};

CharacterList.defaultProps = {};
export default memo(CharacterList);
