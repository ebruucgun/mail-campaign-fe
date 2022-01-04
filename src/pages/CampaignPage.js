import React from "react";

import Table from "../components/List";

import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import {getCampaigns} from '../components/apiCalls';

class CampaignPage extends React.Component{
  state = {
    userName : null,
    surname : null,
    password : null,
    sendingSignUp : false,
    campaignList : [],
    columns : [
        {
          name: "toSentName",
          label: "Contact",
          options: {
            filter: true
          },
        },
        {
          name: "campaignName",
          label: "Campaign",
          options: {
            filter: true,
          },
        },
        {
          name: "url",
          label: "url",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "toSentTime",
          label: "Time to Sent",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "timeToReceive",
          label: "Time To Receive",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "timeToClick",
          label: "How long Takes To Click",
          options: {
            filter: true,
            sort: false,
          },
        },
      ]

};

componentDidMount(){
    this.getAllCampaigns();
  }
  
  getAllCampaigns(){
    getCampaigns().then(response =>{
      this.setState({campaignList:response.data})}
    )
  }

render(){
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return(
        <div className="container">

            <ThemeProvider theme={theme}>
                <Table>data={this.state.campaignList}
                columns={this.state.columns}</Table>
            </ThemeProvider>
        </div>
        );
}
}
  
export default CampaignPage;