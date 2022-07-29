import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{
  
    insertallu(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'allu',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Main AWP',
            team: 'ENCE'
        })
        .then(function () {
            console.log('allu added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertsergej(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'sergej',  
            player_role: 'Rifler',
            team: 'ENCE'
        })
        .then(function () {
            console.log('sergej added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertJamppi(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Jamppi',        
            player_role:'Rifler / AWP',
            team: 'ENCE'
        })
        .then(function () {
            console.log('Jamppi added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertsunny(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'suNny',   
            player_role:'Ingame leader / Support ',
            team: 'ENCE'
        })
        .then(function () {
            console.log('suNny added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertAerial(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Aerial',
            player_role:'Entry fragger',
            team: 'ENCE'
        })
        .then(function () {
            console.log('Aerial added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertallu} type="submit" className="btn btn-warning btn-block">Add allu</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertsergej} type="submit" className="btn btn-warning btn-block">Add sergej</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertJamppi} type="submit" className="btn btn-warning btn-block">Add Jamppi</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertsunny} type="submit" className="btn btn-warning btn-block">Add suNny</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertAerial} type="submit" className="btn btn-warning btn-block">Add Aerial</button> 
                </div>
            </div>
        );
    }
}