import React,{Component} from 'react';
import Axios from 'axios';

export default class AddUser extends Component{

    insertUser(){
        /* Muodostetaan axios yhteys kohteeseen "add-user.php", joka löytyy XAMPP:n htdocs kansiosta */
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'w0xic',   /* Annetaan axios yhteydelle lähetettävät tiedot */
            player_role: 'Main AWP',
            team: 'mousesports'
        })
        .then(function () {
            console.log('w0xic added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser2(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'chrisJ',
            player_role: 'Entry Fragger',
            team: 'mousesports'
        })
        .then(function () {
            console.log('chrisJ added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }
    
    insertUser3(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'ropz',
            player_role:'Rifler/Lurker',
            team: 'mousesports'
        })
        .then(function () {
            console.log('ropz added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser4(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'frozen',
            player_role:'Rifler ',
            team: 'mousesports'
        })
        .then(function () {
            console.log('frozen added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    insertUser5(){
        Axios.post('http://localhost/minun_php_tiedosto/add-player.php',{
            user_name:'Karrigan',
            player_role:'Ingame Leader',
            team: 'mousesports'
        })
        .then(function () {
            console.log('Karrigan added');
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render(){
        return(
            <div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser} type="submit" className="btn btn-danger btn-block">Add w0xic</button> {/* nappia painettaessa kutsutaan insertUser metoodia */}
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser2} type="submit" className="btn btn-danger btn-block">Add chrisJ</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser3} type="submit" className="btn btn-danger btn-block">Add ropz</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser4} type="submit" className="btn btn-danger btn-block">Add frozen</button>
                </div>
                <div className="form-group col-sm-12 text-right">
                    <button onClick={this.insertUser5} type="submit" className="btn btn-danger btn-block">Add Karrigan</button>
                </div>
            </div>
        );
    }
}