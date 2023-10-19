import { BsSearch } from "react-icons/bs";

const SearchBar = ({
  setShowTrends,
}: {
  setShowTrends?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative bg-white rounded-2xl p-2 flex items-center w-full md:w-1/2 border">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-8 py-2 rounded-xl text-gray-500 text-lg focus:outline-none"
        onClick={() => (setShowTrends ? setShowTrends(true) : null)}
      />
      <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500">
        <BsSearch size={30} />
      </span>
    </div>
  );
};

export default SearchBar;
