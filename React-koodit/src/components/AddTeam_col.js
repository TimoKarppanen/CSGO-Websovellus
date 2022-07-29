import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'oBo',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Rifler',
            team: 'compLexity'
        })
        .then(function () {
            console.log('oBo added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'blameF',
            player_role: 'Ingame Leader',
            team: 'compLexity'
        })
        .then(function () {
            console.log('blameF added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'RUSH',   
            player_role:'Entry Fragger',
            team: 'compLexity'
        })
        .then(function () {
            console.log('RUSH added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'k0nfig',
            player_role:'Rifler/AWP ',
            team: 'compLexity'
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
            user_name:'poizon',
            player_role:'Main AWP',
            team: 'compLexity'
        })
        .then(function () {
            console.log('poizon added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-primary btn-block">Add oBo</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-primary btn-block">Add blameF</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-primary btn-block">Add RUSH</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-primary btn-block">Add k0nfig</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-primary btn-block">Add poizon</button> 
                </div>
            </div>
        );
    }
}