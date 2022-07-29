import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'yuurih',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Entry Fragger',
            team: 'FURIA'
        })
        .then(function () {
            console.log('yuurih added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'arT',  
            player_role: 'Ingame Leader / Main AWP',
            team: 'FURIA'
        })
        .then(function () {
            console.log('arT added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'VINI',             
            player_role:'Rifler',
            team: 'FURIA'
        })
        .then(function () {
            console.log('VINI added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'HEN1',   
            player_role:'Rifler/AWP ',
            team: 'FURIA'
        })
        .then(function () {
            console.log('k0nfig added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'KSCERATO',
            player_role:'Rifler',
            team: 'FURIA'  
        })
        .then(function () {
            console.log('KSCERATO added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-dark btn-block">Add yuurih</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-dark btn-block">Add arT</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-dark btn-block">Add VINI</button>
                </div>

                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-dark btn-block">Add KSCERATO</button> 
                </div>

                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-dark btn-block">Add HEN1</button>
                </div>
            </div>
        );
    }
}