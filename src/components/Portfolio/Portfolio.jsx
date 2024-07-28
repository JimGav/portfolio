import React from 'react'
import "./Portfolio.css"
import { FaGithub } from "react-icons/fa"

const Portfolio = () => {

  return (
    <section id="portfolio">
      <header>Portfolio</header>
      <div className="portfolio-items">

        <div className="portfolio-item">
        
          <div className='portfolio-item-desc'>
            <h3>Chess Engine</h3>
            <p> Attending the course "Artificial Intelligence I", I was asked to solve <a href='http://ai.berkeley.edu/project_overview.html'> berkeley university's pacman project </a>
                and it really ignited my curiosity. So as soon as I got the chance, I decided to build something similar for a game I love... chess. Even though I thought it would
                be a lot harder than the pacman project, I managed to develop it up to a running stage pretty easily. But I do not stop here, I am aiming for something more advanced.
                So it is still evolving and on its way to take down <a href="https://en.wikipedia.org/wiki/AlphaZero">AlphaZero</a> :D.
            </p>
            <button onClick={() => location.href = "https://github.com/JimGav/ChessAI"}>Code <FaGithub size={40} /></button>
          </div>
          <img src="chessai.png" className='portfolio-item-img' ></img>
        </div>


        <div className="portfolio-item">
          <img src="src\assets\raylib_game.JPG" className='portfolio-item-img' ></img>
          <div className='portfolio-item-desc'>
            <h3>C++ game/Physics simulator using raylib library</h3>
            <p>This is a simple C++ game/Physics simulator I made using the <a href="https://www.raylib.com/">raylib</a> library. I started this project in order to practice C++, but also to 
                check out some of the math/physics that games use under the hood eg. velocity, collisions, etc.
            </p>
            <button onClick={() => location.href = "https://github.com/JimGav/raylib-game"}>Code <FaGithub size={40} /></button>
          </div>
        </div>
        <div className="portfolio-item">
          <div className='portfolio-item-desc'>
            <h3>C++ game using raylib library</h3>
            <p>Following the previous project I wanted to also create a game with graphics. So I created an endless arcade style game, where enemies approach you from both sides
              and you need to survive for as long as possible.
            </p>
            <button onClick={() => location.href = "https://github.com/JimGav/raylib-arcade_game"}>Code <FaGithub size={40} /></button>
          </div>
          <img src="src\assets\raylib_arcade_game.JPG" className='portfolio-item-img' ></img>
        </div>
        <div className="portfolio-item">
          <div className='portfolio-item-desc'>
            <h3>Sorting Visualizer App</h3>
            <p> Attending the course "Algorithms and Complexity" of my university, I came across an exercise in my homework where I needed to come up with an algorithm very similar
              to merge sort. In order to understand the algorithm at the best of my ability, I decided to implement it in javascript. But of course I couldn't stop there so I decided to 
              also take a look at quick sort which I hadn't at the time, and after that I thought it would be a cool idea to add some more sorting methods, and some html/css to visualize it.
            </p>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"50px"}}>
              <button onClick={() => location.href = "https://github.com/JimGav/sorting-visualizer"}>Code <FaGithub size={40} /></button>
              <button onClick={() => location.href = "https://jimgav.github.io/sorting-visualizer/"}>Go To Page </button>
            </div>
           
          </div>
          <img src="src\assets\sorting_visualizer.png" className='portfolio-item-img' ></img>
        </div>
      </div>
    </section>

  )
}

export default Portfolio