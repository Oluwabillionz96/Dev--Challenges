let desktopShare = document.querySelector(".icon");
let mobileShare = document.getElementById("lrrr");
let shareDesktop = document.querySelector(".sharer-icons");
let shareMobile = document.querySelector('.sharer-icon2');
let profile = document.getElementById('icons')
let backShareMobile = document.querySelector('#sharer20')

desktopShare.addEventListener("click", function () {
  if (shareDesktop.style.display !== "flex") {
    if (document.body.clientWidth < 500) {
         shareDesktop.style.display = "none";
         shareMobile.style.display = 'flex';
         profile.style.display ='none';
         backShareMobile.addEventListener('click', function(){
            shareMobile.style.display = 'none';
            profile.style.display ='flex';
         })
        } else {
          shareDesktop.style.display = "flex";
    }
  } else {
    shareDesktop.style.display = "none";
  }
});
