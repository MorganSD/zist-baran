import React, { Component } from 'react';
import ContactInfo from '../comp/registration/contactInfo';
import Intrests from '../comp/registration/intrest';
import SmsVerification from '../comp/registration/smsVerification';


class SignUp extends Component {
constructor (){
    super();
    this.state = {
        form : false ,
         intrests : true ,
         verification : false
    }
}
isIntrest = () =>{
    this.setState({
        form : false ,
        intrests : true ,
        verification : false
    })
}
isVerify = () =>{
    this.setState({
        form : false ,
        intrests : false ,
        verification : true
    })
}
render (){
    return(
        <div>
            {this.state.form ? (
                <ContactInfo />
            ):
            this.state.intrests ? (
                <Intrests />
            ):(
                <SmsVerification />
            )}
                            {/* <ContactInfo /> */}

        </div>
    )
}
}
export default SignUp