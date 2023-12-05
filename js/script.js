let title = $('.title');
let content = $('.content');
let dice = $('.dice');

getAdvice()

$(dice).click(function () {
  getAdvice()
});

function getAdvice(){
  $.ajax({
    url: "https://api.adviceslip.com/advice",
    success: function (response) {
      let parsed = JSON.parse(response);
      $(title).text(`Advice #${parsed.slip.id}`);
      $(content).text(`"${parsed.slip.advice}"`);
    }
  });
}
