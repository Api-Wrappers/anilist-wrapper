import { gql } from "@api-wrappers/api-core";

export const GET_NOTIFICATIONS = gql`
  query GetNotifications(
    $page: Int = 1
    $perPage: Int = 25
    $resetNotificationCount: Boolean = false
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
        currentPage
        total
      }
      notifications(resetNotificationCount: $resetNotificationCount) {
        ... on ActivityLikeNotification {
          id
          type
          createdAt
        }
        ... on ActivityMentionNotification {
          id
          type
          createdAt
        }
        ... on ActivityMessageNotification {
          id
          type
          createdAt
        }
        ... on ActivityReplyLikeNotification {
          id
          type
          createdAt
        }
        ... on ActivityReplyNotification {
          id
          type
          createdAt
        }
        ... on ActivityReplySubscribedNotification {
          id
          type
          createdAt
        }
        ... on AiringNotification {
          id
          type
          createdAt
        }
        ... on CharacterSubmissionUpdateNotification {
          id
          type
          createdAt
        }
        ... on FollowingNotification {
          id
          type
          createdAt
        }
        ... on MediaDataChangeNotification {
          id
          type
          createdAt
        }
        ... on MediaDeletionNotification {
          id
          type
          createdAt
        }
        ... on MediaMergeNotification {
          id
          type
          createdAt
        }
        ... on MediaSubmissionUpdateNotification {
          id
          type
          createdAt
        }
        ... on RelatedMediaAdditionNotification {
          id
          type
          createdAt
        }
        ... on StaffSubmissionUpdateNotification {
          id
          type
          createdAt
        }
        ... on ThreadCommentLikeNotification {
          id
          type
          createdAt
        }
        ... on ThreadCommentMentionNotification {
          id
          type
          createdAt
        }
        ... on ThreadCommentReplyNotification {
          id
          type
          createdAt
        }
        ... on ThreadCommentSubscribedNotification {
          id
          type
          createdAt
        }
        ... on ThreadLikeNotification {
          id
          type
          createdAt
        }
      }
    }
  }
`;
