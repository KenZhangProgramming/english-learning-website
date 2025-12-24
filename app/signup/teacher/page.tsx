"use client";

import Link from "next/link";
import { ArrowLeft, User, Loader2 } from "lucide-react";
import { useActionState } from "react";
import { signUpAsTeacher, type SignupState } from "@/app/actions/teacher-signup";

const initialState: SignupState = null;

export default function TeacherSignupPage() {
    const [state, formAction, isPending] = useActionState(signUpAsTeacher, initialState);

    return (
        <main className="min-h-[calc(100vh-80px)] bg-brand-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8">
                <Link href="/signup" className="inline-flex items-center text-brand-gold font-medium hover:underline mb-8">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Signup
                </Link>

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-brand-gold-light rounded-xl flex items-center justify-center text-brand-gold">
                        <User size={24} />
                    </div>
                    <h1 className="text-2xl font-bold text-text-primary">Teacher Sign Up</h1>
                </div>

                {state?.error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                        {state.error}
                    </div>
                )}

                {state?.success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-xl text-sm font-medium">
                        {state.success}
                        <div className="mt-2 text-brand-gold font-bold">
                            <Link href="/login" className="hover:underline">Click here to log in</Link>
                        </div>
                    </div>
                )}

                <form action={formAction} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-text-secondary mb-1">Email Address</label>
                            <input
                                name="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                placeholder="name@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">City</label>
                            <input
                                name="city"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                placeholder="Paris"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Country</label>
                            <input
                                name="country"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                placeholder="France"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Gender</label>
                            <select
                                name="gender"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none appearance-none bg-white"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-text-secondary mb-1">Teaching Specialization</label>
                            <select
                                name="specialization"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none appearance-none bg-white"
                            >
                                <option value="Business English">Business English</option>
                                <option value="IELTS/TOEFL Prep">IELTS/TOEFL Prep</option>
                                <option value="Conversational English">Conversational English</option>
                                <option value="Kids English">Kids English</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-text-secondary mb-1">Password</label>
                            <input
                                name="password"
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-brand-gold text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-50 disabled:transform-none"
                    >
                        {isPending ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={20} />
                                Creating Account...
                            </>
                        ) : (
                            "Apply as Teacher"
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
}
