export interface Review {
  id: string;
  text: string;
  rating: number;
  author: string;
  date?: string;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    text: 'Amazing food quality and taste. Must try their Dum Pukht. The meat was so tender!',
    rating: 5,
    author: 'Ahmed S.',
    date: 'June 2026',
  },
  {
    id: 'r2',
    text: 'Authentic Shinwari taste in Hyderabad. Authentic Namkeen Gosht flavor.',
    rating: 5,
    author: 'Zainab R.',
  },
  {
    id: 'r3',
    text: 'Peshawari chicken karhai is best.',
    rating: 5,
    author: 'DR',
  },
  {
    id: 'r4',
    text: 'Masha ALLAH mutton acha hay naan or taftaan sab bhut achay hain zaiqy me.',
    rating: 5,
    author: 'Waseem',
  },
  {
    id: 'r5',
    text: 'Fish and karahi was the best.',
    rating: 5,
    author: 'Shayan',
  },
];
