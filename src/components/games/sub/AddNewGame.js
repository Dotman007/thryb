import React from "react";
import { useNavigate } from "react-router-dom";
import AddNewGameOne from "./AddNewGameOne";
import AddNewGameThree from "./AddNewGameThree";
import AddNewGameTwo from "./AddNewGameTwo";
const AddNewGame = ({ page, setPage, gamesPage, setGamesPage,gameTypeList, setGameTypeList,colorOption,setColorOption, answers, setAnswers,name,
  setName,
  description,
  setDescription,
  icon,
  setIcon,
  gameType,
  setGameType,
  questionImage, 
  setQuestionImage, 
  falseAnswers, 
  setFalseAnswers,
  mainAnswer,
  setMainAnswer,
  question,
  setQuestion
}) => {
  const navigate = useNavigate();
  return (
    <div className='main-content'>
      <div className='container-fluid'>
        <div className='row mb-3'>
          <div className='col-12 mt-5'>
            <div className='d-flex align-item-center'>
              <ul className='d-flex'>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    navigate("/");
                  }}
                >
                  <i className='fa fa-home'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>Home</span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setGamesPage("mgt");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    Thrybe Games
                  </span>
                </li>
                <li
                  className='mr-2'
                  onClick={(e) => {
                    setGamesPage("addnew-1");
                  }}
                >
                  <i className='fa fa-chevron-right font-xs'></i>
                  <span className='font-xs pl-2 f-weight-500 mt-1'>
                    <strong>Create New</strong>
                  </span>
                </li>
              </ul>
            </div>
            <div className='mt-4 d-flex align-items-center'>
              <h5>Create a new Thrybe Game</h5>
            </div>
          </div>
        </div>

        {gamesPage == "addnew-1" && (
          <AddNewGameOne setGamesPage={setGamesPage} 
          gameTypeList={gameTypeList}
          setGameTypeList={setGameTypeList}
          setAnswers={setAnswers}
          answers={answers}
          colorOption={colorOption}
          setColorOption={setColorOption} 
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          icon={icon}
          setIcon={setIcon}
          gameType={gameType}
          setGameType={setGameType}
          />
        )}

        {gamesPage == "addnew-2" && (
          <AddNewGameTwo  setGamesPage={setGamesPage} 
          gameTypeList={gameTypeList}
          setGameTypeList={setGameTypeList}
          setAnswers={setAnswers}
          answers={answers}
          colorOption={colorOption}
          setColorOption={setColorOption}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          icon={icon}
          setIcon={setIcon}
          gameType={gameType}
          setGameType={setGameType}
          questionImage={questionImage}
          setQuestionImage={setQuestionImage}
          falseAnswers={falseAnswers}
          setFalseAnswers={setFalseAnswers}
          question={question}
          setQuestion={setQuestion}
          mainAnswer={mainAnswer}
          setMainAnswer={setMainAnswer}
          />
        )}

        {gamesPage == "addnew-3" && (
          <AddNewGameThree page={page}
          setPage={setPage}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          gameTypeList={gameTypeList}
          setGameTypeList={setGameTypeList}
          setAnswers={setAnswers}
          answers={answers}
          colorOption={colorOption}
          setColorOption={setColorOption}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          icon={icon}
          setIcon={setIcon}
          gameType={gameType}
          setGameType={setGameType}
          questionImage={questionImage}
          setQuestionImage={setQuestionImage}
          falseAnswers={falseAnswers}
          setFalseAnswers={setFalseAnswers}
          question={question}
          setQuestion={setQuestion}
          mainAnswer={mainAnswer}
          setMainAnswer={setMainAnswer}

          />
        )}
      </div>
    </div>
  );
};

export default AddNewGame;
