import React from "react";
import GamesList from "./GamesList";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/base";
import ReactPaginate from "react-paginate";
const GamesListContainer = ({
  showBtn,
  setShowBtn,
  gamesPage,
  setGamesPage,
  setFilter,
  gamesList,
  setGamesList,
  showSpinner,
  setShowSpinner,
  page,
  search,
  setSearch,
  singleGame,
  setSingleGame
}) => {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);
  const gamesPerPage = 10;
  const pagesVisited = pageNumber * gamesPerPage;
  const displayGames = gamesList.slice(
    pagesVisited,
    pagesVisited + gamesPerPage
  );
  const pageCount = Math.ceil(gamesList.length / gamesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    const fetchGamesList = async () => {
      try {
        const response = await api.post("/ThrybeGameList");
        setGamesList(response.data);
        setShowSpinner(false);
        setFilter(true);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchGamesList();
  }, [page]);

  return (
    <>
      <div className='row mt-4'>
        <div className='col-12 mb-3'>
          <div className='custom-card'>
            <div className='users-table-div table-responsive'>
              <table className='table table-borderless users-table'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Banner</th>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Participants</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {displayGames.length >= 1 &&
                    displayGames.map((item, index) => (
                      <GamesList
                        showBtn={showBtn}
                        setShowBtn={setShowBtn}
                        gamesPage={gamesPage}
                        setGamesPage={setGamesPage}
                        item={item}
                        key={index}
                        search={search}
                        setSearch={setSearch}
                        singleGame={singleGame}
                        setSingleGame={setSingleGame}
                      />
                    ))}
                </tbody>
              </table>
              {showSpinner && <div className='spinner'></div>}
            </div>
          </div>
        </div>
      </div>
      {gamesList.length > 0 && (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      )}
    </>
  );
};

export default GamesListContainer;
