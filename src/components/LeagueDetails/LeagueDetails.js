import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetaiels.css'
import female from '../../images/female.png'
import male from '../../images/male.png'
import found  from '../../images/found.png'
import flag from '../../images/flag .png'
import football from '../../images/football .png'
import gender from '../../images/gender.png'
import facebook from '../../images/Facebook.png'
import youTube from '../../images/YouTube.png'
import twitter from '../../images/Twitter.png'

import { Container, Row } from 'react-bootstrap';


const LeagueDetails = () => {
  const { idLeague } = useParams();

  const [details, setDetails] = useState([]);


  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data.leagues[0]))
  }, [idLeague])

  const { strLeague, strCountry, strGender, intFormedYear, strSport, strLogo, strDescriptionEN, strDescriptionFR } = details



  return (
    <div>
      <div className="banner" >
        <img class="logo" src={strLogo} alt=""/>
      </div>

      <Container>
        <Row>
          <div className="league-details ">

              <div className="info col-md-7 ">
                <h1>{strLeague}</h1>
                  <strong> <img src={found} alt=""/> Founder : {intFormedYear}</strong>
             
                    <h5> <img src={flag} alt=""/> Country : {strCountry}</h5>
                  <h5>   <img src={football} alt=""/> Sport Type :{strSport}</h5>
               <h5>     <img src={gender} alt=""/> Gender : {strGender}</h5>
            </div>

            <div className=" col-md-4 gender-photo">
             
              {
                strGender &&( strGender?.toLowerCase() === "male" ?( <img src={male} alt=""/> ) : (<img src={female} alt=""/>)  )
              }

            </div>
          </div>
        </Row>

        <div className="league-description">
           <p>{strDescriptionEN}</p>
             <br />
            <br />
        <p>{strDescriptionFR} </p>
       </div>
            
            {/* Footer icon part */}
      <div class="footer">
        <a  href="https://www.facebook.com/"> <img src={facebook} alt=""/></a>
        <a   href="https://twitter.com/?lang=en"><img src={twitter} alt=""/></a>
        <a   href="https://www.youtube.com/"><img src={youTube} alt=""/></a>
        
      </div>

      </Container>


    </div>

  );
};

export default LeagueDetails;