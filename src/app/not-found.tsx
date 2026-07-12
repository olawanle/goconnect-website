import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-screen grid place-items-center bg-black text-white px-4">
            <div className="text-center">
                <h2 className="text-6xl font-bold mb-4 gradient-text">404</h2>
                <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
                <Link href="/" className="btn-primary">
                    Return Home
                </Link>
            </div>
        </div>
    )
}
