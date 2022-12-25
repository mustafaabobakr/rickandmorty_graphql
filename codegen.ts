import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://rickandmortyapi.com/graphql",
	documents: "src/graphql/**/*.ts",
	generates: {
		"src/gql/": {
			preset: "client",
			plugins: [],
		},
		"./graphql.schema.json": {
			plugins: ["typescript", "introspection", "typescript-operations"],
			config: {
				"maybeValue": "T",
			},
		},
	},
};

export default config;
