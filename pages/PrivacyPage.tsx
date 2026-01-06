
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">개인정보처리방침</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 수집하는 개인정보 항목</h2>
            <p>본 서비스는 원활한 고객 상담 및 렌탈 정보 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 bg-gray-50 p-6 rounded-2xl">
              <li>수집 항목: 이름, 휴대전화번호, 거주지역, 선호하는 상담 시간대, 정수기 선호 타입 및 관리 방식</li>
              <li>수집 방법: 웹사이트 내 설문 및 상담 신청 폼을 통한 이용자 직접 입력</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 개인정보의 수집 및 이용 목적</h2>
            <p>수집된 개인정보는 다음의 목적을 위해 활용됩니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>렌탈 제품 및 혜택 안내를 위한 전화/문자 상담 진행</li>
              <li>고객 맞춤형 상품 추천 및 마케팅 정보 제공</li>
              <li>상담 예약 관리 및 본인 확인</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 개인정보의 보유 및 이용 기간</h2>
            <p>이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 일정 기간 보존합니다.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>보존 항목: 이름, 연락처, 상담 이력</li>
              <li>보존 기간: 상담 완료 후 1년 (고객 사후 관리 및 재상담 대비)</li>
              <li>근거 법령: 전자상거래 등에서의 소비자보호에 관한 법률</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 개인정보의 파기 절차 및 방법</h2>
            <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하며, 종이 문서에 출력된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 이용자의 권리와 그 행사 방법</h2>
            <p>이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지(동의철회)를 요청할 수도 있습니다. 개인정보 관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.</p>
          </section>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mt-12">
            <h3 className="text-xl font-bold text-blue-900 mb-2">개인정보 관리 책임자</h3>
            <p className="text-blue-800">
              성명: 이수현 팀장<br />
              소속: 고객상담 지원팀<br />
              이메일: privacy@dananumrental.com<br />
              연락처: 1660-2445
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
