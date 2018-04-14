$(document).ready(function() {
  function updatePost(enemies) {
    $.ajax({
      method: "GET",
      url: "/api/enemies" req.params.id,
      data: enemies
    })
    .then(function() {

  }