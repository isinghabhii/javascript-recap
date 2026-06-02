const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("username");

function getUser() {

    const card = document.getElementById("card");
    const error = document.getElementById("error");

    card.style.display = "none";
    error.innerText = "";

    const username = input.value.trim();

    if (!username) {
        error.innerText = "Please enter a username";
        return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open(
        "GET",
        `https://api.github.com/users/${username}`
    );

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4) {

            if (xhr.status === 200) {

                const data = JSON.parse(xhr.responseText);

                document.getElementById("avatar").src =
                    data.avatar_url;

                document.getElementById("name").innerText =
                    data.name || data.login;

                document.getElementById("bio").innerText =
                    data.bio || "No bio available";

                document.getElementById("followers").innerText =
                    data.followers;

                document.getElementById("following").innerText =
                    data.following;

                document.getElementById("repos").innerText =
                    data.public_repos;

                card.style.display = "block";

            } else {

                error.innerText = "User not found!";
                card.style.display = "none";
            }
        }
    };

    xhr.send();
}

searchBtn.addEventListener("click", getUser);

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        getUser();
    }
});