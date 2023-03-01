import React from "react";

const InterestedPersonFeatures = ({ aboutInterestedPerson }) => {
  const aboutSeekItem = aboutInterestedPerson?.about || "Not Available";
  const specialFeatures = aboutInterestedPerson?.specialFeatures || [];
  return (
    <div className='white-bg-card mt-3'>
      <h6 className='f-weight-600'>Interested Person must</h6>
      <p className='font-sm'>{aboutSeekItem}</p>
      <hr />
      <div className='px-2'>
        <ul style={{ listStyleType: "none" }}>
          {specialFeatures.map((item, index) => (
            <li key={index}>
              <span className='font-sm2 f-weight-600'>
                {index + 1}. &nbsp;&nbsp;Special Feature
              </span>
              <p className='font-sm'>{item ?? "Not Available"}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InterestedPersonFeatures;
