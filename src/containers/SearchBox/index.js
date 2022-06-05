import { useState } from "react";
import Icon from "../../assets/icons/meli-icon.svg";
import InputCustom from "../../components/InputCustom";
import { useFetch } from "../../Hooks/useFetch"
import "./SearchBox.scss";

const SearchBox = () => {
  const [textToSearch, setTextToSearch] = useState("");
  const { callService } = useFetch();
  const changeTextSearch = (e) => {
    const {
      target: { value },
    } = e;
    setTextToSearch(value);
  };

  const getProduts = () => {
    callService('getProducts', textToSearch);
  }

  const inputProps = {
    placeholder: "Nunca dejes de buscar",
    value: textToSearch,
    type: "search",
    icon: "search",
  };
  return (
    <section id="search-box" className="search-box">
      <img className="search-box__logo" src={Icon} alt="MeliIcon" width={35} height={35} />
      <InputCustom {...inputProps} onChange={changeTextSearch} onClick={getProduts} />
    </section>
  );
};

export default SearchBox;