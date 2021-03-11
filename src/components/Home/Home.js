import React, { useEffect, useState } from 'react';
import ShowLeagues from '../ShowLeagues/ShowLeagues';
import './Home.css'
import banner from '../../images/banner.jpg'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues.slice(0,21)))
    }, [])
    return (
        <div className="home-page">

            <div className="banner">

                <h1 className="title-design">International League Cup</h1>

            </div>
            <div className="all-league  row">

                {
                    leagues.map(league => <ShowLeagues league={league}></ShowLeagues>)
                }

            </div>
        </div>

    );
};

export default Home;