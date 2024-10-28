import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const ScrollToButton = () => {
  // 스크롤 탑 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  // 스크롤 버텀 함수
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  return (
    <div>
      <div className="fixed bottom-24 right-4 z-50">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-gray-200 text-gray-500"
        >
          <IoIosArrowUp size="20" />
        </button>
      </div>
      <div className="fixed bottom-7 right-4 z-50">
        <button
          onClick={scrollToBottom}
          className="p-3 rounded-full bg-gray-200 text-gray-500"
        >
          <IoIosArrowDown size="20" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToButton;
