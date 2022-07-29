import React, {Component} from 'react';
import Axios from 'axios';
import {AppContext} from './Context';
class PlayersList extends Component{

    constructor(props){
        super(props);
        this.fetchUsers = this.fetchUsers.bind(this);   /* Bindataan metoodit  */
        this.handleDelete = this.handleDelete.bind(this); 
        this.state = {
            users:[]
        }
    }

    static contextType = AppContext;

    /* Haetaan tiedot käyttäjistä  */

    /*  PHP koodi hakee tietokannasta kaikki rivit kohteesta `users` */
    
    fetchUsers(){
        fetch('http://localhost/minun_php_tiedosto/all-players.php')
        .then(response => {
            response.json().then(function(data) {
                if(data.success === 1){
                    this.setState({
                        users:data.users.reverse()
                    });
                } 
                else{
                    this.context.post_show(false);
                }               
            }.bind(this));
        })
        .catch(error => {
            console.log(error);
        });
    }

    /*componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
     Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint,
      this is a good place to instantiate the network request. */

    componentDidMount(){
        this.fetchUsers();
    }

    handleDelete(id){
        let deleteUser = this.state.users.filter(user => {
        return user.id !== id;
    });

        Axios.post('http://localhost/minun_php_tiedosto/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    componentDidUpdate(){
        let newUser = this.context.new_user;
        if(newUser){ 
            this.setState({
                users:[
                    newUser,
                    ...this.state.users
                ]
            });          
            this.context.new_user = false;
        }        
    }

    render(){

        let allUsers = this.state.users.map(({id,user_name,player_role,team,isEditing},) => {
            
            return isEditing === true ? (   
            <tr key={id}>
                <td><input className="form-control" type="text" ref={(item) => this.name = item} defaultValue={user_name}/></td>
                <td><input className="form-control" type="player" ref={(item) => this.role = item} defaultValue={player_role}/></td>
                <td><input className="form-control" type="player" ref={(item) => this.team = item} defaultValue={team}/></td>
            </tr>
            ):
            ( 
                <tr key={id}>
                    <td>{user_name}</td>                {/* Ensimmäinen rivi */}
                    <td>{player_role}</td>  {/* Toinen rivi*/}
                    <td> {team}</td>           
                    <td>
                        <button onClick={() => this.handleDelete(id)} className="btn btn-danger"> Remove player </button>   {/* Kolmas rivi */}
                    </td>
                </tr>
            );
        });

        return(
            <>
            {allUsers}
            </>
        );
    }
}

export default PlayersList;
