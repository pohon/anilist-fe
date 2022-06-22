import PAGE_QUERY from '../../queries/page.graphql'

const mocks = [
  {
    request: {
      query: PAGE_QUERY,
      variables: {
        "page": 1,
        "perPage": 10
      }
    },
    result: {
      "data": {
        "Page": {
          "pageInfo": {
            "total": 5000,
            "currentPage": 1,
            "lastPage": 500,
            "hasNextPage": true,
            "perPage": 10,
            "__typename": "PageInfo"
          },
          "media": [
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx1-CXtrrkMpJ8Zq.png",
                "color": "#f1785d",
                "__typename": "MediaCoverImage"
              },
              "id": 1,
              "title": {
                "romaji": "Cowboy Bebop",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b5-Zs2cbrglTu67.png",
                "color": "#ff3500",
                "__typename": "MediaCoverImage"
              },
              "id": 5,
              "title": {
                "romaji": "Cowboy Bebop: Tengoku no Tobira",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6-Zzun7PHNNgPt.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx6-Zzun7PHNNgPt.jpg",
                "color": "#f1e4c9",
                "__typename": "MediaCoverImage"
              },
              "id": 6,
              "title": {
                "romaji": "TRIGUN",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7-6uh1fPvbgS9t.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7-6uh1fPvbgS9t.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx7-6uh1fPvbgS9t.png",
                "color": "#e4935d",
                "__typename": "MediaCoverImage"
              },
              "id": 7,
              "title": {
                "romaji": "Witch Hunter ROBIN",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8-ReS3TwSgrDDi.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b8-ReS3TwSgrDDi.jpg",
                "color": "#e46b50",
                "__typename": "MediaCoverImage"
              },
              "id": 8,
              "title": {
                "romaji": "Bouken Ou Beet",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx15-A4F2t0TgWoi4.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15-A4F2t0TgWoi4.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx15-A4F2t0TgWoi4.png",
                "color": "#d6bb1a",
                "__typename": "MediaCoverImage"
              },
              "id": 15,
              "title": {
                "romaji": "Eyeshield 21",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16-5fJZ2Sy2ThRA.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16-5fJZ2Sy2ThRA.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx16-5fJZ2Sy2ThRA.jpg",
                "color": "#aee486",
                "__typename": "MediaCoverImage"
              },
              "id": 16,
              "title": {
                "romaji": "Hachimitsu to Clover",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17-6kqIbdUk3dgi.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx17-6kqIbdUk3dgi.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx17-6kqIbdUk3dgi.png",
                "color": "#43aee4",
                "__typename": "MediaCoverImage"
              },
              "id": 17,
              "title": {
                "romaji": "Hungry Heart: Wild Striker",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18-r7IirVmwP89u.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b18-r7IirVmwP89u.jpg",
                "color": "#e46b50",
                "__typename": "MediaCoverImage"
              },
              "id": 18,
              "title": {
                "romaji": "Initial D FOURTH STAGE",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19-ham53gnijfiN.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx19-ham53gnijfiN.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx19-ham53gnijfiN.jpg",
                "color": null,
                "__typename": "MediaCoverImage"
              },
              "id": 19,
              "title": {
                "romaji": "MONSTER",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            }
          ],
          "__typename": "Page"
        }
      }
    }
  }, {
    request: {
      query: PAGE_QUERY,
      variables: {
        "page": 2,
        "perPage": 10
      }
    },
    result: {
      "data": {
        "Page": {
          "pageInfo": {
            "total": 5000,
            "currentPage": 2,
            "lastPage": 500,
            "hasNextPage": true,
            "perPage": 10,
            "__typename": "PageInfo"
          },
          "media": [
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-YJvLbgJQPCoI.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20-YJvLbgJQPCoI.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20-YJvLbgJQPCoI.jpg",
                "color": "#e47850",
                "__typename": "MediaCoverImage"
              },
              "id": 20,
              "title": {
                "romaji": "NARUTO",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-tXMN3Y20PIL9.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/nx21-tXMN3Y20PIL9.jpg",
                "color": "#e4a15d",
                "__typename": "MediaCoverImage"
              },
              "id": 21,
              "title": {
                "romaji": "ONE PIECE",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx22-8Qg3NZXH6asP.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx22-8Qg3NZXH6asP.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx22-8Qg3NZXH6asP.png",
                "color": "#d6936b",
                "__typename": "MediaCoverImage"
              },
              "id": 22,
              "title": {
                "romaji": "Tennis no Ouji-sama",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/23.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/23.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/23.jpg",
                "color": "#e46b1a",
                "__typename": "MediaCoverImage"
              },
              "id": 23,
              "title": {
                "romaji": "Ring ni Kakero 1",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx24-xxnI0WU9UTkF.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx24-xxnI0WU9UTkF.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx24-xxnI0WU9UTkF.png",
                "color": null,
                "__typename": "MediaCoverImage"
              },
              "id": 24,
              "title": {
                "romaji": "School Rumble",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx25-H1etX7IgfFtQ.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx25-H1etX7IgfFtQ.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx25-H1etX7IgfFtQ.jpg",
                "color": "#e4785d",
                "__typename": "MediaCoverImage"
              },
              "id": 25,
              "title": {
                "romaji": "Sunabouzu",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx26-u2SawALYH3w3.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx26-u2SawALYH3w3.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx26-u2SawALYH3w3.jpg",
                "color": "#86c9e4",
                "__typename": "MediaCoverImage"
              },
              "id": 26,
              "title": {
                "romaji": "TEXHNOLYZE",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx27-MOAaiBHHLfOY.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx27-MOAaiBHHLfOY.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx27-MOAaiBHHLfOY.png",
                "color": "#935028",
                "__typename": "MediaCoverImage"
              },
              "id": 27,
              "title": {
                "romaji": "Trinity Blood",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx28-QuKcZpUjTXzV.png",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx28-QuKcZpUjTXzV.png",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx28-QuKcZpUjTXzV.png",
                "color": "#e4bb50",
                "__typename": "MediaCoverImage"
              },
              "id": 28,
              "title": {
                "romaji": "Yakitate!! Japan",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            },
            {
              "coverImage": {
                "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx29-0PsnJVadMG7k.jpg",
                "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx29-0PsnJVadMG7k.jpg",
                "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx29-0PsnJVadMG7k.jpg",
                "color": "#e4d65d",
                "__typename": "MediaCoverImage"
              },
              "id": 29,
              "title": {
                "romaji": "Zipang",
                "__typename": "MediaTitle"
              },
              "__typename": "Media"
            }
          ],
          "__typename": "Page"
        }
      }
    }
  }
];

export default mocks