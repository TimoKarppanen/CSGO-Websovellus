import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'s1mple',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Main AWP / Entry Fragger ',
            team: 'NaVi'
        })
        .then(function () {
            console.log('s1mple added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'electronic',
            player_role: 'Rifler',
            team: 'NaVi'
        })
        .then(function () {
            console.log('electronic added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Boombl4',
            player_role:'Ingame Leader',
            team: 'NaVi'
        })
        .then(function () {
            console.log('Boombl4 added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'flamie',
            player_role:'Rifler',
            team: 'NaVi'
        })
        .then(function () {
            console.log('flamie added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Perfecto',
            player_role:'Rifler',
            team: 'NaVi' 
        })
        .then(function () {
            console.log('Perfecto added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-primary btn-block">Add s1mple</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-primary btn-block">Add electronic</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-primary btn-block">Add Boombl4</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-primary btn-block">Add flamie</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-primary btn-block">Add Perfecto</button>
                </div>
            </div>
        );
    }
}