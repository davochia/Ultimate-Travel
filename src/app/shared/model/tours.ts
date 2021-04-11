import { Tour } from './tour';

export const TOURS: Tour[] = [
  {
    id: 0,
    title: 'Holidays in Greece',
    country: 'Greece',
    image: 'assets/greece.jpg',
    introduction: 'Experince the magic in Greek Islands.',
    featured: true,
    destinations: [
      {
        places: 'Crete',
        rating: 5,
        image: 'assets/crete1.jpg',
        price: 890,
        description:
          'Lorem ipsum sed do eiusmod tempor incididunt ut labore na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        hot_tour: true,
        comments: [
          {
            rating: 5,
            comment:
              'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            author: 'John Dow',
            author_img: 'assets/person1.jpeg',
            date: '2021-05-16T17:57:28.556094Z',
          },
        ],
        services: [
          {
            title: 'Chania Sea Tour',
            discription: 'Yacht and private sea tours',
            rating: 4,
            price: 880,
            comments: [
              {
                rating: 5,
                comment:
                  'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                author: 'Anna Jackson',
                author_img: 'assets/person.jpeg',
                date: '2021-05-16T17:57:28.556094Z',
              },
            ],
          },
        ],
      },

      {
        places: 'Santorini',
        rating: 5,
        image: 'assets/santorini1.jpg',
        price: 990,
        description:
          'Lorem ipsum sed do eiusmod tempor incididunt ut labore na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        hot_tour: true,
        comments: [
          {
            rating: 5,
            comment:
              'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            author: 'John Dow',
            author_img: 'assets/person1.jpeg',
            date: '2021-05-16T17:57:28.556094Z',
          },
        ],
        services: [
          {
            title: 'Santorini private Tour',
            discription: 'Yacht and private sea tours',
            rating: 4,
            price: 1080,
            comments: [
              {
                rating: 5,
                comment:
                  'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                author: 'Anna Jackson',
                author_img: 'assets/person3.jpg',
                date: '2021-05-16T17:57:28.556094Z',
              },
            ],
          },
        ],
      },

      {
        places: 'Mykonos',
        rating: 5,
        image: 'assets/mykonos.jpg',
        price: 1890,
        description:
          'Lorem ipsum sed do eiusmod tempor incididunt ut labore na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        hot_tour: true,
        comments: [
          {
            rating: 5,
            comment:
              'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            author: 'John Dow',
            author_img: 'assets/person1.jpeg',
            date: '2021-05-16T17:57:28.556094Z',
          },
        ],
        services: [
          {
            title: 'Mykonos Sea Tour',
            discription: 'Yacht and private sea tours',
            rating: 4,
            price: 880,
            comments: [
              {
                rating: 5,
                comment:
                  'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                author: 'Anna Jackson',
                author_img: 'assets/person.jpeg',
                date: '2021-05-16T17:57:28.556094Z',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 1,
    title: 'Holidays in Spain',
    country: 'Spain',
    image: 'assets/spain3.jpg',
    introduction: 'Experince the magic in Spain.',
    featured: true,
    destinations: [
      {
        places: 'Mallorca',
        rating: 5,
        image: 'assets/mallorca2.jpg',
        price: 890,
        description: 'Experince the magic in Spain.',
        hot_tour: true,
        comments: [
          {
            rating: 5,
            comment:
              'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            author: 'John Dow',
            author_img: '',
            date: '2021-05-16T17:57:28.556094Z',
          },
        ],
        services: [
          {
            title: 'Chania Sea Tour',
            discription: 'Yacht and private sea tours',
            rating: 4,
            price: 880,
            comments: [
              {
                rating: 5,
                comment:
                  'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                author: 'John Dow',
                author_img: '',
                date: '2021-05-16T17:57:28.556094Z',
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: 'Holidays in the Caribbean',
    country: 'Jamaica',
    image: 'assets/caribbean1.jpg',
    introduction: 'Experince the magic in the Caribbean.',
    featured: true,
    destinations: [
      {
        places: 'Carribean',
        rating: 5,
        image: 'assets/river.jpg',
        price: 890,
        description: 'Experince the magic in Spain.',
        hot_tour: true,
        comments: [
          {
            rating: 5,
            comment:
              'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            author: 'John Dow',
            author_img: '',
            date: '2021-05-16T17:57:28.556094Z',
          },
        ],
        services: [
          {
            title: 'Chania Sea Tour',
            discription: 'Yacht and private sea tours',
            rating: 4,
            price: 880,
            comments: [
              {
                rating: 5,
                comment:
                  'Lorem ipsum dolor sit amet ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                author: 'John Dow',
                author_img: '',
                date: '2021-05-16T17:57:28.556094Z',
              },
            ],
          },
        ],
      },
    ],
  },
];
