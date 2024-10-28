import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <div className="top_menu">
        <div className="detail_menu border border-gray-300 p-2 bg-white">
          <div className="inner_menu flex justify-between max-w-6xl mx-auto text-slate-600">
            <div className="menu_1">
              <ul className="flex text-sm justify-between">
                <li className="px-1">즐겨찾기</li>
                <li className="px-1">유투브</li>
                <li className="px-1">인스타그램</li>
                <li className="px-1">트위터</li>
              </ul>
            </div>
            <div className="menu_2">
              <ul className="flex text-sm justify-between">
                <li className="px-1 hover:text-gray-950 cursor-pointer">
                  로그인
                </li>
                <li className="px-1 hover:text-gray-950 cursor-pointer">
                  회원가입
                </li>
                <li className="px-1 hover:text-gray-950 cursor-pointer">
                  장바구니(0)
                </li>
                <li className="px-1 hover:text-gray-950 cursor-pointer">
                  주문조회
                </li>
                <li className="px-1 hover:text-gray-950 cursor-pointer">
                  마이페이지
                </li>
                <li className="px-1 cursor-pointer group">
                  커뮤니티
                  <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                    <div className="shadow text-xs w-30 border mt-2.5 border-t-0 -ml-8">
                      <div className="p-2 hover:bg-slate-100 cursor-pointer text-center">
                        공지사항
                      </div>
                      <div className="p-2 hover:bg-slate-100 cursor-pointer text-center">
                        Q&A
                      </div>
                      <div className="p-2 hover:bg-slate-100 cursor-pointer text-center">
                        상품사용후기
                      </div>
                      <div className="p-2 hover:bg-slate-100 cursor-pointer text-center">
                        구매후기 적립금 신청
                      </div>
                    </div>
                  </div>
                </li>
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
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">햄테리어</div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    세트상품
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    체험곡식
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    꾸미기베딩
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    은신처
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    목욕실/화장실
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    꾸미기용품
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">사료</div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    골든 햄스터용
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    드워프 햄스터용
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    마우스/래트/저빌
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">간식</div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    알곡/견과류
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    건초/건야채/건과일
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    밀웜/단백질류
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    브랜드 간식/스낵
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">이갈이</div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                베딩/모래
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    나무/종이/기타 베딩
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    건초/꽃잎/기타
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    목욕/화장실 모래
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                은신처/목욕화장실
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    은신처
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    화장실
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    위생
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                급수/급식기
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                쳇바퀴/장난감
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    장난감
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    쳇바퀴/쏘저
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                하우스/터널
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    리빙박스/개조
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    아크릴/플라스틱
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    터널
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    이동장
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">
                영양제/이유식
              </div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    영양제
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    분유/이유식
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">기타</div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    포장/계량용품
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    계절용품
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    햄찌굿즈
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    위생용품/기타
                  </li>
                </ul>
              </div>
            </li>
            <li className="group">
              <div className="hover:text-gray-500 cursor-pointer">할인상품</div>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="shadow p-2 mt-3 border">
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    골든 햄스터용
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    드워프 햄스터용
                  </li>
                  <li className="p-1 hover:text-gray-500 cursor-pointer">
                    마우스/래트/저빌
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
