export default function ProductDetail({ params }: any) {
    const { id } = params

    return (
        <div>
            <h1 className="text-3xl font-bold">Produk #{id}</h1>
            <p className="mt-4">Ini adalah detail untuk produk dengan ID: {id}</p>
        </div>
    )
}
