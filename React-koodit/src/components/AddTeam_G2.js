import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'kennyS',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Main AWP',
            team: 'G2' 
        })
        .then(function () {
            console.log('kennyS added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'nexa', 
            player_role: 'Ingame Leader',
            team: 'G2' 
        })
        .then(function () {
            console.log('nexa added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'JaCKz',
            player_role:'Entry Fragger',
            team: 'G2' 
        })
        .then(function () {
            console.log('JaCKz added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'huNter-',
            player_role:'Rifler/Lurker',
            team: 'G2' 
        })
        .then(function () {
            console.log('huNter- added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'AmaNEk',
            player_role:'Rifler',
            team: 'G2'
        })
        .then(function () {
            console.log('AmaNEk added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-danger btn-block btn-dark">Add kennyS</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-danger btn-block btn-dark">Add nexa</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-danger btn-block btn-dark">Add JaCKz</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-danger btn-block btn-dark">Add huNter-</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-danger btn-block btn-dark">Add AmaNEk</button>
                </div>
            </div>
        );
    }
}