export type AniListMedia = {
  data: {
    Media: {
      id: number;
      idMal: number;
      title: {
        english: string;
        native: string;
        romaji: string;
      };
      modNotes: string;
      siteUrl: string;
      autoCreateForumThread: boolean;
      synonyms: string[];
      countryOfOrigin: string;
      isLicensed: boolean;
      isAdult: boolean;
      hashtag: string;
      rankings: {
        rank: number;
        type: string;
        context: string;
        year: number;
        season: string;
      }[];
      mediaListEntry: {
        progress: number;
        status: string;
        score: number;
        id: number;
        startedAt: {
          year: number;
          month: number;
          day: number;
        };
        completedAt: {
          year: number;
          month: number;
          day: number;
        };
        userId: number;
        mediaId: number;
        updatedAt: string;
        createdAt: string;
      };
      staff: {
        edges: {
          node: {
            id: number;
            name: {
              first: string;
              middle: string;
              last: string;
              full: string;
              native: string;
              alternative: string;
              userPreferred: string;
            };
            languageV2: string;
            image: {
              large: string;
              medium: string;
            };
            description: string;
            primaryOccupations: string[];
            gender: string;
            dateOfBirth: {
              year: number;
              month: number;
              day: number;
            };
            dateOfDeath: {
              year: number;
              month: number;
              day: number;
            };
          };
        }[];
      };
      stats: {
        scoreDistribution: {
          score: number;
          amount: number;
        }[];
        statusDistribution: {
          status: string;
          amount: number;
        }[];
      };
      reviews: {
        nodes: {
          id: number;
          score: number;
          summary: string;
          body: string;
        }[];
      };
      trends: {
        edges: {
          node: {
            mediaId: number;
            date: string;
            trending: number;
            averageScore: number;
            popularity: number;
            media: {
              id: number;
              coverImage: {
                extraLarge: string;
                large: string;
                medium: string;
                color: string;
              };
              idMal: number;
              title: {
                english: string;
                native: string;
                romaji: string;
              };
            };
          };
        }[];
      };
      externalLinks: {
        url: string;
        site: string;
        type: string;
        language: string;
      }[];
      coverImage: {
        extraLarge: string;
        large: string;
        color: string;
      };
      startDate: {
        year: number;
        month: number;
        day: number;
      };
      endDate: {
        year: number;
        month: number;
        day: number;
      };
      bannerImage: string;
      season: string;
      isLocked: boolean;
      seasonYear: number;
      description: string;
      type: string;
      format: string;
      status: string;
      episodes: number;
      duration: number;
      chapters: number;
      volumes: number;
      trending: number;
      trailer: {
        id: number;
        site: string;
        thumbnail: string;
      };
      genres: string[];
      source: string;
      averageScore: number;
      popularity: number;
      meanScore: number;
      nextAiringEpisode: {
        airingAt: number;
        timeUntilAiring: number;
        episode: number;
      };
      characters: {
        edges: {
          role: string;
          node: {
            id: number;
            name: {
              first: string;
              middle: string;
              last: string;
              full: string;
              native: string;
              userPreferred: string;
            };
            image: {
              large: string;
              medium: string;
            };
          };
          voiceActors: {
            id: number;
            languageV2: string;
            name: {
              first: string;
              middle: string;
              last: string;
              full: string;
              native: string;
              userPreferred: string;
            };
            image: {
              large: string;
              medium: string;
            };
          }[];
        }[];
      };
      isFavourite: boolean;
      recommendations: {
        edges: {
          node: {
            id: number;
            mediaRecommendation: {
              type: string;
              id: number;
              idMal: number;
              title: {
                romaji: string;
                english: string;
                native: string;
                userPreferred: string;
              };
              status: string;
              episodes: number;
              coverImage: {
                extraLarge: string;
                large: string;
                medium: string;
                color: string;
              };
              bannerImage: string;
              format: string;
              chapters: number;
              meanScore: number;
              nextAiringEpisode: {
                episode: number;
                timeUntilAiring: number;
                airingAt: number;
              };
            };
          };
        }[];
      };
      relations: {
        edges: {
          id: number;
          relationType: string;
          node: {
            id: number;
            idMal: number;
            status: string;
            coverImage: {
              extraLarge: string;
              large: string;
              medium: string;
              color: string;
            };
            bannerImage: string;
            title: {
              romaji: string;
              english: string;
              native: string;
              userPreferred: string;
            };
            episodes: number;
            chapters: number;
            format: string;
            nextAiringEpisode: {
              airingAt: number;
              timeUntilAiring: number;
              episode: number;
            };
            meanScore: number;
          };
        }[];
      };
      studios: {
        edges: {
          isMain: boolean;
          node: {
            id: number;
            name: string;
          };
        }[];
      };
      isRecommendationBlocked: boolean;
    };
  };
};
