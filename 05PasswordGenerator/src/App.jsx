import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) string += "0123456789";
    if (characterAllowed) string += "!@#$%&*?";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      password += string.charAt(char)
    }

    setPassword(password)

  }, [length, numAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,80)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordgenerator()
  }, [length,numAllowed,characterAllowed,passwordgenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-700 bg-gray-900 ">
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passref}
           />
           <button onClick={copyPasswordToClipboard} className='outline-none bg-red-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={8}
            max={80}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
             />
             <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"  
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox"  
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
             />
             <label htmlFor="characterInput">Characters</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
