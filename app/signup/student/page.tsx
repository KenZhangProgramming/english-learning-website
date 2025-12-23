"use client";

import Link from "next/link";
import { ArrowLeft, GraduationCap } from "lucide-react";

export default function StudentSignupPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] bg-brand-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8">
                <Link href="/signup" className="inline-flex items-center text-brand-olive font-medium hover:underline mb-8">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to choices
                </Link>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-brand-olive-light rounded-xl flex items-center justify-center text-brand-olive">
                        <GraduationCap size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-text-primary">Student Sign Up</h1>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all outline-none"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all outline-none"
                            placeholder="name@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-olive focus:border-transparent transition-all outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full bg-brand-olive text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        Create Student Account
                    </button>
                </form>
            </div>
        </main>
    );
}
