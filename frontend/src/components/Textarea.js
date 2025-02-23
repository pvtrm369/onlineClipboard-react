import React, { useState } from 'react'

const Textarea = () => {
    const[inText,setinText] = useState({text:""});
    const[inData,setinData]= useState({});
    const host = "https://textport-bj8w.onrender.com"
    const addText  = async (text) => {
        const response = await fetch(`${host}/api/clipboard/save`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text })

        });
        
        const data = await response.json();
        setinData(data)
         
    }

    const handleClick=(e)=>{
        e.preventDefault();
        addText(inText.text)
    }
   const onchange=(event)=>{
        setinText({...inText, text:event.target.value})
   }
    return (
        <div>
            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div> */}

            <div className="mb-3 mt-4 ">
                <label for="exampleFormControlTextarea1" className="form-label fw-bold">Send text to Clipboard</label>
                <textarea className="form-control" id="text" name="text" rows="3" value={inText.text} onChange={onchange}></textarea>
            </div>
                <div className=" mb-4 d-flex">
                <button class="btn btn-primary " type="submit"  onClick={handleClick} >Sent text</button>
                    <p className="mx-2 my-2"> {inData.uniqueCode}</p>
                </div>
               
               
        </div>
    )
}

export default Textarea;
