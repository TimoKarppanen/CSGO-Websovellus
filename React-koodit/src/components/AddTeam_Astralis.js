import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{
 
    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'dupreeh',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Entry Fragger',
            team: 'Astralis' 
        })
        .then(function () {
            console.log('dupreeh added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'device', 
            player_role: 'Main AWP',
            team: 'Astralis' 
        })
        .then(function () {
            console.log('device added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Bubzkji',
            player_role:'Rifler',
            team: 'Astralis' 
        })
        .then(function () {
            console.log('Bubzkji added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Magisk',
            player_role:'Ingame Leader',
            team: 'Astralis' 
        })
        .then(function () {
            console.log('Magisk added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'es3tag',
            player_role:'Rifler/Lurker',
            team: 'Astralis'
        })
        .then(function () {
            console.log('es3tag added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-warning btn-block btn-danger">Add dupreeh</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-warning btn-block btn-danger">Add device</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-warning btn-block btn-danger">Add Bubzkji</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-warning btn-block btn-danger">Add Magisk</button> 
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-warning btn-block btn-danger">Add es3tag</button> 
                </div>
            </div>
        );
    }
}