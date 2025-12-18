import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 shadow-sm w-full bg-brand-cream py-6">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        {/* Simple logo icon representation */}
                        <div className="absolute inset-0 bg-brand-red rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg z-10">C</div>
                    </div>
                    <span className="text-2xl font-bold text-brand-red tracking-tight">Canado</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-text-secondary font-medium">
                    <Link href="/#about" className="hover:text-brand-gold transition-colors">
                        About
                    </Link>
                    <Link href="/#teachers" className="hover:text-brand-gold transition-colors">
                        Find Teachers
                    </Link>
                    <Link href="/#login" className="hover:text-brand-gold transition-colors">
                        Login/Signup
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-text-primary p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
