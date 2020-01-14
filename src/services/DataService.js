import * as axios from 'axios';

export default class DataService {
    _apiBase = 'http://frontend-candidate.dev.sdh.com.ua/v1/';

    /*async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }

        return await res.json();
    }*/

    async getAllContacts() {
        return axios.get(`${this._apiBase}/contact`).then(response => response.data); //await this.getResource(`/contact/`);
    }

    async addContact() {
        return axios.post(`${this._apiBase}/contact/`);
    }

    async deleteContact(id) {
        return axios.delete(`${this._apiBase}/contact/${id}`);
    }

    async getContact(id) {
        //  return await this.getResource(`/contact/${id}`);
    }
}
