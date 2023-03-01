import React, {useState} from 'react'
import { useEffect } from 'react';

const Priviledge = ({item, privileges, setPriviledges, index}) => {
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        let myArray = privileges.filter(i => i !== item.id);
        if (checked){
            setPriviledges([...myArray, item.id]);
        }else{
            setPriviledges([...myArray])
        }
    },[checked])

    useEffect(()=>{
      if  (privileges.includes(item.id)){
        setChecked(true);
      }
    },[item])
  return (
    <li>
        <input type='checkbox' 
        checked={checked}
        onChange={(e)=>{
            setChecked(!checked)
        }}
        />
        <h6 className='ml-3 mb-0'>{item.name}</h6>
    </li>
  )
}

export default Priviledge