import axios from 'axios';

export async function saveLogs(msg, url,portal) { //jado 
    const log={
        message:msg,
        url:url,
        portal:portal,
      }

      try {
          const response = await axios.post('http://localhost:3050/api/frontendLogs', log, { 
              headers: {
                  "Content-Type": "application/json", 
              },
          });

          const responseData = response.data;
          console.log(responseData.message);
          if(responseData.message=="Log Saved"){
            console.log("Log saved");
          }
      } catch (error) {
          console.error('Error:', error.message);
      }
}
