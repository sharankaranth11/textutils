import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!!","success")
    }
    const handlelowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase!!","success")
    }
    const handleclearClick=()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared the Content!!","success")
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied!!","success")
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space have been removed!!","success")
      
      }

    const handleOnChange=(event)=>{
        // console.log(" on Onchange");
        setText(event.target.value)

    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}  > ToUpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}  >ToLowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}  >clear</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}  >copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}  >Remove space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} <b>words</b> and {text.length} <b>characters</b></p>
            <p>{0.008*text.split(" ").length} <b>minutes read</b></p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
