async function loadCommunity() {
    try {
        const response = await fetch("data/community.json?t=" + Date.now());

        if (!response.ok) {
            throw new Error("community.json konnte nicht geladen werden.");
        }

        const data = await response.json();

        document.getElementById("latestPassenger").textContent =
            data.latestPassenger || "Waiting...";

        document.getElementById("latestFirstOfficer").textContent =
            data.latestFirstOfficer || "Waiting...";

    } catch (error) {
        console.error(error);
    }
}

loadCommunity();
setInterval(loadCommunity, 5000);