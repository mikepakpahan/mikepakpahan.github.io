import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      // Ini yang diubah:
      // Dari bg-primary (yang tadinya gelap)
      // Kita ganti jadi warna terang yang baru: #F0F2F5 (kalau mau bersih banget)
      // Atau kalau mau putih banget: bg-white (jika kamu definisikan di Tailwind)
      // Aku asumsikan palet warna yang ku kasih tadi udah kamu definisiin di `tailwind.config.js`
      // Jadi kamu bisa pake `bg-primaryLight` atau `bg-myNewPrimary` gitu, biar rapi.
      // Untuk contoh ini, aku pakai warna langsung atau kelas default Tailwind yang mirip
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#F0F2F5] shadow-md`} // Ditambah shadow biar ada dimensi
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          {/* Ini juga diubah: teks jadi warna gelap biar keliatan di background terang */}
          <p className="text-[#1A1A1A] text-[18px] font-bold cursor-pointer flex">
            {" "}
            {/* Pakai black-200 atau warna gelap lainnya */}
            Mike &nbsp;
            <span className="sm:block hidden">| Frontend Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              // Ini juga diubah:
              // active jadi ungu (tertiary), yang lain secondary (abu-abu agak gelap)
              className={`${active === nav.title ? "text-[#6A5ACD]" : "text-[#6B6E70]"} hover:text-[#6A5ACD] text-[18px] font-medium cursor-pointer`} // Hover juga ungu
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Icon menu dan close mungkin perlu diinvert warnanya kalau aslinya putih */}
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}></img>

          <div
            // Ini juga diubah:
            // Dari black-gradient, ganti jadi warna terang (primaryLight) dan kasih shadow
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#F0F2F5] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  // Sama kayak di atas, active ungu, yang lain secondary
                  className={`${active === nav.title ? "text-[#6A5ACD]" : "text-[#6B6E70]"} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
