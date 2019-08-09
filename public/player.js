let axios = require("axios")


$(document).ready(() => {
  $("#submit-players").on("click", event => {
    event.preventDefault();
    // console.log("I'm submitted!"); // works

    let baseballPlayer = {
      player: $("#player-name")
        .val()
        .trim()
    };

    console.log(baseballPlayer);

    $.axios({
        method: "POST",
        url: "/players/api",
        data: baseballPlayer
    }).then((res) => {
        console.log(res.data)
        res.json(res.data)
    })
  });
});
