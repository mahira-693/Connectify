const stories=document.querySelector('.story-container');
const array=[
    {
        id: 1,Image:"https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",Text:"Your story"
    },

    {
        id: 2,Image:"https://plus.unsplash.com/premium_photo-1671656349080-59033895973d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveXxlbnwwfHwwfHx8MA%3D%3D",Text:"noah rest"
    },

    {
        id: 3,Image:"https://plus.unsplash.com/premium_photo-1664541336472-2e75f15a05f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJveSUyMGFzdGhldGljc3xlbnwwfHwwfHx8MA%3D%3D",Text:"sophia caleb"
    },

    {
        id: 4,Image:"https://plus.unsplash.com/premium_photo-1664697379880-eee9f42050be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGFzdGhldGljc3xlbnwwfHwwfHx8MA%3D%3D",Text:"emily in paris"
    },

    {
        id: 5,Image:"https://images.unsplash.com/photo-1591233244501-ca0118ecf9fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmwlMjBhc3RoZXRpY3N8ZW58MHx8MHx8fDA%3D",Text:"liam khan"
    },

    {
        id: 6,Image:"https://plus.unsplash.com/premium_photo-1709865785911-4e469c91f169?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJveSUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D",Text:"oliver sage"
    },
]
array.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = item.Image;

    const cardText = document.createElement("p");
    cardText.textContent = item.Text;

    card.appendChild(cardImage);
    card.appendChild(cardText);
   

    stories.appendChild(card);
});
//..............friendRequest................
const requestContainer = document.querySelector('.request');
const reqArray = [
  { Image: "https://images.unsplash.com/photo-1691289435414-7301d7164319?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D", Name: "Mohammad",  Text: "10 mutual friends" },
  { Image: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww", Name: "fatima-faisal", Text: "10 mutual friends" },
  { Image: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D", Name: "ahmed-pathan", Text: "8 mutual friends" },
];

reqArray.forEach((item) => {
  const info = document.createElement("div");
  info.classList.add("info");

  const infoImage = document.createElement("img");
  infoImage.src = item.Image;

  const infoName = document.createElement("h5");
  infoName.textContent = item.Name;

  const infoText = document.createElement("small");
  infoText.textContent = item.Text;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const acceptButton = document.createElement("button");
  acceptButton.textContent = 'Accept';
  acceptButton.classList.add("accept-button");

  const declineButton = document.createElement("button");
  declineButton.textContent = 'Decline';
  declineButton.classList.add("decline-button");

  buttonContainer.appendChild(acceptButton);
  buttonContainer.appendChild(declineButton);

  info.appendChild(infoImage);
  info.appendChild(infoName);
  info.appendChild(infoText);
  info.appendChild(buttonContainer);

  requestContainer.appendChild(info);
});
// ......notification-popup............
const menuItems = document.querySelectorAll('.menu-item');

const changeActiveItem = () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  };
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActiveItem();
      item.classList.add("active");
      if (item.id != "notifications") {
        document.querySelector(".notifications-popup").style.display = "none";
      } else {
        document.querySelector(".notifications-popup").style.display = "block";
        document.querySelector("#notifications .notifications-count").style.display = "none";
      }
    });
  });
//...............messagebox...............
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.messages');
const messagesearch = document.querySelector('#message-search');


messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow ='none';
    },2000);
});





  
  

