import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className="top_menu">
        <div className="detail_menu border border-gray-300 p-2">
          <div className="inner_menu flex justify-between max-w-6xl mx-auto text-slate-600">
            <div className="menu_1">
              <ul className="flex text-xs justify-between">
                <li className="px-1">즐겨찾기</li>
                <li className="px-1">유투브</li>
                <li className="px-1">인스타그램</li>
                <li className="px-1">트위터</li>
              </ul>
            </div>
            <div className="menu_2">
              <ul className="flex text-xs justify-between">
                <li className="px-1">로그인</li>
                <li className="px-1">회원가입</li>
                <li className="px-1">장바구니(0)</li>
                <li className="px-1">주문조회</li>
                <li className="px-1">마이페이지</li>
                <li className="px-1">커뮤니티</li>
                <li className="px-1 flex">
                  <input className="border border-gray-300 items-center" />
                  <button className="p-0.5 border border-gray-300 bg-slate-100">
                    <FaSearch />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="big_logo flex justify-center items-center">
          <img
            src="/big_logo.png"
            alt="big logo blue hamster"
            className="w-52 h-52"
          />
        </div>
      </div>
      <div className="category bg-slate-300 p-3 sticky">
        <div className="max-w-6xl mx-auto">
          <ul className="flex text-sm justify-between">
            <li className="">햄테리어</li>
            <li className="">사료</li>
            <li className="">간식</li>
            <li className="">이갈이</li>
            <li className="">베딩/모래</li>
            <li className="">은신처/목욕화장실</li>
            <li className="">급수/급식기</li>
            <li className="">쳇바퀴/장난감</li>
            <li className="">하우스/터널</li>
            <li className="">영양제/이유식</li>
            <li className="">기타</li>
            <li className="">할인상품</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
