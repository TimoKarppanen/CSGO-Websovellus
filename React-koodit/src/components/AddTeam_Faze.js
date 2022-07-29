import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'NiKo',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Ingame Leader',
            team: 'FaZe' 
        })
        .then(function () {
            console.log('NiKo added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'rain', 
            player_role: 'Entry Fragger',
            team: 'FaZe' 
        })
        .then(function () {
            console.log('rain added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Broky',
            player_role:'Main AWP',
            team: 'FaZe' 
        })
        .then(function () {
            console.log('Broky added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'coldzera',
            player_role:'Rifler ',
            team: 'FaZe' 
        })
        .then(function () {
            console.log('coldzera added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Kjaerbye',
            player_role:'Rifler',
            team: 'FaZe'  
        })
        .then(function () {
            console.log('Kjaerbye added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-danger btn-block">Add NiKo</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-danger btn-block">Add rain</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-danger btn-block">Add Broky</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-danger btn-block">Add coldzera</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-danger btn-block">Add Kjaerbye</button>
                </div>
            </div>
        );
    }
}