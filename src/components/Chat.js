import React from "react";
import { connect } from 'react-redux';
import io from "socket.io-client";
import {API_BASE_URL} from '../config';


export class Chat extends React.Component{
  
    constructor(props){
        super(props);

        this.state = {
          //  username: '',
            message: '',
            messages: []
        };

        
        this.socket = io.connect(API_BASE_URL);
        this.socket.emit('create', 'roomgiri');

        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });
        
        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };
        
        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.props.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }

   
    render(){
       
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Chat</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map((message, index) => {
                                        return (
                                            <div key={index}>{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                {/* <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/> */}
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => ({
  username: state.auth.currentUser ? state.auth.currentUser.username : null
})

export default connect(mapStateToProps)(Chat);