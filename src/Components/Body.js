import React, { useState } from 'react'

import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }

    return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.hPeGAnVaMV_XJmknNnfScQHaEo&pid=Api&P=0&h=180' height={200} width={200} alt="" />
              <p>Maintain consistency and be truthful to your own convictions-18</p>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://www.youtube.com/watch?v=dNWG1i4EGM4&pp=ygUTdmlyYXQga29obGkgc3RhdHVzIA%3D%3D'} height={200} controls />
                <div>
                <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
                </div>
            </div>
        </div>
    )
}
export default Body