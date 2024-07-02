// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.querySelector(".play-button");
    const leaderboardButton = document.querySelector(".leaderboard-button");
    const rulesButton = document.querySelector(".rules-button");
    const marketplaceButton = document.querySelector(".marketplace-button");
    const profileButton = document.querySelector(".profile-button");

    playButton.addEventListener("click", function () {
        // Redirect to gameplay page
        window.location.href = "gameplay.html";
    });

    leaderboardButton.addEventListener("click", function () {
        // Redirect to leaderboard page
        window.location.href = "leaderboard.html";
    });

    rulesButton.addEventListener("click", function () {
        // Redirect to rules page
        window.location.href = "rules.html";
    });

    marketplaceButton.addEventListener("click", function () {
        // Redirect to marketplace page
        window.location.href = "marketplace.html";
    });

    profileButton.addEventListener("click", function () {
        // Redirect to user profile page
        window.location.href = "use-profile.html";
    });
});
