import { useEffect, useState } from "react";
// @ts-ignore
import BgHome from "../../assets/images/bg-home.png";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import When from "../../components/When";
import { ITrends, getTrends } from "../../helpers/getData";
import TrendItem from "./TrendItem";
import { suggestions } from "../../static/suggestions";

const Home: React.FC = () => {
  const [showTrends, setShowTrends] = useState(false);
  const [trends, setTrends] = useState<ITrends[]>([]);

  useEffect(() => {
    const res = getTrends(5);

    setTrends(res);
  }, []);

  return (
    <div
      className="bg-cover bg-top min-h-screen"
      style={{ backgroundImage: `url(${BgHome})` }}
    >
      <Header {...{ showSearchBar: false }} />
      <div className="flex justify-center pt-32 px-2">
        <SearchBar {...{ setShowTrends }} />
      </div>
      <When isTrue={showTrends}>
        <div className="flex flex-col items-center justify-center p-2">
          <div className=" bg-white w-full md:w-3/5 rounded-lg h-fit mt-4 p-2 px-8 shadow-sm shadow-black">
            <h1 className="text-xl font-medium p-2 mb-2">Latest trends</h1>
            <div className="flex flex-wrap justify-around">
              {trends.map((item) => {
                return <TrendItem {...{ item }} />;
              })}
            </div>

            <div className="mt-8 h-56">
              <h3 className="text-lg font-semibold mb-4">
                Popular suggestions
              </h3>

              <ul>
                {suggestions.map((suggestion: string) => {
                  return (
                    <li className="text-sm text-gray-600 mb-2 cursor-pointer">
                      {suggestion}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </When>
    </div>
  );
};

export default Home;
