const data = {
    "feed": {
        "screen": {
        "elementId": "ListTemplate",
        "analyticsHandler": "FeedAnalyticsHandler",
        "next": {
            "requestObject": {
            "requestType": "POST",
            "path": "/feed",
            "requestBody": {
                "idsPerPage": 100,
                "nextIds": [
                117041,
                116771,
                117201,
                116403,
                117113,
                117714,
                116654,
                117017,
                117371,
                117335,
                116540,
                116782,
                115960,
                116747,
                117480,
                117327,
                117632,
                117117,
                116986,
                117298,
                117025,
                117065,
                114848,
                117120,
                116243,
                117609,
                116828,
                116668,
                117338,
                116597,
                116750,
                117614,
                116404,
                116553,
                117708,
                117681,
                116662,
                113975,
                117147,
                117066,
                115610,
                117660,
                117805,
                116220,
                114081,
                117364,
                116898,
                116461,
                117038,
                116624,
                117659,
                116743,
                117281,
                116797,
                116387,
                117111,
                116523,
                117059,
                117376,
                117070,
                117706,
                117063,
                116961,
                109746,
                117648,
                116821,
                116660,
                117694,
                115863,
                117634,
                116571,
                117055,
                117642,
                117586,
                117035,
                116749,
                117122,
                117044,
                117530,
                116796,
                117553,
                116748,
                116716,
                116790,
                117112,
                116764,
                117638,
                117125
                ],
                "feedType": "PAGINATION",
                "gender": "All",
                "ids": [
                117399,
                117674,
                117664,
                116563,
                85765,
                115402
                ],
                "page": 2,
                "pageNumber": 1,
                "recoType": "AUTHOR",
                "type": "womenmakeup"
            }
            }
        },
        "templateMeta": {
            "batchRequestAPIConfigs": {
            "STUDIO-POST": {
                "requireLogin": true,
                "apiEndpoint": "/v1/mynsta/markPostsAsSeen"
            }
            },
            "config": {
            "refresh": {
                "staleContentHandler": {
                "rendition": "staleContentIndicator",
                "autoRefreshLimit": 7200,
                "renditionLimit": 300
                }
            }
            },
            "staleContentIndicator": {
            "props": {
                "action": {
                "type": "refresh"
                },
                "extraParams": {
                "layout": {
                    "position": "TopCenter"
                }
                },
                "elementId": "PillView",
                "mapperId": "BoldBlackPill",
                "text": "New Posts"
            },
            "type": "SINGLE_PILL",
            "elementId": "SimpleCard"
            },
            "genderFilters": false,
            "scrollToTopOnRefresh": true,
            "enableRefreshOnList": true
        },
        "headerMeta": {
            "colorTheme": "",
            "bgColor": ""
        },
        "name": "Mynsta User Feed"
        },
        "components": [
        {
            "type": "LiveVideoDiscovery",
            "elementId": "ItemsHorizontalList",
            "props": {
            "titleProps": {
                "leftText": "Extra Discounts On Sale Prices",
                "rightText": "VIEW ALL",
                "elementId": "TitleView",
                "mapperId": "StudioLiveActionableTitleMapper"
            },
            "contentProps": {
                "elementId": "MediaInfoCardWithTimerLabel",
                "itemMapperId": "StudioLiveDiscoveryItem",
                "items": [
                {
                    "eventId": "645a1478b2db093fd18140e6",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/8c5fa220-45c6-4928-90ed-f4accfb426201683628773195-jkkkk.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Brut",
                    "description": "Summer Must Have Deos At Extra 5% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683869400,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1511f6765b5e3ea61a39",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/6382c2ea-eee5-45ff-a1db-a2c18d88c72c1683629122987-ffsfs.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Libas",
                    "description": "Graceful silk suits  At Extra 15% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683873000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1586b2db093fd18140f5",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/72e90b98-bf2a-4e80-8ef3-e6de0b599e011683629234989-sfasf.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Benetton India",
                    "description": "Summer Wear Specials",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683876600,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a16f1b2db093fd1814107",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/1d9db228-8ee5-4e0a-9385-ab9e58ac59ad1683629456212-D1D00BD4-50C7-43D2-8BF0-50E4C0C1002E.jpg",
                    "aspectRatio": 0.8,
                    "resolution": "1440X1800"
                    },
                    "title": "Juhi Chawla",
                    "description": "Super affordable summer ethnic fits At Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683883800,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a182287b9ff183bded778",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/d298ab9b-f9ce-4117-a2a7-294ede73a1391683629944524-image00001---Craig-Anto-Dsouza.jpeg",
                    "aspectRatio": 0.75,
                    "resolution": "3859X5145"
                    },
                    "title": "Asmita Kaushik",
                    "description": "Everyday Brezzy Kurta Sets At  Extra 15% off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683887400,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1985b2db093fd181411a",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/556dda6a-2a5f-4b5e-8f4c-566f926c8a071683629971337-IMG_4102.JPG",
                    "aspectRatio": 0.8,
                    "resolution": "4000X5000"
                    },
                    "title": "Prabh Singh",
                    "description": "Affordable Classy Fashion At Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683889200,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1a42f6765b5e3ea61a70",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/c3457381-ecb9-4128-b0c4-be1d8ac420a91683629984394-fgt.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Arata",
                    "description": "Gorgeous Healthy Curls Extra 10% Off",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683891000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645a1ab787b9ff183bded78a",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/059fe471-bfdb-4232-b940-eb0e9a14eeef1683629998718-reheth.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "Titan",
                    "description": "New launch Watches",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683894600,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "645c74c187b9ff183bdee362",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/11/e279e68c-2721-4a0a-9399-80826ce2dc5c1683792371092-ghjj.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "NYX Professional Makeup",
                    "description": "Make -up Must Haves ",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683898200,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                },
                {
                    "eventId": "6458e449f6765b5e3ea612ad",
                    "media": {
                    "type": "Image",
                    "src": "https://assets.myntassets.com/w_410,q_auto:best,dpr_2,fl_progressive,f_webp/assets/images/2023/5/9/a5aca0d1-ce11-41e2-8779-3376724a7c1c1683617161471-jkkkkkk.jpg",
                    "aspectRatio": 0.67,
                    "resolution": "1152X1728"
                    },
                    "title": "H&M",
                    "description": "H&M Mugler Collab - Style Reveal",
                    "infoTagText": "Starts in",
                    "animatableTag": false,
                    "videoScheduleType": "SCHEDULED",
                    "startTime": 1683900000,
                    "timerStartThresholdInMinutes": 60,
                    "timerEndText": "LIVE SOON",
                    "timerStopThresholdInSeconds": 10,
                    "resizeMode": "cover"
                }
                ]
            }
            },
            "componentUId": "188d56a1-ba74-49b0-b9db-a18adcdfc98f",
            "mapperId": "WhiteBackgroundMapper"
        },
        {
            "type": "CAROUSEL_BANNER",
            "props": {
            "titleProps": {
                "elementId": "TitleSubtitleView",
                "mapperId": "LeftAlignedTitle",
                "title": "Guide to Influencers' Most Coveted Looks"
            },
            "contentProps": {
                "refId": "19:63249ccbe0696230f7d1830b",
                "bannerRatioToScreen": 0.2,
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/7fb4ecda-a5da-41a2-b4e7-79efe951da4f1683638230167-10MAY23-MSSD-NAV.gif",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/HASHTAG/menfashion/%23menfashion"
                    },
                    "id": "19:a3ed769c-dffa-4a04-a195-4718aaec4594"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/09bd505a-368f-4cba-8a3a-d7f269ed87291683638230269-10MAY23-SB-Casual-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b84/Men%20Casual"
                    },
                    "id": "19:7a213252-3e51-4744-ad03-c1915477d335"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/5c42b90e-4974-4cd1-b809-2ae23b5df1c51683638230663-10MAY23-SB-Party-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b8f/Men%20Party"
                    },
                    "id": "19:8286e703-a8e5-4fb3-a654-18b978975bf3"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/ec89140e-2867-4f13-8510-d52622ce8d001683638230379-10MAY23-SB-Formal-Wear--Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b88/Men%20Formal"
                    },
                    "id": "19:34dbf04b-c4e1-4dd7-8a81-e43c8bc40b48"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/82572d81-1568-4997-9f5c-441e4ce24e0a1683638230355-10MAY23-SB-Ethnic-Wear-Nav-Men.jpg",
                    "aspectRatio": 0.7659575,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/feed/TOPIC/5e3d12fb6c63697fc3335b86/Men%20Ethnic"
                    },
                    "id": "19:5952209e-a89f-434f-89df-921960adf5cc"
                }
                ],
                "position": 0,
                "meta": {
                "title": "Guide to Influencers' Most Coveted Looks",
                "name": "carousel-banner",
                "contentType": "List",
                "publisherTag": "ads,List",
                "source": "ads"
                },
                "elementId": "StudioMediaPager"
            }
            },
            "componentUId": "c6508e10-7f2c-4fc6-b8f0-12373bc31001"
        },
        {
            "type": "CAROUSEL_BANNER",
            "props": {
            "titleProps": {
                "elementId": "TitleSubtitleView",
                "mapperId": "LeftAlignedTitle",
                "title": "Exciting Offers On Curated Brands"
            },
            "contentProps": {
                "position": 1,
                "meta": {
                "title": "Exciting Offers On Curated Brands",
                "name": "carousel-banner",
                "contentType": "List",
                "publisherTag": "ads,List",
                "source": "ads"
                },
                "elementId": "StudioMediaPager",
                "refId": "19:62ce5f1c7350cb4f088bf205",
                "bannerRatioToScreen": 0.7,
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/5ac0300f-4f68-4d7c-b801-dfe5c487cb571683638230621-10MAY23-SB-m_H-Golld-Men-Brand-2.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in/Mast-%26-Harbour?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%22241e3410.ace3.48a2.9c1b.2b9568b39bear5uDP524in%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:794944d6-7422-46fb-965e-8e8de1801d53"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/d052d828-64ff-421d-93ec-ddc2b5b734be1683638230401-10MAY23-SB-HOP-Gold-Men-Brand-4.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/24981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH/House-of-Pataudi?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F24981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%2224981a5f.437c.4698.9c18.d1182b009eeaitabGCDxxH%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:d2308b8f-bd06-47ee-a99b-6db71d4b3d31"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/6dcb1f5e-d2e3-4ffa-adb9-d3ecd4debd2d1683638230178-10MAY23-SB-Anouk-Gold-Men-Brand-1.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/41df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb/Anouk?appRoute=%7B%22url%22%3A%22%2Fstudio%2Finfluencer%2F41df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb%22%7D&followRequestBody=%7B%22url%22%3A%22https%3A%2F%2Fapi.myntra.com%2Fv1%2Fmynsta%2Ffollow%22%2C%22body%22%3A%7B%22option%22%3A%22FOLLOW_AUTHOR%22%2C%22ids%22%3A%5B%2241df9045.c72a.4d3d.afb4.1b36b0f16927Lw3dAWoTWb%22%5D%7D%7D&navLevel=STUDIO_CHILD&query=%7B%7D"
                    },
                    "id": "19:f97465c1-9e4e-4e67-958b-5154865d3cd0"
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/9/844bc5f0-2e0a-45db-8ab6-a0381499b15f1683638230727-10MAY23-SB-Wrogn-Gold-Men-Brand-3.jpg",
                    "aspectRatio": 0.7621359,
                    "action": {
                    "type": "NAVIGATION",
                    "link": "https://www.myntra.com/studio/influencer/05c675ef.a228.4dbd.af6d.7d477d1543e0oqsl9K7kcT/Wrogn?"
                    },
                    "id": "19:23375120-39ae-4047-b133-91e94265f618"
                }
                ]
            }
            },
            "componentUId": "27b6b369-bf28-43b8-9321-1ec36c617f06"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "isBookmarked": false,
                "text": "Dress up your mind, and you’ll be able to make all sorts of fashion statements. <Hashtag id=menfashion>menfashion</Hashtag> <Hashtag id=mencasualwear>mencasualwear</Hashtag> <Hashtag id=mentshirts>mentshirts</Hashtag> <Hashtag id=mentrousers>mentrousers</Hashtag> <Hashtag id=wrong>wrong</Hashtag> <Hashtag id=taavi>taavi</Hashtag> <Hashtag id=hnm>hnm</Hashtag> <Hashtag id=single>single</Hashtag> <Hashtag id=mangoman>mangoman</Hashtag> <Hashtag id=casualshirt>casualshirt</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Typography-Printed-Drop-Shoulder-Sleeves-Slim-Fit-T-shirt/16992116/buy",
                    "productId": 16992116,
                    "product": "SINGLE Men White Typography Printed Drop-Shoulder Sleeves Slim Fit T-shirt",
                    "productName": "SINGLE Men White Typography Printed Drop-Shoulder Sleeves Slim Fit T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992116/2022/3/9/c72e5ee9-82a4-4723-968e-8f953648021e1646823890351NauticaMenWhiteNavyBlueStripedPoloCollarPureCottonT-shirtTsh1.jpg",
                    "mrp": 999,
                    "price": 399,
                    "discount": 600,
                    "brand": "SINGLE",
                    "rating": 3.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/HM/HM-Men-Regular-Fit-Linen-Blend-Trousers/21881958/buy",
                    "productId": 21881958,
                    "product": "H&M Men Regular Fit Linen-Blend Trousers",
                    "productName": "H&M Men Regular Fit Linen-Blend Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21881958/2023/2/7/9cd1afff-f255-4baa-a97a-8ef36e026f4e1675776393525RegularFitLinen-blendtrousers1.jpg",
                    "mrp": 2299,
                    "price": 0,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/HM/HM-Men-Loose-Fit-Cotton-joggers/20412582/buy",
                    "productId": 20412582,
                    "product": "H&M Men Loose Fit Cotton joggers",
                    "productName": "H&M Men Loose Fit Cotton joggers",
                    "searchImage": "http://assets.myntassets.com/assets/images/20412582/2022/10/15/4388d9e0-11a3-4e8d-9d0d-6aea0f0f5ec51665817489260LooseFitCottonjoggers3.jpg",
                    "mrp": 2299,
                    "price": 0,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4.1,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/WROGN/WROGN-Men-White-Slim-Fit-Chinos/12222386/buy",
                    "productId": 12222386,
                    "product": "WROGN Men White Slim Fit Chinos",
                    "productName": "WROGN Men White Slim Fit Chinos",
                    "searchImage": "http://assets.myntassets.com/assets/images/12222386/2022/4/11/f635d852-2afa-4713-99b3-642c540b6b631649672135945WROGNMenWhiteSlimFitChinos1.jpg",
                    "mrp": 2599,
                    "price": 1689,
                    "discount": 910,
                    "brand": "WROGN",
                    "rating": 4.2,
                    "displayDiscountLabel": "(35% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Taavi/Taavi-Men-Indigo-Printed-Pure-Cotton-Casual-Shirt/19318978/buy",
                    "productId": 19318978,
                    "product": "Taavi Men Indigo Printed Pure Cotton Casual Shirt",
                    "productName": "Taavi Men Indigo Printed Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19318978/2022/9/29/02a4ee5a-c8e4-4632-936a-fe7c6946c6dd1664441830265-Taavi-Men-Shirts-8421664441829874-1.jpg",
                    "mrp": 2499,
                    "price": 999,
                    "discount": 1500,
                    "brand": "Taavi",
                    "rating": 4.5,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/MANGO-MAN/MANGO-MAN-Sustainable-Cotton-Slim-Fit-Casual-Shirt/21938374/buy",
                    "productId": 21938374,
                    "product": "MANGO MAN Sustainable Cotton Slim Fit Casual Shirt",
                    "productName": "MANGO MAN Sustainable Cotton Slim Fit Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21938374/2023/3/6/3b4f4b89-bdd6-45b4-b344-05ecb6da488a1678094080766ShirtsMANGOWomenShirtsMANGOWomenDressesMANGOWomenTrousersMAN1.jpg",
                    "mrp": 4790,
                    "price": 3113,
                    "discount": 1677,
                    "brand": "MANGO MAN",
                    "rating": 3.4,
                    "displayDiscountLabel": "(35% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Printed-Slim-Fit-Round-Neck-Pure-Cotton-T-shirt/13975292/buy",
                    "productId": 13975292,
                    "product": "SINGLE Men White Printed Slim Fit Round Neck Pure Cotton T-shirt",
                    "productName": "SINGLE Men White Printed Slim Fit Round Neck Pure Cotton T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/13975292/2021/6/1/d02bc1d0-c022-42b8-84e4-75d96cf798141622542024047-SINGLE-Men-White-Printed-Slim-Fit-Round-Neck-T-shirt-1521622-1.jpg",
                    "mrp": 899,
                    "price": 449,
                    "discount": 450,
                    "brand": "SINGLE",
                    "rating": 0,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/EVERDION/EVERDION-Men-White-Printed-Drop-Shoulder-Sleeves-Bio-Finish-Loose-T-shirt/19998220/buy",
                    "productId": 19998220,
                    "product": "EVERDION Men White Printed Drop-Shoulder Sleeves Bio Finish Loose T-shirt",
                    "productName": "EVERDION Men White Printed Drop-Shoulder Sleeves Bio Finish Loose T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19998220/2022/9/15/c5f9f5a1-b400-4106-8cbd-4df24c872cd31663232983253EVERDIONMenWhitePrintedMonochromeBioFinishLooseT-shirt1.jpg",
                    "mrp": 1499,
                    "price": 419,
                    "discount": 1080,
                    "brand": "EVERDION",
                    "rating": 0,
                    "displayDiscountLabel": "(72% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White-Printed-Drop-Shoulder-Sleeves-Pure-Cotton-T-shirt/16992146/buy",
                    "productId": 16992146,
                    "product": "SINGLE Men White Printed Drop-Shoulder Sleeves Pure Cotton T-shirt",
                    "productName": "SINGLE Men White Printed Drop-Shoulder Sleeves Pure Cotton T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992146/2022/3/9/e2abbfc2-86af-45f5-9691-87666f8fcadd1646820961480-SINGLE-Men-Tshirts-2631646820960955-1.jpg",
                    "mrp": 999,
                    "price": 399,
                    "discount": 600,
                    "brand": "SINGLE",
                    "rating": 3.7,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Tshirts/SINGLE/SINGLE-Men-White--Navy-Blue-Typography-Printed-Pure-Cotton-Slim-Fit-T-shirt/16992132/buy",
                    "productId": 16992132,
                    "product": "SINGLE Men White & Navy Blue Typography Printed Pure Cotton Slim Fit T-shirt",
                    "productName": "SINGLE Men White & Navy Blue Typography Printed Pure Cotton Slim Fit T-shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/16992132/2022/5/19/efb3c80c-c242-4ae5-a93c-cb08341070111652962995708-SINGLE-Men-Tshirts-8281652962995262-1.jpg",
                    "mrp": 799,
                    "price": 319,
                    "discount": 480,
                    "brand": "SINGLE",
                    "rating": 4,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116628/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_VIDEO",
                "isLiked": "NONE",
                "likeCount": 1,
                "products": [
                16992116,
                21881958,
                20412582,
                12222386,
                19318978,
                21938374,
                13975292,
                19998220,
                16992146,
                16992132,
                21869836,
                21681888,
                20021356,
                15193444,
                12083876,
                17575790,
                20163682,
                18298408,
                22150206,
                17641898,
                20448958,
                19737648,
                19318890,
                19318976,
                20841004,
                20530416
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/152ad048-4c1c-4438-91a2-3991673fcd771683417658814-DSC05920.jpg",
                    "resolution": "4672X6229",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "6456e7f6a6fb465328767bd2",
                    "url": "https://matrix.myntassets.com/general/6456e7f692b2aa2b8f176c41/master.m3u8"
                    }
                }
                ],
                "postId": 116628
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "1eb3aeb6.3b52.4789.89be.e2cada66fb960ztfklXgjF",
                "uniqueHandle": "varunverma",
                "name": "Varun Verma",
                "description": "Mr SupraNational '19 with a love for fashion, fitness and all things to do with jackets!",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/11/29/fd799e7d-c976-4ac0-954b-749890dce88f1669699035424-VarunP.jpg",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/11/29/5228c926-f43e-4b6c-8d60-0b505a9959d11669698879390-VarunC.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 241,
                "followers": 21534,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "bed8d0bf-ded2-4d9e-ba9e-94221a4261f2"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "d89101db.879e.4441.a948.9054fd18b7c8Uu9O8alg4A",
                "uniqueHandle": "Shraddharane",
                "name": "Shraddharane",
                "description": "Style is always in Fashion ✨",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/10/28/59aaa6c8-b94b-418b-9768-3c7f1d3260341666937026678-croppedImage-1666936918657.jpg",
                    "resolution": "463X463",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/10/28/88052e9b-baa0-4d5c-a790-5fab9f33fcb31666937037709-croppedImage-1666936928666.jpg",
                    "resolution": "4024X4471",
                    "aspectRatio": 0.9
                },
                "posts": 20,
                "followers": 62,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            },
            "contentProps": {
                "likeCount": 1,
                "text": "I promise I am not that basic 💗✨ <Hashtag id=notsobasicoutfit>notsobasicoutfit</Hashtag> <Hashtag id=myntrafwdfam>myntrafwdfam</Hashtag> <Hashtag id=myntrafwd>myntrafwd</Hashtag> <Hashtag id=myntrastyle>myntrastyle</Hashtag> <Hashtag id=myntrafashion>myntrafashion</Hashtag> <Hashtag id=mymyntralook>mymyntralook</Hashtag> <Hashtag id=ketch>ketch</Hashtag> <Hashtag id=coordsetsforwomen>coordsetsforwomen</Hashtag> <Hashtag id=coords>coords</Hashtag> <Hashtag id=myntrastylecastcrew>myntrastylecastcrew</Hashtag>",
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/7feffbfe-be5f-4953-b150-a9aecf3974fd1683382951917-InShot_20230506_193655257.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/903b9c49-9a00-4461-aca1-f5cfc3df32801683382951959-InShot_20230506_193601559.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/6/ca6630a4-8dfb-43d1-b71f-5df5efbd2f5f1683382951940-InShot_20230506_193638581.jpg",
                    "resolution": "3072X4096",
                    "aspectRatio": 0.75
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116564/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_IMAGE",
                "postId": 116564,
                "isLiked": "NONE",
                "isBookmarked": false,
                "products": [
                21678266,
                22056820,
                20651052,
                21678274,
                21448468,
                20715686,
                21448470,
                21522338,
                19373436,
                19563294,
                21741618,
                20429310,
                21263318,
                21229646
                ],
                "productPills": [
                {
                    "landingPageUrl": "Co-Ords/KETCH/KETCH-Women-Floral-Printed-Shirt-with-Trousers/21678266/buy",
                    "productId": 21678266,
                    "product": "KETCH Women Floral Printed Shirt with Trousers",
                    "productName": "KETCH Women Floral Printed Shirt with Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21678266/2023/1/24/f665e10e-cd43-4f5e-8e10-1ae17ebfa7c71674559983890Co-Ords1.jpg",
                    "mrp": 1899,
                    "price": 759,
                    "discount": 1140,
                    "brand": "KETCH",
                    "rating": 4.4,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Athena/Athena-Women-Floral-Printed-Linen-Shirt-With-Trouser-Co-Ords-Set/22056820/buy",
                    "productId": 22056820,
                    "product": "Athena Women Floral Printed Linen Shirt With Trouser Co-Ords Set",
                    "productName": "Athena Women Floral Printed Linen Shirt With Trouser Co-Ords Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/22056820/2023/2/20/68c14c47-c3e5-41fd-9fd8-711e95abf4ad1676907840977AthenaLavenderlinenco-ordset1.jpg",
                    "mrp": 3295,
                    "price": 1812,
                    "discount": 1483,
                    "brand": "Athena",
                    "rating": 0,
                    "displayDiscountLabel": "(45% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/SHAYE/SHAYE-Women-Pink-Floral--Printed-Shirt--Trouser-Co-Ords/20651052/buy",
                    "productId": 20651052,
                    "product": "SHAYE Women Pink Floral  Printed Shirt & Trouser Co-Ords",
                    "productName": "SHAYE Women Pink Floral  Printed Shirt & Trouser Co-Ords",
                    "searchImage": "http://assets.myntassets.com/assets/images/20651052/2022/11/7/b337dfcc-4385-4d78-9e47-97d5fcea5f6a1667814613784ShayeCombinationofShirtandTrousersPrintedLongSleevesCasualCo5.jpg",
                    "mrp": 5999,
                    "price": 2699,
                    "discount": 3300,
                    "brand": "SHAYE",
                    "rating": 0,
                    "displayDiscountLabel": "(55% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/KETCH/KETCH-Women-Floral-Printed-Shirt-With-Trouser/21678274/buy",
                    "productId": 21678274,
                    "product": "KETCH Women Floral Printed Shirt With Trouser",
                    "productName": "KETCH Women Floral Printed Shirt With Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/21678274/2023/1/24/d0d688ce-58ac-4429-b26b-2afa31ac7f6e1674562424889AhegaoAnimePrintedCottonTankTopVest-SmallCo-OrdsKETCHWomen1.jpg",
                    "mrp": 1899,
                    "price": 759,
                    "discount": 1140,
                    "brand": "KETCH",
                    "rating": 4.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/PrettyPlus-by-Desinoorcom/PrettyPlus-by-Desinoorcom-Women-Plus-Size-Striped-Shirt-with-Trouser-Co-ord-Set/21448468/buy",
                    "productId": 21448468,
                    "product": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "productName": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21448468/2023/1/6/42f98066-59c2-45bc-af98-e769d10a0ebe1673014302759PlusSizeBeigeStripedCo-ordSet1.jpg",
                    "mrp": 5795,
                    "price": 1564,
                    "discount": 4231,
                    "brand": "PrettyPlus by Desinoor.com",
                    "rating": 0,
                    "displayDiscountLabel": "(73% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Kapraaha/Kapraaha-Women-White-Pure-Cotton-Relaxed-Fit-Shirt--Trouser-Co-Ord-Set/20715686/buy",
                    "productId": 20715686,
                    "product": "Kapraaha Women White Pure Cotton Relaxed-Fit Shirt & Trouser Co-Ord Set",
                    "productName": "Kapraaha Women White Pure Cotton Relaxed-Fit Shirt & Trouser Co-Ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/20715686/2022/11/11/3fb53bab-812a-4348-8484-0d989de9550b1668169427837WhiteEmbroideredCo-ordSetof21.jpg",
                    "mrp": 3820,
                    "price": 0,
                    "discount": 0,
                    "brand": "Kapraaha",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/PrettyPlus-by-Desinoorcom/PrettyPlus-by-Desinoorcom-Women-Plus-Size-Striped-Shirt-with-Trouser-Co-ord-Set/21448470/buy",
                    "productId": 21448470,
                    "product": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "productName": "PrettyPlus by Desinoor.com Women Plus Size Striped Shirt with Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21448470/2023/1/6/95642c91-9a28-44aa-b519-af3dddca7d671673014221296PlusSizeBlueStripedCo-ordSet1.jpg",
                    "mrp": 5795,
                    "price": 1564,
                    "discount": 4231,
                    "brand": "PrettyPlus by Desinoor.com",
                    "rating": 0,
                    "displayDiscountLabel": "(73% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/Fashfun/Fashfun--Women-Shirt--Trouser-Co-ord-Set/21522338/buy",
                    "productId": 21522338,
                    "product": "Fashfun  Women Shirt & Trouser Co-ord Set",
                    "productName": "Fashfun  Women Shirt & Trouser Co-ord Set",
                    "searchImage": "http://assets.myntassets.com/assets/images/21522338/2023/1/12/0b340840-07c1-4229-92e4-71f401a5b5d11673517702079Bluesolidcrepelooseshirtwithwaisttie-upbeltcollaredneckwithb1.jpg",
                    "mrp": 1999,
                    "price": 1059,
                    "discount": 940,
                    "brand": "Fashfun",
                    "rating": 3,
                    "displayDiscountLabel": "(47% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/ANI/ANI-Women-White--Black-Abstract-Print-Shirt-with-Trouser/19373436/buy",
                    "productId": 19373436,
                    "product": "ANI Women White & Black Abstract Print Shirt with Trouser",
                    "productName": "ANI Women White & Black Abstract Print Shirt with Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19373436/2022/8/26/bb625264-d9ab-4fb5-8b3f-283f01998e521661517036952ANIWomenWhiteBlackAbstractPrintShirtwithTrouser1.jpg",
                    "mrp": 4999,
                    "price": 1249,
                    "discount": 3750,
                    "brand": "ANI",
                    "rating": 0,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Co-Ords/iki-chic/iki-chic-Women-Green-Printed-Shirt--Trouser/19563294/buy",
                    "productId": 19563294,
                    "product": "iki chic Women Green Printed Shirt & Trouser",
                    "productName": "iki chic Women Green Printed Shirt & Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19563294/2022/8/19/581cd07c-bbbd-4237-bc83-0d27e903b6451660904481385ClothingSet1.jpg",
                    "mrp": 6299,
                    "price": 2015,
                    "discount": 4284,
                    "brand": "iki chic",
                    "rating": 0,
                    "displayDiscountLabel": "(68% OFF)",
                    "available": true
                }
                ]
            }
            },
            "componentUId": "e786113c-4881-4263-a4d6-ea27de33e4fc"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "elementId": "POST_VIDEO",
                "text": "A pair of cool blue trousers that you can easily take from a casual chic look to a semi-formal one. Which look do you like better? <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=bluetrousers>bluetrousers</Hashtag> <Hashtag id=womentrousers>womentrousers</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=bluewomen>bluewomen</Hashtag> <Hashtag id=tokyotalkies>tokyotalkies</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Flared-High-Rise-Pleated-Parallel-Trousers/15092134/buy",
                    "productId": 15092134,
                    "product": "Tokyo Talkies Women Blue Flared High-Rise Pleated Parallel Trousers",
                    "productName": "Tokyo Talkies Women Blue Flared High-Rise Pleated Parallel Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/15092134/2021/8/10/8bc431e7-a525-45b7-a6ca-5856cb49bc211628582461963TokyoTalkiesWomenBlueFlaredHigh-RisePleatedParallelTrousers1.jpg",
                    "mrp": 2049,
                    "price": 758,
                    "discount": 1291,
                    "brand": "Tokyo Talkies",
                    "rating": 4,
                    "displayDiscountLabel": "(63% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Roadster/The-Roadster-Lifestyle-Co-Women-Flared-Cargos-Trousers-With-Drawstring-Closure-/17398604/buy",
                    "productId": 17398604,
                    "product": "The Roadster Lifestyle Co. Women Flared Cargos Trousers With Drawstring Closure",
                    "productName": "The Roadster Lifestyle Co. Women Flared Cargos Trousers With Drawstring Closure",
                    "searchImage": "http://assets.myntassets.com/assets/images/17398604/2023/3/30/eff286b7-2887-4655-9ee2-4edfb68d17e31680157396787-Roadster-Women-Trousers-8281680157395983-1.jpg",
                    "mrp": 2999,
                    "price": 899,
                    "discount": 2100,
                    "brand": "Roadster",
                    "rating": 0,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/SASSAFRAS/SASSAFRAS-Women-Blue-Comfort-Flared-Easy-Wash-Trousers/19202762/buy",
                    "productId": 19202762,
                    "product": "SASSAFRAS Women Blue Comfort Flared Easy Wash Trousers",
                    "productName": "SASSAFRAS Women Blue Comfort Flared Easy Wash Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/19202762/2022/7/29/2a3c246d-c46a-4806-a00d-f19b1822740e1659096544668-SASSAFRAS-Women-Trousers-8511659096544082-1.jpg",
                    "mrp": 1799,
                    "price": 773,
                    "discount": 1026,
                    "brand": "SASSAFRAS",
                    "rating": 4.3,
                    "displayDiscountLabel": "(57% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/ether/Ether-Women-Blue-Washed-Denim-Flared-Trousers/1741898/buy",
                    "productId": 1741898,
                    "product": "Ether Women Blue Washed Denim Flared Trousers",
                    "productName": "Ether Women Blue Washed Denim Flared Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/1741898/2017/5/4/11493890793739-Ether-Women-Blue-Loose-Solid-Culottes-2601493890793449-1.jpg",
                    "mrp": 1999,
                    "price": 499,
                    "discount": 1500,
                    "brand": "ether",
                    "rating": 4.1,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Vero-Moda/Vero-Moda-Women-Blue-Solid-High-Rise-Trouser/19544984/buy",
                    "productId": 19544984,
                    "product": "Vero Moda Women Blue Solid High-Rise Trouser",
                    "productName": "Vero Moda Women Blue Solid High-Rise Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19544984/2022/8/18/d188f8ef-1480-4da2-8cf7-601c13ef98711660801494144VeroModaWomenBlueHigh-RiseTrousers1.jpg",
                    "mrp": 2299,
                    "price": 689,
                    "discount": 1610,
                    "brand": "Vero Moda",
                    "rating": 4.1,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Straight-Fit-Trousers/17162204/buy",
                    "productId": 17162204,
                    "product": "Tokyo Talkies Women Blue Straight Fit Trousers",
                    "productName": "Tokyo Talkies Women Blue Straight Fit Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/17162204/2022/2/15/f762e9b2-09fd-4572-b88a-3ea89f6340421644918404499TokyoTalkiesWomenBlueStraightFitTrousers1.jpg",
                    "mrp": 1449,
                    "price": 565,
                    "discount": 884,
                    "brand": "Tokyo Talkies",
                    "rating": 4.1,
                    "displayDiscountLabel": "(61% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Mast--Harbour/Mast--Harbour-Women-Chambray-Cargos-Trousers/21504532/buy",
                    "productId": 21504532,
                    "product": "Mast & Harbour Women Chambray Cargos Trousers",
                    "productName": "Mast & Harbour Women Chambray Cargos Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21504532/2023/2/8/1890b2e0-3e0b-4d80-ba1a-f2a9632485aa1675837099691-Mast--Harbour-Women-Blue-Chambray-Cargos-Trousers-3041675837-3.jpg",
                    "mrp": 2199,
                    "price": 879,
                    "discount": 1320,
                    "brand": "Mast & Harbour",
                    "rating": 4.1,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Vero-Moda/Vero-Moda-Women-Blue-High-Rise-Pleated-Crop-Trouser/19600470/buy",
                    "productId": 19600470,
                    "product": "Vero Moda Women Blue High-Rise Pleated Crop Trouser",
                    "productName": "Vero Moda Women Blue High-Rise Pleated Crop Trouser",
                    "searchImage": "http://assets.myntassets.com/assets/images/19600470/2022/8/22/b246ea5c-52f9-443f-bfd9-986631668c011661164052954Trousers1.jpg",
                    "mrp": 2799,
                    "price": 1259,
                    "discount": 1540,
                    "brand": "Vero Moda",
                    "rating": 4.5,
                    "displayDiscountLabel": "(55% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Flared-Trousers/15026848/buy",
                    "productId": 15026848,
                    "product": "Tokyo Talkies Women Blue Flared Trousers",
                    "productName": "Tokyo Talkies Women Blue Flared Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/15026848/2021/8/4/0f09489c-f2c0-401a-8b96-896846dd81991628076404331Trousers1.jpg",
                    "mrp": 1499,
                    "price": 524,
                    "discount": 975,
                    "brand": "Tokyo Talkies",
                    "rating": 3.8,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Trousers/Mast--Harbour/Mast--Harbour-Women-Solid-Parallel-Trousers/21504504/buy",
                    "productId": 21504504,
                    "product": "Mast & Harbour Women Solid Parallel Trousers",
                    "productName": "Mast & Harbour Women Solid Parallel Trousers",
                    "searchImage": "http://assets.myntassets.com/assets/images/21504504/2023/2/9/35d4af80-94f2-4f7a-9004-756384e53ee21675943993352-Mast--Harbour-Women-Trousers-7031675943992566-4.jpg",
                    "mrp": 2199,
                    "price": 1099,
                    "discount": 1100,
                    "brand": "Mast & Harbour",
                    "rating": 4.2,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/116766/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "postId": 116766,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 0,
                "products": [
                15092134,
                17398604,
                19202762,
                1741898,
                19544984,
                17162204,
                21504532,
                19600470,
                15026848,
                21504504,
                14136072,
                19871154,
                16233430,
                15221814,
                20466420,
                20811944,
                2039873,
                16233442,
                15136532,
                16699328,
                20735716,
                17787870
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/a657fdf3-3bf0-4638-822f-93d3a4d99f281683482549270-IMG_1030.jpg",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "6457e7464fe1226fb393a0e0",
                    "url": "https://matrix.myntassets.com/general/6457e746a6fb465328767bf9/master.m3u8"
                    }
                }
                ]
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "a3afdb7c.a6c3.445b.bdd9.2577f7132582eFnh37UTUs",
                "uniqueHandle": "outlanSrish",
                "name": "Srishti Nadhani",
                "description": "StyleSquad\nBlogger. Foodie. Traveller. Meme lover",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/a55edc64-0f6d-4c0b-ae4e-606be51018331649327764529-Srishti-Nadhani.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/9/8/1f726c1c-d81b-4bec-b079-3090da96ae341599554792832-croppedImage-1599554792184.jpg",
                    "resolution": "1198X1331",
                    "aspectRatio": 0.9
                },
                "posts": 473,
                "followers": 5986,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "daf0c607-35f4-44bf-b6b4-68533565e5e5"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "text": "Always a fan of brands that turn classic pieces into fresh, new styles with reimagined twists and knot details while raising the style quotient. <Hashtag id=womenshirts>womenshirts</Hashtag> <Hashtag id=mastandharbour>mastandharbour</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=whiteshirt>whiteshirt</Hashtag> <Hashtag id=solidswomen>solidswomen</Hashtag>",
                "productPills": [
                {
                    "landingPageUrl": "Shirts/Roadster/Roadster-Women-White-Regular-Fit-Casual-Shirt/18489356/buy",
                    "productId": 18489356,
                    "product": "Roadster Women White Regular Fit Casual Shirt",
                    "productName": "Roadster Women White Regular Fit Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/18489356/2022/6/10/b6a316f9-9a86-4189-9ae4-0ed77de383ac1654841690784-Roadster-Women-Shirts-9011654841690242-1.jpg",
                    "mrp": 1599,
                    "price": 799,
                    "discount": 800,
                    "brand": "Roadster",
                    "rating": 3.9,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Remanika/Remanika-Women-Comfort-Pure-Cotton-Casual-Shirt/21104880/buy",
                    "productId": 21104880,
                    "product": "Remanika Women Comfort Pure Cotton Casual Shirt",
                    "productName": "Remanika Women Comfort Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21104880/2022/12/7/e5a3e774-1577-44e4-b4aa-17f4b436d35f1670436504707RemanikaWomenWhiteComfortCasualShirt1.jpg",
                    "mrp": 2200,
                    "price": 1540,
                    "discount": 660,
                    "brand": "Remanika",
                    "rating": 0,
                    "displayDiscountLabel": "(30% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/The-Roadster-Lifestyle-Co-Pure-Cotton-Oversized-Shirt/21981930/buy",
                    "productId": 21981930,
                    "product": "The Roadster Lifestyle Co. Pure Cotton Oversized Shirt",
                    "productName": "The Roadster Lifestyle Co. Pure Cotton Oversized Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21981930/2023/3/1/7f5ceaf0-3682-4dd5-a424-afc777de12b91677659940118-Roadster-Women-Shirts-9591677659939590-1.jpg",
                    "mrp": 1499,
                    "price": 1499,
                    "discount": 0,
                    "brand": "Roadster",
                    "rating": 4.1,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/The-Roadster-Lifestyle-Co-Pure-Cotton-Waist-Tie-Up-Shirt/21981954/buy",
                    "productId": 21981954,
                    "product": "The Roadster Lifestyle Co. Pure Cotton Waist Tie-Up Shirt",
                    "productName": "The Roadster Lifestyle Co. Pure Cotton Waist Tie-Up Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/21981954/2023/3/1/e64749c3-0e3f-48c8-bae4-a35b728e02991677656525842-Roadster-Women-Shirts-8221677656525242-1.jpg",
                    "mrp": 1899,
                    "price": 999,
                    "discount": 900,
                    "brand": "Roadster",
                    "rating": 0,
                    "displayDiscountLabel": "(Rs. 900 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Tokyo-Talkies/Tokyo-Talkies-Typography-Printed-Cotton-Casual-Shirt/22427538/buy",
                    "productId": 22427538,
                    "product": "Tokyo Talkies Typography Printed Cotton Casual Shirt",
                    "productName": "Tokyo Talkies Typography Printed Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/22427538/2023/3/19/3d2e0a8e-6b59-4433-bfa2-1d557a83cfe31679165971469TokyoTalkiesWomenWhiteOpaqueCasualShirt1.jpg",
                    "mrp": 1799,
                    "price": 467,
                    "discount": 1332,
                    "brand": "Tokyo Talkies",
                    "rating": 0,
                    "displayDiscountLabel": "(74% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/encore-by-INVICTUS/encore-by-INVICTUS-Women-White--Solid-Casual-Shirt/19086786/buy",
                    "productId": 19086786,
                    "product": "encore by INVICTUS Women White  Solid Casual Shirt",
                    "productName": "encore by INVICTUS Women White  Solid Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/19086786/2022/9/2/fc1b50e8-c5ba-470f-84c4-58ceae321b031662094146756-encore-by-INVICTUS-Women-Shirts-5271662094146136-1.jpg",
                    "mrp": 1298,
                    "price": 389,
                    "discount": 909,
                    "brand": "encore by INVICTUS",
                    "rating": 4.1,
                    "displayDiscountLabel": "(70% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Tokyo-Talkies/Tokyo-Talkies-Women-White-Regular-Fit-Cotton-Casual-Shirt/17445980/buy",
                    "productId": 17445980,
                    "product": "Tokyo Talkies Women White Regular Fit Cotton Casual Shirt",
                    "productName": "Tokyo Talkies Women White Regular Fit Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/17445980/2022/3/9/9870152a-8717-4e25-a25f-d9e38bdef0751646819211725TokyoTalkiesWomenWhiteCasualShirt1.jpg",
                    "mrp": 1199,
                    "price": 419,
                    "discount": 780,
                    "brand": "Tokyo Talkies",
                    "rating": 4.3,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Roadster/Roadster-Women-White-Classic-Pure-Cotton-Casual-Shirt/18173280/buy",
                    "productId": 18173280,
                    "product": "Roadster Women White Classic Pure Cotton Casual Shirt",
                    "productName": "Roadster Women White Classic Pure Cotton Casual Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/18173280/2022/5/30/b877215b-9905-448b-947b-7e91b118d2dd1653895291676-Roadster-Womens-Casual-Shirt-9641653895291150-1.jpg",
                    "mrp": 1599,
                    "price": 799,
                    "discount": 800,
                    "brand": "Roadster",
                    "rating": 4.4,
                    "displayDiscountLabel": "(50% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/Styli/Styli-Women-Tie-Up-Shirt-Style-Top/22192106/buy",
                    "productId": 22192106,
                    "product": "Styli Women Tie-Up Shirt Style Top",
                    "productName": "Styli Women Tie-Up Shirt Style Top",
                    "searchImage": "http://assets.myntassets.com/assets/images/22192106/2023/3/2/b7d5c625-f0ac-471a-b616-d621da608e8a1677746571700StyliWomenWhiteShirt1.jpg",
                    "mrp": 849,
                    "price": 721,
                    "discount": 128,
                    "brand": "Styli",
                    "rating": 0,
                    "displayDiscountLabel": "(15% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Shirts/HERENOW/HERENOW-Women-White-Casual-Button-Shirt/20797684/buy",
                    "productId": 20797684,
                    "product": "HERE&NOW Women White Casual Button Shirt",
                    "productName": "HERE&NOW Women White Casual Button Shirt",
                    "searchImage": "http://assets.myntassets.com/assets/images/20797684/2022/11/17/77ee5d88-b63a-425e-9a2f-b128a5831d9d1668698720512Shirts1.jpg",
                    "mrp": 2490,
                    "price": 871,
                    "discount": 1619,
                    "brand": "HERE&NOW",
                    "rating": 0,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                }
                ],
                "postId": 117668,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 1,
                "elementId": "POST_IMAGE",
                "products": [
                21258348,
                18489356,
                21104880,
                21981930,
                21981954,
                22427538,
                19086786,
                17445980,
                18173280,
                22192106,
                20797684,
                20168884,
                14077924,
                18173282,
                21751218,
                13398886,
                21559168,
                19494140,
                21728336,
                17608676,
                21881752
                ],
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/11/d4f5cd19-b2b8-412c-84ed-a843c403c0b21683785669870-croppedImage-1683785668169.jpg",
                    "resolution": "3648X4864",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/9ec1912d-dd9e-46b3-89dc-2ff67465aef21683728062717-R6A_7998.JPG",
                    "resolution": "3648X5472",
                    "aspectRatio": 0.67
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/8229e8a7-00cc-4df2-9c29-9b0fed54e7351683728062740-R6A_8006.JPG",
                    "resolution": "3648X5472",
                    "aspectRatio": 0.67
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/117668/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                }
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "9de977f3.5da4.4398.9cba.86fc95dd1a2ewB3wPmf1Id",
                "uniqueHandle": "aswathibalakrishnann",
                "name": "Aswathi Balakrishnan",
                "description": "StyleSquad\nCivil engineer turned fashion and lifestyle influencer with an interest in beauty",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/55c132aa-a3ba-493c-8155-27351cc9c05d1649325063248-Mayur-Saroj-Rajput.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/3/28/07939544-6d8d-47a1-a9ee-b125dd83e28a1585387171845-croppedImage-1585387542461.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 428,
                "followers": 5894,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "a06de1ba-454d-42a0-bca1-0e50a5f294ab"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "27e14527.a17d.4c41.861a.4f7152f9c0dd35MXBkbHV5",
                "uniqueHandle": "nupurmunot",
                "name": "Nupur Munot",
                "description": "StyleSquad\nHere to have some fun with fashion & beauty! Follow for loads of cool tips and tricks.",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2022/4/7/4343d748-299a-45da-921b-9a9528b2fb681649327982959-Nupur-Munot.png",
                    "resolution": "500X500",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2020/2/24/00240a06-b9ca-4be2-962c-cc6eb3206e941582537580949-croppedImage.jpg",
                    "resolution": "1080X1200",
                    "aspectRatio": 0.9
                },
                "posts": 553,
                "followers": 9101,
                "type": "INFLUENCER"
                },
                "subTitle": "3 hours ago",
                "followDisplayType": "TEXT"
            },
            "contentProps": {
                "media": [
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/8117bf8b-b450-47d3-af49-fa14c691a2351683739611641-IMG_2023_05_03-9_50_36_8340-am_AE8F3DD7.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/89da5a6f-81e1-4c36-825c-1ad1d2900cba1683739611593-IMG_2023_05_03-9_50_32_5220-am_53E49946.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/f9d1ed74-b5ee-4baa-86f1-20f378a4ebc31683739611685-IMG_2023_05_03-9_50_48_6230-am_F67466CD.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                },
                {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/10/44e0e10f-53e2-4b73-aa63-b8a536dba4721683739611731-IMG_2023_05_03-9_50_52_9880-am_8C181137.JPEG",
                    "resolution": "3024X4032",
                    "aspectRatio": 0.75
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/117701/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "postId": 117701,
                "isLiked": "NONE",
                "isBookmarked": false,
                "likeCount": 2,
                "text": "When your outfit is a work of art! This dhoti set look is everything! 🦋🌼 <Hashtag id=dhotiset>dhotiset</Hashtag> <Hashtag id=womenfashion>womenfashion</Hashtag> <Hashtag id=womenfusionwear>womenfusionwear</Hashtag> <Hashtag id=womenethnicwear>womenethnicwear</Hashtag> <Hashtag id=womenkurtasets>womenkurtasets</Hashtag> <Hashtag id=sangria>sangria</Hashtag> <Hashtag id=womenfootwear>womenfootwear</Hashtag> <Hashtag id=tokyotalkies>tokyotalkies</Hashtag> <Hashtag id=tealwomen>tealwomen</Hashtag> <Hashtag id=sangriawomen>sangriawomen</Hashtag>",
                "products": [
                20497918,
                20500656,
                19268072,
                22402536,
                22402522,
                19226802,
                22856818,
                13830404,
                12134770,
                7751844,
                18602782,
                13830384,
                19964322,
                14550232,
                20500648,
                14550230,
                19964342,
                20076954,
                19964358,
                16682316,
                20572086,
                20500660
                ],
                "elementId": "POST_IMAGE",
                "productPills": [
                {
                    "landingPageUrl": "Kurta-Sets/Sangria/Sangria-Printed-Shoulder-Straps-A-Line-Kurti-with-Dhoti-Pants/20497918/buy",
                    "productId": 20497918,
                    "product": "Sangria Printed Shoulder Straps A-Line Kurti with Dhoti Pants",
                    "productName": "Sangria Printed Shoulder Straps A-Line Kurti with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/20497918/2023/2/2/de3898cf-d457-460f-bd6e-457af0d0adad1675315292659-Sangria-Women-Kurta-Sets-9411675315291833-1.jpg",
                    "mrp": 3799,
                    "price": 949,
                    "discount": 2850,
                    "brand": "Sangria",
                    "rating": 0,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dhotis/Shae-by-SASSAFRAS/Shae-by-SASSAFRAS-Women-Olive-Green-Embroidered-Mirror-Work-Dhoti-Pants/19268072/buy",
                    "productId": 19268072,
                    "product": "Shae by SASSAFRAS Women Olive Green Embroidered Mirror Work Dhoti Pants",
                    "productName": "Shae by SASSAFRAS Women Olive Green Embroidered Mirror Work Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/19268072/2022/8/1/02098b38-da4f-4dc9-bd85-bcb26809c1991659360230053-Shae-by-SASSAFRAS-Women-Trousers-5701659360229536-1.jpg",
                    "mrp": 2199,
                    "price": 879,
                    "discount": 1320,
                    "brand": "Shae by SASSAFRAS",
                    "rating": 3.6,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Label-Shaurya-Sanadhya/Label-Shaurya-Sanadhya-Ethnic-Motifs-Embroidered-Sequined-Kurta-with-Dhoti-Pants--Dupatta/22402536/buy",
                    "productId": 22402536,
                    "product": "Label Shaurya Sanadhya Ethnic Motifs Embroidered Sequined Kurta with Dhoti Pants & Dupatta",
                    "productName": "Label Shaurya Sanadhya Ethnic Motifs Embroidered Sequined Kurta with Dhoti Pants & Dupatta",
                    "searchImage": "http://assets.myntassets.com/assets/images/22402536/2023/3/18/fa80b127-827e-499e-8feb-f2a3d009c7bf1679146296013MauveDhotiSet1.jpg",
                    "mrp": 5599,
                    "price": 0,
                    "discount": 0,
                    "brand": "Label Shaurya Sanadhya",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Label-Shaurya-Sanadhya/Label-Shaurya-Sanadhya-Embroidered-Zari-Kurta-with-Dhoti-Pants--Dupatta/22402522/buy",
                    "productId": 22402522,
                    "product": "Label Shaurya Sanadhya Embroidered Zari Kurta with Dhoti Pants & Dupatta",
                    "productName": "Label Shaurya Sanadhya Embroidered Zari Kurta with Dhoti Pants & Dupatta",
                    "searchImage": "http://assets.myntassets.com/assets/images/22402522/2023/3/18/32ab21f2-3887-48f4-8863-2e8b7de3c0901679146590932PeachAndPistaDhotiSet1.jpg",
                    "mrp": 5650,
                    "price": 0,
                    "discount": 0,
                    "brand": "Label Shaurya Sanadhya",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Vishudh/Vishudh-Women-Green-Solid-Kaftan-Kurta-With-Printed-Dhoti-Pants/19226802/buy",
                    "productId": 19226802,
                    "product": "Vishudh Women Green Solid Kaftan Kurta With Printed Dhoti Pants",
                    "productName": "Vishudh Women Green Solid Kaftan Kurta With Printed Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/19226802/2022/7/22/ec75b6ce-6f0e-41a0-9850-1f45b40fd8c81658501214715KurtaSets1.jpg",
                    "mrp": 3299,
                    "price": 1249,
                    "discount": 2050,
                    "brand": "Vishudh",
                    "rating": 3.8,
                    "displayDiscountLabel": "(Rs. 2050 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/AKKRITI-BY-PANTALOONS/AKKRITI-BY-PANTALOONS-Geometric-Printed-Pleated-Sequinned-Kurti-With-Dhoti-Pants/22856818/buy",
                    "productId": 22856818,
                    "product": "AKKRITI BY PANTALOONS Geometric Printed Pleated Sequinned Kurti With Dhoti Pants",
                    "productName": "AKKRITI BY PANTALOONS Geometric Printed Pleated Sequinned Kurti With Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/22856818/2023/4/21/c3141e5f-8f74-43a4-9244-6e74607330191682089069154KurtaSets1.jpg",
                    "mrp": 2499,
                    "price": 2499,
                    "discount": 0,
                    "brand": "AKKRITI BY PANTALOONS",
                    "rating": 0,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Sangria/Sangria-Women-Purple-Ethnic-Motifs-Printed-Pure-Cotton-Kurta-with-Dhoti-Pants--Stole/13830404/buy",
                    "productId": 13830404,
                    "product": "Sangria Women Purple Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants & Stole",
                    "productName": "Sangria Women Purple Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants & Stole",
                    "searchImage": "http://assets.myntassets.com/assets/images/13830404/2021/8/2/15a08a8e-7a1b-4c92-8b9a-112c6a1647981627899282552-Sangria-Women-Kurta-Sets-7451627899281839-1.jpg",
                    "mrp": 2999,
                    "price": 1199,
                    "discount": 1800,
                    "brand": "Sangria",
                    "rating": 4.3,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Off-White--Pink-Printed-Kurta-with-Dhoti-Pants/12134770/buy",
                    "productId": 12134770,
                    "product": "Anouk Women Off-White & Pink Printed Kurta with Dhoti Pants",
                    "productName": "Anouk Women Off-White & Pink Printed Kurta with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/12134770/2020/12/14/85089acf-4159-410c-b173-26d8ad7f9eeb1607950721245-Anouk-Women-Kurta-Sets-1761607950719320-6.jpg",
                    "mrp": 3399,
                    "price": 1189,
                    "discount": 2210,
                    "brand": "Anouk",
                    "rating": 3.9,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Indigo-Printed-Kurti-with-Dhoti-Pants/7751844/buy",
                    "productId": 7751844,
                    "product": "Anouk Women Indigo Printed Kurti with Dhoti Pants",
                    "productName": "Anouk Women Indigo Printed Kurti with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/7751844/2019/2/25/abf4e2d3-d7ce-4ae5-985b-b0332ad943241551081998835-Anouk-Women-Navy-Blue--Cream-Coloured-Printed-Kurti-with-Pat-1.jpg",
                    "mrp": 3299,
                    "price": 1154,
                    "discount": 2145,
                    "brand": "Anouk",
                    "rating": 4.2,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Kurta-Sets/Anouk/Anouk-Women-Green-Ethnic-Motifs-Printed-Pure-Cotton-Kurta-with-Dhoti-Pants/18602782/buy",
                    "productId": 18602782,
                    "product": "Anouk Women Green Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants",
                    "productName": "Anouk Women Green Ethnic Motifs Printed Pure Cotton Kurta with Dhoti Pants",
                    "searchImage": "http://assets.myntassets.com/assets/images/18602782/2022/10/6/7e8ec6af-9580-49fe-a853-8c2ed86600ac1665057052682-Anouk-Women-Kurta-Sets-7541665057052165-1.jpg",
                    "mrp": 3999,
                    "price": 999,
                    "discount": 3000,
                    "brand": "Anouk",
                    "rating": 4.1,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                }
                ]
            }
            },
            "componentUId": "13929b96-9303-4eb7-83db-3ce3d9ce24b6"
        },
        {
            "type": "MynstaPost",
            "elementId": "TitleCard",
            "props": {
            "contentProps": {
                "isBookmarked": false,
                "productPills": [
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Chic-Brown-Checked-Summer-Gingham-Dress/17295896/buy",
                    "productId": 17295896,
                    "product": "KASSUALLY Women Chic Brown Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Chic Brown Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295896/2022/3/9/bf471116-3a0d-46a6-8358-62244cab41a01646824948492-KASSUALLY-Women-Dresses-291646824947931-1.jpg",
                    "mrp": 2299,
                    "price": 827,
                    "discount": 1472,
                    "brand": "KASSUALLY",
                    "rating": 3.9,
                    "displayDiscountLabel": "(64% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Elegant-Purple-Checked-Summer-Gingham-Dress/17295902/buy",
                    "productId": 17295902,
                    "product": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295902/2022/3/9/7ab45c39-3167-4dc0-b6bc-7775948b3d841646824961559-KASSUALLY-Women-Dresses-9541646824960963-1.jpg",
                    "mrp": 2199,
                    "price": 1499,
                    "discount": 700,
                    "brand": "KASSUALLY",
                    "rating": 3.6,
                    "displayDiscountLabel": "(Rs. 700 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KETCH/KETCH-V-Neck-Checked-Pinafore-Dress/21234800/buy",
                    "productId": 21234800,
                    "product": "KETCH V-Neck Checked Pinafore Dress",
                    "productName": "KETCH V-Neck Checked Pinafore Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/21234800/2022/12/17/d724c052-7fbd-4c9c-80f7-90a725c5139d1671294599613Dresses1.jpg",
                    "mrp": 749,
                    "price": 399,
                    "discount": 350,
                    "brand": "KETCH",
                    "rating": 4.4,
                    "displayDiscountLabel": "(Rs. 350 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/HERENOW/HERENOW-Women-Brown--Black-Checked-Sheath-Dress/18367008/buy",
                    "productId": 18367008,
                    "product": "HERE&NOW Women Brown & Black Checked Sheath Dress",
                    "productName": "HERE&NOW Women Brown & Black Checked Sheath Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/18367008/2022/10/12/a175310c-7f00-42f7-9eae-0b6ac611a1d81665548479248-HERENOW-Women-Dresses-6301665548478710-1.jpg",
                    "mrp": 1699,
                    "price": 424,
                    "discount": 1275,
                    "brand": "HERE&NOW",
                    "rating": 4.2,
                    "displayDiscountLabel": "(75% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Trendyol/Trendyol-Brown--Off-White-Checked-A-Line-Dress/19311968/buy",
                    "productId": 19311968,
                    "product": "Trendyol Brown & Off White Checked A-Line Dress",
                    "productName": "Trendyol Brown & Off White Checked A-Line Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/19311968/2022/8/8/2fdbca4c-e805-4042-b30e-ee27a7b989351659934160477ShirtsTrendyolWomenJumpsuitTrendyolWomenShirtsTrendyolWomenJ1.jpg",
                    "mrp": 2299,
                    "price": 919,
                    "discount": 1380,
                    "brand": "Trendyol",
                    "rating": 0,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/HM/HM-Brown-Twill-Shirt-Dress/19892814/buy",
                    "productId": 19892814,
                    "product": "H&M Brown Twill Shirt Dress",
                    "productName": "H&M Brown Twill Shirt Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/19892814/2022/9/9/1dec670d-8cf1-4078-b007-68234628b4e11662742927147Twillshirtdress1.jpg",
                    "mrp": 2299,
                    "price": 2299,
                    "discount": 0,
                    "brand": "H&M",
                    "rating": 4.3,
                    "displayDiscountLabel": "",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Style-Quotient/Style-Quotient-Purple--White-Checked-Dress/16847484/buy",
                    "productId": 16847484,
                    "product": "Style Quotient Purple & White Checked Dress",
                    "productName": "Style Quotient Purple & White Checked Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/16847484/2022/2/24/08929526-d78b-45b4-a119-b07942b4543f1645681890326-Style-Quotient-Women-Dresses-6301645681889859-1.jpg",
                    "mrp": 1999,
                    "price": 699,
                    "discount": 1300,
                    "brand": "Style Quotient",
                    "rating": 0,
                    "displayDiscountLabel": "(65% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/iki-chic/Iki-Chic-Women-Purple-Checked-Fril-Hem-Dress/15023214/buy",
                    "productId": 15023214,
                    "product": "Iki Chic Women Purple Checked Fril Hem Dress",
                    "productName": "Iki Chic Women Purple Checked Fril Hem Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/15023214/2021/8/4/a69d1f8f-aff0-4db7-b5d9-a6bef05bbd391628065613806ikichicPurpleDress1.jpg",
                    "mrp": 2599,
                    "price": 1065,
                    "discount": 1534,
                    "brand": "iki chic",
                    "rating": 0,
                    "displayDiscountLabel": "(59% OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/KASSUALLY/KASSUALLY-Women-Elegant-Purple-Checked-Summer-Gingham-Dress/17295888/buy",
                    "productId": 17295888,
                    "product": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "productName": "KASSUALLY Women Elegant Purple Checked Summer Gingham Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17295888/2022/3/10/97ee9aed-daa4-4599-a147-a7f8b6d8c9971646888810351-KASSUALLY-Women-Dresses-2941646888809876-1.jpg",
                    "mrp": 2399,
                    "price": 1499,
                    "discount": 900,
                    "brand": "KASSUALLY",
                    "rating": 3.2,
                    "displayDiscountLabel": "(Rs. 900 OFF)",
                    "available": true
                },
                {
                    "landingPageUrl": "Dresses/Trendyol/Trendyol-Women-Purple--White-Checked-A-Line-Dress/17800490/buy",
                    "productId": 17800490,
                    "product": "Trendyol Women Purple & White Checked A-Line Dress",
                    "productName": "Trendyol Women Purple & White Checked A-Line Dress",
                    "searchImage": "http://assets.myntassets.com/assets/images/17800490/2022/5/2/36748e23-78b7-487b-8df7-4734a333454f1651470634161DressesTrendyolWomenDressesTrendyolWomen1.jpg",
                    "mrp": 2399,
                    "price": 959,
                    "discount": 1440,
                    "brand": "Trendyol",
                    "rating": 0,
                    "displayDiscountLabel": "(60% OFF)",
                    "available": true
                }
                ],
                "commentsData": {
                "totalComments": 0,
                "viewAllCommentsUrl": "/studio/114647/comments",
                "comment": {
                    "authorName": "",
                    "commentText": ""
                },
                "inputBox": {
                    "placeHolderText": "Be the first to comment",
                    "addCommentUrl": "/v1/mynsta/comment/create"
                },
                "topCommentHidden": false
                },
                "elementId": "POST_VIDEO",
                "postId": 114647,
                "text": "dressed up for a party called summer <Hashtag id=myntrastlecastcrew>myntrastlecastcrew</Hashtag> <Hashtag id=kassually>kassually</Hashtag> <Hashtag id=womencasualwear>womencasualwear</Hashtag> <Hashtag id=dressesforwomen>dressesforwomen</Hashtag> <Hashtag id=springsummer>springsummer</Hashtag> <Hashtag id=dresses>dresses</Hashtag>",
                "products": [
                17295896,
                17295902,
                21234800,
                18367008,
                19311968,
                19892814,
                16847484,
                15023214,
                17295888,
                17800490
                ],
                "media": [
                {
                    "type": "VIDEO",
                    "videoBcId": "STUDIO",
                    "src": "https://assets.myntassets.com/assets/images/2023/5/7/6c8b4bf4-ccb8-4734-8a01-f28596fd667d1683445089436-videoId-6457555106dcecb8eaebae45.png",
                    "resolution": "1080X1440",
                    "aspectRatio": 0.75,
                    "brightcove": {
                    "id": "STUDIO"
                    },
                    "matrix": {
                    "id": "64575551a6fb465328767be2",
                    "url": "https://matrix.myntassets.com/general/6457555192b2aa2b8f176c52/master.m3u8"
                    }
                }
                ],
                "isLiked": "NONE",
                "likeCount": 0
            },
            "titleProps": {
                "elementId": "ImageAttributedTitleCard",
                "id": "ImageAttributedTitleCard",
                "author": {
                "uidx": "8aa4319f.346a.465f.8e87.3907b984401dtdU7FseQN6",
                "uniqueHandle": "yogitadahiya14",
                "name": "yogitadahiya14",
                "description": "Fashion is just another accessory for someone with great style.",
                "profileImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/1/2/76b07ed8-6cde-4b96-b108-8ee1c2e20c9f1672644656804-croppedImage-1672644606300.jpg",
                    "resolution": "3024X3024",
                    "aspectRatio": 1
                },
                "coverImage": {
                    "type": "IMAGE",
                    "src": "https://assets.myntassets.com/assets/images/2023/1/2/5e487d79-0580-4152-9900-f5861663d80a1672644686910-croppedImage-1672644636389.jpg",
                    "resolution": "3000X3333",
                    "aspectRatio": 0.9
                },
                "posts": 21,
                "followers": 52,
                "type": "INFLUENCER"
                },
                "subTitle": "2 hours ago",
                "followDisplayType": "TEXT"
            }
            },
            "componentUId": "38927864-38bc-4075-849b-d4e87a76d593"
        }
        ]
    },
    "suggesed_products": { 
        "response": {
              "screen": {
                "elementId": "FlatViewTemplate",
                "headerMeta": {
                  "colorTheme": "",
                  "bgColor": ""
                },
                "name": "Product List"
              },
              "components": [
                {
                  "type": "ProductListViewModel",
                  "elementId": "ItemsList",
                  "props": {
                    "contentProps": {
                      "itemMapperId": "InfluencerItem",
                      "extraParams": {
                        "requestObject": {
                          "requestType": "POST",
                          "path": "/promotedStyles",
                          "requestBody": {
                            "pageNumber": 2,
                            "ids": [
                              14284110,
                              15580336,
                              11359560,
                              14408240,
                              16228032,
                              15580090,
                              14284114,
                              15092622
                            ],
                            "nextIds": [
                              20918378,
                              11359562,
                              15580476,
                              15580060,
                              15580426
                            ],
                            "feedType": "PAGINATION",
                            "idsPerPage": 8
                          }
                        },
                        "viewRelatedParams": {
                          "numColumns": 2
                        }
                      },
                      "elementId": "ProductItemView",
                      "items": [
                        {
                          "landingPageUrl": "Eyeshadow/LA-colors/LA-Colors-Cool-Color-Eyeshadow-Palette-CES137/6534789/buy",
                          "productId": 6534789,
                          "product": "L.A. Colors Cool Color Eyeshadow Palette CES137",
                          "productName": "L.A. Colors Cool Color Eyeshadow Palette CES137",
                          "searchImage": "http://assets.myntassets.com/assets/images/6534789/2022/12/2/a484260e-45aa-4a2f-ae7f-af38adfe19471669980805264-LA-Colors-Cool-Color-Eyeshadow-Palette-CES137-54216699808050-1.jpg",
                          "sizes": "15-20 ML",
                          "mrp": 850,
                          "price": 425,
                          "additionalInfo": "Cool Eyeshadow Palette CES137",
                          "brand": "L.A colors",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 425,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 29988300,
                              "label": "15-20 ML",
                              "inventory": 172,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 49,
                          "systemAttributes": [
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Ultimate-Eyeshadow-Palette--Shade-2/15580024/buy",
                          "productId": 15580024,
                          "product": "SWISS BEAUTY Ultimate Eyeshadow Palette -Shade 2",
                          "productName": "SWISS BEAUTY Ultimate Eyeshadow Palette -Shade 2",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580024/2021/10/18/2b2ee3a8-0070-4ef8-a6c4-b55023a46a401634519917993-SWISS-BEAUTY-Women-Eyeshadow-9881634519917716-1.jpg",
                          "sizes": "4-6 ML",
                          "mrp": 269,
                          "price": 201,
                          "additionalInfo": "Eyeshadow Palette -Shade 2",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 68,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236182,
                              "label": "4-6 ML",
                              "inventory": 1664,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 885,
                          "systemAttributes": [
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/MARS/MARS-Back-to-Basics-Eyeshadow-Palette-Shade-02/16228114/buy",
                          "productId": 16228114,
                          "product": "MARS Back to Basics Eyeshadow Palette Shade-02",
                          "productName": "MARS Back to Basics Eyeshadow Palette Shade-02",
                          "searchImage": "http://assets.myntassets.com/assets/images/16228114/2022/4/22/56cef970-fdfd-4e02-9b38-dd0e275f54bd1650616294793MARSBacktoBasicsEyeshadowPaletteShade-021.jpg",
                          "sizes": "20-30 ML",
                          "mrp": 299,
                          "price": 284,
                          "additionalInfo": "Back to Basics Palette",
                          "brand": "MARS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(5% OFF)",
                          "discount": 15,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Winter",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 51350399,
                              "label": "20-30 ML",
                              "inventory": 8600,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 1194,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/Maybelline/Maybelline-New-York-The-Nudes-Eyeshadow-Palette---Blush-9g/10849124/buy",
                          "productId": 10849124,
                          "product": "Maybelline New York The Nudes Eyeshadow Palette - Blush 9g",
                          "productName": "Maybelline New York The Nudes Eyeshadow Palette - Blush 9g",
                          "searchImage": "http://assets.myntassets.com/assets/images/10849124/2022/9/17/360d3eac-5932-4181-a929-0e1585148d3c1663412683529MaybellineNewYorkTheNudesEyeshadowPalette-Blush9g2.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 999,
                          "price": 749,
                          "additionalInfo": "Eyeshadow Palette - Blush",
                          "brand": "Maybelline",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 250,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 37297390,
                              "label": "6-10 ML",
                              "inventory": 2454,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 6778,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Ultimate-Eyeshadow-Palette---01/15580298/buy",
                          "productId": 15580298,
                          "product": "SWISS BEAUTY Ultimate Eyeshadow Palette - 01",
                          "productName": "SWISS BEAUTY Ultimate Eyeshadow Palette - 01",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580298/2021/10/20/f9f0398f-bf6f-460d-b110-82977e03a0541634727981028-SWISS-BEAUTY-Women-Eyeshadow-1591634727980787-1.jpg",
                          "sizes": "4-6 ML",
                          "mrp": 269,
                          "price": 201,
                          "additionalInfo": "Ultimate Eyeshadow Palette  01",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(25% OFF)",
                          "discount": 68,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236319,
                              "label": "4-6 ML",
                              "inventory": 1200,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 606,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/Maybelline/Maybelline-New-York-City-Mini-Eyeshadow-Palette---Westside-Roses/14284116/buy",
                          "productId": 14284116,
                          "product": "Maybelline New York City Mini Eyeshadow Palette - Westside Roses",
                          "productName": "Maybelline New York City Mini Eyeshadow Palette - Westside Roses",
                          "searchImage": "http://assets.myntassets.com/assets/images/14284116/2022/9/6/05dc97d1-cfaf-4ac0-bb21-46c46f31b70c1662439968236-Maybelline-New-York-City-Mini-Eyeshadow-Palette---Westside-R-1.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 780,
                          "price": 663,
                          "additionalInfo": "Eyeshadow - Westside Roses",
                          "brand": "Maybelline",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(15% OFF)",
                          "discount": 117,
                          "primaryColour": "Pink",
                          "category": "Eyeshadow",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 47590626,
                              "label": "6-10 ML",
                              "inventory": 278,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 314,
                          "systemAttributes": [
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/LA-colors/LA-colors-12-Color-Enchanting-Eyeshadow-Palette-Stocking-Suffer---Nude/17963784/buy",
                          "productId": 17963784,
                          "product": "L.A colors 12 Color Enchanting Eyeshadow Palette Stocking Suffer - Nude",
                          "productName": "L.A colors 12 Color Enchanting Eyeshadow Palette Stocking Suffer - Nude",
                          "searchImage": "http://assets.myntassets.com/assets/images/17963784/2022/9/17/3fad35f5-9f10-4c43-9268-3ccae37d82561663413540318LAcolors12ColorEnchantingEyeshadowPaletteStockingSuffer-Nude1.jpg",
                          "sizes": "6-10 ML",
                          "mrp": 499,
                          "price": 249,
                          "additionalInfo": "12 Color Eyeshadow - Nude",
                          "brand": "L.A colors",
                          "gender": "Unisex",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 250,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2022",
                          "inventoryInfo": [
                            {
                              "skuId": 55267410,
                              "label": "6-10 ML",
                              "inventory": 539,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 105,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Eyeshadow/SWISS-BEAUTY/SWISS-BEAUTY-Professional-HD-Eyeshadow-Palette---04/15580226/buy",
                          "productId": 15580226,
                          "product": "SWISS BEAUTY Professional HD Eyeshadow Palette - 04",
                          "productName": "SWISS BEAUTY Professional HD Eyeshadow Palette - 04",
                          "searchImage": "http://assets.myntassets.com/assets/images/15580226/2021/10/25/6aa7b76a-6c73-422b-b51d-2da1e9b8962e1635149089429-SWISS-BEAUTY-Women-Eyeshadow-5651635149089254-1.jpg",
                          "sizes": "30-50 ML",
                          "mrp": 1199,
                          "price": 599,
                          "additionalInfo": "HD Eyeshadow Palette - 04",
                          "brand": "SWISS BEAUTY",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(50% OFF)",
                          "discount": 600,
                          "primaryColour": "Multi",
                          "category": "Eyeshadow",
                          "season": "Summer",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 50236283,
                              "label": "30-50 ML",
                              "inventory": 270,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 374,
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "componentUId": "32600e8a-f47b-4f94-a061-368d1d70be11"
                }
              ]
        }
    },
    "recommended_products":{
            "response": {
              "screen": {
                "elementId": "FlatViewTemplate",
                "headerMeta": {
                  "colorTheme": "",
                  "bgColor": ""
                },
                "name": "Product List"
              },
              "components": [
                {
                  "type": "ProductListViewModel",
                  "elementId": "ItemsList",
                  "props": {
                    "contentProps": {
                      "extraParams": {
                        "viewRelatedParams": {
                          "numColumns": 2
                        },
                        "requestObject": {
                          "requestType": "POST",
                          "path": "/promotedStyles",
                          "requestBody": {
                            "type": "AUTHOR",
                            "idsPerPage": 15,
                            "pageNumber": 2,
                            "page": 11,
                            "uidx": "3e6ed766.cb56.4466.879d.e68e364d405aqrapo0TrNE"
                          }
                        }
                      },
                      "elementId": "ProductItemView",
                      "items": [
                        {
                          "landingPageUrl": "Skirts/StyleStone/StyleStone-Women-Blue-Solid-A-Line-Denim-Pencil-Skirt/6716798/buy",
                          "productId": 6716798,
                          "product": "StyleStone Women Blue Solid A-Line Denim Pencil Skirt",
                          "productName": "StyleStone Women Blue Solid A-Line Denim Pencil Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/6716798/2018/6/12/3fc88329-897f-4a8f-98a3-47d277163e201528794927167-na-6411528794925668-1.jpg",
                          "sizes": "28,30,32,34",
                          "mrp": 1599,
                          "price": 575,
                          "additionalInfo": "Women Denim Skirt",
                          "brand": "StyleStone",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(64% OFF)",
                          "discount": 1024,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 30416277,
                              "label": "28",
                              "inventory": 56,
                              "available": true
                            },
                            {
                              "skuId": 30416279,
                              "label": "30",
                              "inventory": 69,
                              "available": true
                            },
                            {
                              "skuId": 30416280,
                              "label": "32",
                              "inventory": 60,
                              "available": true
                            },
                            {
                              "skuId": 30416281,
                              "label": "34",
                              "inventory": 57,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 122,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Dresses/SASSAFRAS/SASSAFRAS-Black-Stretchable-Bodycon-Dress/7687328/buy",
                          "productId": 7687328,
                          "product": "SASSAFRAS Black Stretchable Bodycon Dress",
                          "productName": "SASSAFRAS Black Stretchable Bodycon Dress",
                          "searchImage": "http://assets.myntassets.com/assets/images/7687328/2018/10/29/e56f2d70-6cf2-4eea-8b42-2deae0570cf61540809457588-SASSAFRAS-Women-Dresses-9321540809457475-1.jpg",
                          "sizes": "XS,S,M,L,XL,XXL",
                          "mrp": 1799,
                          "price": 683,
                          "additionalInfo": "Stretchable Bodycon Dress",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(62% OFF)",
                          "discount": 1116,
                          "primaryColour": "Black",
                          "category": "Dresses",
                          "season": "Winter",
                          "year": "2018",
                          "inventoryInfo": [
                            {
                              "skuId": 32154921,
                              "label": "XS",
                              "inventory": 21,
                              "available": true
                            },
                            {
                              "skuId": 32154928,
                              "label": "S",
                              "inventory": 25,
                              "available": true
                            },
                            {
                              "skuId": 32154930,
                              "label": "M",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 32154932,
                              "label": "L",
                              "inventory": 16,
                              "available": true
                            },
                            {
                              "skuId": 32154934,
                              "label": "XL",
                              "inventory": 9,
                              "available": true
                            },
                            {
                              "skuId": 32154936,
                              "label": "XXL",
                              "inventory": 6,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 4656,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Kurtas/RANGMANCH-BY-PANTALOONS/RANGMANCH-BY-PANTALOONS-Women-White--Red-Printed-A-Line-Kurta/8534453/buy",
                          "productId": 8534453,
                          "product": "RANGMANCH BY PANTALOONS Women White & Red Printed A-Line Kurta",
                          "productName": "RANGMANCH BY PANTALOONS Women White & Red Printed A-Line Kurta",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2019/1/18/bc0d5a36-f327-4279-b2d5-66f69a4372db1547816867078-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 999,
                          "price": 999,
                          "additionalInfo": "Printed A-Line Kurta",
                          "brand": "RANGMANCH BY PANTALOONS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "primaryColour": "White",
                          "category": "Kurtas",
                          "season": "Spring",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 33111184,
                              "label": "XS"
                            },
                            {
                              "skuId": 33111185,
                              "label": "S",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 33111186,
                              "label": "M"
                            },
                            {
                              "skuId": 33111187,
                              "label": "L"
                            },
                            {
                              "skuId": 33111188,
                              "label": "XL"
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 20,
                          "isFastFashion": true
                        },
                        {
                          "landingPageUrl": "Kurtas/Ahalyaa/Ahalyaa-Women-Lime-Green--Off-White-Printed-A-Line-Kurta/9007925/buy",
                          "productId": 9007925,
                          "product": "Ahalyaa Women Lime Green & Off-White Printed A-Line Kurta",
                          "productName": "Ahalyaa Women Lime Green & Off-White Printed A-Line Kurta",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2019/3/11/5afb1cfd-a996-47da-92f7-7bc592afe9731552306926479-1.jpg",
                          "sizes": "S,M,L,XL,XXL",
                          "mrp": 3563,
                          "price": 1068,
                          "additionalInfo": "Printed A-Line Kurta",
                          "brand": "Ahalyaa",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(70% OFF)",
                          "discount": 2495,
                          "primaryColour": "Lime Green",
                          "category": "Kurtas",
                          "season": "Summer",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 33534385,
                              "label": "S"
                            },
                            {
                              "skuId": 33534386,
                              "label": "M"
                            },
                            {
                              "skuId": 33534388,
                              "label": "L"
                            },
                            {
                              "skuId": 33534389,
                              "label": "XL"
                            },
                            {
                              "skuId": 33534390,
                              "label": "XXL"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Roadster/Roadster-Women-Blue-Washed-Denim-Skirt/10058323/buy",
                          "productId": 10058323,
                          "product": "Roadster Women Blue Washed Denim Skirt",
                          "productName": "Roadster Women Blue Washed Denim Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10058323/2019/10/16/5a8ccaac-e1a8-4928-a531-f5a6948e97f81571214493824-Roadster-Women-Skirts-3041571214491397-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 2099,
                          "price": 629,
                          "additionalInfo": "Women Washed Denim Skirt",
                          "brand": "Roadster",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(70% OFF)",
                          "discount": 1470,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 34761317,
                              "label": "26"
                            },
                            {
                              "skuId": 34761319,
                              "label": "28",
                              "inventory": 15,
                              "available": true
                            },
                            {
                              "skuId": 34761321,
                              "label": "30",
                              "inventory": 3,
                              "available": true
                            },
                            {
                              "skuId": 34761325,
                              "label": "32",
                              "inventory": 2,
                              "available": true
                            },
                            {
                              "skuId": 34761327,
                              "label": "34",
                              "inventory": 3,
                              "available": true
                            },
                            {
                              "skuId": 47064639,
                              "label": "36",
                              "inventory": 5,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 518,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Yellow-Printed-Made-to-Measure-Lehenga--Blouse-with-Dupatta/10197727/buy",
                          "productId": 10197727,
                          "product": "Ethnovog Beige Yellow Printed Made to Measure Lehenga Blouse with Dupatta",
                          "productName": "Ethnovog Beige Yellow Printed Made to Measure Lehenga Blouse with Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/10197727/2022/2/28/5cbd5079-07a3-4f9b-a14b-4493a53365e01646052055937-EthnoVogue-Beige--Yellow-Printed-Made-to-Measure-Lehenga--Bl-1.jpg",
                          "sizes": "32/40,34/40,36/40,38/40,40/40,42/40",
                          "mrp": 7249,
                          "price": 5944,
                          "additionalInfo": "Made to Measure Lehenga & Blouse with Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(18% OFF)",
                          "discount": 1305,
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 34958445,
                              "label": "32/40"
                            },
                            {
                              "skuId": 34958453,
                              "label": "34/40"
                            },
                            {
                              "skuId": 34958459,
                              "label": "36/40"
                            },
                            {
                              "skuId": 34958460,
                              "label": "38/40"
                            },
                            {
                              "skuId": 34958461,
                              "label": "40/40"
                            },
                            {
                              "skuId": 34958462,
                              "label": "42/40"
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 6,
                          "isFastFashion": true
                        },
                        {
                          "landingPageUrl": "Skirts/SASSAFRAS/SASSAFRAS-Blue-Washed-Midi-Denim-Pure-Cotton-A-Line-Skirt/10604482/buy",
                          "productId": 10604482,
                          "product": "SASSAFRAS Blue Washed Midi Denim Pure Cotton A-Line Skirt",
                          "productName": "SASSAFRAS Blue Washed Midi Denim Pure Cotton A-Line Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10604482/2019/9/12/b3b00e71-b440-4b13-ad4d-ce8d4db4d5d51568286366081-SASSAFRAS-Women-Skirts-991568286364390-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 1999,
                          "price": 899,
                          "additionalInfo": "Pure Cotton Midi Denim A-Line Skirt",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(55% OFF)",
                          "discount": 1100,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 36347976,
                              "label": "26"
                            },
                            {
                              "skuId": 36347982,
                              "label": "28",
                              "inventory": 8,
                              "available": true
                            },
                            {
                              "skuId": 36347984,
                              "label": "30",
                              "inventory": 16,
                              "available": true
                            },
                            {
                              "skuId": 36347986,
                              "label": "32",
                              "inventory": 18,
                              "available": true
                            },
                            {
                              "skuId": 36347988,
                              "label": "34",
                              "inventory": 7,
                              "available": true
                            },
                            {
                              "skuId": 36347992,
                              "label": "36",
                              "inventory": 2,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 727,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "3 Days",
                              "attribute": "SA_XT_OOS"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/SASSAFRAS/SASSAFRAS-Women-Blue-Washed-Denim-A-Line-Skirt/10604576/buy",
                          "productId": 10604576,
                          "product": "SASSAFRAS Women Blue Washed Denim A-Line Skirt",
                          "productName": "SASSAFRAS Women Blue Washed Denim A-Line Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/10604576/2019/9/12/62e82ec1-396a-452b-9413-b904098fab2f1568286397373-SASSAFRAS-Women-Skirts-2031568286394857-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 1599,
                          "price": 719,
                          "additionalInfo": "Women Pure Cotton Denim A-Line Skirt",
                          "brand": "SASSAFRAS",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(55% OFF)",
                          "discount": 880,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Fall",
                          "year": "2019",
                          "inventoryInfo": [
                            {
                              "skuId": 36348534,
                              "label": "26",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 36348542,
                              "label": "28",
                              "inventory": 9,
                              "available": true
                            },
                            {
                              "skuId": 36348544,
                              "label": "30",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 36348548,
                              "label": "32",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 36348550,
                              "label": "34",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 36348552,
                              "label": "36"
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 538,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Price may go up",
                              "attribute": "SA_XT_Best_Price"
                            },
                            {
                              "value": "3 Days",
                              "attribute": "SA_XT_OOS"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Tokyo-Talkies/Tokyo-Talkies-Women-Blue-Solid-Midi-Denim-Straight-Skirt/11992704/buy",
                          "productId": 11992704,
                          "product": "Tokyo Talkies Women Blue Solid Midi Denim Straight Skirt",
                          "productName": "Tokyo Talkies Women Blue Solid Midi Denim Straight Skirt",
                          "searchImage": "http://assets.myntassets.com/assets/images/productimage/2020/6/23/f4f9e168-7d76-4a72-9372-aa6e3b7446e91592862837260-1.jpg",
                          "sizes": "28,30,32,34",
                          "mrp": 1549,
                          "price": 604,
                          "additionalInfo": "Women Pure Cotton Solid Straight Midi Denim Skirt",
                          "brand": "Tokyo Talkies",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 256,
                          "discountDisplayLabel": "(61% OFF)",
                          "discount": 945,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Winter",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 41747118,
                              "label": "28",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 41747124,
                              "label": "30"
                            },
                            {
                              "skuId": 41747126,
                              "label": "32"
                            },
                            {
                              "skuId": 41747132,
                              "label": "34"
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 258,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "1 Days",
                              "attribute": "SA_XT_OOS"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Tops/20Dresses/20Dresses-Women-Yellow-Floral-Print-Crop-Top/12290182/buy",
                          "productId": 12290182,
                          "product": "20Dresses Women Yellow Floral Print Crop Top",
                          "productName": "20Dresses Women Yellow Floral Print Crop Top",
                          "searchImage": "http://assets.myntassets.com/assets/images/12290182/2020/8/31/0e46f94e-7118-4de2-beb6-e173dabeb1761598863225904-20Dresses-Let-Them-Bloom-Floral-Top-for-Women-94715988632244-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 1395,
                          "price": 976,
                          "additionalInfo": "Floral Print Crop Top",
                          "brand": "20Dresses",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(30% OFF)",
                          "discount": 419,
                          "primaryColour": "Yellow",
                          "category": "Tops",
                          "season": "Winter",
                          "year": "2020",
                          "inventoryInfo": [
                            {
                              "skuId": 42789166,
                              "label": "XS",
                              "inventory": 128,
                              "available": true
                            },
                            {
                              "skuId": 42789168,
                              "label": "S",
                              "inventory": 276,
                              "available": true
                            },
                            {
                              "skuId": 42789170,
                              "label": "M",
                              "inventory": 248,
                              "available": true
                            },
                            {
                              "skuId": 42789172,
                              "label": "L",
                              "inventory": 87,
                              "available": true
                            },
                            {
                              "skuId": 42789174,
                              "label": "XL",
                              "inventory": 176,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 338,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Mellow Yellow",
                              "attribute": "Mellow Yellow"
                            },
                            {
                              "value": "Botanical Print",
                              "attribute": "Botanical Print"
                            },
                            {
                              "value": "Smocking",
                              "attribute": "Smocking"
                            },
                            {
                              "value": "Yes",
                              "attribute": "VTR_Available"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "Not Applicable",
                              "attribute": "ExcludeFromSearch"
                            },
                            {
                              "value": "true",
                              "attribute": "style_cast_enabled"
                            },
                            {
                              "value": "FWD",
                              "attribute": "SA_XT_STYLECAST"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Skirts/Chemistry/Chemistry-Women-Blue-Solid-Denim-A-Line-Skirt-With-waist-Tie--Up-Detail/13187208/buy",
                          "productId": 13187208,
                          "product": "Chemistry Women Blue Solid Denim A-Line Skirt With waist Tie -Up Detail",
                          "productName": "Chemistry Women Blue Solid Denim A-Line Skirt With waist Tie -Up Detail",
                          "searchImage": "http://assets.myntassets.com/assets/images/13187208/2021/11/24/b5209604-f7d5-4b03-92d8-b286652e1a551637736965908-Chemistry-Women-Blue-Solid-Denim-A-Line-Skirt-With-waist-Tie-1.jpg",
                          "sizes": "26,28,30,32,34",
                          "mrp": 1699,
                          "price": 424,
                          "additionalInfo": "Solid Denim A-Line Skirt",
                          "brand": "Chemistry",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(75% OFF)",
                          "discount": 1275,
                          "primaryColour": "Blue",
                          "category": "Skirts",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 45563853,
                              "label": "26"
                            },
                            {
                              "skuId": 45563855,
                              "label": "28"
                            },
                            {
                              "skuId": 45563857,
                              "label": "30",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 45563861,
                              "label": "32",
                              "inventory": 1,
                              "available": true
                            },
                            {
                              "skuId": 45563859,
                              "label": "34",
                              "inventory": 1,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 407,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "NEW SEASON",
                              "attribute": "SA_XT_New_Season"
                            },
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            },
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Gold-Coloured-Printed-Made-to-Measure-Lehenga--Blouse-with-Dupatta/13512762/buy",
                          "productId": 13512762,
                          "product": "Ethnovog Beige Gold-Coloured Printed Made to Measure Lehenga Blouse with Dupatta",
                          "productName": "Ethnovog Beige Gold-Coloured Printed Made to Measure Lehenga Blouse with Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/13512762/2021/3/3/a4d08494-c741-4d20-a3bc-5ef8973838d21614765752586-EthnoVogue-Made-To-Measure-Beige-Cotton-High-N-Low-Style-Leh-1.jpg",
                          "sizes": "32/42,34/42,36/42,38/42,40/42,42/42,44/42",
                          "mrp": 6908,
                          "price": 4282,
                          "additionalInfo": "Made to Measure Lehenga & Blouse with Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(38% OFF)",
                          "discount": 2626,
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46155941,
                              "label": "32/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155944,
                              "label": "34/42",
                              "inventory": 6,
                              "available": true
                            },
                            {
                              "skuId": 46155947,
                              "label": "36/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155950,
                              "label": "38/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155954,
                              "label": "40/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155957,
                              "label": "42/42",
                              "inventory": 5,
                              "available": true
                            },
                            {
                              "skuId": 46155959,
                              "label": "44/42",
                              "inventory": 5,
                              "available": true
                            }
                          ],
                          "systemAttributes": [
                            {
                              "value": "PIC-WORTHY",
                              "attribute": "SA_XT_PICWORTHY"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Lehenga-Choli/Ethnovog/Ethnovog-Beige--Gold-Toned-Printed-Made-to-Measure-Lehenga--Blouse-With-Dupatta/13512800/buy",
                          "productId": 13512800,
                          "product": "Ethnovog Beige Gold-Toned Printed Made to Measure Lehenga Blouse With Dupatta",
                          "productName": "Ethnovog Beige Gold-Toned Printed Made to Measure Lehenga Blouse With Dupatta",
                          "searchImage": "http://assets.myntassets.com/assets/images/13512800/2021/6/25/ea158a70-66e9-44f6-9b56-5f4a80b594911624596542223-EthnoVogue-Made-To-Measure-Beige-Organza-Pleated-Elbow-Sleev-1.jpg",
                          "sizes": "32/42,34/42,36/42,38/42,40/42,42/42,44/42",
                          "mrp": 6601,
                          "price": 6601,
                          "additionalInfo": "Made to Measure Lehenga Blouse With Dupatta",
                          "brand": "Ethnovog",
                          "gender": "Women",
                          "primaryColour": "Beige",
                          "category": "Lehenga Choli",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46156075,
                              "label": "32/42"
                            },
                            {
                              "skuId": 46156078,
                              "label": "34/42"
                            },
                            {
                              "skuId": 46156080,
                              "label": "36/42"
                            },
                            {
                              "skuId": 46156082,
                              "label": "38/42"
                            },
                            {
                              "skuId": 46156083,
                              "label": "40/42"
                            },
                            {
                              "skuId": 46156084,
                              "label": "42/42"
                            },
                            {
                              "skuId": 46156085,
                              "label": "44/42"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Trousers/FableStreet/FableStreet-Women-LivIn-Straight-Fit-Solid-4-Way-Stretch-Regular-Trousers/13766274/buy",
                          "productId": 13766274,
                          "product": "FableStreet Women LivIn Straight Fit Solid 4 Way Stretch Regular Trousers",
                          "productName": "FableStreet Women LivIn Straight Fit Solid 4 Way Stretch Regular Trousers",
                          "searchImage": "http://assets.myntassets.com/assets/images/13766274/2021/3/2/1f55771a-51c1-4ece-844d-7d4765a86e981614663460650-FableStreet-Women-Grey-Straight-Fit-Solid-Regular-Trousers-6-1.jpg",
                          "sizes": "26,28,30,32,34,36",
                          "mrp": 2695,
                          "price": 1886,
                          "additionalInfo": "LivIn Straight Fit Trousers",
                          "brand": "FableStreet",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(30% OFF)",
                          "discount": 809,
                          "primaryColour": "Grey",
                          "category": "Trousers",
                          "season": "Summer",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46637782,
                              "label": "26",
                              "inventory": 38,
                              "available": true
                            },
                            {
                              "skuId": 46637783,
                              "label": "28",
                              "inventory": 79,
                              "available": true
                            },
                            {
                              "skuId": 46637785,
                              "label": "30",
                              "inventory": 79,
                              "available": true
                            },
                            {
                              "skuId": 46637787,
                              "label": "32",
                              "inventory": 75,
                              "available": true
                            },
                            {
                              "skuId": 46637790,
                              "label": "34",
                              "inventory": 64,
                              "available": true
                            },
                            {
                              "skuId": 46637792,
                              "label": "36",
                              "inventory": 27,
                              "available": true
                            }
                          ],
                          "rating": 4,
                          "ratingCount": 116,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "SA_FD_Label2",
                              "attribute": "Custom_Label2"
                            }
                          ]
                        },
                        {
                          "landingPageUrl": "Dresses/DressBerry/DressBerry-Blue-Solid-Pure-Cotton-Solid-Chambray-A-Line-Dress/13783918/buy",
                          "productId": 13783918,
                          "product": "DressBerry Blue Solid Pure Cotton Solid Chambray A-Line Dress",
                          "productName": "DressBerry Blue Solid Pure Cotton Solid Chambray A-Line Dress",
                          "searchImage": "http://assets.myntassets.com/assets/images/13783918/2021/9/29/df5ab413-de78-479b-8e36-e94b0b3fd99d1632909328824-DressBerry-Women-Dresses-2581632909328251-1.jpg",
                          "sizes": "XS,S,M,L,XL",
                          "mrp": 1799,
                          "price": 449,
                          "additionalInfo": "Cotton Chambray A-Line Dress",
                          "brand": "DressBerry",
                          "gender": "Women",
                          "discountLabel": "Flat_Search_Percent",
                          "discountType": 1,
                          "discountDisplayLabel": "(75% OFF)",
                          "discount": 1350,
                          "primaryColour": "Blue",
                          "category": "Dresses",
                          "season": "Spring",
                          "year": "2021",
                          "inventoryInfo": [
                            {
                              "skuId": 46673415,
                              "label": "XS"
                            },
                            {
                              "skuId": 46673418,
                              "label": "S",
                              "inventory": 18,
                              "available": true
                            },
                            {
                              "skuId": 46673419,
                              "label": "M",
                              "inventory": 17,
                              "available": true
                            },
                            {
                              "skuId": 46673417,
                              "label": "L",
                              "inventory": 10,
                              "available": true
                            },
                            {
                              "skuId": 46673416,
                              "label": "XL",
                              "inventory": 12,
                              "available": true
                            }
                          ],
                          "rating": 3,
                          "ratingCount": 40,
                          "isFastFashion": true,
                          "systemAttributes": [
                            {
                              "value": "Classic Blue",
                              "attribute": "Classic Blue"
                            },
                            {
                              "value": "Pleats",
                              "attribute": "Pleats"
                            }
                          ]
                        }
                      ],
                      "itemMapperId": "InfluencerItem"
                    }
                  },
                  "componentUId": "8c1947b6-fc9d-419c-89e2-ebd4ec3bfbf4"
                }
              ]
            }
    }
}

export default data;