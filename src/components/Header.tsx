import When from "./When";
// @ts-ignore
import ZeviLogo from "../assets/icons/zevi-logo.png";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({
  showSearchBar,
  handleChange,
  handleMenuDisplay,
}: {
  showSearchBar: boolean;
  handleChange?: (value: string) => void;
  handleMenuDisplay?: () => void;
}) => {
  return (
    <header>
      <div className="absolute right-14 top-6 hidden md:block">
        <img src={ZeviLogo} alt="zevi-logo" width={70} height={70} />
      </div>
      <When isTrue={showSearchBar}>
        <div className="flex justify-center items-center pt-4 px-2 gap-4">
          <menu className="block md:hidden" onClick={handleMenuDisplay}>
            <RxHamburgerMenu size={40} color="gray" />
          </menu>
          <SearchBar {...{ handleChange }} />
        </div>
      </When>
    </header>
  );
};

export default Header;
