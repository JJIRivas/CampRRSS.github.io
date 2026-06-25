$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "mainFiles/" + $(this).data("include") + ".html";

    $(this).load(file, function (response, status, xhr) {
      console.log("Archivo:", file);
      console.log("Estado:", status);

      if (status === "error") {
        console.log(xhr.status, xhr.statusText);
      }
    });
  });
});
