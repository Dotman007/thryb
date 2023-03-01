import React from "react";
import GamesBreadCrumb from "./GamesBreadCrumb";
import GamesListContainer from "./GamesListContainer";
import GamesSubNav from "./GamesSubNav";
import { useState } from "react";

const GamesMain = ({
  page,
  setPage,
  showBtn,
  setShowBtn,
  gamesPage,
  setGamesPage,
  search,
  setSearch,
  singleGame,
  setSingleGame
}) => {
  const [gamesList, setGamesList] = useState([]);
  const [filter, setFilter] = useState(false);
  const [showSpinner, setShowSpinner] = useState(true);
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <GamesBreadCrumb
          showBtn={showBtn}
          page={page}
          setPage={setPage}
          setShowBtn={setShowBtn}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          gamesList={gamesList}
          setGamesList={setGamesList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        />
        <GamesSubNav
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          filter={filter}
          setFilter={setFilter}
          gamesList={gamesList}
          setGamesList={setGamesList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          search={search}
          setSearch={setSearch}
        />
        <GamesListContainer
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          filter={filter}
          setFilter={setFilter}
          gamesList={gamesList}
          setGamesList={setGamesList}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          page={page}
          search={search}
          setSearch={setSearch}
          singleGame={singleGame}
          setSingleGame={setSingleGame}
        />
      </div>
    </div>
  );
};

export default GamesMain;
