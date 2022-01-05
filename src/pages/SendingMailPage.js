import React from "react";
import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';
import {getContacts} from '../components/apiCalls';

class SendingMailPage extends React.Component{

  state = {
    sendingMail:false,
    contactList : [],
    selectedContactList : [],
    body : "",
    header: "",
    bodyError: false,
    headerError: false
  }

  clearInputs() {
      this.setState({body:""})
      this.setState({header:""})
      this.setState({selectedContactList:[]})
  }

  componentDidMount(){
    this.getAllContacts();
  }
  
  getAllContacts = () =>{
    getContacts().then(response =>{
      this.setState({contactList:response.data})}
    )
  }

  onSelect = (selectedList, selectedItem) => {
    this.setState({selectedContactList:[...this.state.selectedContactList,selectedItem]}) 
}

sendMail = event => {
    event.preventDefault();

    const {selectedContactList, body, header} = this.state;
  
    const mail = {
        selectedContactList,
        body,
        header
    }

    if(body === ""){
        this.setState({bodyError:true})
      }
    if(header === ""){
    this.setState({headerError:true})
    }
    if(header && body){
        this.setState({sendingMail:true})
        axios.post('https://mailcampaignn.herokuapp.com/api/1.0/sendmail', mail)
        .then((response)=>{
            console.log(response)
            alert("Campaign sent successfully");
            this.clearInputs();
        this.setState({sendingMail:false})
        })
        .catch((error)=>{
            this.setState({sendingMail:false})
        });
    }
}

onChange = event =>{
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]:value});

    if(name === "body"){
        this.setState({bodyError:false})
      }
    if(name === "header"){
    this.setState({headerError:false})
    }

}

onRemove(selectedList, removedItem) {
    
}
  
    render(){
        const {bodyError} = this.state;
        const {headerError} = this.state;

        return(
            <div className="container">
                <span style={{margin: 50}}></span>

                <Multiselect
                    options={this.state.contactList}
                    selectedValues={this.state.selectedValue}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove}
                    displayValue="email"
                />
                <span style={{margin: 50}}></span>

                <div class="input-group">
                    <textarea
                    className={headerError ? "form-control is-invalid" : "form-control"}
                    onChange={this.onChange}
                    placeholder="Write campaign name.."
                    name ="header"
                    style={{width: '100%', height: '40px'}}
                />
                <div className="invalid-feedback">Please enter campaign name</div>
                </div>

                <span style={{margin: 50}}></span>

                <div class="input-group">
                    <textarea
                    className={bodyError ? "form-control is-invalid" : "form-control"}
                    onChange={this.onChange}
                    placeholder="Write your e-mail.."
                    name ="body"
                    style={{width: '100%', height: '150px'}}
                    />
                    <div className="invalid-feedback">Please enter e-mail</div>
                </div>

                <span style={{margin: 50}}></span>

                <div class="row">
                    <div class="col-12 col-md-12">
                    <form>
                        <button class="btn btn-dark btn-lg" type="submit" onClick={this.sendMail}>Send Campaign</button>
                    </form>
                    </div>
                </div>
            </div>
            );
    }
}
  
export default SendingMailPage;