import MEDIA_QUERY from '../../../queries/media.graphql'

const mocks = [
  {
    request: {
      query: MEDIA_QUERY,
      variables: {
        "id": "1"
      }
    },
    result: {
      "data": {
        "Media": {
          "id": 1,
          "title": {
            "userPreferred": "Cowboy Bebop",
            "romaji": "Cowboy Bebop",
            "english": "Cowboy Bebop",
            "native": "カウボーイビバップ",
            "__typename": "MediaTitle"
          },
          "coverImage": {
            "extraLarge": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1-CXtrrkMpJ8Zq.png",
            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1-CXtrrkMpJ8Zq.png",
            "__typename": "MediaCoverImage"
          },
          "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1-T3PJUjFJyRwg.jpg",
          "startDate": {
            "year": 1998,
            "month": 4,
            "day": 3,
            "__typename": "FuzzyDate"
          },
          "endDate": {
            "year": 1999,
            "month": 4,
            "day": 24,
            "__typename": "FuzzyDate"
          },
          "description": "Enter a world in the distant future, where Bounty Hunters roam the solar system. Spike and Jet, bounty hunting partners, set out on journeys in an ever struggling effort to win bounty rewards to survive.<br><br>\nWhile traveling, they meet up with other very interesting people. Could Faye, the beautiful and ridiculously poor gambler, Edward, the computer genius, and Ein, the engineered dog be a good addition to the group?",
          "season": "SPRING",
          "seasonYear": 1998,
          "type": "ANIME",
          "format": "TV",
          "status": "FINISHED",
          "episodes": 26,
          "duration": 24,
          "chapters": null,
          "volumes": null,
          "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Sci-Fi"
          ],
          "synonyms": [
            "카우보이 비밥",
            "קאובוי ביבופ",
            "คาวบอย บีบ๊อป",
            "Ковбой Бибоп"
          ],
          "source": "ORIGINAL",
          "isAdult": false,
          "isLocked": false,
          "meanScore": 86,
          "averageScore": 86,
          "popularity": 266107,
          "favourites": 18517,
          "isFavouriteBlocked": false,
          "hashtag": null,
          "countryOfOrigin": "JP",
          "isLicensed": true,
          "isFavourite": false,
          "isRecommendationBlocked": false,
          "isReviewBlocked": false,
          "nextAiringEpisode": null,
          "relations": {
            "edges": [
              {
                "id": 3,
                "relationType": "SIDE_STORY",
                "node": {
                  "id": 5,
                  "title": {
                    "userPreferred": "Cowboy Bebop: Tengoku no Tobira",
                    "__typename": "MediaTitle"
                  },
                  "format": "MOVIE",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5-VOcSZFepDDhm.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b5-Zs2cbrglTu67.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "__typename": "MediaEdge"
              },
              {
                "id": 4,
                "relationType": "SIDE_STORY",
                "node": {
                  "id": 17205,
                  "title": {
                    "userPreferred": "Cowboy Bebop: Ein no Natsuyasumi",
                    "__typename": "MediaTitle"
                  },
                  "format": "SPECIAL",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/17205-V924IzRELNKt.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx17205-Dk5nmaKD7hPM.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "__typename": "MediaEdge"
              },
              {
                "id": 29272,
                "relationType": "ADAPTATION",
                "node": {
                  "id": 30173,
                  "title": {
                    "userPreferred": "Cowboy Bebop",
                    "__typename": "MediaTitle"
                  },
                  "format": "MANGA",
                  "type": "MANGA",
                  "status": "FINISHED",
                  "bannerImage": null,
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/nx30173-SU7cu3H9jLXT.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "__typename": "MediaEdge"
              },
              {
                "id": 29274,
                "relationType": "ADAPTATION",
                "node": {
                  "id": 30174,
                  "title": {
                    "userPreferred": "Shooting Star Bebop: Cowboy Bebop",
                    "__typename": "MediaTitle"
                  },
                  "format": "MANGA",
                  "type": "MANGA",
                  "status": "FINISHED",
                  "bannerImage": null,
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b30174-RTbUXsQNPNwd.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "__typename": "MediaEdge"
              },
              {
                "id": 29951,
                "relationType": "SUMMARY",
                "node": {
                  "id": 4037,
                  "title": {
                    "userPreferred": "Cowboy Bebop: Yoseatsume Blues",
                    "__typename": "MediaTitle"
                  },
                  "format": "SPECIAL",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n4037-1rwmIePHBzB7.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4037-zpDbjycoZhNI.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "__typename": "MediaEdge"
              }
            ],
            "__typename": "MediaConnection"
          },
          "characterPreview": {
            "edges": [
              {
                "id": 2504,
                "role": "MAIN",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95011,
                    "name": {
                      "userPreferred": "Kouichi Yamadera",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95011-2RfLzncNyvbR.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 1,
                  "name": {
                    "userPreferred": "Spike Spiegel",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/b1-ChxaldmieFlQ.png",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              },
              {
                "id": 3013,
                "role": "MAIN",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95014,
                    "name": {
                      "userPreferred": "Megumi Hayashibara",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95014-VqxNuufY94V3.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 2,
                  "name": {
                    "userPreferred": "Faye Valentine",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/b2-0Iszg6Izgt4p.png",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              },
              {
                "id": 31911,
                "role": "MAIN",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95357,
                    "name": {
                      "userPreferred": "Unshou Ishizuka",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95357-umndcceko65h.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 3,
                  "name": {
                    "userPreferred": "Jet Black",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/b3-JjH9Si9UM1NZ.png",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              },
              {
                "id": 36164,
                "role": "MAIN",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95658,
                    "name": {
                      "userPreferred": "Aoi Tada",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95658-paHKYOWkhoOd.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 16,
                  "name": {
                    "userPreferred": "Edward Wong Hau Pepelu Tivrusky IV",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/b16-80wd87nl1Rue.png",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              },
              {
                "id": 2505,
                "role": "SUPPORTING",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95011,
                    "name": {
                      "userPreferred": "Kouichi Yamadera",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95011-2RfLzncNyvbR.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 4,
                  "name": {
                    "userPreferred": "Ein",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/4.jpg",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              },
              {
                "id": 10844,
                "role": "SUPPORTING",
                "name": null,
                "voiceActors": [
                  {
                    "id": 95084,
                    "name": {
                      "userPreferred": "Norio Wakamoto",
                      "__typename": "StaffName"
                    },
                    "language": "Japanese",
                    "image": {
                      "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95084-RTrZSU38POPF.png",
                      "__typename": "StaffImage"
                    },
                    "__typename": "Staff"
                  }
                ],
                "node": {
                  "id": 2734,
                  "name": {
                    "userPreferred": "Vicious",
                    "__typename": "CharacterName"
                  },
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/character/large/b2734-aglO8RKNVxnn.jpg",
                    "__typename": "CharacterImage"
                  },
                  "__typename": "Character"
                },
                "__typename": "CharacterEdge"
              }
            ],
            "__typename": "CharacterConnection"
          },
          "staffPreview": {
            "edges": [
              {
                "id": 4313,
                "role": "Original Creator",
                "node": {
                  "id": 97197,
                  "name": {
                    "userPreferred": "Hajime Yatate",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n97197-6NsKNt4EPoul.jpg",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 3837,
                "role": "Director",
                "node": {
                  "id": 97009,
                  "name": {
                    "userPreferred": "Shinichirou Watanabe",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n97009-4K1Wc7JG9iLR.png",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 4616,
                "role": "Series Composition",
                "node": {
                  "id": 97334,
                  "name": {
                    "userPreferred": "Keiko Nobumoto",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n97334-ewqQWYWhU3wm.png",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 458667,
                "role": "Literary Arts",
                "node": {
                  "id": 143033,
                  "name": {
                    "userPreferred": "Akira Toba",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 24691,
                "role": "Character Design",
                "node": {
                  "id": 103531,
                  "name": {
                    "userPreferred": "Toshihiro Kawamoto",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n103531-vNFYQvYyUFs8.png",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 34817,
                "role": "Mechanical Design",
                "node": {
                  "id": 106476,
                  "name": {
                    "userPreferred": "Kimitoshi Yamane",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n106476-pzrMSb7jlA04.png",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 458619,
                "role": "Set Design",
                "node": {
                  "id": 140797,
                  "name": {
                    "userPreferred": "Isamu Imakake",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n140797-dYXGAewnESJc.png",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              },
              {
                "id": 458612,
                "role": "Setting Design Assistance",
                "node": {
                  "id": 97501,
                  "name": {
                    "userPreferred": "Shouji Kawamori",
                    "__typename": "StaffName"
                  },
                  "language": "Japanese",
                  "image": {
                    "large": "https://s4.anilist.co/file/anilistcdn/staff/large/97501-fy8TgOjYJwIi.jpg",
                    "__typename": "StaffImage"
                  },
                  "__typename": "Staff"
                },
                "__typename": "StaffEdge"
              }
            ],
            "__typename": "StaffConnection"
          },
          "studios": {
            "edges": [
              {
                "isMain": true,
                "node": {
                  "id": 14,
                  "name": "Sunrise",
                  "__typename": "Studio"
                },
                "__typename": "StudioEdge"
              },
              {
                "isMain": false,
                "node": {
                  "id": 23,
                  "name": "Bandai Visual",
                  "__typename": "Studio"
                },
                "__typename": "StudioEdge"
              },
              {
                "isMain": false,
                "node": {
                  "id": 233,
                  "name": "Bandai Entertainment",
                  "__typename": "Studio"
                },
                "__typename": "StudioEdge"
              }
            ],
            "__typename": "StudioConnection"
          },
          "reviewPreview": {
            "pageInfo": {
              "total": 500,
              "__typename": "PageInfo"
            },
            "nodes": [
              {
                "id": 2242,
                "summary": "Review of Cowboy Bebop",
                "rating": 195,
                "ratingAmount": 231,
                "user": {
                  "id": 98098,
                  "name": "ToeBeans",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/98098-OHfrX9d7wIVQ.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Review"
              },
              {
                "id": 7295,
                "summary": "Controversial opinion incoming ",
                "rating": 184,
                "ratingAmount": 396,
                "user": {
                  "id": 410834,
                  "name": "Limitless",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b410834-x3GEtsOKdAo1.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Review"
              }
            ],
            "__typename": "ReviewConnection"
          },
          "recommendations": {
            "pageInfo": {
              "total": 500,
              "__typename": "PageInfo"
            },
            "nodes": [
              {
                "id": 1468,
                "rating": 959,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 205,
                  "title": {
                    "userPreferred": "Samurai Champloo",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/205-L7WpOOWUmVjh.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx205-xxonQKyJtVcw.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 172921,
                  "name": "languor",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b172921-uWIZLBH4T9F7.png",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 250,
                "rating": 356,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 6,
                  "title": {
                    "userPreferred": "TRIGUN",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6-4pIR2RY8AHZ0.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6-Zzun7PHNNgPt.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 40330,
                  "name": "AniBot",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/40330-GGWmwJbkuuuE.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 32471,
                "rating": 278,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 110349,
                  "title": {
                    "userPreferred": "GREAT PRETENDER",
                    "__typename": "MediaTitle"
                  },
                  "format": "ONA",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110349-bGG1E4uunLoq.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx110349-59hhZ9CNHVdk.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 372505,
                  "name": "Jr056",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b372505-8gEEWUTi8GM2.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 2058,
                "rating": 207,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 20057,
                  "title": {
                    "userPreferred": "Space☆Dandy",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20057.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20057-yMtjgvyi8x7w.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 98334,
                  "name": "RisingFire",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/n98334-0KzLeT8gAbxl.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 7722,
                "rating": 125,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 889,
                  "title": {
                    "userPreferred": "BLACK LAGOON",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/889-qZE1iFHexJVz.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx889-Wf4GZRnHv6Dp.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 333619,
                  "name": "jeff",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b333619-gpYpLubms6rt.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 3233,
                "rating": 112,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 2251,
                  "title": {
                    "userPreferred": "Baccano!",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2251-FVSbYyJhQPj2.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx2251-kSIwMbTZQDrQ.jpg",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 3,
                  "name": "Removed",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/3.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              },
              {
                "id": 3278,
                "rating": 80,
                "userRating": "NO_RATING",
                "mediaRecommendation": {
                  "id": 4087,
                  "title": {
                    "userPreferred": "Michiko to Hatchin",
                    "__typename": "MediaTitle"
                  },
                  "format": "TV",
                  "type": "ANIME",
                  "status": "FINISHED",
                  "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4087-HXlwFThv4pxw.jpg",
                  "coverImage": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4087-TMc9A0GSKiJf.png",
                    "__typename": "MediaCoverImage"
                  },
                  "__typename": "Media"
                },
                "user": {
                  "id": 97412,
                  "name": "DoctorWhoops",
                  "avatar": {
                    "large": "https://s4.anilist.co/file/anilistcdn/user/avatar/large/n97412-Ub8MjboGfhOd.jpg",
                    "__typename": "UserAvatar"
                  },
                  "__typename": "User"
                },
                "__typename": "Recommendation"
              }
            ],
            "__typename": "RecommendationConnection"
          },
          "externalLinks": [
            {
              "id": 609,
              "site": "Hulu",
              "url": "http://www.hulu.com/cowboy-bebop",
              "type": "STREAMING",
              "language": null,
              "color": "#1CE783",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/7-rM06PQyWONGC.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 3346,
              "site": "Crunchyroll",
              "url": "http://www.crunchyroll.com/cowboy-bebop",
              "type": "STREAMING",
              "language": null,
              "color": "#F88B24",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/5-AWN2pVlluCOO.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 10779,
              "site": "Funimation",
              "url": "https://www.funimation.com/shows/cowboy-bebop/",
              "type": "STREAMING",
              "language": null,
              "color": "#5B0BB5",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/8-I96T2wQCpURN.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 13042,
              "site": "Amazon",
              "url": "https://www.amazon.com/gp/video/detail/B00R2KO8ZE/",
              "type": "STREAMING",
              "language": null,
              "color": "#FF9900",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/21-bDoNIomehkOx.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 16098,
              "site": "Tubi TV",
              "url": "https://tubitv.com/series/2052",
              "type": "STREAMING",
              "language": null,
              "color": "#F79937",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/30-H2h0Fxnog1Pr.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 16099,
              "site": "Adult Swim",
              "url": "https://www.adultswim.com/videos/cowboy-bebop",
              "type": "STREAMING",
              "language": null,
              "color": "#000000",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/28-W1L8AHW0O4xE.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            },
            {
              "id": 39888,
              "site": "Netflix",
              "url": "https://www.netflix.com/title/80001305",
              "type": "STREAMING",
              "language": null,
              "color": "#E50914",
              "icon": "https://s4.anilist.co/file/anilistcdn/link/icon/10-rVGPom8RCiwH.png",
              "notes": null,
              "isDisabled": false,
              "__typename": "MediaExternalLink"
            }
          ],
          "streamingEpisodes": [
            {
              "site": "Crunchyroll",
              "title": "Episode 1 - Asteroid Blues",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/e3a45e86c597fe16f02d29efcadedcd81473268732_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-1-asteroid-blues-828956",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 2 - Stray Dog Strut",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/0eea0ce5c2a92b72fd633e5cbabd17b81473277532_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-2-stray-dog-strut-828958",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 3 - Honky Tonk Women",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire4-tmb/f007ab7cb899b5ca83b8e8d07a1067d51473125168_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-3-honky-tonk-women-828960",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 4 - Gateway Shuffle",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire4-tmb/8395f1edb9b86ec69777bdd84a9bf7921473115214_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-4-gateway-shuffle-828963",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 5 - Ballad of Fallen Angels",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/180d486bb9c563491f417eea1985c1de1473112114_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-5-ballad-of-fallen-angels-828965",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 6 - Sympathy for the Devil",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/24668be96b09d1356709e04a3daa161f1473114965_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-6-sympathy-for-the-devil-828967",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 7 - Heavy Metal Queen",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/d2d71facab3a707cd6480df47c78c2fe1473112459_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-7-heavy-metal-queen-828970",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 8 - Waltz for Venus",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire4-tmb/c82f024aa8e91377f1fd1f31a732ed211473138815_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-8-waltz-for-venus-828974",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 9 - Jamming with Edward",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/48d53aa4330ef9268c31db12def817ae1473113990_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-9-jamming-with-edward-828976",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 10 - Ganymede Elegy",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/0b1fe4247b00a2a96cd724c978f2e9301473126093_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-10-ganymede-elegy-828979",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 11 - Toys in the Attic",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/77098545eaa70378a9ef1cdd995015641473117569_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-11-toys-in-the-attic-828983",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 12 - Jupiter Jazz (part 1)",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/cd71c0f3bcf0cb5559d0939e583daf361473118196_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-12-jupiter-jazz-part-1-828985",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 13 - Jupiter Jazz (part 2)",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/e289707b5fc232b037a3e7d0e2a7959c1473119423_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-13-jupiter-jazz-part-2-828989",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 14 - Bohemian Rhapsody",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/44580eb7cc5740f63f3170265de80b561473120654_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-14-bohemian-rhapsody-828993",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 15 - My Funny Valentine",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/efb53c03f2ec8c0470275bb3cd32c6aa1473119912_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-15-my-funny-valentine-828997",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 16 - Black Dog Serenade",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/c4138c03816a57f8e28e112875767dff1473121102_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-16-black-dog-serenade-829001",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 17 - Mushroom Samba",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/2140460e2f69b8a124f812b31b2f0e991473122552_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-17-mushroom-samba-829003",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 18 - Speak Like a Child",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/22ab56e337990440b8b3dde252b64b321473122227_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-18-speak-like-a-child-829006",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 19 - Wild Horses",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/3288ad0b33dcfc5e1af91497d280b4fe1473124229_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-19-wild-horses-829009",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 20 - Pierrot Le Fou",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/785ef5c25a046832b3513089c6f3d9941473123758_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-20-pierrot-le-fou-829013",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 21 - Boogie Woogie Feng Shui",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/13dbb524b4b6bbc4cd1d36719d789b2f1473126565_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-21-boogie-woogie-feng-shui-829016",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 22 - Cowboy Funk",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/c71fbb3f7b06b6747208d3d966aaa1b91473125734_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-22-cowboy-funk-829019",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 23 - Brain Scratch",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire3-tmb/0d7ddcae6489ee5aae1c2cccf09f73991473126176_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-23-brain-scratch-829022",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 24 - Hard Luck Woman",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire4-tmb/9d2308b354746a3fb84152526b195e1c1473128052_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-24-hard-luck-woman-829026",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 25 - The Real Folk Blues (part 1)",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire2-tmb/7e9bb2a05eb81b701cdf115710d659291473127483_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-25-the-real-folk-blues-part-1-829032",
              "__typename": "MediaStreamingEpisode"
            },
            {
              "site": "Crunchyroll",
              "title": "Episode 26 - The Real Folk Blues (part 2)",
              "thumbnail": "https://img1.ak.crunchyroll.com/i/spire1-tmb/191b230426f0b0e6568b4ca6edab47321473136587_full.jpg",
              "url": "http://www.crunchyroll.com/cowboy-bebop/episode-26-the-real-folk-blues-part-2-829036",
              "__typename": "MediaStreamingEpisode"
            }
          ],
          "trailer": null,
          "rankings": [
            {
              "id": 36,
              "rank": 36,
              "type": "RATED",
              "format": "TV",
              "year": null,
              "season": null,
              "allTime": true,
              "context": "highest rated all time",
              "__typename": "MediaRank"
            },
            {
              "id": 550,
              "rank": 50,
              "type": "POPULAR",
              "format": "TV",
              "year": null,
              "season": null,
              "allTime": true,
              "context": "most popular all time",
              "__typename": "MediaRank"
            },
            {
              "id": 1454,
              "rank": 1,
              "type": "RATED",
              "format": "TV",
              "year": 1998,
              "season": null,
              "allTime": false,
              "context": "highest rated",
              "__typename": "MediaRank"
            },
            {
              "id": 1501,
              "rank": 1,
              "type": "POPULAR",
              "format": "TV",
              "year": 1998,
              "season": null,
              "allTime": false,
              "context": "most popular",
              "__typename": "MediaRank"
            }
          ],
          "tags": [
            {
              "id": 63,
              "name": "Space",
              "description": "Partly or completely set in outer space.",
              "rank": 94,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 648,
              "name": "Crime",
              "description": "Centers around unlawful activities punishable by the state or other authority.",
              "rank": 92,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 193,
              "name": "Episodic",
              "description": "Features story arcs that are loosely tied or lack an overarching plot.",
              "rank": 88,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 105,
              "name": "Ensemble Cast",
              "description": "Features a large cast of characters with (almost) equal screen time and importance to the plot.",
              "rank": 86,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 109,
              "name": "Primarily Adult Cast",
              "description": "Main cast is mostly composed of characters above a high school age.",
              "rank": 84,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 85,
              "name": "Tragedy",
              "description": "Centers around tragic events and unhappy endings.",
              "rank": 80,
              "isMediaSpoiler": true,
              "isGeneralSpoiler": true,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 327,
              "name": "Noir",
              "description": "Stylized as a cynical crime drama with low-key visuals.",
              "rank": 80,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 108,
              "name": "Cyberpunk",
              "description": "Set in a future of advanced technological and scientific achievements that have resulted in social disorder.",
              "rank": 77,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 157,
              "name": "Guns",
              "description": "Prominently features the use of guns in combat.",
              "rank": 76,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 82,
              "name": "Male Protagonist",
              "description": "Main character is male.",
              "rank": 75,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 391,
              "name": "Philosophy",
              "description": "Relating or devoted to the study of the fundamental nature of knowledge, reality, and existence.",
              "rank": 70,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 30,
              "name": "Martial Arts",
              "description": "Centers around the use of traditional hand-to-hand combat.",
              "rank": 66,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 104,
              "name": "Anti-Hero",
              "description": "Features a protagonist who lacks conventional heroic attributes and may be considered a borderline villain.",
              "rank": 65,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 240,
              "name": "Amnesia",
              "description": "Prominently features a character(s) with memory loss.",
              "rank": 59,
              "isMediaSpoiler": true,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 801,
              "name": "Cyborg",
              "description": "Prominently features a human character whose physiological functions are aided or enhanced by artificial means.",
              "rank": 56,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 285,
              "name": "Terrorism",
              "description": "Centers around the activities of a terrorist or terrorist organization.",
              "rank": 53,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 315670,
              "__typename": "MediaTag"
            },
            {
              "id": 91,
              "name": "Gambling",
              "description": "Centers around the act of gambling.",
              "rank": 51,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 199,
              "name": "Yakuza",
              "description": "Centered around Japanese organised crime syndicates.",
              "rank": 48,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 489,
              "name": "Drugs",
              "description": "Prominently features the usage of drugs such as opioids, stimulants, hallucinogens etc.",
              "rank": 46,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 586,
              "name": "Cult",
              "description": "Features a social group with unorthodox religious, spiritual, or philosophical beliefs and practices.",
              "rank": 40,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 956867,
              "__typename": "MediaTag"
            },
            {
              "id": 335,
              "name": "Tanned Skin",
              "description": "Prominently features characters with tanned skin.",
              "rank": 36,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": null,
              "__typename": "MediaTag"
            },
            {
              "id": 1165,
              "name": "Transgender",
              "description": "Features a character whose gender identity differs from the sex they were assigned at birth.",
              "rank": 27,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 464870,
              "__typename": "MediaTag"
            },
            {
              "id": 40,
              "name": "Police",
              "description": "Centers around the life and activities of law enforcement officers.",
              "rank": 26,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 315670,
              "__typename": "MediaTag"
            },
            {
              "id": 483,
              "name": "LGBTQ+ Themes",
              "description": "Prominently features characters or themes associated with the LGBTQ+ community, such as sexuality or gender identity.",
              "rank": 25,
              "isMediaSpoiler": true,
              "isGeneralSpoiler": false,
              "userId": 633306,
              "__typename": "MediaTag"
            },
            {
              "id": 77,
              "name": "Gender Bending",
              "description": "Prominently features a character who dresses and behaves in a way characteristic of another gender, or has been transformed into a person of another gender.",
              "rank": 20,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 633306,
              "__typename": "MediaTag"
            },
            {
              "id": 1310,
              "name": "Travel",
              "description": "Centers around character(s) moving between places a significant distance apart.",
              "rank": 20,
              "isMediaSpoiler": false,
              "isGeneralSpoiler": false,
              "userId": 857856,
              "__typename": "MediaTag"
            }
          ],
          "mediaListEntry": null,
          "stats": {
            "statusDistribution": [
              {
                "status": "CURRENT",
                "amount": 23741,
                "__typename": "StatusDistribution"
              },
              {
                "status": "PLANNING",
                "amount": 91210,
                "__typename": "StatusDistribution"
              },
              {
                "status": "COMPLETED",
                "amount": 128839,
                "__typename": "StatusDistribution"
              },
              {
                "status": "DROPPED",
                "amount": 5437,
                "__typename": "StatusDistribution"
              },
              {
                "status": "PAUSED",
                "amount": 16880,
                "__typename": "StatusDistribution"
              }
            ],
            "scoreDistribution": [
              {
                "score": 10,
                "amount": 399,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 20,
                "amount": 121,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 30,
                "amount": 281,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 40,
                "amount": 618,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 50,
                "amount": 1557,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 60,
                "amount": 3210,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 70,
                "amount": 9737,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 80,
                "amount": 21325,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 90,
                "amount": 34599,
                "__typename": "ScoreDistribution"
              },
              {
                "score": 100,
                "amount": 33557,
                "__typename": "ScoreDistribution"
              }
            ],
            "__typename": "MediaStats"
          },
          "__typename": "Media"
        }
      }
    }
  }
];

export default mocks