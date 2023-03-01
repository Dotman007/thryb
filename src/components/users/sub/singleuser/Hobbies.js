import React from "react";
import { useEffect } from "react";
import HobbiesList from "./HobbiesList";
import EmptyChart from "../../../dashboard/main/mainsection/charts/EmptyChart";
const Hobbies = ({ hobbies, hobbiesSpinner, fetchHobbies }) => {
  useEffect(() => {
    fetchHobbies();
  });
  return (
    <>
      {!hobbiesSpinner && (
        <div
          className='tab-pane fade show active'
          id='v-pills-hobbies'
          role='tabpanel'
          aria-labelledby='v-pills-hobbies-tab'
          style={{ opacity: "1" }}
        >
          <div className='row'>
            {hobbies.map((item, index) => (
              <HobbiesList key={index} item={item} />
            ))}
          </div>
        </div>
      )}
      {hobbiesSpinner && <div className='spinner'></div>}
      {!hobbiesSpinner && hobbies.length == 0 && <EmptyChart />}
    </>
  );
};

export default Hobbies;
