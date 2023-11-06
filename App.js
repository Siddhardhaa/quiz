import { useState } from "react";

export default function From(){
  const [status,setStatus]=useState('Typing');
const [answer,setAnswer]=useState('');
const [error,setError]=useState(null);

if(status==='Success'){
  return <h2>Nice ye Panikimalinadana😏</h2>
}
async function handleSubmit(e){
  e.preventDefault();
  setStatus('submitting');
  try{
    await submitForm(answer);
    setStatus('Success');
  }catch(err){
    setStatus('typing');
    setError(err);
  }
}
  function handleTextareaChange(e){
    setAnswer(e.target.value);
  }
  function submitForm(answer){
     return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let shouldError=answer.toLowerCase()!=='november';
        if(shouldError){
          reject(new Error('Avunu ley Avi Deniki gurtu Untay😏'));
        }else{
          resolve();
        }
      },1500);
     });
  }

  return(
    <div class = "N" style={{
      textAlign:'center'
    }}>
      <h2>Puchiki Quiz</h2>
      <p>
        In Which Month the Boy Fall in Love With Her!!
      </p>
      <form onSubmit={handleSubmit}>
        <textarea id="text"
        value={answer}
        onChange={handleTextareaChange}
        disabled={status==='submitting'} />
      <br />
      <button disabled={
        answer.length=== 0 || status==='submitting'
      }>
      SUbmit
      </button>
      {error !==null && <p className="Error">
        {error.message}
        </p>}
      </form>
      <p style={{
        color:'black'
      }}> <strong>Note:</strong>The Boy in the Sense Siddhardha</p>
    </div>
  )
}