import React,{useState} from "react";
import Header from "../dashboard/main/header/Header";
import AddNewGame from "./sub/AddNewGame";
import GamesMain from "./GamesMain";
import SingleGame from "./sub/singlegame/SingleGame";

const GamesMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  gamesPage,
  setGamesPage,
  userPicture,
  setUserPicture
}) => {
  const [gameTypeList, setGameTypeList]= useState([]);
  const [colorOption, setColorOption]= useState('#842a83');
  const [answers, setAnswers]= useState([1,2]);
  const [name, setName]= useState('');
  const [description, setDescription]= useState('');
  const [icon, setIcon]= useState('');
  const [gameType, setGameType]= useState(1);
  const [questionImage, setQuestionImage]= useState('');
  const [falseAnswers, setFalseAnswers]= useState([]);
  const [question, setQuestion]= useState('');
  const [mainAnswer, setMainAnswer]= useState('');
  const [search, setSearch] = useState("");
  const [singleGame, setSingleGame] = useState({});


  return (
    <main className='main-section'>
      <Header
        page={page}
        setPage={setPage}
        showNav={showNav}
        setShowNav={setShowNav}
        userPicture={userPicture}
        setUserPicture={setUserPicture}
      />
      {gamesPage == "mgt" && (
        <GamesMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          search={search}
          setSearch={setSearch}
          singleGame={singleGame}
          setSingleGame={setSingleGame}
        />
      )}
      {(gamesPage == "single" || gamesPage == "single-2") && (
        <SingleGame
          page={page}
          setPage={setPage}
          gamesPage={gamesPage}
          setGamesPage={setGamesPage}
          singleGame={singleGame}
          setSingleGame={setSingleGame}
        />
      )}
      {(gamesPage == "addnew-1" ||
        gamesPage == "addnew-2" ||
        gamesPage == "addnew-3") && (
        <AddNewGame
          page={page}
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
    </main>
  );
};

export default GamesMainContainer;
