function Info({ label, children }: Readonly<{ label: string; children: React.ReactNode }>) {
  return (
    <div className="info-card group transition-all duration-300 hover:scale-105">
      <h2 className="text-xs font-semibold text-[#f9a8d4] uppercase tracking-wide mb-1">
        {label}
      </h2>
      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="font-sans max-w-lg w-full mx-auto p-4 sm:p-6 lg:p-8 grid gap-6 sm:gap-8 min-h-screen items-center justify-center">
      {/* Header with enhanced styling */}
      <header className="text-center space-y-4 animate-fade-up">
        <div className="relative inline-block animate-float">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-blue-200 rounded-full blur-lg opacity-75"></div>
          <h1 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent animate-soft-pulse">
            You&apos;re Invited! 💙
          </h1>
        </div>
        <p className="text-lg text-gray-600 font-medium">Dear, Syafiqah Batrisyia</p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] mx-auto rounded-full"></div>
      </header>

      {/* Date & Details Section */}
      <section className="grid gap-3 animate-fade-up" style={{animationDelay: '0.1s'}}>
        <Info label="📅 Date">27th & 28th Sept 2025</Info>
        <Info label="👗 Dress Code">Will be reveal</Info>
        <Info label="📍 Meeting Point">Coordinate will be here later…</Info>
      </section>

      {/* Tentative Schedule */}
      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.2s'}}>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
            💕 Our Sweet 1st Day Tentative 💕
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            { time: "1:00 PM", activity: "..." },
            { time: "3:00 PM", activity: "..." },
            { time: "5:00 PM", activity: "..." },
            { time: "7:00 PM", activity: "..." },
            { time: "7:30 PM", activity: "..." },
            { time: "8:00 PM", activity: "..." }
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3 group hover:translate-x-1 transition-transform">
              <span className="font-bold text-[#a5d8ff] min-w-[70px] text-sm">{item.time}</span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.activity}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.2s'}}>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
            💕 Our Sweet 2nd Day Tentative 💕
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            { time: "10:00 PM", activity: "..." },
            { time: "12:00 PM", activity: "..." },
            { time: "2:00 PM", activity: "..." },
            { time: "4:00 PM", activity: "..." },
            { time: "6:30 PM", activity: "..." },
            { time: "7:00 PM", activity: "..." }
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3 group hover:translate-x-1 transition-transform">
              <span className="font-bold text-[#a5d8ff] min-w-[70px] text-sm">{item.time}</span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.activity}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mystery Activity Card */}
      <section className="cute-card animate-fade-up hover-scale bg-gradient-to-br from-pink-50 to-blue-50" style={{animationDelay: '0.3s'}}>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-2xl">💌</span>
          <h3 className="text-lg font-bold text-gray-800">Mystery Activity</h3>
        </div>
        <p className="text-gray-700 italic">
          Once told once accepted, no turning back! Prepare for a delightful surprise that will make our day even more special. Can&apos;t wait to see your reaction!
        </p>
      </section>

      {/* Special Notes */}
      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.4s'}}>
        <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
          Special Notes 📝
        </h2>
        <ul className="grid gap-2">
          {[
            "Akan di reveal kemudian...",
          ].map((note, index) => (
            <li key={index} className="flex items-center space-x-3 group hover:bg-white/50 rounded-lg p-2 transition-all">
              <span className="w-2 h-2 bg-[#f9a8d4] rounded-full flex-shrink-0"></span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center animate-fade-up" style={{animationDelay: '0.5s'}}>
        <div className="bg-gradient-to-r from-pink-200/50 to-blue-200/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-lg italic text-gray-700 font-medium">
            &quot;Looking forward to spend this beautiful day with you 💖&quot;
          </p>
        </div>
      </footer>
    </main>
  );
}