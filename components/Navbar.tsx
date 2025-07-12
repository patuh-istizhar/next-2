'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
            <Link href="/">Beranda</Link>
            <Link href="/profile">Profil</Link>
            <Link href="/about">Tentang</Link>
            <Link href="/products/1">Produk 1</Link>
        </nav>
    )
}
