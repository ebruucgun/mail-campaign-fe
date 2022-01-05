import React from "react";
import axios from "axios";
import Table from "../components/List";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {getContacts} from '../components/apiCalls';
import validator from "validator";

class ContactsPage extends React.Component{

  state = {
    createContact : false,
    selectedFile : null,
    contactList : [],
    name : "",
    surname : "",
    email : "",
    columns : [
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "surname",
        label: "Surname",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "email",
        label: "E-mail",
        options: {
          filter: true,
          sort: false,
        },
      },
    ],
    nameError : null,
    surnameError : null,
    emailError : null,
};

componentDidMount(){
  this.getAllContacts();
}

getAllContacts(){
  getContacts().then(response =>{
    this.setState({contactList:response.data})}
  )
}


onFileUpload = () => {
  const formData = new FormData();
  formData.append("file",
    this.state.selectedFile
  );
  axios.post("https://mailcampaignn.herokuapp.com/uploadfile", formData).then(response => {
    this.setState({contactList: [...response.data, ...this.state.contactList]})
  })
  
};

onFileChanged = (event) => {
  this.setState({ selectedFile: event.target.files[0] });
}

onChange = event =>{
  const value = event.target.value;
  const name = event.target.name;
  this.setState({[name]:value});

  if(name === "name"){
    this.setState({nameError:false})
  }
  if(name === "surname"){
    this.setState({surnameError:false})
  }
  if(name === "email" && validator.isEmail(value)){
    this.setState({emailError:false})
  }
}

onClickCreate = event => {
  event.preventDefault();

  const {name, surname, email} = this.state;

  const body = {
      name,
      surname,
      email
  }

  let validemail = validator.isEmail(email)
  this.setState({createContact:true})

  if(name === ""){
    this.setState({nameError:true})
  }
  if(surname === ""){
    this.setState({surnameError:true})
  }
  if(!validemail || email === ""){
    this.setState({emailError:true})
  }

  if(name && surname && email && validemail){
    axios.post('https://mailcampaignn.herokuapp.com/api/1.0/create/contact', body)
      .then((response)=>{
        this.setState({contactList: [response.data, ...this.state.contactList]})
      })
      .catch((error)=>{
      });
    
  }
  this.setState({createContact:false})
  
}

render(){ 
  const {nameError} = this.state;
  const {surnameError} = this.state;
  const {emailError} = this.state;

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
    return(
    <div  class="container">
      <span style={{
            margin: 50
        }}></span>
      <div>
        <input type="file" onChange={this.onFileChanged} />
				<button className="btn btn-dark" onClick={this.onFileUpload}>Submit Contact</button>
      </div>
      <hr
        style={{
            height: 2,
            marginLeft: 50,
            marginRight:50
        }}
      />
        <div>
          <div class="row">
                    <div class="col-3">
                      <label>Name</label>
                      <input className={nameError ? "form-control is-invalid" : "form-control"} name="name" onChange={this.onChange}></input>
                      <div className="invalid-feedback">Please enter user name</div>
                    </div>
                    
                    <div class="col-3">
                          <label>Surname</label>
                          <input className={surnameError ? "form-control is-invalid" : "form-control"} name="surname" onChange={this.onChange}></input>
                          <div className="invalid-feedback">Please enter surname</div>
                    </div>

                    <div class="col-3">
                      <div className="form-group">
                          <label>E-mail</label>
                          <input className={emailError ? "form-control is-invalid" : "form-control"} name="email" type="mail" onChange={this.onChange}></input>
                          <div className="invalid-feedback">Please enter valid email</div>
                      </div>
                    </div>
                    <div class="col-3">
                        <label></label>
                          <div className="text-center" >
                              <button 
                              className="btn btn-dark"onClick={this.onClickCreate} disabled={this.state.createContact}>
                              {this.state.createContact && <span class="spinner-border spinner-border-sm"></span>}Add Contact
                              </button>
                          </div>
                    </div>
            </div>
          </div>
          <hr
        style={{
            height: 2,
            marginLeft: 50,
            marginRight:50
        }}
      />
          <div className="container">
            <ThemeProvider theme={theme}>
                <Table>data={this.state.contactList}
                columns={this.state.columns}</Table>
            </ThemeProvider>
      </div>
    </div>
      
        );
}
}
  
export default ContactsPage;