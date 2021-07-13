var roomname = "";
function addroom() {
    roomname = document.getElementById("input_roomname");
    localStorage.setItem("roomname", roomname);
    window.location = "room.html";
}