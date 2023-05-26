import React from 'react'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

function Home({coins}) {
  return (
<div>
<CoinSearch coins={coins}/>
<Trending/>
</div>
  )
}

export default Home
