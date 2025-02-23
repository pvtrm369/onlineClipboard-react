import React , {useState} from 'react'

const OutputText = () => {
     const[code,setCode] = useState();
      const[inData,setinData]= useState();
      const host = "http://localhost:5000"
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
    <div>
       <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label" >Your text </label>
                <div className="form-outline w-25 mb-4">
                <textarea className="form-control" id="text" name="text" rows="" onChange={onchange}  ></textarea>

                </div>
            </div>
                <button class="btn btn-primary " type="submit" onClick={handleClick} >Get text</button>

                <label for="exampleFormControlTextarea1" className="form-label" value={inData.text}>Your text</label>
    </div>
  )
}

export default OutputText
