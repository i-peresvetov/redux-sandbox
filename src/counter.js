import React from "react"

const Counter = () => {
  return (
    <div class="p-5 mb-4 bg-light round-3">
      <div class="container-fluid py-5">
        <h2 id="counter">0</h2>
        <button id="dec" class="btn btn-primary btn-lg">
          DEC
        </button>
        <button id="inc" class="btn btn-primary btn-lg">
          INC
        </button>
        <button id="rnd" class="btn btn-primary btn-lg">
          RND
        </button>
      </div>
    </div>
  )
}
