console.log("Channel Stats Started");



const API_KEY = "AIzaSyDl63evrBHqnDn3AcIN87eqJU9KpxizjMg";

const CHANNEL_ID = "UCpO9JOdH7jpYCVGiNuVO9Mg";



async function loadChannelStats() {

    try {



        const response = await fetch(

            `https://www.googleapis.com/youtube/v3/channels?part=statistics&channelId=${UCpO9JOdH7jpYCVGiNuVO9Mg}&key=${AIzaSyAf1TmD_CVgMRKnanYLLuh9JAQcxXYrCY8}` 

        );



        const data = await response.json();
        console.log("Response:", data);



        console.log(data);



        const stats = data.items[0].statistics;



        document.getElementById("subscriberCount").textContent =

            Number(stats.subscriberCount).toLocaleString() + "+";



        document.getElementById("videoCount").textContent =

            Number(stats.videoCount).toLocaleString() + "+";



    } catch (error) {



        console.error("Channel Stats Error:", error);



    }

}



loadChannelStats();