export type CategoryType = 'shinwari' | 'karahi' | 'bbq' | 'handi';

export interface Dish {
  id: string;
  urduName: string;
  englishName: string;
  description: string;
  image: string;
  category: CategoryType;
  isSignature: boolean;
}

export const signatureDishes: Dish[] = [
  {
    id: 'dum-pukht',
    urduName: 'دَم پُخت',
    englishName: 'Dum Pukht',
    description: 'Slow-cooked tender meat nestled on a bed of aromatic rice, infused with traditional spices.',
    image: '/images/dum-pukht.jpeg',
    category: 'shinwari',
    isSignature: true,
  },
  {
    id: 'peshawari-karahi',
    urduName: 'پشاوری کڑاہی',
    englishName: 'Peshawari Karahi',
    description: 'A traditional karahi cooked over an open flame with tomatoes, green chilies, and black pepper.',
    image: '/images/peshawari-karahi.jpeg',
    category: 'karahi',
    isSignature: true,
  },
  {
    id: 'white-karahi',
    urduName: 'وائٹ کڑاہی',
    englishName: 'White Karahi',
    description: 'Creamy and mildly spiced, this white karahi delivers a rich and comforting flavor profile.',
    image: '/images/white-karahi.jpeg',
    category: 'karahi',
    isSignature: true,
  },
  {
    id: 'chicken-bihari',
    urduName: 'چکن بہاری',
    englishName: 'Chicken Bihari',
    description: 'Melt-in-your-mouth chicken marinated in a special blend of spices and tenderized to perfection.',
    image: '/images/chicken-bihari.jpeg',
    category: 'bbq',
    isSignature: true,
  },
  {
    id: 'chicken-tikka',
    urduName: 'چکن تکّہ',
    englishName: 'Chicken Tikka',
    description: 'Classic tandoor-roasted tikka with a smoky char and fiery flavor.',
    image: '/images/chicken-tikka.jpeg',
    category: 'bbq',
    isSignature: true,
  },
  {
    id: 'gola-kabab',
    urduName: 'گولا کباب',
    englishName: 'Gola Kabab',
    description: 'Hand-ground spiced meat shaped into succulent kababs that are bursting with flavor.',
    image: '/images/gola-kabab.jpeg',
    category: 'bbq',
    isSignature: true,
  },
  {
    id: 'malai-kabab',
    urduName: 'ملائی کباب',
    englishName: 'Malai Kabab',
    description: 'Delicately flavored and incredibly tender, these creamy kababs melt instantly on the palate.',
    image: '/images/malai-kabab.jpeg',
    category: 'bbq',
    isSignature: true,
  },
  {
    id: 'chicken-cheese-handi',
    urduName: 'چکن چیز ہانڈی',
    englishName: 'Chicken Cheese Handi',
    description: 'A decadent and rich handi preparation loaded with creamy cheese and aromatic herbs.',
    image: '/images/chicken-cheese-handi.jpeg',
    category: 'handi',
    isSignature: true,
  }
];
