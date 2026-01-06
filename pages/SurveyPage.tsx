
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyData, WaterPurifierType, ManagementStyle } from '../types';

const SurveyPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<SurveyData>({
    purifierType: '',
    managementStyle: '',
    name: '',
    phone: '',
    contactTime: '오전 (09:00 ~ 12:00)',
    privacyAgreed: false,
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      /**
       * 구글 시트 연동 가이드:
       * 1. 구글 시트에서 [확장 프로그램] -> [Apps Script] 클릭
       * 2. 아래 코드를 붙여넣고 [배포] -> [새 배포] (유형: 웹 앱, 액세스 권한: 모든 사용자)
       * 
       * function doPost(e) {
       *   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       *   var data = JSON.parse(e.postData.contents);
       *   sheet.appendRow([new Date(), "", data.contactTime, data.managementStyle, data.name, data.phone, data.privacyAgreed ? "동의" : "미동의", "", data.purifierType]);
       *   return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
       * }
       */
      
      const SCRIPT_URL = 'YOUR_APPS_SCRIPT_WEB_APP_URL'; 

      if (SCRIPT_URL !== 'YOUR_APPS_SCRIPT_WEB_APP_URL') {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          body: JSON.stringify(formData),
        });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      console.log('Survey Data Submitted to Sheet:', formData);
      navigate('/results');
    } catch (error) {
      console.error('제출 중 오류 발생:', error);
      alert('데이터 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof SurveyData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">어떤 타입의 정수기를 원하시나요?</h2>
              <p className="text-gray-500 text-xl">가장 선호하는 타입을 선택해주세요.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Object.values(WaterPurifierType).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => { updateField('purifierType', type); nextStep(); }}
                  className={`p-6 text-xl text-left rounded-3xl border-2 transition-all flex items-center justify-between group ${
                    formData.purifierType === type ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <span className="font-bold">{type}</span>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${formData.purifierType === type ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-blue-400'}`}>
                    {formData.purifierType === type && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">선호하는 관리 방식은 무엇인가요?</h2>
              <p className="text-gray-500 text-xl">직접 관리하거나 전문가의 도움을 받을 수 있습니다.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Object.values(ManagementStyle).map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => { updateField('managementStyle', style); nextStep(); }}
                  className={`p-6 text-xl text-left rounded-3xl border-2 transition-all flex items-center justify-between group ${
                    formData.managementStyle === style ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <span className="font-bold">{style}</span>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${formData.managementStyle === style ? 'border-primary bg-primary' : 'border-gray-300 group-hover:border-blue-400'}`}>
                    {formData.managementStyle === style && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <button onClick={prevStep} type="button" className="w-full py-4 text-gray-500 font-bold hover:text-gray-700 transition-colors">이전 단계로</button>
          </div>
        );
      case 3:
        return (
          <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">맞춤 혜택을 확인하기 위해<br />정보를 입력해주세요.</h2>
              <p className="text-gray-500 text-xl">상담을 위한 필수 정보만 수집합니다.</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-lg">성함</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-primary outline-none transition-all text-xl"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-lg">연락처</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-primary outline-none transition-all text-xl"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-lg">연락 가능 시간</label>
                <select
                  value={formData.contactTime}
                  onChange={(e) => updateField('contactTime', e.target.value)}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:border-primary outline-none transition-all text-xl bg-white"
                >
                  <option>오전 (09:00 ~ 12:00)</option>
                  <option>점심 (12:00 ~ 13:00)</option> 
                  <option>오후 (13:00 ~ 15:00)</option>
                  <option>오후 (15:00 ~ 20:00)</option>
                  <option>언제든 상관없음</option>
                </select>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyAgreed}
                  onChange={(e) => updateField('privacyAgreed', e.target.checked)}
                  className="w-6 h-6 mt-1 cursor-pointer"
                />
                <label htmlFor="privacy" className="text-gray-600 text-base cursor-pointer leading-tight">
                  (필수) 개인정보 수집 및 이용 동의 [보기]<br />
                  <span className="text-xs text-gray-400">상담 및 렌탈 정보 제공을 위해 위 정보를 수집합니다.</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white py-6 rounded-3xl font-bold text-2xl shadow-xl transition-all flex items-center justify-center gap-3 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    데이터 전송 중...
                  </>
                ) : (
                  '추천 결과 확인 & 혜택 신청하기'
                )}
              </button>
              {!isSubmitting && (
                <button onClick={prevStep} type="button" className="w-full py-4 text-gray-500 font-bold hover:text-gray-700 transition-colors">이전 단계로</button>
              )}
            </div>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <span className="text-primary font-bold text-lg">설문 진행 중</span>
            <span className="text-gray-400 font-medium">{step} / 3</span>
          </div>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
          {renderStep()}
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-gray-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span>보안 서버 작동 중</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span>정보 보안 준수</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
