import { useState, useCallback, useEffect, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const PasswordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])


  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    toast.success('Password copied to clipboard!', {
      position: "top-center",
      autoClose: 2000, // 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  }
  // for practise use comment after learning change it again 
  // PasswordRef.current?.select()
  // PasswordRef.current?.setSelectionRange(0, 99) // For mobile devices


  return (

    <div className='w-full max-w-md mx-auto shadow-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>


      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={PasswordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>
      <div
        className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input type="range"
            min={6}
            max={35}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id=''
          />
          <label htmlFor="lenght">Length: {length}</label>
        </div>
        <div className='flex-items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            name=''
            id=''
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex-items-center gap-x-1'>
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name=''
            id=''
          />
          <label htmlFor="char">Character</label>
        </div>

      </div>
      <ToastContainer />
      <div>
        <input
          className="outline-none w-full py-2 px-4 text-lg bg-gray-700 text-white rounded-l-md placeholder-gray-400"
          placeholder="Generated Password type here"
          type="text" />
      </div>
    </div>
  )
}

export default App
