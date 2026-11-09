import './style.css';

const app = document.getElementById('app');

if (!app) {
    throw new Error('App element not found');
}

const nameGame = document.createElement('p');
nameGame.textContent = 'Bulls and Cows';

app.append(nameGame);
