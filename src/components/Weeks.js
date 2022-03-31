import { useState } from "react"

const Weeks = () => {

    let today = new Date()
    let startDate = new Date("01/21/2022")
    let difference = today.getTime() - startDate.getTime()

    // let years = Math.floor(difference / 31556736000)
    let daysDif = Math.floor((difference % 31556736000) / 86400000)
    let weeks = Math.floor(daysDif / 7)
    let days = Math.floor(daysDif % 7)

    const [age, setAge] = useState({
        weeks: weeks,
        days: days
    })

    return (
        <div>
            <p>
                Baby is: <br></br>
                {age.weeks} weeks <br></br> 
                {age.days} days <br></br>
                along
            </p>
        </div>
    )
}

export default Weeks;