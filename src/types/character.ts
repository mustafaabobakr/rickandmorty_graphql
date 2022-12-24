export interface CharactersResponse {
	characters: {
		info: Info;
		results: Character[];
	};
}

export interface Character {
	id: number;
	name: string;
	status: "Alive" | "Dead" | "unknown";
	species: string;
	type: string;
	gender: "Female" | "Male" | "Genderless" | "unknown";
	origin: Origin;
	location: Location;
	/** All images are 300x300px and most are medium shots or portraits */
	image: string;
	episode: Episode[];
	url: string;
	created: string;
}

interface Origin {
	name: string;
	type: string;
	dimension: string;
}
interface Location {
	type: string;
	dimension: string;
	residents: Character[];
}

interface Episode {
	air_date: string;
	episode: string;
	characters: string[];
}

interface Info {
	/** The length of the response */
	count: number;
	/** The amount of pages */
	pages: number;
	/** Link to the next page (if it exists) */
	next: string | null;
	/** Link to the previous page (if it exists) */
	prev: string | null;
}
