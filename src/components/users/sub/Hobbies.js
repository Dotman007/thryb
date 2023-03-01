import React from 'react'

const Hobbies = ({index, item, hobbies, setHobbies}) => {
    let name = item?.name; 
    let id = item.id;
  return (
    <div className="col-lg-4 col-md-6 mb-3" 
    onClick={(e)=>{
        let myHobbies = hobbies.filter(i => i !== id);
        if (hobbies.includes(id)){
            setHobbies(myHobbies);
        }else{
            setHobbies([...myHobbies, id]);
        }
    }}>
        <div href="#" className={`custom-card-sm ${hobbies.includes(id) && 'border-round'}`}>
            <img src="./assets/images/allGiftsIcon.svg" />
            <p className="pl-2 font-sm2 text-dark mb-0">{item.name}</p>
        </div>
    </div>
  )
}

export default Hobbies