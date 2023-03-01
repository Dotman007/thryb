import React, { useState } from "react";
import { useEffect } from "react";
import { fetchDataWithAxios } from "../../../../config/fetchDataWithAxios";
import { useNavigate } from "react-router-dom";
import SeekerFeatures from "./SeekerFeatures";
import InterestedPersonFeatures from "./InterestedPersonFeatures";
const AboutSingleSeekNav = ({ page, userId, seekId }) => {
  const [aboutSeeker, setAboutSeeker] = useState("");
  const [aboutInterestedPerson, setAboutInterestedPerson] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSeeksList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `AboutSeekerFeature?userId=${userId}&seekId=${seekId}`
        );
        setAboutSeeker(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (seekId !== -1) fetchSeeksList();
  }, [page]);
  useEffect(() => {
    const fetchSeeksList = async () => {
      try {
        const response = await fetchDataWithAxios(
          "get",
          `InterestedSeekerFeature?userId=${userId}&seekId=${seekId}`
        );
        setAboutInterestedPerson(response.data);
      } catch (err) {
        console.log(err);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("img");
        sessionStorage.removeItem("pages");
        navigate("/login");
      }
    };
    if (seekId !== -1) fetchSeeksList();
  }, [page]);

  return (
    <div
      className='tab-pane fade show active'
      id='activities'
      role='tabpanel'
      aria-labelledby='activities-tab'
    >
      <div className='users-table-div table-responsive'>
        <SeekerFeatures aboutSeeker={aboutSeeker} />
        <InterestedPersonFeatures
          aboutInterestedPerson={aboutInterestedPerson}
        />
      </div>
    </div>
  );
};

export default AboutSingleSeekNav;
