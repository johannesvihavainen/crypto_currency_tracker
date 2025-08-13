import React, { useEffect, useState } from 'react'

export default function Trending() {
    const [trending, setTrending] = useState([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/search/trending')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setTrending(data.coins)
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
            <ul className='trending-crypto-list'>
                {trending.map((coin, index) => (
                    <li key={coin.item.id}>
                        <div className='trending-crypto-info-1'>
                            #{index + 1}<span className='coin-name'>{coin.item.name}</span>
                            <div className='trending-crypto-info-2'>
                                - ${coin.item.price_btc}
                            </div>
                        </div>

                        <img className='trending-crypto-image' src={coin.item.thumb} alt={coin.item.name} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

