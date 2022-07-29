import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'EliGE',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Entry Fragger',
            team:'Liquid'
            })
            .then(function () {
                console.log('EliGE added');
            }.bind(this))
            .catch(function (error) {
            console.log(error);
            });
        }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Grim',  
            player_role: 'Rifler',
            team:'Liquid'
        })
        .then(function () {
            console.log('Grim added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Twistzz', 
            player_role:'Rifler',
            team:'Liquid'
        })
        .then(function () {
            console.log('Twistzz added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'NAF', 
            player_role:'Rifler/AWP',
            team:'Liquid'
        })
        .then(function () {
            console.log('NAF added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Stewie2k',
            player_role:'Ingame Leader',
            team:'Liquid'
        })
        .then(function () {
            console.log('Stewie2k added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-info btn-block">Add EliGE</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-info btn-block">Add Grim</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-info btn-block">Add NAF</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-info btn-block">Add Twistzz</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-info btn-block">Add Stewie2k</button>
                </div>
            </div>
        );
    }
}