//sidebar
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelectorAll(':root');


//=========SIDEBAR==========

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'Notifications'){
      document.querySelector('.notification-popup').style.display = 'none';
        } else{
        document.querySelector('.notification-popup').style.display = 'block';
        document.querySelector('.notification-count').style.display = 'none';
        }
    })
})

//========MESSAGES=========
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}
//search chat 
messageSearch.addEventListener('keyup', searchMessage);

//highlight messages card when menu item is clicked
messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// THEME/DISPLAY CUSTOMIZATION

//opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//closes modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    }
}
//close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// =**********FONTS*****************=
fontSizes.forEach(size => {
    let fontSize;
    size.classList.toggle('active');
    
    size.addEventListener('click',() => {
        if(size.classList.contains('font-size-1')){
            fontSize = "10px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = "22px";
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        //change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })

    
})

let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}