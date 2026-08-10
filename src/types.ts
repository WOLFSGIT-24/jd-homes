export type Tab = 'home' | 'treatments' | 'campus' | 'consultation' | 'about-us' | 'booking';

export interface Treatment {
  id: string;
  name: string;
  description: string;
  duration: string;
  benefits: string;
  cost: number;
  category: 'detox' | 'rejuvenation' | 'stress' | 'pain';
  image?: string;
}

export interface Cottage {
  id: string;
  name: string;
  description: string;
  ratePerNight: number;
  image: string;
  capacity: string;
  amenities: string[];
}

export interface DoshaQuestion {
  id: number;
  category: string;
  text: string;
  options: {
    text: string;
    dosha: 'vata' | 'pitta' | 'kapha';
  }[];
}

export interface ConsultationInput {
  name: string;
  age: string;
  primaryGoal: string;
  sleepPattern: string;
  digestionQuality: string;
  energyLevels: string;
  stressLevel: string;
  bodyFrame: string;
  skinType: string;
}

export interface DinacharyaPractice {
  timeOfDay: string;
  practiceName: string;
  description: string;
}

export interface RecommendedTreatment {
  name: string;
  benefits: string;
}

export interface RecommendedHerb {
  herbName: string;
  useInstructions: string;
}

export interface DietPlan {
  summary: string;
  foodsToFavor: string[];
  foodsToAvoid: string[];
}

export interface ConsultationResult {
  doshaAnalysis: string;
  primaryGoalRelevance: string;
  dietPlan: DietPlan;
  dinacharya: DinacharyaPractice[];
  treatments: RecommendedTreatment[];
  herbalRecommendations: RecommendedHerb[];
  lifestyleAdvice: string;
}

export interface BookingState {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  cottageId: string;
  packageId: string;
  mealPlan: string;
  specialRequests: string;
}

export interface BookingInquiry {
  id: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  cottageId: string;
  packageId: string;
  startDate: string;
  nights: number;
  guestsCount: number;
  totalEstimate: number;
  status: string;
  createdAt: string;
}

