import axios from 'axios';

export const getContacts = () => {
    return axios.get("https://mailcampaignn.herokuapp.com/api/1.0/getallcontacts")
};

export const getCampaigns = () => {
    return axios.get("https://mailcampaignn.herokuapp.com/api/1.0/getallsentcampaigns")
};
