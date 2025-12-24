"use client";

import Link from "next/link";
import { User, GraduationCap, ArrowRight, BookOpen, Users } from "lucide-react";

export default function SignupPage() {
    return (
        <main className="min-h-[calc(100vh-80px)] bg-brand-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-12">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-brand-red sm:text-5xl md:text-6xl tracking-tight">
                        Join the Canado Community
                    </h1>
                    <p className="mt-4 text-xl text-text-secondary max-w-2xl mx-auto font-medium">
                        Find your path to English mastery. Choose how you want to get started.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {/* Student Card */}
                    <Link
                        href="/signup/student"
                        className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-brand-olive overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen size={120} className="text-brand-olive" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 bg-brand-olive-light rounded-2xl flex items-center justify-center text-brand-olive mb-6 group-hover:scale-110 transition-transform duration-300">
                                <GraduationCap size={32} />
                            </div>

                            <h2 className="text-2xl font-bold text-text-primary mb-4">I want to Learn</h2>
                            <p className="text-text-secondary mb-8 grow">
                                Access interactive lessons, practice with native speakers, and track your progress as you master English.
                            </p>

                            <div className="flex items-center text-brand-olive font-bold group-hover:gap-2 transition-all">
                                <span>Sign up as a Student</span>
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* Teacher Card */}
                    <Link
                        href="/signup/teacher"
                        className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-brand-gold overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={120} className="text-brand-gold" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-16 h-16 bg-brand-gold-light rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                <User size={32} />
                            </div>

                            <h2 className="text-2xl font-bold text-text-primary mb-4">I want to Teach</h2>
                            <p className="text-text-secondary mb-8 grow">
                                Share your expertise, set your own schedule, and reach students globally. Start your teaching journey today.
                            </p>

                            <div className="flex items-center text-brand-gold font-bold group-hover:gap-2 transition-all">
                                <span>Sign up as a Teacher</span>
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="text-center text-text-secondary">
                    <p>
                        Already have an account?{" "}
                        <Link href="/login" className="text-brand-gold font-bold hover:underline">
                            Log in here
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
