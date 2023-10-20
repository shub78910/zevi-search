import When from "./When";
// @ts-ignore
import ZeviLogo from "../assets/icons/zevi-logo.png";
import SearchBar from "./SearchBar";

const Header = ({
  showSearchBar,
  handleChange,
}: {
  showSearchBar: boolean;
  handleChange?: (value: string) => void;
}) => {
  return (
    <>
      <div className="absolute right-14 top-6 hidden md:block">
        <img src={ZeviLogo} alt="zevi-logo" width={70} height={70} />
      </div>
      <When isTrue={showSearchBar}>
        <div className="flex justify-center pt-4 px-2">
          <SearchBar {...{ handleChange }} />
        </div>
      </When>
    </>
  );
};

export default Header;
