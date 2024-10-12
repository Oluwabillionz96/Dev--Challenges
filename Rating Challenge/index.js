const ratingButtons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit");
let span = document.getElementById("rated");
let page2 = document.querySelector('#container2')
let page1 = document.querySelector('#container1')
let back = document.querySelector('#x');
for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", function () {
    let inner = this.textContent;

    for(let i = 0; i < ratingButtons.length; i++){
        ratingButtons[i].style.backgroundColor = '#3d3d3d';
    }
    switch (inner) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        span.textContent = inner;
        this.style.backgroundColor = "#fff";
        break;

      default:
        span.textContent = '0';
        break;


    }
  });
}

submitButton.addEventListener("click", function () {
  this.style.backgroundColor = "#fff";
  function change() {
    page1.style.display = 'none';
    page2.style.display = 'block';
  }

  setTimeout(change, 300);
});

back.addEventListener('click', function(){
    function change() {
        page2.style.display = 'none';
        page1.style.display = 'block';
      }
      for(let i = 0; i < ratingButtons.length; i++){
        ratingButtons[i].style.backgroundColor = '#3d3d3d';
    }

    submitButton.style.backgroundColor = '#fb7413'
      setTimeout(change, 300)
})
