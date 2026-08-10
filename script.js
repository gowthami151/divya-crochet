/* =========================
   DATA
========================= */

let likes = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

let views = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};


/* =========================
   LIKE
========================= */

function likePost(id, button) {

    if (localStorage.getItem("liked_" + id)) {

        alert("You already liked this creation ❤️");

        return;
    }

    likes[id]++;

    document.getElementById(
        "likes" + id
    ).innerText = likes[id];

    localStorage.setItem(
        "liked_" + id,
        "true"
    );

    button.innerText = "❤️ Liked";

    button.style.background = "#d44f7a";

    button.style.color = "white";

    updateTotalLikes();

}


/* =========================
   TOTAL LIKES
========================= */

function updateTotalLikes() {

    let total = 0;

    for (let id in likes) {

        total += likes[id];

    }

    document.getElementById(
        "totalLikes"
    ).innerText = total;

}


/* =========================
   VIEWS
========================= */

function addView(id) {

    views[id]++;

    document.getElementById(
        "views" + id
    ).innerText = views[id];

    updateTotalViews();

}


function updateTotalViews() {

    let total = 0;

    for (let id in views) {

        total += views[id];

    }

    document.getElementById(
        "totalViews"
    ).innerText = total;

}


/* =========================
   FAVORITE
========================= */

function favoriteItem(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

        button.innerText = "♥";

    } else {

        button.innerText = "♡";

    }

}


/* =========================
   FILTER
========================= */

function filterItems(category) {

    let cards =
        document.querySelectorAll(
            ".creation-card"
        );

    cards.forEach(function(card) {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   SEARCH
========================= */

function searchCreations() {

    let search =
        document.getElementById(
            "search"
        ).value.toLowerCase();

    let cards =
        document.querySelectorAll(
            ".creation-card"
        );

    cards.forEach(function(card) {

        let text =
            card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* =========================
   IMAGE VIEWER
========================= */

function openImage(src) {

    let modal =
        document.getElementById(
            "imageModal"
        );

    let image =
        document.getElementById(
            "modalImage"
        );

    image.src = src;

    modal.style.display = "flex";

}


function closeImage() {

    document.getElementById(
        "imageModal"
    ).style.display = "none";

}


/* =========================
   DARK MODE
========================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

}


/* =========================
   CREATION COUNT
========================= */

document.getElementById(
    "creationCount"
).innerText =
    document.querySelectorAll(
        ".creation-card"
    ).length;


/* =========================
   INITIAL TOTALS
========================= */

updateTotalLikes();

updateTotalViews();