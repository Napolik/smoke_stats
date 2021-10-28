const axios = require('axios');

const getTimes = async () => {
      try {
          const resp = await axios.get('https://2nnpsk9po1.execute-api.us-east-1.amazonaws.com/dev/times/');
          
          function getTime(type) {
            let time = resp.data.filter(function (el) {
              return el.type === type;
            }).map(a => a.time);
            return time;
          };

          let inn = getTime('in');
          let out = getTime('out');

          let difff= [];

          for (let i = 0; i < inn.length; i=i+1) {
            let seconds_out = out[i].split(':');
            let seconds_inn = inn[i].split(':');
            let result_out = parseInt(seconds_out[2])+parseInt(seconds_out[1]*60)+parseInt(seconds_out[0]*60*60);
            let result_inn = parseInt(seconds_inn[2])+parseInt(seconds_inn[1]*60)+parseInt(seconds_inn[0]*60*60);
            difff.push(result_inn-result_out);
          }

          return difff;
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };



  




