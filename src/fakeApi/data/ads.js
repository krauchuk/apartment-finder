import { RENT_TYPE, SALE_TYPE } from '@constants/search'

export const premiumAds = {
  items: [
    {
      id: 1,
      date: 'yesterday',
      images: [
        'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      ],
      name: 'Downtown apartment',
      price: '$800',
      type: RENT_TYPE,
      address: '360 Summit Street Pawtucket, RI 02860',
    },
    {
      id: 2,
      date: '14/05/2022',
      images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      ],
      name: 'St.Redford apartment',
      price: '$930,000',
      type: SALE_TYPE,
      address: '54 Livingston St.Redford, MI 48239',
    },
    {
      id: 3,
      date: '03/10/2022',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80',
      ],
      name: 'Good choice',
      price: '$650',
      type: RENT_TYPE,
      address: '91 Woodsman Lane Bluffton, SC 29910',
    },
  ],
}

export const regularAds = {
  count: 7,
  pages: 2,
  items: [
    {
      id: 10,
      date: 'today',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 1',
      price: '$900',
      type: RENT_TYPE,
      address: 'address 1',
    },
    {
      id: 9,
      date: 'today',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 2',
      price: '$1900',
      type: RENT_TYPE,
      address: 'address 2',
    },
    {
      id: 8,
      date: 'yesterday',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 3',
      price: '$700,000',
      type: SALE_TYPE,
      address: 'address 3',
    },
    {
      id: 7,
      date: '14/10/2022',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 4',
      price: '$900',
      type: RENT_TYPE,
      address: 'address 4',
    },
    {
      id: 6,
      date: '12/10/2022',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 5',
      price: '$600',
      type: RENT_TYPE,
      address: 'address 5',
    },
    {
      id: 5,
      date: '05/10/2022',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 6',
      price: '$900,000',
      type: SALE_TYPE,
      address: 'address 6',
    },
    {
      id: 4,
      date: '01/10/2022',
      images: ['https://via.placeholder.com/350'],
      name: 'Regular 7',
      price: '$300',
      type: RENT_TYPE,
      address: 'address 7',
    },
  ],
}
