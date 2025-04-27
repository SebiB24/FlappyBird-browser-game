# 🐦 Flappy Bird - JavaScript Edition

Welcome to a simple, fun recreation of **Flappy Bird** built using **HTML5 Canvas**, **JavaScript**, and **CSS**!

![Game Screenshot](./screenshot.png) <!-- (Optional: Add a real screenshot of your game named `screenshot.png`) -->

## 🚀 Live Demo
You can play the game by opening `index.html` in your browser.

## 📂 Project Structure
```
/flappy-bird
  ├── index.html
  ├── flappybird.css
  ├── flappybird.js
  ├── flappybird.png
  ├── flappybirdbg.png
  ├── toppipe.png
  ├── bottompipe.png
  └── README.md
```

## 🎮 How to Play
- **Start** the game by pressing the `Spacebar` or the `Arrow Up` key.
- **Flap** to keep the bird flying and avoid hitting the pipes or falling off the screen.
- **Score** points by successfully passing through the pairs of pipes.
- **Game Over** if you collide with a pipe or fall down.

## ✨ Features
- Smooth, physics-based bird movement
- Randomly generated pipe obstacles
- Gravity and jump physics
- Scoring system
- "Game Over" message display
- Fully responsive canvas for different screen sizes
- Classic Flappy Bird visuals with custom images

## 🛠️ Built With
- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

## 📋 How It Works
- **Canvas Setup**: A `<canvas>` element is used to render the game.
- **Bird Mechanics**: Gravity constantly pulls the bird down, and pressing the jump key applies an upward force.
- **Pipe Generation**: Pipes are randomly placed at intervals and move towards the bird.
- **Collision Detection**: If the bird touches any pipe or goes off-screen, the game ends.
- **Game Loop**: The game uses `requestAnimationFrame` for smooth updates.

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/5072a667-019b-4a20-a346-3b19dabbeaf4)


## 🧩 Future Improvements
- Add sound effects for jumps, scoring, and collisions
- Implement a high score system
- Add animations for game over
- Make mobile controls for touch devices

## 📜 License
This project is for educational purposes and personal enjoyment. Feel free to modify and share!
