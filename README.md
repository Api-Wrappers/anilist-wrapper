<h1 align="center">
  AniList Api Wrapper
</h1>

The AniList Api Wrapper simplifies the process of making API requests to AniList, a popular anime and manga database. It encapsulates functionality related to various API endpoints, such as activity, lists, media, people, recommendations, search, threads, and user-related features. With this wrapper, developers can quickly integrate AniList functionality into their TypeScript projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Functionality](#functionality)
- [Contributing](#contributing)
- [License](#license)


## Installation

To install the AniList TypeScript Wrapper, follow these steps:

1. Run the following command in your project directory:

```typescript
// npm
npm install @tdanks2000/anilist-wrapper
// yarn
yarn add @tdanks2000/anilist-wrapper
// pnpm
pnpm i @tdanks2000/anilist-wrapper
```

## Usage

To use the AniList TypeScript Wrapper in your TypeScript project, import the necessary classes and functions:

```typescript
import { AniList } from '@tdanks2000/anilist-wrapper';
```

Then, create an instance of the AniList class, optionally providing an access token:

```typescript
const anilist = new AniList('YOUR_ACCESS_TOKEN');
```

You can now use the anilist object to access various functionalities of the AniList API. See the next section for details on available functionality.

## Authentication
Authentication is required to access certain endpoints and perform actions on behalf of a user. To authenticate with the AniList API, you need to obtain an access token. Visit the AniList website and follow their documentation to generate an access token. When creating an instance of the AniList class, you can provide the access token as a parameter to enable authenticated access to specific features.

## Functionality
The AniList Api Wrapper provides the following functionality:

- activity: Access and interact with user activity-related features.
- lists: Retrieve and manage user lists, such as anime and manga lists.
- media: Retrieve media-related information, including anime, manga, characters, and staff.
- people: Access information about people involved in media, such as voice actors and staff members.
- recommendation: Retrieve and manage recommendations for anime and manga.
- search: Search for media, characters, and users on AniList.
- thread: Interact with AniList forum threads and comments.
- user: Access and manage user-related information and actions.

## Contributing
Contributions to the AniList TypeScript Wrapper are welcome! If you find a bug, have a feature suggestion, or want to contribute improvements, please follow the contribution guidelines outlined in the repository.

## License
The AniList TypeScript Wrapper is licensed under the MIT License. Make sure to review the license file for detailed terms and conditions.

Feel free to use, modify, and distribute this library as per the license terms.

Thank you for using the AniList Api Wrapper! If you have any questions or need further assistance, please contact the project team or refer to the documentation available in the repository.

# ❤️

Reminder that <strong><i>you are great, you are enough, and your presence is valued.</i></strong> If you are struggling with your mental health, please reach out to someone you love and consult a professional. You are not alone.
