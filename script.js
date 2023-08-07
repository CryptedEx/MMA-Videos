const folderList = document.getElementById("folderList");
const videoContainer = document.getElementById("videoContainer");

function displayVideos(folderName) {
    videoContainer.innerHTML = "";
    fetch(`videos/${folderName}.json`)
        .then(response => response.json())
        .then(videos => {
            for (const video of videos) {
                const videoElement = document.createElement("div");
                videoElement.classList.add("video");
                videoElement.textContent = video;
                videoElement.addEventListener("click", () => {
                    // Handle video click (e.g., play video)
                });
                videoContainer.appendChild(videoElement);
            }
        });
}

fetch("folders.json")
    .then(response => response.json())
    .then(folders => {
        for (const folder of folders) {
            const folderItem = document.createElement("li");
            folderItem.classList.add("folder");
            folderItem.textContent = folder;
            folderItem.addEventListener("click", () => {
                displayVideos(folder);
            });
            folderList.appendChild(folderItem);
        }
    });
