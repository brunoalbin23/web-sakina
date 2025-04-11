import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import AdminPanel from '../components/AdminPanel'
import FiltroMenu from '../components/FiltroMenu'
import { dummyProducts } from '@/data/dummyProducts'

const Home = () => {
  const [productos, setProductos] = useState(dummyProducts)

  const agregarProducto = (producto) => {
    setProductos([...productos, { ...producto, id: productos.length + 1 }])
  }

  return (
    <div className="min-h-screen p-4 bg-white text-black">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FiltroMenu />
          <h1 className="text-xl font-bold italic">SAKINA</h1>
        </div>
        <AdminPanel onAdd={agregarProducto} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default Home
