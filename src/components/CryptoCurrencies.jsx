import React, { useEffect, useState } from 'react'

function CryptoCurrencies() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)

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

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <div>
            <ul className='crypto-list'>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        <img className="crypto-image" src={coin.image} alt={coin.name} />
                        <span className='coin-name'>{coin.name}</span> - <span className='crypto-coin-price'>${coin.current_price}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CryptoCurrencies
