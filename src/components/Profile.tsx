import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState(
    "https://via.placeholder.com/1500x400"
  );

  const [profileUrl, setProfileUrl] = useState(
    "https://via.placeholder.com/100"
  );

  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative flex-1 ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt="Banner"
          className="w-full h-60 object-cover"
        />
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>

          <input
            type="file"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>

      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="Profile image"
          className="w-25 h-25 sm:w-40 sm:h-40 object-cover rounded-full border-white relative"
        />

        <button className="absoulute -ml-[4.3rem] sm:-ml-[6rem] z-10 mt-[5rem] sm:mt-[9rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className="hidden"
            onChange={handleProfileChange}
          />
        </button>

        <div className="ml-4 mt-4">
          <h1 className="text-2xl font-bold ml-[2rem] sm:ml-[4rem]">Jwen128</h1>
          <p className="ml-[2rem] sm:ml-[4rem]">1M views</p>
          <p className="mt-2 ml-[2rem] sm:ml-[4rem]">
            This is short description of the profile.
          </p>
          <button className="ml-[2rem] sm:ml-[4rem] mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      <Tabs />
    </div>
  );
};

export default Profile;
