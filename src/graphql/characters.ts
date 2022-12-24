import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
	query GetCharacters {
		characters(page: 1) {
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
