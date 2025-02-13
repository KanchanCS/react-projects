import React from 'react'
import Delvery from "./Delvery";
import Hero from "./Hero";
import TopPicks from "./TopPicks";
function Home({handleAdd}) {
  return (
    <div>

<Hero/>
        <Delvery />
        <TopPicks handleAdd={handleAdd} />
    </div>
  )
}

export default Home