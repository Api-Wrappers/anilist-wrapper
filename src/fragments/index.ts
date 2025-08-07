// Main entity fragments
export { ANIME_FRAGMENT } from "./anime";
export { CHARACTER_FRAGMENT } from "./character";
export { COVER_IMAGE_FRAGMENT } from "./common/coverImage";
export { DATE_FRAGMENT } from "./common/date";
export {
	CHARACTER_IMAGE_FRAGMENT,
	STAFF_IMAGE_FRAGMENT,
	USER_AVATAR_FRAGMENT,
} from "./common/image";
// Common fragments
export { TITLE_FRAGMENT } from "./common/title";
export {
	CHARACTER_CONNECTION_FRAGMENT,
	CHARACTER_EDGE_FRAGMENT,
} from "./connections/character";
export {
	MEDIA_RELATION_CONNECTION_FRAGMENT,
	MEDIA_RELATION_EDGE_FRAGMENT,
	MEDIA_RELATION_NODE_FRAGMENT,
} from "./connections/media";
export {
	STAFF_CONNECTION_FRAGMENT,
	STAFF_EDGE_FRAGMENT,
} from "./connections/staff";
// Connection fragments
export {
	STUDIO_CONNECTION_FRAGMENT,
	STUDIO_EDGE_FRAGMENT,
	STUDIO_NODE_FRAGMENT,
} from "./connections/studio";
// Entity fragments
export {
	CHARACTER_BASIC_FRAGMENT,
	CHARACTER_NAME_FRAGMENT,
} from "./entities/character";
export { STAFF_BASIC_FRAGMENT, STAFF_NAME_FRAGMENT } from "./entities/staff";
export {
	USER_BASIC_FRAGMENT,
	USER_FAVOURITES_FRAGMENT,
	USER_MEDIA_LIST_OPTIONS_FRAGMENT,
	USER_OPTIONS_FRAGMENT,
	USER_STATISTICS_FRAGMENT,
} from "./entities/user";
export { MANGA_FRAGMENT } from "./manga";
export { MEDIA_FRAGMENT } from "./media";
// Media fragments
export {
	MEDIA_BASIC_FRAGMENT,
	MEDIA_CORE_FRAGMENT,
	MEDIA_DETAILED_FRAGMENT,
} from "./media/core";
export {
	MEDIA_EXTERNAL_LINK_BASIC_FRAGMENT,
	MEDIA_EXTERNAL_LINK_FRAGMENT,
} from "./media/externalLinks";
export { MEDIA_RANK_FRAGMENT } from "./media/rankings";
export {
	MEDIA_STATS_FRAGMENT,
	SCORE_DISTRIBUTION_FRAGMENT,
	STATUS_DISTRIBUTION_FRAGMENT,
} from "./media/stats";
export {
	AIRING_SCHEDULE_FRAGMENT,
	MEDIA_STREAMING_EPISODE_FRAGMENT,
} from "./media/streaming";
export { MEDIA_TAG_BASIC_FRAGMENT, MEDIA_TAG_FRAGMENT } from "./media/tags";
export { MEDIA_TRAILER_FRAGMENT } from "./media/trailer";
export { MEDIA_LIST_FRAGMENT } from "./mediaList";
export { STAFF_FRAGMENT } from "./staff";
export { STUDIO_FRAGMENT } from "./studio";
export { USER_FRAGMENT } from "./user";
