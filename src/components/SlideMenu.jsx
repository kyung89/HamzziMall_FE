import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoHeartCircle } from "react-icons/io5";

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴 토글 함수
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* 오른쪽 슬라이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 메뉴 닫기 버튼 */}
        <button
          onClick={toggleMenu}
          className="h-10 absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 px-3 py-1 text-gray-600 bg-gray-100 border"
        >
          {isOpen ? (
            <IoIosArrowForward size="20" />
          ) : (
            <IoIosArrowBack size="20" />
          )}
        </button>
        <nav className="mt-5 space-y-4">
          <div className="grid grid-cols-2 gap-2 p-8">
            <div className="h-20 text-gray-500 bg-gray-100 hover:bg-blue-100 transition-colors duration-300 rounded-3xl flex items-center justify-center text-sm">
              공지사항
            </div>
            <div className="h-20 text-gray-500 bg-gray-100 hover:bg-blue-100 transition-colors duration-300 rounded-3xl flex items-center justify-center text-sm">
              Q&A
            </div>
            <div className="h-20 text-gray-500 bg-gray-100 hover:bg-blue-100 transition-colors duration-300 rounded-3xl flex items-center justify-center text-sm">
              상품후기
            </div>
            <div className="h-20 text-gray-500 bg-gray-100 hover:bg-blue-100 transition-colors duration-300 rounded-3xl flex items-center justify-center text-sm">
              배송조회
            </div>
          </div>
          <div className="space-y-4 px-8 pt-5">
            <div className="flex items-center text-lg">
              <span className="text-blue-200 pr-2">
                <IoHeartCircle size="30" />
              </span>{" "}
              <span className="text-gray-500">CS. CENTER</span>
            </div>
            <div className="font-bold text-lg text-blue-500">0000-0000</div>
            <div>
              <div>
                <span className="text-gray-500">문자전용</span>
                <span className="pl-1 text-blue-400">000-0000-0000</span>
              </div>
              <div>
                <span className="text-gray-500">카카오톡 채널</span>
                <span className="pl-1 text-blue-400">'햄찌몰'</span>
              </div>
              <div className="text-gray-500">오전 10시 ~ 오후 6시</div>
              <div className="text-gray-500">토요일, 일요일, 공휴일 휴무</div>
            </div>
          </div>
          <div className="space-y-4 px-8 pt-5">
            <div className="flex items-center text-lg">
              <span className="text-green-200 pr-2">
                <IoHeartCircle size="30" />
              </span>{" "}
              <span className="text-gray-500">CS. CENTER</span>
            </div>
            <div>
              <div className="text-gray-500">농협 000-0000-0000-00</div>
              <div className="text-gray-500">국민 000000-00-000000</div>
              <div className="text-gray-500">예금주: (주) 햄찌몰</div>
            </div>
          </div>
          <div className="space-y-4 px-8 pt-5 text-gray-500">TODAY VIEW</div>
        </nav>
      </div>
    </div>
  );
};

export default SlideMenu;
