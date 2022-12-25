import { SingleCharObj } from "@components/list/CharacterList/CharacterList";

export function getCharacterObject(character: SingleCharObj) {
	if (!character) {
		return {
			id: "",
			name: "",
			created: "",
			episode: [],
			gender: "",
			image: "",
			location: {
				name: "",
				type: "",
				dimension: "",
			},
			origin: {
				name: "",
				type: "",
				dimension: "",
			},
			species: "",
			status: "",
		};
	}

	const { id, name, created, episode, gender, image, location, origin, species, status } = character!;

	return {
		id: id!,
		name: name!,
		created: created!,
		episode: episode!,
		gender: gender!,
		image: image!,
		location: location!,
		origin: origin!,
		species: species!,
		status: status!,
	};
}
