const API_KEY = "AIzaSyAf1TmD_CVgMRKnanYLLuh9JAQcxXYrCY8";
const CHANNEL_ID = "UCpO9JOdH7jpYCVGiNuVO9Mg";

/* =========================
   CHANNEL STATS
========================= */

async function loadChannelStats() {

    try {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const data = await response.json();

        console.log("Channel Stats:", data);

        if (data.error) {
            console.error(data.error);
            return;
        }

        const stats = data.items[0].statistics;

        const subscriberElement =
            document.getElementById("subscriberCount");

        const videoElement =
            document.getElementById("videoCount");

        if (subscriberElement) {
            subscriberElement.textContent =
                Number(stats.subscriberCount).toLocaleString() + "+";
        }

        if (videoElement) {
            videoElement.textContent =
                Number(stats.videoCount).toLocaleString() + "+";
        }

    } catch (error) {

        console.error("Channel Stats Error:", error);

    }

}

/* =========================
   LATEST VIDEOS
========================= */

async function loadVideos() {

    const videosContainer =
        document.getElementById("video-container");

    if (!videosContainer) return;

    videosContainer.innerHTML =
        `<div class="card">Loading Videos...</div>`;

    try {

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`
        );

        const data = await response.json();

        console.log("Videos:", data);

        if (data.error) {

            videosContainer.innerHTML =
                `<div class="card">${data.error.message}</div>`;

            return;
        }

        videosContainer.innerHTML = "";

        data.items.forEach(video => {

            videosContainer.innerHTML += `
                <div class="card">

                    <img
                        src="${video.snippet.thumbnails.high.url}"
                        width="100%"
                        alt="${video.snippet.title}"
                    >

                    <h3>${video.snippet.title}</h3>

                    <a
                        href="https://www.youtube.com/watch?v=${video.id.videoId}"
                        target="_blank"
                    >
                        ▶ Watch Video
                    </a>

                </div>
            `;

        });

    } catch (error) {

        console.error("Video Error:", error);

        videosContainer.innerHTML =
            `<div class="card">Failed To Load Videos</div>`;

    }

}

/* =========================
   START
========================= */

loadChannelStats();
loadVideos();