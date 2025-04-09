document.addEventListener("DOMContentLoaded", function () {
    const div = document.querySelector('#videos');

    const videoFiles = [
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
        {
            url: "/kalaufx30.mp4",
            title: "Bachata Uruguay",
            desc: "Este EP es un gran proyecto que trabajamos junto a Edi Vega y Sxsa Visuals",
        },
    ];

    videoFiles.forEach(file => {
        const video = document.createElement("video");
        video.src = file.url;
        video.className = "m-3";
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.style.cursor = "pointer";
        video.title = file.title;

        video.addEventListener("click", () => {
            const modalTitle = document.getElementById("videoModalLabel");
            const modalVideo = document.getElementById("modalVideo");
            const modalSource = modalVideo.querySelector("source");
            const h6Desc = document.getElementById("h6Desc");
            h6Desc.textContent = file.desc || "No hay descripción disponible.";
            modalTitle.textContent = file.title;
            modalSource.src = file.url;
            modalVideo.load();

            const modal = new bootstrap.Modal(document.getElementById("videoModal"));
            modal.show();
        });

        div.appendChild(video);
    });

    // Detener video cuando se cierra el modal
    document.getElementById("videoModal").addEventListener("hidden.bs.modal", () => {
        const modalVideo = document.getElementById("modalVideo");
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });
});
