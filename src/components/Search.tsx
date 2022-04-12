import { useState } from "react";
import "bulma/css/bulma.css";

type SearchProps = {
  search: (arg: string) => void;
};

export const Search: React.FC<SearchProps> = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  // フォーム内の値を入力されたものに変更
  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="is-flex columns is-centered m-5">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Input Title"
        className="input is-primary is-large column is-half control is-loading"
      />
      <button
        onClick={callSearchFunction}
        type="submit"
        className="button is-primary is-large"
      >
        SEARCH
      </button>
    </form>
  );
};
