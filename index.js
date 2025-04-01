let videoLinks = [
    "https://www.youtube.com/watch?v=bbU53mhbg7Y&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt",
    "https://www.youtube.com/watch?v=aF1aHWXQhpg&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=2",
    "https://www.youtube.com/watch?v=9HVR8y0hjZE&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=3",
    "https://www.youtube.com/watch?v=3QHWIQQ1Xfg&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=4",
    "https://www.youtube.com/watch?v=_ZaG8HEmmUE&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=5",
    "https://www.youtube.com/watch?v=jqU9wi861ok&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=6",
    "https://www.youtube.com/watch?v=JXD6fFKaEdE&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=7",
    "https://www.youtube.com/watch?v=jW3bHcmYGg4&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=8",
    "https://www.youtube.com/watch?v=ZeB9BFDQd_s&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=9",
    "https://www.youtube.com/watch?v=AGV1K8V6KE8&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=10",
    "https://www.youtube.com/watch?v=tZ7NvdbS-Us&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=11",
    "https://www.youtube.com/watch?v=VpTMxlxcvNI&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=12",
    "https://www.youtube.com/watch?v=y61oOx2IRE4&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=13",
    "https://www.youtube.com/watch?v=0n7iJBwCTn4&list=PLmEAVjTVOYZeQY8Go9B5aY3iRhWiwlZTt&index=14",
    
];


let videoIds = [];


videoLinks.forEach(link => {
    let videoId = link.match(/v=([^&]+)/)[1]; // Extrae el ID del video
    videoIds.push(videoId); // Almacena el ID en el array
});


document.addEventListener("DOMContentLoaded", function () {
    let div = document.querySelector('#videos');
    for (let i = 0; i< videoIds.length; i++) {
        const iframe = document.createElement("iframe");
        iframe.width = "720";
        iframe.height = "405";
        iframe.src = `https://www.youtube.com/embed/${videoIds[i]}`;
        iframe.allowFullscreen = true;
        iframe.className = "container";
        div.appendChild(iframe);

    }

});
