import React from 'react'; 
import { connect } from 'react-redux';
import '../styles/chat-form.css';  

export class ChatForm extends React.Component {
    
    handleClose() {
        this.props.onHandleClose()
    }

    render() {
        if(this.props.displayed === true ) {
            return (
                <div className="backdrop">
                    <div className="chat-form">
                        <i className="fa fa-times close-form-button" aria-hidden="true" onClick={() => this.handleClose()}></i>
                        <form method="POST" action="#" id="js-contact-form"> 
                            <textarea className="input" id="message" placeholder="Write your message here"></textarea>
                            <button className="button-blue">Submit</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ChatForm); 