import React,{useState} from 'react'

const Output = () =>{

 const[code,setCode] = useState("");
      const[inData,setinData]= useState({});
      const host = "https://textport-bj8w.onrender.com"
      const addText  = async (text) => {
          const response = await fetch(`${host}/api/clipboard/${text}`, {
              method: "GET",
              headers: {
                  'Content-Type': 'application/json',
              },
             // body: JSON.stringify({ text })
  
          });
          
          const data = await response.json();
          setinData(data)
           
      }
  
      const handleClick=(e)=>{
          e.preventDefault();
          addText(code)
      }
     const onchange=(event)=>{
          setCode(event.target.value)
     }
  return (
    <div >
       <div className=" d-flex">
                <div className="form-outline w-25 mb-4">
                <textarea className="form-control" placeholder='Enter the code' id="text" name="text" rows="1" onChange={onchange}  ></textarea>
                </div>
                <div className="container">

                <button class="btn btn-primary " type="submit" onClick={handleClick} >Get text</button>
                </div>
            </div>
                <label for="exampleFormControlTextarea1" className="form-label" >Your text</label>
                <textarea className="form-control" id="text" name="text" rows="3" value={inData.text} ></textarea>


    </div>
  )
}

export default Output
