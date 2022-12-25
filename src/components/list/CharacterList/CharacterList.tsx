import { memo } from "react";

import styles from "./CharacterList.module.css";
import CharacterCard from "@components/card/CharacterCard";
import { GetCharactersQuery } from "src/gql/graphql";

export type ResultsArray = NonNullable<GetCharactersQuery["characters"]>["results"];
export type SingleCharObj = Required<NonNullable<ResultsArray>[0]>;
interface CharacterListProps {
	characters: ResultsArray;
}
const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
	return (
		<section className={styles["container"]}>
			{characters &&
				characters.map((character) => {
					//
					return <CharacterCard key={character?.id} character={character as SingleCharObj} />;
				})}
		</section>
	);
};

CharacterList.defaultProps = {};
export default memo(CharacterList);
