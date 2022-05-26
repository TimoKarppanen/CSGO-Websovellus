import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{
  
    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'KRIMZ',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Support',
            team: 'fnatic' 
        })
        .then(function () {
            console.log('KRIMZ added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'JW',
            player_role: 'Main AWP',
            team: 'fnatic' 
        })
        .then(function () {
            console.log('JW added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'flusha',
            player_role:'Rifler',
            team: 'fnatic' 
        })
        .then(function () {
            console.log('flusha added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Golden',
            player_role:'Ingame Leader ',
            team: 'fnatic' 
        })
        .then(function () {
            console.log('Golden added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Brollan',
            player_role:'Entry Fragger',
            team: 'FaZe'   
        })
        .then(function () {
            console.log('Brollan added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-warning btn-block">Add KRIMZ</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-warning btn-block">Add JW</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-warning btn-block">Add flusha</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-warning btn-block">Add Golden</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-warning btn-block">Add Brollan</button>
                </div>
            </div>
        );
    }
}