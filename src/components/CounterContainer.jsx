import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Counter from '../components/Counter'

function CounterContainer({ item }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleAdd = () => setCount(prev => prev + 1)
  const handleSub = () => setCount(prev => (prev > 0 ? prev - 1 : 0))
  const handleAddToCart = () => addToCart({ ...item, count })

  return (
    <Counter
      count={count}
      onAdd={handleAdd}
      onSub={handleSub}
      onAddToCart={handleAddToCart}
    />
  )
}

export default CounterContainer