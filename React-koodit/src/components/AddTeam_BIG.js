import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{
   
    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'tabseN',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Ingame Leader',
            team: 'BIG' 
        })
        .then(function () {
            console.log('tabseN added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'tiziaN',
            player_role: 'Rifler',
            team: 'BIG' 
        })
        .then(function () {
            console.log('tiziaN added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'syrsoN',
            player_role:'Main AWP',
            team: 'BIG' 
        })
        .then(function () {
            console.log('syrsoN added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'XANTARES',
            player_role:'Entry Fragger ',
            team: 'BIG' 
        })
        .then(function () {
            console.log('XANTARES added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'k1to',
            player_role:'Entry Fragger',
            team: 'BIG' 
        })
        .then(function () {
            console.log('k1to added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-primary btn-block btn-dark">Add tabseN</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-primary btn-block btn-dark">Add tiziaN</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-primary btn-block btn-dark">Add syrsoN</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-primary btn-block btn-dark">Add XANTARES</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-primary btn-block btn-dark">Add k1to</button> 
                </div>
            </div>
        );
    }
}