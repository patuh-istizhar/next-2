'use client';

import { useEffect, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price: Number(price) }),
    });
    await res.json();
    setName('');
    setPrice('');
    fetchProducts();
  };

  const handleUpdate = async () => {
    const res = await fetch('/api/products', {
      method: 'PUT',
      body: JSON.stringify({ id: editId, name, price: Number(price) }),
    });
    await res.json();
    setEditId(null);
    setName('');
    setPrice('');
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditId(product.id);
    setName(product.name);
    setPrice(String(product.price));
  };

  return (
    <main style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '20px' }}>🛒 Product List</h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '6px', width: '200px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ padding: '6px', width: '100px' }}
        />
        <button
          onClick={editId ? handleUpdate : handleAdd}
          style={{
            padding: '6px 12px',
            backgroundColor: editId ? '#ffc107' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px' }}>{p.name}</td>
              <td style={{ padding: '10px' }}>
                Rp {p.price.toLocaleString()}
              </td>
              <td style={{ padding: '10px' }}>
                <button
                  onClick={() => handleEdit(p)}
                  style={{
                    marginRight: '10px',
                    backgroundColor: '#ffc107',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    border: 'none',
                    padding: '6px 10px',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
