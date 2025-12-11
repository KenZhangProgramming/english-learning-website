import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-white py-8">
            <div className="container mx-auto px-6 md:px-12">
                <nav className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 w-full text-center text-xs tracking-widest font-medium text-gray-400 uppercase">
                    <Link href="/contact" className="hover:text-brand-red hover:scale-105 transition-all duration-300">
                        Contact
                    </Link>
                    <Link href="/careers" className="hover:text-brand-red hover:scale-105 transition-all duration-300">
                        Careers
                    </Link>
                    <Link href="/faq-teachers" className="hover:text-brand-red hover:scale-105 transition-all duration-300">
                        FAQ for Teachers
                    </Link>
                    <Link href="/faq-students" className="hover:text-brand-red hover:scale-105 transition-all duration-300">
                        FAQ for Students
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
