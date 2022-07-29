import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertshox(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'shox',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Rifler/Lurker',
            team: 'Vitality' 
        })
        .then(function () {
            console.log('shox added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    insertzywoo(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'ZywOo',
            player_role: 'Main AWP',
            team: 'Vitality' 
        })
        .then(function () {
            console.log('ZyWOo added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'apEX',
            player_role:'Ingame Leader',
            team: 'Vitality' 
        })
        .then(function () {
            console.log('apEX added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'misutaaa',
            player_role:'Rifler ',
            team: 'Vitality' 
        })
        .then(function () {
            console.log('misutaaa added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'RpK',
            player_role:'Entry fragger',
            team: 'Vitality'
        })
        .then(function () {
            console.log('RpK added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertshox} type="submit" className="btn btn-warning btn-block">Add shox</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertzywoo} type="submit" className="btn btn-warning btn-block">Add ZywOo</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-warning btn-block">Add apEX</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-warning btn-block">Add misutaaa</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-warning btn-block">Add RpK</button> 
                </div>
            </div>
        );
    }
}