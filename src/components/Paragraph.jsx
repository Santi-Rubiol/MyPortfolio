import React from 'react'

const convertTextToArray = (text) => {
    const parts = []
    let startIndex = 0
    let lastIndex = -1

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '{') {
            parts.push(text.substring(startIndex, i))
            startIndex = i
        } else if (text[i] === '}') {
            parts.push(text.substring(startIndex, i))
            startIndex = i
            lastIndex = i + 1
        }
    }
    parts.push(text.substring(lastIndex))
    return parts.filter(item => item !== '}')
}

const convertArrayToP = (array) => {
    const parts = []
    array.forEach(part => {
        //console.log(part.substring(0, 3))
        if (part.substring(0, 3) === '{/b') {
            parts.push(<b>{part.substring(3)}</b>)
        } else if (part.substring(0, 3) === '{/n') {
            parts.push(<br></br>)
        } else {
            const thisPart = part.replace(/}/g, '')
            parts.push(thisPart)
        }
    })

    return <p>
        {parts.map((part, index) => (
            <React.Fragment key={index}>
                {part}
            </React.Fragment>
        ))}
    </p>
}



const Paragraph = ({ text }) => {
    const arrayText = convertTextToArray(text)
    const finalText = convertArrayToP(arrayText)
    return (
        <div>
            {finalText}
        </div>
    )
}

export default Paragraph
