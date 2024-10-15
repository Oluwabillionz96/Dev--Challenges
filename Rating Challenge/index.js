// Getting elements and saving in varibles
const ratingButtons = document.querySelectorAll(".btn");
const submitButton = document.querySelector(".submit");
const span = document.getElementById("rated");
const page2 = document.querySelector('#container2')
const page1 = document.querySelector('#container1')
const back = document.querySelector('#x');

// looping through to Add event listeners to the rating buttons
for (let i = 0; i < ratingButtons.length; i++) {
  // Adding event listeners
  ratingButtons[i].addEventListener("click", function () {
    let inner = this.textContent;
// Making sure other buttons return to normal colors when has been previously clicked but not chosen
    for(let i = 0; i < ratingButtons.length; i++){
        ratingButtons[i].style.backgroundColor = '#3d3d3d';
    }

    // Checking for clicked buttons using inner text
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

// Adding event listener to the submit button

submitButton.addEventListener("click", function () {
  this.style.backgroundColor = "#fff";
  // this function sets the primary page to display none and brings up the thank you page
  function change() {
    page1.style.display = 'none';
    page2.style.display = 'block';
  }

  // set time out is used to delay actions, the action here is delayed for three mili-seconds
  setTimeout(change, 300);
});

// This icon is supposed to take the user back to the primary page
back.addEventListener('click', function(){
  // this function sets the thank you page to display none and sets brings up the primary page
    function change() {
        page2.style.display = 'none';
        page1.style.display = 'block';
      }
      // This is to rest the value of the that is being choosen as rate
      span.innerText = '0';
      // This allows  a user to rate again after clicking the X icon
      for(let i = 0; i < ratingButtons.length; i++){
        // This keeps the rating buttons at their initial collor before click or hover
        ratingButtons[i].style.backgroundColor = '#3d3d3d';
        // This loops through to add the hover state
        ratingButtons[i].addEventListener('mouseover', function(event){
            this.style.backgroundColor = '#fb7413'
        })

        // This loops through to return the color to the initial on a mouse out event
        ratingButtons[i].addEventListener('mouseout', function(){
            this.style.backgroundColor = '#3d3d3d'
        })

// This checks for a click event after the X icon had been clicked
        ratingButtons[i].addEventListener('click', function(event){
            this.style.backgroundColor = '#fff'
            // This checks if the click event really happened, the background color should be white
            if(event.type === 'click'){
                ratingButtons[i].addEventListener('mouseout', function(){
                    this.style.backgroundColor = '#fff'

                    // This checks if there is any rate
                if(span.innerHTML === '0'){

                  // THis sets the rate to the value of the button being clicked
                    submitButton.addEventListener('click',function(){
                        span.innerHTML = ratingButtons[i].textContent;
                    })
                } 
                }) 
            } else{
              // This lets the rate remain Zero if the submit button is clicked before choosing any rate
                for(let i = 0; i < ratingButtons.length; i++){
                    ratingButtons[i].style.backgroundColor = '#3d3d3d';
                }
            }
        })

       
    }

    submitButton.style.backgroundColor = '#fb7413'
      setTimeout(change, 300)
})