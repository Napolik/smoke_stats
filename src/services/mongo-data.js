export default class MongoService {

    _apiBase = 'https://2nnpsk9po1.execute-api.us-east-1.amazonaws.com/dev';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if(!res.ok) {
        throw new Error(res.status)
      }
      const body = await res.json();
      return body;
    }
  
    async getAllUsers() {
      const res = await this.getResource(`/users/`);
      return res.results;
    }

    getUser = async (id) => {
        const user = await this.getResource(`/users/${id}/`);
        return user;
      };

    async getAllTimes() {
        const res = await this.getResource(`/times/`);
        return res.results;
      }

    getTime = async (id) => {
        const time = await this.getResource(`/times/${id}/`);
        return time;
      };

}

