import React,{Component} from 'react';
import {Provider} from './Context';
import styled from 'styled-components'

import PlayersList from './PlayersList';

import AddTeam_Ence from './AddTeam_Ence';
import AddTeam_Faze from './AddTeam_Faze';
import AddTeam_BIG from './AddTeam_BIG';
import AddTeam_mouz from './AddTeam_mouz';
import AddTeam_Navi from './AddTeam_Navi';
import AddTeam_Liquid from './AddTeam_Liquid';
import AddTeam_G2 from './AddTeam_G2';
import AddTeam_Astralis from './AddTeam_Astralis';
import AddTeam_Vitality from './AddTeam_Vitality';
import AddTeam_col from './AddTeam_col'
import AddTeam_fnatic from './AddTeam_fnatic';
import AddTeam_Furia from './AddTeam_Furia';

/* Haetaan joukkueiden logot */

import encelogo from './ence2.png';
import mouzlogo from './mouz.png';
import navilogo from './navi.png';
import g2logo from './g2.png';
import fnaticlogo from './fnatic.png';
import collogo from './complexity.png';
import fazelogo from './faze.png';
import biglogo from './big.png';
import liquidlogo from './liquid.png';
import astralislogo from './astralis.png';
import vitalitylogo from './vitality.png';
import furialogo from './furia.png';

/* Asetetaan tyylimääritelmät React koodiin styled-components kirjastosta */

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Title = styled.h2`
  color: #0a0808;
  font-weight: 300;
`
const Wrapper = styled.body`
  width: 300px;
  border: 5px solid black;
  padding: 50px;
  margin: 20px;
`
class App extends Component {
    constructor(props){
        super(props);
        
        this.postShow = this.postShow.bind(this);   
        this.state = {
            post_found: true
        }
    }

    postShow (){
        this.setState({
            post_found: ''
        })
    }
    
    render(){
        const contextValue = {
            post_show:this.postShow
        }
        
        let showUsers;

        if(this.state.post_found){          {/* Tarkistetaan, löytyykö pelaajien tietoja tietokannasta */}
            showUsers = (
                <table className="table table-striped table-bordered"> {/* Luo koko sivun levyisen taulukon */}
                    <thead>
                        <tr>
                            <th> Player name </th>
                            <th> Role </th>
                            <th> Team </th>
                            <th> Remove player</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PlayersList/>        {/* Haetaan PlayersList komponentti, joka hakee tietokannasta lisättyhen pelaajien tiedot  */}
                    </tbody>
                </table>
            );
        }
        else{                   {/* Jos pelaajien tietoja ei löydy tietokannasta, niin tulostetaan seuraavat tiedot */}
            showUsers = (
            <table className="table table-striped table-bordered"> {/* Luo koko sivun levyisen taulukon */}
                <div className="alert alert-light" role="alert">            
                    <h4 className="alert-heading"> Your team table is empty </h4>
                    <p>Please Insert Some players</p>
                </div>
            </table>
            );
        }
        return (
            <Provider value={contextValue}>
                <h1 className="card-header text-center text-uppercase text-muted"> Create your CSGO Team </h1>
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="ence">
                                    <StyledPhoto src={encelogo}/>   {/* Tulostaa logon */}
                                </div>
                                <div id="title">
                                    <Title> ENCE </Title>
                                </div>
                                <AddTeam_Ence/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* ENCE */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="logo-mouz">
                                    <StyledPhoto src={mouzlogo}/>
                                </div>
                                <div id="title-mouz">
                                    <Title> Mousesports </Title>
                                </div>
                                <AddTeam_mouz/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* NaVi */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="logo-navi">
                                    <StyledPhoto src={navilogo}/>
                                </div>
                                <div id="title-navi">
                                    <Title> Natus Vincere </Title>
                                </div>
                                <AddTeam_Navi/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* G2 */}
                <div class="float-left">
                     <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="logo-g2">
                                    <StyledPhoto src={g2logo}/>
                                </div>
                                <div id="title-g2">
                                    <Title> G2 </Title>
                                </div>
                                <AddTeam_G2/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* Fnatic */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="eg-img">
                                    <StyledPhoto src={fnaticlogo}/>
                                </div>
                                <div id="title-eg">
                                    <Title> Fnatic </Title>
                                </div>
                                <AddTeam_fnatic/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* compLexity */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="img-complexity">
                                    <StyledPhoto src={collogo}/>
                                </div>
                                <div id="title-complexity">
                                    <Title> Complexity </Title>
                                </div>
                                <AddTeam_col/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {showUsers} {/* Tulostetaan keskellä sivua oleva taulukko, johon tulostuu pelaajien tiedot */}         
            {/* FaZe */}     
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="img-faze">
                                    <StyledPhoto src={fazelogo}/>
                                </div>
                                <div id="title">
                                    <Title> FaZe </Title>
                                </div>
                                <AddTeam_Faze/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* BIG */}  
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="big">
                                    <StyledPhoto src={biglogo}/>
                                </div>
                                <div id="title-big">
                                    <Title> BIG </Title>
                                </div>
                                    <AddTeam_BIG/>
                                </div>
                        </Wrapper>
                    </div>
                </div>
            {/* Liquid */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="liquid-img">
                                    <StyledPhoto src={liquidlogo}/>
                                </div>
                                <div id="title-liquid">
                                    <Title> Liquid </Title>
                                </div>
                                <AddTeam_Liquid/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* Astralis */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="astralis-img">
                                    <StyledPhoto src={astralislogo}/>
                                </div>
                                <div id="title-astralis">
                                    <Title> Astralis </Title>
                                </div>
                                <AddTeam_Astralis/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* Vitality */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="vitality-img">
                                    <StyledPhoto src={vitalitylogo}/>
                                </div>
                                <div id="title-vitality">
                                    <Title> Vitality </Title>
                                </div>
                                <AddTeam_Vitality/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
            {/* FURIA */}
                <div class="float-left">
                    <div className="row">
                        <Wrapper>
                            <div style={{ color: '#0a0808'}}>
                                <div id="furia-img">
                                    <StyledPhoto src={furialogo}/>
                                </div>
                                <div id="title-furia">
                                    <Title> FURIA </Title>
                                </div>
                                <AddTeam_Furia/>
                            </div>
                        </Wrapper>
                    </div>
                </div>
        </Provider>
        );
    }
}
export default App;