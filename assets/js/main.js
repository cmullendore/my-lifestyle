
if (!localStorage.getItem("lifestyle-location")) {
    window.location = "./welcome.html";
}

function LoadContent(path, target) {
    fetch(path)
        .then(function(response) {
            if (response.ok) {
                response.text()
                    .then(function(text) {
                        $(target).html(text);
                    })
            }
    })
}

LoadContent("../content/contacts.html", "#contacts-content");
LoadContent("../content/tasks.html", "#tasks-content");