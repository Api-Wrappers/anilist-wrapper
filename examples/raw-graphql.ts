/**
 * Raw GraphQL example.
 *
 * Run with:
 *   bun examples/raw-graphql.ts
 */
import { Anilist, gql } from "../src/index.ts";

const anilist = new Anilist();

const genres = await anilist.graphql.request<{
	GenreCollection: Array<string | null> | null;
}>(gql`
	query Genres {
		GenreCollection
	}
`);

console.log("Genres");
console.log(genres.GenreCollection?.slice(0, 10).join(", "));

const media = await anilist.graphql.request<
	{
		Media: {
			id: number;
			title: { userPreferred: string | null } | null;
			averageScore: number | null;
		} | null;
	},
	{ id: number }
>(
	gql`
		query MediaById($id: Int) {
			Media(id: $id) {
				id
				title {
					userPreferred
				}
				averageScore
			}
		}
	`,
	{ id: 16498 },
);

console.log("\nTyped query with variables");
console.log(`- ${media.Media?.title?.userPreferred ?? "Untitled"}`);
console.log(`- Average score: ${media.Media?.averageScore ?? "unknown"}`);
