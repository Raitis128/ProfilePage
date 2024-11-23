import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";
import { useState } from "react";

const tabs = [
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            link="#"
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://via.placeholder.com/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            link="#"
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://via.placeholder.com/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            link="#"
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://via.placeholder.com/400x300"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map(({ id, icon, label }) => (
          <button
            key={id}
            className={`flex-1 text-center py-2 font-medium text-sm ${
              activeTab === id ? "border-b-2" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {icon}
              <span className="hidden md:block">{label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
