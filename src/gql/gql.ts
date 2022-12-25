/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n\tquery GetCharacters($page: Int) {\n\t\tcharacters(page: $page) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tnext\n\t\t\t\tprev\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tstatus\n\t\t\t\tspecies\n\t\t\t\ttype\n\t\t\t\tgender\n\t\t\t\timage\n\t\t\t\tcreated\n\t\t\t\tepisode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tair_date\n\t\t\t\t\tepisode\n\t\t\t\t\tcreated\n\t\t\t\t}\n\t\t\t\torigin {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t\tlocation {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetCharactersDocument,
    "\n\tquery GetSingleCharacter($id: ID!) {\n\t\tcharacter(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\timage\n\t\t\tstatus\n\t\t\tspecies\n\t\t\ttype\n\t\t\tgender\n\t\t\tepisode {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tair_date\n\t\t\t\tepisode\n\t\t\t\tcreated\n\t\t\t}\n\t\t\torigin {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t\tlocation {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t}\n\t}\n": types.GetSingleCharacterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetCharacters($page: Int) {\n\t\tcharacters(page: $page) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tnext\n\t\t\t\tprev\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tstatus\n\t\t\t\tspecies\n\t\t\t\ttype\n\t\t\t\tgender\n\t\t\t\timage\n\t\t\t\tcreated\n\t\t\t\tepisode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tair_date\n\t\t\t\t\tepisode\n\t\t\t\t\tcreated\n\t\t\t\t}\n\t\t\t\torigin {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t\tlocation {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetCharacters($page: Int) {\n\t\tcharacters(page: $page) {\n\t\t\tinfo {\n\t\t\t\tcount\n\t\t\t\tpages\n\t\t\t\tnext\n\t\t\t\tprev\n\t\t\t}\n\t\t\tresults {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tstatus\n\t\t\t\tspecies\n\t\t\t\ttype\n\t\t\t\tgender\n\t\t\t\timage\n\t\t\t\tcreated\n\t\t\t\tepisode {\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t\tair_date\n\t\t\t\t\tepisode\n\t\t\t\t\tcreated\n\t\t\t\t}\n\t\t\t\torigin {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t\tlocation {\n\t\t\t\t\tname\n\t\t\t\t\ttype\n\t\t\t\t\tdimension\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetSingleCharacter($id: ID!) {\n\t\tcharacter(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\timage\n\t\t\tstatus\n\t\t\tspecies\n\t\t\ttype\n\t\t\tgender\n\t\t\tepisode {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tair_date\n\t\t\t\tepisode\n\t\t\t\tcreated\n\t\t\t}\n\t\t\torigin {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t\tlocation {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetSingleCharacter($id: ID!) {\n\t\tcharacter(id: $id) {\n\t\t\tid\n\t\t\tname\n\t\t\timage\n\t\t\tstatus\n\t\t\tspecies\n\t\t\ttype\n\t\t\tgender\n\t\t\tepisode {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tair_date\n\t\t\t\tepisode\n\t\t\t\tcreated\n\t\t\t}\n\t\t\torigin {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t\tlocation {\n\t\t\t\tname\n\t\t\t\ttype\n\t\t\t\tdimension\n\t\t\t}\n\t\t}\n\t}\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;