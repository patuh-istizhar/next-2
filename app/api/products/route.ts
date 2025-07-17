let products = [
  { id: 1, name: 'Apple', price: 10_000 },
  { id: 2, name: 'Banana', price: 5_000 },
];

export async function GET() {
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price } = body;
  const newProduct = {
    id: Date.now(),
    name,
    price,
  };
  products.push(newProduct);

  return new Response(JSON.stringify(newProduct), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const { id, name, price } = body;

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  products[index] = { id, name, price };

  return new Response(JSON.stringify(products[index]), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const { id } = body;

  products = products.filter((p) => p.id !== id);

  return new Response(null, { status: 204 });
}
