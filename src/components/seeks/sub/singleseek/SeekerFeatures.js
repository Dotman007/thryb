import React from "react";

const AboutSeek = ({ aboutSeeker }) => {
  const aboutSeekItem = aboutSeeker?.about || "Not Available";
  const specialFeatures = aboutSeeker?.specialFeatures || [];
  return (
    <div className='white-bg-card'>
      <h6 className='f-weight-600'>About Seeker</h6>
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

export default AboutSeek;
