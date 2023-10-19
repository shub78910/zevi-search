import Header from "../../components/Header";

const Search: React.FC = () => {
  return (
    <div>
      <div>
        <Header showSearchBar={true} />
      </div>

      <div>
        <h1>Search Results</h1>

        <div>Filter box</div>

        <div>Products</div>
      </div>
    </div>
  );
};

export default Search;
