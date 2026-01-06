
import React from 'react';
import { Link } from 'react-router-dom';
import { BENEFITS } from '../constants';

const BenefitsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-secondary py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-4">PureWater SPECIAL EVENT</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">렌탈만 해도 쏟아지는<br className="sm:hidden" /> 역대급 혜택!</h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-0 leading-relaxed">
            PureWater에서 상담받고 설치하시면 <br />
            이 모든 혜택을 빠짐없이 챙겨드립니다.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {BENEFITS.map((benefit) => (
            <div key={benefit.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img 
                  src={benefit.imageUrl} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{benefit.title}</h3>
                </div>
              </div>
              <div className="p-8 sm:p-10">
                <p className="text-xl text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white p-10 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <div className="w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg rotate-12 shadow-xl">
                HOT!
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">설치 완료 고객 대상 보너스 혜택</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-secondary/50 rounded-2xl">
                  <span className="text-4xl">📸</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1">포토 리뷰 이벤트</h4>
                    <p className="text-gray-600">설치 후 사진과 함께 후기 작성 시 현금 최대 50만원 </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-secondary/50 rounded-2xl">
                  <span className="text-4xl">👥</span>
                  <div>
                    <h4 className="font-bold text-xl mb-1">지인 추천 이벤트</h4>
                    <p className="text-gray-600">지인 추천으로 설치 시 추천인과 지인 모두에게 신세계 상품권 1만원 증정</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <Link
                  to="/survey"
                  className="inline-block bg-primary text-white px-12 py-6 rounded-2xl font-bold text-2xl hover:bg-blue-700 shadow-xl transition-all"
                >
                  지금 바로 혜택받고 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link or Info */}
      <section className="py-20 text-center px-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">혜택에 대해 궁금한 점이 있으신가요?</h3>
        <p className="text-gray-500 mb-10 text-lg">상담을 통해 더 자세하고 친절하게 설명해드립니다. (상담 비용 무료)</p>
        <div className="flex justify-center gap-8">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">1660-2445</p>
            <p className="text-gray-400">전화 상담 센터</p>
          </div>
          <div className="w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">24H</p>
            <p className="text-gray-400">온라인 신청 접수</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;
