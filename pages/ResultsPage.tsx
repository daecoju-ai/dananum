
import React from 'react';
import { Link } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            신청이 성공적으로<br />완료되었습니다!
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            전문 상담사가 고객님의 맞춤 정보를 분석하여<br />
            <span className="text-primary font-bold">24시간 이내(영업일 기준)</span>에 개별 연락드리겠습니다.
          </p>
        </div>

        <div className="bg-gray-50 p-8 sm:p-12 rounded-[2.5rem] border-2 border-dashed border-gray-200 mb-12">
          <h2 className="text-2xl font-bold mb-8">향후 진행 절차</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">1</div>
              <h3 className="font-bold text-xl mb-2">전문가 분석</h3>
              <p className="text-gray-500">입력하신 데이터를 기반으로 최적 모델 선정</p>
            </div>
            <div className="relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">2</div>
              <h3 className="font-bold text-xl mb-2">해피콜 진행</h3>
              <p className="text-gray-500">혜택 안내 및 최종 모델 확정 상담</p>
            </div>
            <div className="relative">
              <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">3</div>
              <h3 className="font-bold text-xl mb-2">무료 설치</h3>
              <p className="text-gray-500">기사님 방문 및 초기 비용 없이 설치 완료</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400">잠시만 기다려주시면 상담원으로부터 연락이 갈 예정입니다.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl"
            >
              홈으로 돌아가기
            </Link>
            <Link
              to="/benefits"
              className="bg-white text-gray-700 border-2 border-gray-200 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-all"
            >
              혜택 다시 확인하기
            </Link>
          </div>
        </div>

        <div className="mt-16 p-6 border rounded-2xl inline-block bg-blue-50 border-blue-100">
           <p className="text-blue-800 font-bold">💡 상담 대기 팁!</p>
           <p className="text-blue-600 mt-1 text-base">www.다나눔렌탈.com 에서 상세 제품과, 제휴 카드를 미리 확인해두시면 더 큰 할인을 안내받으실 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
