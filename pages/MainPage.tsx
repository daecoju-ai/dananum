
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const MainPage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-secondary py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                복잡한 정수기 비교,<br />
                <span className="text-primary">30초 만에</span> 끝내세요.
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl">
                나의 사용 패턴에 딱 맞는 모델을 추천하고,<br />
                최대 할인 혜택까지 한 번에 확인해 드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/survey"
                  className="bg-primary text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1"
                >
                  내 맞춤 정수기 추천받기
                </Link>
                <Link
                  to="/benefits"
                  className="bg-white text-primary border-2 border-primary px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg"
                >
                  참여 혜택 보기
                </Link>
              </div>
              <p className="mt-6 text-gray-400 flex items-center justify-center lg:justify-start gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                현재 121,248명이 추천받았습니다
              </p>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://loremflickr.com/800/600/kitchen,water,modern" 
                alt="Modern Kitchen" 
                className="rounded-3xl shadow-2xl transform rotate-1 scale-105"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">평균 소요 시간</p>
                    <p className="text-xl font-bold text-gray-900">단 30초면 충분!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">정수기 렌탈, 이런 고민 하고 계신가요?</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💰', title: '비싼 렌탈료', desc: '불필요한 기능 때문에 월 요금이 너무 높지는 않은가요?' },
              { icon: '🚰', title: '위생 걱정', desc: '우리 가족이 마시는 물인데 관리가 제대로 될지 불안하신가요?' },
              { icon: '🛠️', title: '관리 방식 고민', desc: '매번 방문 관리를 받자니 부담스럽고 자가 관리는 어렵지 않을까 고민되시죠?' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Updated with real photo reviews) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold bg-blue-50 px-4 py-2 rounded-full text-sm mb-4 inline-block">Real Photo Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">고객님들이 직접 찍어 올린 실제 후기</h2>
            <p className="text-gray-500 text-lg">당근마켓에서 인정한 다나눔렌탈의 솔직한 이야기입니다.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all duration-300">
                {t.imageUrl && (
                  <div className="w-full sm:w-1/2 h-64 sm:h-auto overflow-hidden">
                    <img 
                      src={t.imageUrl} 
                      alt="Review Product" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col w-full sm:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08s5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-base">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.age}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-orange-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 font-medium">{t.date}</span>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow whitespace-pre-wrap">
                    {t.content}
                  </p>
                  <div className="flex items-center gap-4 border-t pt-4">
                    <button className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors text-sm font-bold">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.708C19.748 10 20.66 10.954 20.47 11.964l-1.397 7.452C18.88 20.543 17.892 21 16.837 21H7.163c-1.055 0-2.043-.457-2.236-1.584l-1.397-7.452C3.34 10.954 4.252 10 5.292 10H10V4.37c0-1.31 1.05-2.37 2.37-2.37.746 0 1.37.624 1.37 1.37V10z"/></svg>
                       도움돼요 2
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <Link to="/survey" className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 inline-flex">
               상담 신청하고 실시간 혜택 확인하기
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">나에게 꼭 맞는 정수기,<br className="sm:hidden" /> 지금 바로 확인하세요.</h2>
          <p className="text-xl sm:text-2xl mb-12 opacity-90">설문 완료 시 특별 사은품과 추가 할인 혜택이 기다립니다.</p>
          <Link
            to="/survey"
            className="inline-block bg-accent text-white px-10 py-6 rounded-2xl font-bold text-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            추천받고 혜택 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
