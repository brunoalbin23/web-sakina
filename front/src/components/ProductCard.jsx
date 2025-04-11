import React from 'react'
import ProductCard from '../components/ProductCard';

const ProductCard = ({ producto }) => (
  <Card className="text-center">
    <img src={producto.image} alt={producto.name} className="w-full h-32 object-cover rounded-t-md" />
    <CardContent>
      <h3 className="font-semibold">{producto.name}</h3>
      <p className="text-gray-600">{producto.price}</p>
    </CardContent>
  </Card>
)

export default ProductCard
