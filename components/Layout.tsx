
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: '홈', path: '/' },
    { name: '설문참여', path: '/survey' },
    { name: '참여혜택', path: '/benefits' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
                다나눔렌탈<span className="text-gray-900">정수기</span>
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <Link
                to="/survey"
                className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md"
              >
                무료 추천 시작
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-medium text-gray-600 py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/survey"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-primary text-white py-3 rounded-xl font-bold text-xl"
            >
              무료 추천 시작
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">다나눔렌탈 솔루션</h3>
              <p className="text-gray-500 max-w-sm mx-auto md:mx-0">
                복잡한 정수기 비교부터 혜택 확인까지, 고객님께 딱 맞는 최적의 플랜을 제시해드립니다.
              </p>
            </div>
            <div className="flex flex-col space-y-2 md:items-end">
              <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors underline">개인정보처리방침</Link>
              <p className="text-gray-400 text-sm mt-4">
                사업자등록번호: 694-21-02453 | 고객센터: 1660-2445<br />
                주소: 서울특별시 성동구 동일로 143
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} dananumrental. All rights reserved. 본 웹사이트는 상담 유도를 위한 마케팅 페이지입니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
