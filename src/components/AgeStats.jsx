import React from 'react';

import partyImg from '../assets/party.jpg';

const DateSince = (date) => {
    let today = new Date().getTime();
    let otherDate = new Date(date).getTime();
    let miliseconds =  Math.abs(today - otherDate);
    let days = Math.floor(miliseconds / (1000*3600*24));
    let years = Math.floor(days / 365);
    days -= years*365;
    let month = Math.floor(days/31);
    days -= month*31;

    return `${years} років, ${month} місяців та ${days} днів`; 
}

const AgeStats = (props) => {

    return(
        <div>
            <h3>{props.date}</h3>
            <h4>Вітаємо з річницею: сьогодні Вам { DateSince(props.date) }!</h4>
            <img src={partyImg} alt="Вітаємо!" className="partyImg"/>
        </div>
    );
};

export default AgeStats;