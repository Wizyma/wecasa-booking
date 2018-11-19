import axios from 'axios';

class WecasaAPI {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  }

  getPrestations = async () => {
    try {
      const { data } = await this.instance.get('/universe');

      return data;
    } catch (err) {
      console.error(err);
    }
  };
}

const { getPrestations } = new WecasaAPI();

export { getPrestations };
