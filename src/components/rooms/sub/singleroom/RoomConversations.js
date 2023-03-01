import React from "react";
import RoomMessageLeft from "./RoomMessageLeft";
import RoomMessageRight from "./RoomMessageRight";
import { useState, useEffect } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import ChatContainer from "./ChatContainer";

const RoomConversations = ({ singleRoomInfo }) => {
  const roomId = singleRoomInfo?.roomId ?? -1;
  const [roomConversations, setRoomConversations] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomsList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `RoomConversation?id=${roomId}`
        );
        setShowSpinner(false);
        setRoomConversations(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (roomId !== -1) fetchRoomsList();
  });

  return (
    <div
      className='tab-pane fade show active'
      id='room-conversations'
      role='tabpanel'
      aria-labelledby='room-conversations-tab'
    >
      <div
        className='custom-card d-flex flex-column position-relative'
        style={{ backgroundColor: "#fcf9f9" }}
      >
        {roomConversations.length >= 1 &&
          roomConversations.map((item, index) => (
            <ChatContainer key={index} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default RoomConversations;
