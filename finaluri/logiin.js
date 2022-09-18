document.getElementById('login').addEventListener('submit', function(event) {
event.preventDefault(); 
let checkbox = document.getElementById('saveuser');
if (checkbox.checked ) {
    let username = document.getElementById('username').value;
    Cookies.set('saveusername', username);
} else {
    Cookies.remove('saveusername')
}
});

