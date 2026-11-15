export interface Category {
  id: string;
  urduName: string;
  englishName: string;
  icon: string;
}

export const menuCategories: Category[] = [
  {
    id: 'shinwari',
    urduName: 'شنواری اسپیشل',
    englishName: 'Shinwari Specials',
    icon: '🔥',
  },
  {
    id: 'karahi',
    urduName: 'کڑاہی',
    englishName: 'Karahi',
    icon: '🍖',
  },
  {
    id: 'bbq',
    urduName: 'باربی کیو',
    englishName: 'BBQ',
    icon: '🔥',
  },
  {
    id: 'handi',
    urduName: 'ہانڈی',
    englishName: 'Handi',
    icon: '🫕',
  },
  {
    id: 'tandoor',
    urduName: 'تنور سے',
    englishName: 'Tandoor',
    icon: '🫓',
  },
  {
    id: 'fish',
    urduName: 'مچھلی',
    englishName: 'Fish',
    icon: '🐟',
  },
  {
    id: 'rice',
    urduName: 'چاول',
    englishName: 'Rice / Mandi',
    icon: '🍚',
  },
  {
    id: 'desserts',
    urduName: 'میٹھا',
    englishName: 'Desserts',
    icon: '🍨',
  }
];
