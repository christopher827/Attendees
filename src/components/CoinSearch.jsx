import React, { useState } from 'react'
import CoinItem from './CoinItem'

function CoinSearch({coins}) {
  const [searchText,setSearchText]=useState('');
  return (
<div className='rounded-div my-4'>
<div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
<h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
<form>
<input type='text' placeholder='Search a Coin' 
onChange={(e)=>setSearchText(e.target.value)} 
className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl outline-none'
/>    
</form>    
</div>      

<table className='w-full border-collapse text-center'>
<thead>
<tr className='border-b'>
<th></th>
<th>#</th> 
<th className='px-4'>Coin</th>
<th></th>
<th className='text-left'>Price</th>
<th>24h</th>
<th>24h Volume</th>
<th className='hidden md:table-cell'>Mkt</th>
<th className='hidden sm:table-cell'>Last 7 Days</th>
</tr>
</thead>

<tbody>
{coins.filter((value)=>{
  if (searchText==='') {
    return value;
  }
  else if( 
    value.name.toLowerCase().includes(searchText.toLowerCase())
  ){
    return value;
  }
}).map((coin)=>( 
<CoinItem key={coin.id} coin={coin}/>
))}
</tbody>
</table>
</div>
  )
}

export default CoinSearch
