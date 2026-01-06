
import { BenefitItem, Testimonial } from './types';

export const BENEFITS: BenefitItem[] = [
  {
    id: 1,
    title: "최대 현금 지원",
    description: "렌탈 계약 완료 후 후기만 작성하셔도 최대 규모의 현금 혜택을 즉시 지급해드립니다.",
    imageUrl: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "초기 비용 0원",
    description: "가입비, 등록비, 설치비를 전액 면제해드립니다.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "선착순 사은품 증정",
    description: "상담 신청 후 설치 완료 시 프리미엄 주방 가전을 증정합니다.",
    imageUrl: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "제휴 카드 할인",
    description: "제휴 카드 이용 시 월 렌탈료 0원부터 시작 가능합니다.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "익명",
    age: "후기 3 · 평균 별점 5.0",
    date: "2일 전",
    content: "우연히 당근에서 정수기 업체를 발견~~~ 흐미~~~ 클릭 한번 하니까 줄줄이 업체들이 나오네요^^;;;; 일단 두곳에 상담신청~~~ 모두 너무 친절하게 상담을 해주시네요~~^^ 상담 받는동안 맘이 이끌리는곳으로~~~~~ 역시나 실망시키지 않네요!! 상담부터 소비자들이 누릴 수 있는 혜택까지 친절히 상담해 주셔서 득템한 기분이 드네요~~^^ 정수기도 맘에들고 설치도 너무 친절하게 잘해주셔서 새해부터 기분좋게 출발합니다~~^^/ 새해 복 많이 받으세요~~~ 정수기 고민이시라면 이곳에서 하세요~~^^ 물맛도 좋네요~~",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800" // 길가에 앉아있는 고양이 느낌의 이미지
  },
  {
    id: 2,
    name: "익명",
    age: "후기 1 · 평균 별점 5.0",
    date: "2일 전",
    content: "우연히 당근을 보다가 (다나눔렌탈)을 보다 정수기가 너무 필요해서 상담을 받았는데. 상담하시는 분께서 너므 친절하게 설명을 잘해주셔서 고민1도하지 않쿠 구매. 결정을하였습니다 두둥 배송도 빠르고 설치해주시는 기사님도 너므 친절하셔서 좋았습니다 그리고 제품을 받고 설치 까지 받고 낫는데 디자인이 너므 예쁘고 우선 첫번째: 일단 모든관리를 핸드폰으로제어할수있다는점 두번째: 디자인이. 너므 예쁘다는것(심쿵)",
    rating: 5,
    imageUrl: "https://loremflickr.com/800/600/water,purifier,black,display" // 스크린샷 1, 2번의 블랙 스마트 정수기 매칭
  },
  {
    id: 3,
    name: "익명",
    age: "후기 1 · 평균 별점 5.0",
    date: "2일 전",
    content: "이번에 웅진코웨이 얼음 냉정수기로 바꿨는데 설치기사님도 너~무 친절하게 잘해주셔서 연초에 너무 행복한 시작이 되는거 같네요^^ 얼음 냉정수기 물 마시면서 시원하게 새해 출발하도록 해보겠습니다~~ 모두 새해 복 많이 받으세요😊",
    rating: 5,
    imageUrl: "https://loremflickr.com/800/600/water,purifier,white,ice" // 스크린샷 3번의 화이트 얼음 정수기 매칭
  },
  {
    id: 4,
    name: "익명",
    age: "후기 2 · 평균 별점 5.0",
    date: "3일 전",
    content: "공기청정기 렌탈 상담 받아봤는데 처음부터 끝까지 정말 친절하게 안내해 주셔서 좋았어요. 괜히 비싼 모델 권하지 않고, 집 크기랑 사용 환경에 맞춰서 필요한 기능만 딱 추천해 주시더라고요. 렌탈료도 생각보다 저렴해서 부담 없었고, 조건 잘 맞춰서 진행하니까 혜택도 챙길 수 있어서 만족합니다. 설치도 빠르고 깔끔하게 해주셔서 바로 사용 중인데, 소음도 거의 없고 공기 확실히 달라진 게 느껴져요. 괜히 고민만 했다는 생각 들 정도로 만족하면서 사용 중입니다.",
    rating: 5,
    imageUrl: "https://loremflickr.com/800/600/air,purifier,white" // 스크린샷 4번의 화이트 공기청정기 매칭
  }
];
