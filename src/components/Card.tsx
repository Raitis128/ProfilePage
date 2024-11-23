interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card = ({ title, description, image, link }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem] rounded-lg shadow-sm overflow-hidden border border-gray-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          className="cursor-pointer border border-gray-300 inline-block px-4 py-2 bg-white text-black font-semibold rounded-md shadow-sm hover:bg-gray-600 hover:text-white transition duration-200"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
