export default function CtaSection() {

    return (
        <section className="py-10 md:py-16 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Path in Media Buying</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">No experience? Take our course. Have experience? Join our team of professionals!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="group relative overflow-hidden rounded-2xl bg-black/50 hover:bg-black/70 p-8 border border-white/50 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">New to Media Buying?</h3>
                            <p className="text-gray-300 mb-6 text-center leading-relaxed">Start from scratch and become a professional. Our course will help you master all the nuances of media buying</p>
                            <div className="text-center">
                                <a href="/en/course-aff" className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25">
                                    Start Learning
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-2xl bg-black/50 hover:bg-black/70 p-8 border border-white/50 transition-all duration-500 hover:transform hover:scale-105">
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 text-center">Already Have Experience?</h3>
                            <p className="text-gray-300 mb-6 text-center leading-relaxed">Join our team of experts. We're looking for experienced media buyers to work on top-tier projects</p>
                            <div className="text-center">
                                <a href="/en/join-the-team/media-buyer" className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-500/25">
                                    Apply Now
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}