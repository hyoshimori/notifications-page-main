console.log("Hello from app.js");
// message button

const message = document.getElementById('message-notif')
const addYourMessage = document.getElementById("add-message")
const platformMessage = "<p id='added-message'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.</p>"
let counter1 = 0;

message.addEventListener("click", () => {
  if (counter1 === 0){
    counter1 += 1
    addYourMessage.insertAdjacentHTML("beforeend", platformMessage);
  } else {
    counter1 -= 1
    addYourMessage.removeChild(addYourMessage.lastElementChild);
  }
})

// Mark all as read button

const markAsRead = document.getElementById("mark-as-read")
const unreads = document.querySelectorAll(".color--light--blue")
const dots = document.querySelectorAll(".dot")
let counter2 = 0;

markAsRead.addEventListener("click", (event) => {
  if (counter2 === 0){
    counter2 += 1;
    unreads.forEach(unread => {
      unread.setAttribute('class', 'mark-as-read--white')
    });
    dots.forEach(dot => {
      dot.setAttribute('class', 'dot-read')
    });
    event.target.innerText = "Undo";
  } else if (counter2 === 1){
    counter2 -= 1;
    unreads.forEach(unread => {
      unread.setAttribute('class', 'color--light--blue')
    });
    dots.forEach(dot => {
      dot.setAttribute('class', 'dot')
    });
    event.target.innerText = "Mark all as read";
  }
});
