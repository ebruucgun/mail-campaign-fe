import axios from 'axios';

export const getContacts = () => {
    return axios.get("api/1.0/getallcontacts")
};

export const getCampaigns = () => {
    return axios.get("api/1.0/getallsentcampaigns")
};
