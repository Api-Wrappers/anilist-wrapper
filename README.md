<h1 align="center"> 
   🚀 AniList API Wrapper for TypeScript 
</h1>

<p align="center"> 
   <a href="https://www.npmjs.com/package/@tdanks2000/anilist-wrapper"> 
     <img alt="NPM Version" src="https://img.shields.io/npm/v/%40tdanks2000%2Fanilist-wrapper"> 
   </a> 
   <a href="https://github.com/tdanks2000/tmdb-wrapper/blob/master/LICENSE"> 
     <img src="https://img.shields.io/npm/l/@tdanks2000/anilist-wrapper" alt="License"> 
   </a> 
   <a href="https://github.com/tdanks2000/anilist-wrapper/actions/workflows/ci.yml"> 
     <img alt="Build Status" src="https://github.com/tdanks2000/anilist-wrapper/actions/workflows/ci.yml/badge.svg"> 
   </a> 
   <a href="https://bundlephobia.com/package/@tdanks2000/anilist-wrapper"> 
     <img alt="Bundle Size" src="https://img.shields.io/bundlephobia/minzip/@tdanks2000/anilist-wrapper"> 
   </a> 
</p>

<p align="center"> 
   Simplify your integration with the <a href="https://docs.anilist.co/">AniList API</a>, a comprehensive database for anime and manga. This robust and type-safe TypeScript wrapper provides an intuitive way to access various AniList functionalities, making it easier than ever to build amazing applications related to anime and manga. 
</p>

## 📖 Table of Contents

- [✨ Key Features](#key-features)
- [🚀 Quick Start](#quick-start)
- [📦 Installation](#installation)
- [🛠️ Usage](#usage)
  - [Basic Initialization](#basic-initialization)
  - [Making API Calls](#making-api-calls)
- [🔑 Authentication](#authentication)
- [⚙️ Functionality](#functionality)
  - [Anime Service](#anime-service)
  - [Character Service](#character-service)
  - [Manga Service](#manga-service)
  - [Media Service](#media-service)
  - [MediaList Service](#medialist-service)
  - [Staff Service](#staff-service)
  - [User Service](#user-service)
- [🤝 Contributing](#contributing)
- [📜 License](#license)
- [💖 Support](#support)

## ✨ Key Features

- **Type-Safe TypeScript:** Enjoy the benefits of static typing and improved developer experience.
- **Comprehensive Coverage:** Access a wide range of AniList API endpoints, including anime, manga, characters, staff, user lists, and more.
- **Simplified Requests:** Abstract away the complexities of making raw HTTP requests to the AniList GraphQL API.
- **Modular Design:** Well-organized services for different aspects of the AniList API.
- **Easy Authentication:** Simple integration with AniList's authentication mechanism.

## 🚀 Quick Start

Get up and running with the AniList API Wrapper in minutes!

1.  **Install the package:**

```bash
# npm
npm install @tdanks2000/anilist-wrapper
# yarn
yarn install @tdanks2000/anilist-wrapper
# pnpm
pnpm install @tdanks2000/anilist-wrapper
# bun
bun install @tdanks2000/anilist-wrapper
```

2.  **Import and initialize:**

```ts
import { Anilist } from "@tdanks2000/anilist-wrapper";

// For public endpoints
const anilist = new Anilist();
// OR for authenticated endpoints
const anilist = new Anilist("YOUR_ACCESS_TOKEN");
```

3.  **Start making API calls:**

```ts
const data = await anilist.anime.getAnimeById(1);
console.log(data);
```

## 📦 Installation

To integrate the AniList TypeScript Wrapper into your project, use one of the following package managers:

```bash
# npm
npm install @tdanks2000/anilist-wrapper
# yarn
yarn install @tdanks2000/anilist-wrapper
# pnpm
pnpm install @tdanks2000/anilist-wrapper
# bun
bun install @tdanks2000/anilist-wrapper
```

## 🛠️ Usage

Learn how to use the AniList TypeScript Wrapper in your TypeScript project.

### Basic Initialization

Import the `Anilist` class from the package:

```
 import { Anilist } from "@tdanks2000/anilist-wrapper";
```

Create an instance of the `Anilist` class. You can optionally provide an access token for authenticated requests:

```
 // For accessing public endpoints
 const anilist = new Anilist();

// For accessing authenticated endpoints (requires an access token)
const anilistWithToken = new Anilist("YOUR_ACCESS_TOKEN");
```

### Making API Calls

The `anilist` object provides access to various services, each dedicated to a specific area of the AniList API. Here's a basic example of fetching anime details:

```ts
const data = await anilist.anime.getAnimeById(1);
console.log(data);
```

Refer to the [Functionality](#functionality) section for a list of available services and their purpose. Consult the individual service files or generated documentation for specific methods and parameters.

## 🔑 Authentication

Some features of the AniList API require authentication. To authenticate, you need to obtain an OAuth access token from the AniList website. [Follow their official documentation](https://docs.anilist.co/guide/auth/) for instructions on how to generate an access token.

Once you have your access token, you can provide it when creating an instance of the `Anilist` class:

```
 const anilist = new Anilist("YOUR_ACCESS_TOKEN");
```

This will enable you to access authenticated endpoints and perform actions on behalf of a user.

## ⚙️ Functionality

The AniList API Wrapper organizes its functionality into the following services:

### Anime Service

Provides methods for accessing anime-related information, such as:

- Fetching details about a specific anime.
- Retrieving characters and staff associated with an anime.
- Getting recommendations for similar anime.
- Exploring related anime entries.

### Character Service

Allows you to retrieve information about specific anime and manga characters.

### Manga Service

Offers methods for accessing manga-related information, similar to the Anime Service, including details, characters, staff, and recommendations.

### Media Service

Provides general functions for searching and retrieving information about both anime and manga (media). This might include broader search capabilities or combined results.

### MediaList Service

Enables you to manage a user's anime and manga lists, including adding, updating, and retrieving entries. This requires authentication.

### Staff Service

Allows you to retrieve information about staff members involved in the production of anime and manga (e.g., voice actors, directors, writers).

### User Service

Provides access to user profiles, statistics, and their anime and manga lists. Many of these endpoints require authentication.

## 🤝 Contributing

We welcome contributions to the AniList TypeScript Wrapper! If you have any bug reports, feature requests, or would like to contribute code, please follow the guidelines outlined in the repository's `CONTRIBUTING.md` file.

## 📜 License

The AniList TypeScript Wrapper is open-source and licensed under the [MIT License](https://github.com/Api-Wrappers/anilist-wrapper/blob/main/LICENSE). Feel free to use, modify, and distribute this library according to the terms of the license.

## 💖 Support

Thank you for using the AniList API Wrapper! If you encounter any issues or have questions, please don't hesitate to:

- Open an issue on the [GitHub repository](https://github.com/tdanks2000/anilist-wrapper/issues).

<p align="center">
<a target="_blank" href="https://tdanks.com/mental-health/quote">
❤️ Reminder that <strong\><i\>you are great, you are enough, and your presence is valued.</i\>\</strong\> If you are struggling with your mental health, please reach out to someone you love and consult a professional. You are not alone. ❤️
</a>
</p>
