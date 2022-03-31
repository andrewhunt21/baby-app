import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            timeUp: false
        }
    }

    componentDidMount() {
        setInterval(() => {
            let dueDate = +new Date(this.props.date);
            let difference = dueDate - +new Date();

            if (difference < 1) {
                this.setState({ timeUp: true });
            } else {
                let days = Math.floor(difference / (1000 * 60 * 60 * 24));
                let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                let minutes = Math.floor((difference / (1000 * 60)) % 60);
                let seconds = Math.floor((difference / (1000)) % 60);
                this.setState({
                    hours: hours > 9 ? hours : `0${hours}`,
                    minutes: minutes > 9 ? minutes : `0${minutes}`,
                    seconds: seconds > 9 ? seconds : `0${seconds}`,
                    days
                });
            }
        }, 1000)
    }

    render() {
        const {days, hours, minutes, seconds, timeUp} = this.state;
        const dayString = days > 1 ? 'days' : 'day';
        return (
            timeUp ?
                <p>Baby is here!</p>
                :
                <div>
                    <p>
                        Countdown: <br></br>
                        {`${days} ${dayString}`} <br></br>
                        {`${hours} hours`} <br></br>
                        {`${minutes} minutes`} <br></br>
                        {`${seconds} seconds`}
                    </p>
                </div>
        );
    }
}

export default Timer;