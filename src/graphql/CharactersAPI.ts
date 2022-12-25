import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
	query GetCharacters($page: Int) {
		characters(page: $page) {
			info {
				count
				pages
				next
				prev
			}
			results {
				id
				name
				status
				species
				type
				gender
				image
				created
				episode {
					id
					name
					air_date
					episode
					created
				}
				origin {
					name
					type
					dimension
				}
				location {
					name
					type
					dimension
				}
			}
		}
	}
`;

export const GET_SINGLE_CHARACTER = gql`
	query GetSingleCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			image
			status
			species
			type
			gender
			episode {
				id
				name
				air_date
				episode
				created
			}
			origin {
				name
				type
				dimension
			}
			location {
				name
				type
				dimension
			}
		}
	}
`;
