import { RiArrowDropDownLine } from "react-icons/ri";

const FilterTemplate = ({
  label,
  handleClick,
  children,
}: {
  label: string;
  handleClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="font-semibold text-lg text-gray-700 mb-5">{label}</h1>
        <div onClick={handleClick}>
          <RiArrowDropDownLine size={30} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default FilterTemplate;
