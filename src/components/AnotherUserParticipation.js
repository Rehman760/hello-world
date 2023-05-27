import React,{useState} from 'react'

function AnotherUserParticipation() {
    const [user,setUser] = useState('name');
    const onChange=()=>{
        alert(user);
    }
  return (
    <div>
        <button onClick={onChange}>Add user </button>
    </div>
  )
}

export default AnotherUserParticipation