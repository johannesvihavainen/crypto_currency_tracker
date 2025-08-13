import React, { useEffect, useState } from 'react'

function Search() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCoins(data)
                setLoading(false)
            })
            .catch((err) => console.error(err))
        setLoading(false)
    }, [])

    const filteredCoins = coins.filter(coin => (
        coin.name.toLowerCase().includes(input.toLowerCase() || coin.symbol.toLowerCase().includes(input.toLowerCase()))
    ))

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div>
        <div className='search-box'>
            <input type="text" placeholder='Ethereum...' value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
        
            <ul className='crypto-list'>
                {filteredCoins.map((coin) => (
                    <li key={coin.id}>
                        <img className="crypto-image" src={coin.image} alt={coin.name} />
                        <span className='coin-name'>{coin.name}</span> - <span className='crypto-coin-price'>${coin.current_price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search
