import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <span className="text-2xl font-bold text-brand-red tracking-tight">Canado</span>
                        </Link>
                        {/* Description removed */}
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            {/* Social links removed */}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="font-bold text-text-primary mb-6">Platform</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Find Teachers</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">How It Works</Link></li>
                            {/* Pricing removed */}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-text-primary mb-6">Company</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-red transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Careers</Link></li>
                            {/* Blog removed */}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-text-primary mb-6">Support</h3>
                        <ul className="space-y-4 text-text-secondary">
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
                            {/* Terms of Service removed */}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Canado English. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-brand-red">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-red">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
