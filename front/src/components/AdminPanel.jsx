import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog'

const AdminPanel = ({ onAdd }) => {
  const [nuevoProducto, setNuevoProducto] = useState({ name: '', price: '', image: '' })

  const handleAdd = () => {
    if (nuevoProducto.name && nuevoProducto.price && nuevoProducto.image) {
      onAdd(nuevoProducto)
      setNuevoProducto({ name: '', price: '', image: '' })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Admin</Button>
      </DialogTrigger>
      <DialogContent className="space-y-4">
        <h2 className="text-lg font-semibold">Agregar Producto</h2>
        <Input placeholder="Nombre" value={nuevoProducto.name} onChange={(e) => setNuevoProducto({ ...nuevoProducto, name: e.target.value })} />
        <Input placeholder="Precio" value={nuevoProducto.price} onChange={(e) => setNuevoProducto({ ...nuevoProducto, price: e.target.value })} />
        <Input placeholder="URL de Imagen" value={nuevoProducto.image} onChange={(e) => setNuevoProducto({ ...nuevoProducto, image: e.target.value })} />
        <Button onClick={handleAdd}>Agregar</Button>
      </DialogContent>
    </Dialog>
  )
}

export default AdminPanel
