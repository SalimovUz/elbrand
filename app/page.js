"use client";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import Judo from "../public/elbrandlogo.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-blue-100 flex flex-col items-center relative">

      {/* Header Section */}
      <div className="text-center py-8">
        <div className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-green-500 overflow-hidden">
          <Image src={Judo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        <h1 className="text-5xl font-extrabold text-red-800 mt-4">
          Elbrand
        </h1>

        <p className="text-gray-800 mt-2 text-lg tracking-wide">
          🚚O&#39;zbekiston bo&#39;ylab yetkazish xizmati mavjud💥
        </p>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Ijtimoiy tarmoqlarimiz!
        </h1>
        <a target="_blank"
          href="https://t.me/elbrand_rasmiy"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <TelegramIcon className="text-blue-600 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram</h1>
            <p className="text-gray-600">@Elbrand_rasmiy</p>
          </div>
        </a>
        <a target="_blank"
          href="https://www.instagram.com/elbrand_uzb"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-pink-50 transition border"
        >
          <InstagramIcon className="text-pink-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Instagram</h1>
            <p className="text-gray-600">@Elbrand_uzb</p>
          </div>
        </a>
        <a target="_blank"
          href="https://t.me/sadriddin_01_09"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition border"
        >
          <SendIcon className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Telegram Admin</h1>
            <p className="text-gray-600">@sadriddin_01_09</p>
          </div>
        </a>
        {/* Phone Number */}
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition border">
          <PhoneIcon className="text-green-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Bog&#39;lanish</h1>
            <p className="text-gray-600">+998 97 774 06 69</p>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm space-y-6 mt-10 mb-8 border-2 border-red-200">
        <h1 className="text-center text-xl font-semibold text-green-800">
          Manzil (Filiallarimiz)
        </h1>
        <a target="_blank"
          href="https://maps.google.com/maps?q=41.252490,69.322419&ll=41.252490,69.322419&z=16"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Qo&#39;yliq Pochta filiali</h1>
            <p className="text-gray-600">☎️Tel: +998 97 774 06 69</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.google.com/maps?q=41.254285,69.373977&ll=41.254285,69.373977&z=16"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Bektemir Vodnik filiali</h1>
            <p className="text-gray-600">☎️Tel: +998 99 256 66 77</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.google.com/maps?q=41.334611,69.407222&ll=41.334611,69.407222&z=16"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Mirzo Ulug&#39;bek filiali</h1>
            <p className="text-gray-600">☎️Tel: +998 99 088 37 22</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.google.com/maps?q=41.221389,69.258789&ll=41.221389,69.258789&z=16"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Sergeli filiali</h1>
            <p className="text-gray-600">☎️Tel: +998 97 707 25 97</p>
          </div>
        </a>
        <a target="_blank"
          href="https://maps.google.com/maps?q=41.364496,69.295114&ll=41.364496,69.295114&z=16"
          className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition border"
        >
          <LocationOnIcon className="text-red-500 text-3xl" />
          <div>
            <h1 className="text-lg font-bold">Yunusobod filiali</h1>
            <p className="text-gray-600">☎️Tel: +998 90 038 74 31</p>
          </div>
        </a>
      </div>
    </div>
  );
}
