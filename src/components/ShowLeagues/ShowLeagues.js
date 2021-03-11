
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowLeagues.css'

const ShowLeagues = (props) => {
    const { strLeague, strSport, idLeague } = props.league
    return (
                <Card className="leagues col-md-3 m-2  " style={{width:'18rem'} }>
                    <h2>{strLeague}</h2>
                    <p>Sports Type : {strSport}</p>
                    <Link to={`/leagueDetail/${idLeague}`}> <button className="main-btn">Explore</button></Link>

                </Card>

    );
};

export default ShowLeagues;