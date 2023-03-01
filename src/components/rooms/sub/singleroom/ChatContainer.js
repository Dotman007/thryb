import React from "react";
import RoomMessageLeft from "./RoomMessageLeft";
import RoomMessageRight from "./RoomMessageRight";

const ChatContainer = ({ item, index }) => {
  function isDivisibleBy3(num) {
    if (num % 3 == 0) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {!isDivisibleBy3(index) && <RoomMessageLeft item={item} />}
      {isDivisibleBy3(index) && <RoomMessageRight item={item} />}
    </>
  );
};

export default ChatContainer;
