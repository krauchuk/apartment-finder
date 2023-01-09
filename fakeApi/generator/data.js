import { getRandomNumber, getRandomReviews } from './helpers'

export const types = ['rent', 'sale']

export const cities = [
  'Warszawa',
  'Kraków',
  'Łódź',
  'Wrocław',
  'Poznań',
  'Gdańsk',
  'Szczecin',
  'Bydgoszcz',
  'Lublin',
  'Katowice',
  'Białystok',
  'Gdynia',
  'Częstochowa',
  'Sosnowiec',
]

export const users = [
  {
    id: 1,
    name: 'Banana LLC',
    type: 'company',
    rating: getRandomNumber(1, 5),
    votes: getRandomNumber(1, 500),
    reviews: getRandomReviews(15),
  },
  {
    id: 2,
    name: 'Orange LLC',
    type: 'company',
    rating: getRandomNumber(1, 5),
    votes: getRandomNumber(1, 500),
    reviews: getRandomReviews(10),
  },
  {
    id: 3,
    name: 'John Doe',
    type: 'person',
  },
  {
    id: 4,
    name: 'Adam Eve',
    type: 'person',
  },
]
