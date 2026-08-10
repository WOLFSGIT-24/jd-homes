import { Treatment, Cottage, DoshaQuestion } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'abhyanga',
    name: 'Abhyanga (Warm Herbal Oil Massage)',
    description: 'A full-body massage using warm, herb-infused sesame oil tailored to your body type. It helps improve circulation, lubricate joints, and soothe the nervous system.',
    duration: '60 minutes',
    benefits: 'Calms Vata dosha, increases skin luster, enhances sleep quality, and releases physical toxins.',
    cost: 80,
    category: 'rejuvenation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmmNvza8cK8ues6m_M-tESnY65ltz9soOkbo4RDTlWBsr0sde9BqtHxPJklPxNNX1baOcSUSHfXHfWchK-nLcxh8nMMRDjBalSf57dCPIabneE9QIcXQpnnaVFzaxTHQ00bGK_oDyJuOBuoqhMDuPyJ-I-WzV_PfhCGRwubFtLDteftVjGFec7Fv1BtAJUPDZ4xvsQbK9Pg1-HTwOI7sjfuoFk-kkly1iYWQ-X-8GdzRWeKzrVoytJ'
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara (Third-Eye Oil Pour)',
    description: 'A continuous, gentle stream of warm medicated oil is poured over the forehead (the "third eye" region), inducing a profound state of meditative relaxation.',
    duration: '45 minutes',
    benefits: 'Relieves stress, anxiety, and mental fatigue. Stabilizes the nervous system and cures chronic headaches or insomnia.',
    cost: 110,
    category: 'stress',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSW7hoE6xPY6K3W__6pOhqhwU7cglkjWTURSGqd5lIW-TEGEHg8UMwd8skMWYfipsQZhoKNC5tvdPLuduvmO5l4Im3g3Kx8yO7yn_wUPD4d8YvbJkvvcmNqcCKMOczCj5mTPQUWyH-wyYgXtrYc9lDfPFKR9H-_LmdY5hKwf0mciQi2AMQ2XVyBpcgOPGUflzUd3HF6XvKjNgSMQ8E8CJNc5TC5knu1VuZCvV3k4LVT_PoHeuAaKvD'
  },
  {
    id: 'panchakarma',
    name: 'Panchakarma (Five-Fold Deep Detoxification)',
    description: 'A customized set of 5 profound cleansing therapies (Vamana, Virechana, Basti, Nasya, Raktamokshana) prescribed specifically to expel deep-seated cellular toxins.',
    duration: 'Individually Customized',
    benefits: 'Resets the digestive fire (Agni), restores natural cellular intelligence, reverses signs of chronic illness, and slows aging.',
    cost: 180,
    category: 'detox',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1lIxNP0j6PV-jLNf2-ghRZZGctFk4r4RUJS3H6Xi2G3hj5h53y3KBjPBoUtMvVKH_Uj5bVt8eR6Bn3oAZGfrkHjNqX7mbAXmBoH_ZhNccvDN8CzODefbpgoUQPh4n_qqav2LHyr_OeQzT2FhVrqN2yAJHzPidIm0l3kpeHZijtMG1sumGtEgA1wV36oIuTzAIVlJCZou520NgTTBuh9mylEyd5V7hnOa6MciJTPfCSXvk8O48d7J'
  },
  {
    id: 'elakizhi',
    name: 'Elakizhi (Herbal Poultice Massage)',
    description: 'Highly effective massage using warm cloth bags filled with fresh medicinal leaves, roots, and essential oils. The poultices are rhythmically patted and massaged over sore muscles.',
    duration: '50 minutes',
    benefits: 'Relieves chronic back pain, joint stiffness, arthritis, and muscle cramps. Balances Kapha and Vata energies.',
    cost: 95,
    category: 'pain',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOtxe3AJVWg-mLSV7Ezw1zKuY-aQjZ3sFWOUKpgXFDMSM-QFE1rpa8I0CMYuxRagH06_xDBboEpi9PuhCm0pJVwYlv1maZ-75BQfnmN2tYCy2pVsBoznmbyAaE7YLkWV3gbkjMa4CNQfMtdEQqVzg7aedRumuCCfUzOsAwa7brjRWAFuSo3UJGsB6q_Qju4cz9QgZy3Mp1ox32YFKBlm5b8TIxCImfwgtESOGwukhc0qVLAMnjPPBe'
  }
];

export const COTTAGES: Cottage[] = [
  {
    id: 'forest-canopy',
    name: 'Forest Canopy Cottage',
    description: 'Elevated wooden design nestled amidst ancient medicinal trees, allowing cool forest breeze and soothing sounds of nature to naturally cleanse your mind.',
    ratePerNight: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6iiZ49xjmcUjk_jM4XOVkQi8f8SXAAUrI3Hz1bZIINsvt5AEyMYxuPoTcDT9BOQZI4Bd72NuSd8PZlFfJALfPWXV3v6MJog2ti70-__uOY3AWoV_N-_SutjxZV9tFtIaSdD14E4nugKVOaA5AQaTIVeUgnO2gvsb-tNbRUdB2VKHr8c4LI1MQTZOfqDqmkciCR5QE_Vr6NANl3XaRCfahrHHpjnc86A6nZhIzqBak8y0LnsI7QPpO',
    capacity: 'Up to 2 Adults',
    amenities: ['Private Forest Veranda', 'Organic Cotton Bedding', 'Natural Laterite Cooling', 'Open-air Ayurvedic Shower']
  },
  {
    id: 'lakeside-villa',
    name: 'Sacred Lotus Lakeside Villa',
    description: 'Spacious stone villa directly facing our sacred lotus pond, engineered using optimal Vastu Shastra dimensions to promote perfect peace and deep restorative slumber.',
    ratePerNight: 220,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1lIxNP0j6PV-jLNf2-ghRZZGctFk4r4RUJS3H6Xi2G3hj5h53y3KBjPBoUtMvVKH_Uj5bVt8eR6Bn3oAZGfrkHjNqX7mbAXmBoH_ZhNccvDN8CzODefbpgoUQPh4n_qqav2LHyr_OeQzT2FhVrqN2yAJHzPidIm0l3kpeHZijtMG1sumGtEgA1wV36oIuTzAIVlJCZou520NgTTBuh9mylEyd5V7hnOa6MciJTPfCSXvk8O48d7J',
    capacity: 'Up to 3 Adults',
    amenities: ['Lakeside Sun Deck', 'Copper Wellness Jugs', 'Vastu-Aligned Bedroom', 'Private Herbal Steam Chamber']
  },
  {
    id: 'garden-suite',
    name: 'Vastu Garden Suite',
    description: 'Rustic yet comfortable suites bordered by lush Ayurvedic botanical pathways. Built with locally sourced seasoned timber and red clay tiles.',
    ratePerNight: 180,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmmNvza8cK8ues6m_M-tESnY65ltz9soOkbo4RDTlWBsr0sde9BqtHxPJklPxNNX1baOcSUSHfXHfWchK-nLcxh8nMMRDjBalSf57dCPIabneE9QIcXQpnnaVFzaxTHQ00bGK_oDyJuOBuoqhMDuPyJ-I-WzV_PfhCGRwubFtLDteftVjGFec7Fv1BtAJUPDZ4xvsQbK9Pg1-HTwOI7sjfuoFk-kkly1iYWQ-X-8GdzRWeKzrVoytJ',
    capacity: 'Up to 2 Adults',
    amenities: ['Botanical Garden Access', 'Laterite Stone Veranda', 'Traditional Nilavilakku Lamp', 'Natural Ayurvedic Mats']
  }
];

export const DOSHA_QUIZ: DoshaQuestion[] = [
  {
    id: 1,
    category: 'Physical Frame',
    text: 'How would you best describe your general physical build and bone structure?',
    options: [
      { text: 'Thin, slender, bony, difficult to gain weight, tall or short', dosha: 'vata' },
      { text: 'Medium, athletic, well-proportioned, moderate muscle development', dosha: 'pitta' },
      { text: 'Broad, sturdy, well-developed, easily gains weight, difficult to lose', dosha: 'kapha' }
    ]
  },
  {
    id: 2,
    category: 'Skin Characteristics',
    text: 'What is the natural texture and temperature of your skin?',
    options: [
      { text: 'Dry, rough, thin, cool to touch, prone to chapping', dosha: 'vata' },
      { text: 'Warm, soft, reddish/pinkish, sensitive, prone to freckles or acne', dosha: 'pitta' },
      { text: 'Thick, smooth, oily, cool, pale, soft and well-hydrated', dosha: 'kapha' }
    ]
  },
  {
    id: 3,
    category: 'Digestion & Appetite',
    text: 'How does your digestion and hunger behave day-to-day?',
    options: [
      { text: 'Irregular, unpredictable appetite, easily bloated or constipated', dosha: 'vata' },
      { text: 'Strong, intense hunger, gets irritable if meals are skipped, fast metabolism', dosha: 'pitta' },
      { text: 'Slow, steady, can easily skip meals but digestion is slow, prone to sluggishness', dosha: 'kapha' }
    ]
  },
  {
    id: 4,
    category: 'Sleep Patterns',
    text: 'Describe your sleep quality and dream patterns.',
    options: [
      { text: 'Light, interrupted, often awake at night, vivid/active dreams', dosha: 'vata' },
      { text: 'Moderate, sound, sleeps 6-7 hours, passionate or colorful dreams', dosha: 'pitta' },
      { text: 'Deep, heavy, sleeps long hours (8+), difficult to wake, calm/peaceful dreams', dosha: 'kapha' }
    ]
  },
  {
    id: 5,
    category: 'Stress Response',
    text: 'How do you typically react to stressful situations or sudden challenges?',
    options: [
      { text: 'I become anxious, worried, nervous, or experience racing thoughts', dosha: 'vata' },
      { text: 'I become impatient, angry, frustrated, or aggressive', dosha: 'pitta' },
      { text: 'I remain calm, steady, slow to react, but can become complacent or withdrawn', dosha: 'kapha' }
    ]
  },
  {
    id: 6,
    category: 'Activity & Mind',
    text: 'What is your thinking style and general pace of activity?',
    options: [
      { text: 'Fast-paced, creative, loves change, learns quickly but forgets quickly', dosha: 'vata' },
      { text: 'Analytical, organized, highly focused, goal-oriented, sharp memory', dosha: 'pitta' },
      { text: 'Steady, methodical, calm, patient, slow to learn but remembers forever', dosha: 'kapha' }
    ]
  }
];

export const RETREAT_PACKAGES = [
  {
    id: 'panchakarma-detox',
    name: 'Panchakarma Deep Cleansing Program (7 to 21 Days)',
    description: 'An exhaustive cell-level cleansing designed to extract deep-seated environmental and metabolic toxins. Includes dual herbal therapists, fully customized Sattvic meals, and physician consultations.',
    pricePerDay: 130
  },
  {
    id: 'stress-relief',
    name: 'Nervous System Rest & Reset (3 to 14 Days)',
    description: 'Tailored for burn-out, mental exhaustion, and high-stress lifestyles. Focused heavily on warm herb oil infusions (Shirodhara), sensory detox, forest walking, and calming pranayama.',
    pricePerDay: 110
  },
  {
    id: 'kayakalpa',
    name: 'Kayakalpa Rejuvenation Program (5 to 10 Days)',
    description: 'Ancient anti-aging and vitality program to boost immune response, cellular repair, and mental focus. Features custom ghee therapies and Dravya Guna botanical baths.',
    pricePerDay: 120
  }
];
