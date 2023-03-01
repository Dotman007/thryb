import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../dashboard/main/header/Header";
import AddNewUserOne from "./sub/AddNewUserOne";
import AddNewUserThree from "./sub/AddNewUserThree";
import AddNewUserTwo from "./sub/AddNewUserTwo";
import SingleUser from "./sub/singleuser/SingleUser";
import UsersMain from "./UsersMain";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";

const UsersMainContainer = ({
  page,
  setPage,
  showNav,
  setShowNav,
  showBtn,
  setShowBtn,
  usersPage,
  setUsersPage,
  usersList,
  usersNumber,
  showResult,
  showSpinner,
  setShowSpinner,
  setUsersList,
  filter,
  setFilter,
  userId,
  setUserId,
  singleUserInfo,
  setSingleUserInfo,
  userPicture,
  setUserPicture
}) => {
  let navigate= useNavigate();
  const [userAvatar, setUserAvatar]= useState('');
  const [firstName, setFirstName]= useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('male');
  const [username, setUserName]= useState('');
  const [email, setEmail]= useState('');
  const [age, setAge] = useState('');
  const [userBio,setUserBio]= useState('');
  const [industry, setIndustry]= useState('Agriculture');
  const [job, setJob]=useState('');
  const [imageOne,setImageOne] = useState('');
  const [imageTwo,setImageTwo] = useState('');
  const [imageThree,setImageThree] = useState('');
  const [imageFour,setImageFour] = useState('');
  const [imageFive,setImageFive] = useState('');
  const [imageSix,setImageSix] = useState('');
  const [hobbies, setHobbies]= useState([]);
  const [religion, setReligion]= useState('Christianity');
  const [horoscope, setHoroscope] = useState('Aries');
  const [interestedIn, setInterestedIn]= useState('Men');
  const [seeking, setSeeking] = useState('Long-term relationship');
  const [wantsKid, setWantsKid]= useState(true);
  const [smoking, setSmoking]= useState(false);
  const [education,setEducation]= useState('Primary');
  const [location, setLocation]= useState('Afghanistan');
  const [drinking, setDrinking]= useState(false);
  const token = sessionStorage.getItem("token");
  const [spinner, setSpinner]= useState(false);
  const [hobbyList,setHobbyList]= useState([]);
  const [search, setSearch] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        userAvatar && firstName && lastName && telephone && gender && age && userBio && job
      ) {
        let formData = new FormData();
        formData.append("ProfilePicture", userAvatar);
        formData.append("FirstName", firstName);
        formData.append("LastName", lastName);
        formData.append("Mobile", '+234'+telephone);
        formData.append("Country", location);
        formData.append("UserName", username);
        formData.append("Email", email);
        formData.append("Gender", gender);
        formData.append("Age", age);
        formData.append("Bio", userBio);
        formData.append("Industry", industry);
        formData.append("Job", job);
        formData.append("Religion", religion);
        formData.append("Horoscope", horoscope);
        formData.append("InterestedIn", interestedIn);
        formData.append("Seeking", seeking);
        formData.append("WantsKid", wantsKid);
        formData.append("Smoking", smoking);
        formData.append("Drinking", drinking);
        formData.append("Education", education);
        formData.append("Location", location);
        formData.append("PhotoAlbum", imageOne);
        formData.append("HobbiesDto", '');
        for (const [key, value] of formData) {
          console.log(key, `: ${value}`);
      }
        let result = await fetch(
          "https://thrybe.azurewebsites.net/api/BackofficeUser/CreateUserFromBackoffice",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        result = await result;
        // toast.success("Success!");
        for (const [key, value] of formData) {
          console.log(key, `: ${value}`);
      }
      }else{
        toast.error('All fields are required!')
      }
    } catch (error) {
      toast.error("An Error Occurred!");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("img");
      sessionStorage.removeItem("pages");
      navigate("/login");
    }
  };
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios("get", "/HobbyList");
        setHobbyList(response.data);
      } catch (err) {
        console.log(err);
        
      }
    };
    fetchThrybeTalks();
  }, []);

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
      {usersPage == "mgt" && (
        <UsersMain
          page={page}
          setPage={setPage}
          showBtn={showBtn}
          setShowBtn={setShowBtn}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          usersList={usersList}
          setUsersList={setUsersList}
          usersNumber={usersNumber}
          showResult={showResult}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
          filter={filter}
          setFilter={setFilter}
          userId={userId}
          setUserId={setUserId}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
          search={search}
          setSearch={setSearch}
          userPicture={userPicture}
          setUserPicture={setUserPicture}
        />
      )}
      {usersPage == "addnew-1" && (
        <AddNewUserOne
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          userAvatar={userAvatar}
          setUserAvatar={setUserAvatar}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          telephone={telephone}
          setTelephone={setTelephone}
          gender={gender}
          setGender={setGender}
          age={age}
          setAge={setAge}
          username={username}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
        />
      )}
      {usersPage == "addnew-2" && (
        <AddNewUserTwo
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          userBio={userBio}
          setUserBio={setUserBio}
          industry={industry}
          setIndustry={setIndustry}
          job={job}
          setJob={setJob}
          imageOne={imageOne}
          setImageOne={setImageOne}
          imageTwo={imageTwo}
          setImageTwo={setImageTwo}
          imageThree={imageThree}
          setImageThree={setImageThree}
          imageFour={imageFour}
          setImageFour={setImageFour}
          imageFive={imageFive}
          setImageFive={setImageFive}
          imageSix={imageSix}
          setImageSix={setImageSix}
        />
      )}
      {usersPage == "addnew-3" && (
        <AddNewUserThree
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          hobbies={hobbies}
          setHobbies={setHobbies}
          religion={religion}
          setReligion={setReligion}
          horoscope={horoscope}
          setHoroscope={setHoroscope}
          interestedIn={interestedIn}
          setInterestedIn={setInterestedIn}
          seeking={seeking}
          setSeeking={setSeeking}
          wantsKid={wantsKid}
          setWantsKid={setWantsKid}
          smoking={smoking}
          setSmoking={setSmoking}
          drinking={drinking}
          setDrinking={setDrinking}
          education={education}
          setEducation={setEducation}
          location={location}
          setLocation={setLocation}
          handleSubmit={handleSubmit}
          hobbyList={hobbyList}
          setHobbyList={setHobbyList}
        />
      )}
      {usersPage == "single" && (
        <SingleUser
          page={page}
          setPage={setPage}
          usersPage={usersPage}
          setUsersPage={setUsersPage}
          userId={userId}
          setUserId={setUserId}
          singleUserInfo={singleUserInfo}
          setSingleUserInfo={setSingleUserInfo}
        />
      )}
      <ToastContainer />
    </main>
  );
};

export default UsersMainContainer;
