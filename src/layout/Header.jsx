import { useState, useEffect } from "react"

const Header = () => {
    const [index, setIndex] = useState(0)
    const myNameText = 'SANTIAGO_RUBIOL'.split('')
    const [highlightedLetter, setHighlightedLetter] = useState(-1)
    const [myName, setMyName] = useState([])

    useEffect(() => {
        let flag = false
        const myNameAux = myNameText.map((letter, index) => {
            if (letter === '_') {
                flag = true
            } else {
                if (!flag) {
                    return <p className="myName" key={index}>{letter}</p>
                } else {
                    flag = false
                    return <p className="myName firstLetter" key={index}>{letter}</p>
                }
            }
        })
        setMyName(myNameAux)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {

            if (myName[index]) {
                if (myName[index].props.className.includes('firstLetter')) {
                    myName[index] = <p className="myName-color firstLetter" key={index}>{myName[index].props.children}</p>
                } else {
                    myName[index] = <p className="myName-color" key={index}>{myName[index].props.children}</p>
                }
            }

            if (myName[highlightedLetter]) {
                if (myName[highlightedLetter].props.className.includes('firstLetter')) {
                    myName[highlightedLetter] = <p className="myName firstLetter" key={highlightedLetter}>{myName[highlightedLetter].props.children}</p>
                } else {
                    myName[highlightedLetter] = <p className="myName" key={highlightedLetter}>{myName[highlightedLetter].props.children}</p>
                }
            }

            // Incrementar el índice o reiniciarlo si llegamos al final
            if (index === myName.length - 1) {
                setIndex(0)
            } else {
                setIndex(index + 1)
            }
            // Actualizar la letra resaltada
            setHighlightedLetter(index)
        }, 250) // Intervalo de 1 segundo

        // Limpiar el intervalo cuando el componente se desmonta
        return () => clearInterval(interval)
    }, [index, myName])


    return <header className="header">
        <div className="headerPrincipalData">
            <h1 className="contentName">
                {myName}
                {/* {myName.map((letter, index) => {
                    //console.log(letter)
                    if (letter === ' ') {
                        flag = true
                    } else {
                        if (!flag) {
                            return <p className="myName" key={index}>{letter}</p>
                        } else {
                            flag = false
                            return <p className="myName" style={{ marginLeft: '15px' }} key={index}>{letter}</p>
                        }
                    }
                    return letter
                })} */}
            </h1>
            {/* <h1 className="myName">{myName}</h1> */}
            <h2 className="myTitle">FULL STACK DEVELOPER <b>(STACK MERN)</b></h2>
        </div>
    </header>
}

export default Header