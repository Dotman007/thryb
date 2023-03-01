import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDataWithAxios } from "../../config/fetchDataWithAxios";
const Members = ({ id, members, setMembers }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchThrybeTalks = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `/ThrybeTalkMembers?id=${id}`
        );
        setMembers(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    fetchThrybeTalks();
  }, []);
  return (
    <>
      <div>
        {members && members.length == 1 && (
          <div>
            <img
              className='img-fluid h-75 w-25 talks-members-single talks-img'
              src={members[0].speakerImage || "assets/images/unknown.jpg"}
              alt='talkauthorPic'
            />
            <span className='font-sm f-weight-700 w-75 mb-4 talks-sm'>
              {members[0].speakerName || "not available"}
            </span>
          </div>
        )}
        {members.length > 1 &&
          members.length < 4 &&
          members.map((item, index) => (
            <img
              src={item.speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-img'
              key={index}
            />
          ))}
        {members.length > 3 && (
          <div className='ml-3'>
            <img
              src={members[0].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-members-multiple'
            />
            <img
              src={members[1].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-members-multiple'
            />
            <img
              src={members[2].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-members-multiple'
            />
            <img
              src={members[3].speakerImage || "assets/images/unknown.jpg"}
              alt='membericon'
              className='talks-data-multiple talks-img talks-members-multiple'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Members;
