
export enum WaterPurifierType {
  ICE = '얼음 정수기',
  HOT_COLD = '냉온 정수기',
  AMBIENT = '냉정/정수 전용'
}

export enum ManagementStyle {
  SELF = '자가 관리 (필터 택배 수령)',
  PROFESSIONAL = '방문 관리 (전문가 방문)'
}

export interface SurveyData {
  purifierType: WaterPurifierType | '';
  managementStyle: ManagementStyle | '';
  name: string;
  phone: string;
  contactTime: string;
  privacyAgreed: boolean;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  age: string;
  content: string;
  rating: number;
  imageUrl?: string;
  date?: string;
}
