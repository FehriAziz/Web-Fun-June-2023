// function logIn(e)
// {
//     e.innerText = "logout";
// }
function logIn(id)
{
    document.getElementById(id).innerText="Logout";
}

function hide() {
    var e = document.getElementById('addDefBtn');
    e.parentNode.removeChild(e);
}



function likeBtn() {
    alert("Ninja was like!");
  }