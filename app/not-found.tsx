export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl mt-4">Oops! Halaman tidak ditemukan.</p>
            <a href="/" className="mt-4 text-blue-500 underline">Kembali ke Beranda</a>
        </div>
    )
}
