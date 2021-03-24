import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { seeHost } from "../../../store/host";
import { message } from "antd";
import "../../styling/checkboxStyle.css";
// import "../styling/searchBar.css";

const SearchForm = ({
  search,
  setSearch,
  sommelier,
  setSommelier,
  mixologist,
  setMixologist,
  redWine,
  setRedWine,
  whiteWine,
  setWhiteWine,
  roseWine,
  setRoseWine,
  bourbon,
  setBourbon,
  brandy,
  setBrandy,
  cognac,
  setCognac,
  gin,
  setGin,
  liqueurs,
  setLiqueurs,
  rum,
  setRum,
  scotch,
  setScotch,
  tequila,
  setTequila,
  vodka,
  setVodka,
  whiskey,
  setWhiskey,
}) => {

  const dispatch = useDispatch();
  const sessionHostId = useSelector((state) =>
    state.host.host ? state.host.host : null
  );

  const onSearch = async (e) => {
    e.preventDefault();
    dispatch(seeHost(search, sommelier, mixologist, sessionHostId)).then(
      (res) => {
        if (res.Host === "Not found") {
          message.error(`User ${search} not found`);
        }
        // else {
        //   message.success(`User ${search} added to Event!`);
        // }
      }
    );
  };

  const updateSearch = (e) => setSearch(e.target.value);
  const updateSommelier = () => setSommelier(!sommelier);
  const updateMixologist = () => setMixologist(!mixologist);
  const updateRedWine = () => setRedWine(!redWine);
  const updateWhiteWine = () => setWhiteWine(!whiteWine);
  const updateRoseWine = () => setRoseWine(!roseWine);
  const updateBourbon = () => setBourbon(!bourbon);
  const updateBrandy = () => setBrandy(!brandy);
  const updateCognac = () => setCognac(!cognac);
  const updateGin = () => setGin(!gin);
  const updateLiqueurs = () => setLiqueurs(!liqueurs);
  const updateRum = () => setRum(!rum);
  const updateScotch = () => setScotch(!scotch);
  const updateTequila = () => setTequila(!tequila);
  const updateVodka = () => setVodka(!vodka);
  const updateWhiskey = () => setWhiskey(!whiskey);

  return (
    <div className="search_bar">
      <form onSubmit={onSearch}>
        <input
          className="searchInput"
          placeholder="Search name, city, state, postal code..."
          value={search}
          type="text"
          onChange={updateSearch}
        ></input>
        <label className="container">
          Sommelier
          <input
            className="checkbox"
            type="checkbox"
            name="sommelier"
            checked={sommelier}
            onChange={updateSommelier}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Mixologist
          <input
            className="checkbox"
            type="checkbox"
            name="mixologist"
            checked={mixologist}
            onChange={updateMixologist}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Red Wine
          <input
            className="checkbox"
            type="checkbox"
            name="redWine"
            checked={redWine}
            onChange={updateRedWine}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          White Wine
          <input
            className="checkbox"
            type="checkbox"
            name="whiteWine"
            checked={whiteWine}
            onChange={updateWhiteWine}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Rose Wine
          <input
            className="checkbox"
            type="checkbox"
            name="roseWine"
            checked={roseWine}
            onChange={updateRoseWine}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Bourbon
          <input
            className="checkbox"
            type="checkbox"
            name="bourbon"
            checked={bourbon}
            onChange={updateBourbon}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Brandy
          <input
            className="checkbox"
            type="checkbox"
            name="brandy"
            checked={brandy}
            onChange={updateBrandy}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
        Cognac
          <input
            className="checkbox"
            type="checkbox"
            name="cognac"
            checked={cognac}
            onChange={updateCognac}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Gin
          <input
            className="checkbox"
            type="checkbox"
            name="gin"
            checked={gin}
            onChange={updateGin}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
        Liqueurs
          <input
            className="checkbox"
            type="checkbox"
            name="liqueurs"
            checked={liqueurs}
            onChange={updateLiqueurs}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Rum
          <input
            className="checkbox"
            type="checkbox"
            name="rum"
            checked={rum}
            onChange={updateRum}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Scotch
          <input
            className="checkbox"
            type="checkbox"
            name="scotch"
            checked={scotch}
            onChange={updateScotch}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Tequila
          <input
            className="checkbox"
            type="checkbox"
            name="tequila"
            checked={tequila}
            onChange={updateTequila}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Vodka
          <input
            className="checkbox"
            type="checkbox"
            name="vodka"
            checked={vodka}
            onChange={updateVodka}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Whiskey
          <input
            className="checkbox"
            type="checkbox"
            name="whiskey"
            checked={whiskey}
            onChange={updateWhiskey}
          />
          <span className="checkmark"></span>
        </label>
        <button type="submit" className="reserve-btn">
          Find a Host
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
