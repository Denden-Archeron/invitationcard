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

// Map Component with real Google Maps embed
function MapSection() {
  return (
    <section
      className="cute-card animate-fade-up hover-scale"
      style={{ animationDelay: "0.15s" }}
    >
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
          📍 Meeting Point
        </h2>
      </div>

      {/* Interactive Google Map – no API key needed */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.771557364812!2d100.3341704759235!3d5.417835135469563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3920a37d3f7%3A0x4e0e3eb621f22c8a!2sMaca%20Hotel%20By%20Sky%20Hive!5e0!3m2!1sen!2smy!4v1695648000000!5m2!1sen!2smy"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Location details under the map */}
      <div className="mt-4 space-y-3">
        <div className="bg-white/50 rounded-lg p-3">
          <h3 className="font-bold text-[#f9a8d4] mb-1">
            Maca Hotel By Sky Hive [Booked]
          </h3>
          <p className="text-gray-700">
            12 Jalan Anson, George Town, 10400 Penang, Malaysia
          </p>
        </div>

        <div className="bg-white/50 rounded-lg p-3">
          <h3 className="font-bold text-[#f9a8d4] mb-1">📝 How to find:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Look for the main entrance sign &quot;Maca Hotel By Sky Hive&quot;.</li>
            <li>• I&apos;ll be waiting near the lobby reception.</li>
            <li>• I will share live location on the day itself.</li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-[#f9a8d4]/20 to-[#a5d8ff]/20 rounded-lg p-3 border-l-4 border-[#f9a8d4]">
          <p className="text-sm text-gray-700 italic">
            💡 Don&apos;t worry! I&apos;ll send the live pin again on the day—just tap the
            map above to open Google Maps for directions.
          </p>
        </div>
      </div>
    </section>
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
      <section
        className="grid gap-3 animate-fade-up"
        style={{ animationDelay: "0.1s" }}
      >
        <Info label="📅 Date">26th, 27th & 28th Sept 2025</Info>

        {/* Dress Code Table */}
        <div className="info-card group transition-all duration-300 hover:scale-105">
          <h2 className="text-xs font-semibold text-[#f9a8d4] uppercase tracking-wide mb-2">
            👗 Dress Code
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-gray-700">
              <thead className="bg-gradient-to-r from-[#f9a8d4]/30 to-[#a5d8ff]/30">
                <tr>
                  <th className="px-3 py-2 border-b text-left font-semibold">Time</th>
                  <th className="px-3 py-2 border-b text-left font-semibold">Top</th>
                  <th className="px-3 py-2 border-b text-left font-semibold">Bottom</th>
                  <th className="px-3 py-2 border-b text-left font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {/* Day Outfits */}
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 border-b font-medium">Day</td>
                  <td className="px-3 py-2 border-b">Brown / White / Black</td>
                  <td className="px-3 py-2 border-b">Khaki / Blue Jeans</td>
                  <td className="px-3 py-2 border-b text-gray-500">
                    Two combos: (Brown main) or (Black top + Blue jeans)
                  </td>
                </tr>
                {/* Night Outfits */}
                <tr className="hover:bg-gray-50">
                  <td className="px-3 py-2 border-b font-medium">Night</td>
                  <td className="px-3 py-2 border-b">White / Navy Blue</td>
                  <td className="px-3 py-2 border-b">Black</td>
                  <td className="px-3 py-2 border-b text-gray-500">
                    Either White top or Navy Blue top
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Info label="⏰ Meeting Time">Friday 26th of September 2025</Info>
      </section>


      {/* Map Section */}
      <MapSection />

      {/* Tentative Schedule */}
      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.2s'}}>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
            💕 Our Sweet 1st Day Tentative 💕
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            { time: "6:30 PM", activity: "Balik work" },
            { time: "10:00 PM", activity: "Bergerak dari Kepala Batas to Meeting Point" },
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3 group hover:translate-x-1 transition-transform">
              <span className="font-bold text-[#a5d8ff] min-w-[70px] text-sm">{item.time}</span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.activity}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.25s'}}>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
            💕 Our Sweet 2nd Day Tentative 💕
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            { time: "10:00 PM", activity: "Penang Hill (Bukit Bendera)" },
            { time: "1:00 PM", activity: "Lunch at ..." },
            { time: "4:00 PM", activity: "Plushy Workshop - OLO STUDIO [Booked]" },
            { time: "6:00 PM", activity: "Going Back to MACA for rest & prayer" },
            { time: "8:00 PM", activity: "Dinner" },
            { time: "9:00 PM", activity: "Night Drive and Free Activity" },
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-3 group hover:translate-x-1 transition-transform">
              <span className="font-bold text-[#a5d8ff] min-w-[70px] text-sm">{item.time}</span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.activity}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.25s'}}>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
            💕 Our Sweet 3rd Day Tentative 💕
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            { time: "12:00 PM", activity: "Checkout from Maca " },
            { time: "1:00 PM", activity: "Makan Lunch" },
            { time: "3:00 PM", activity: "Street Art" },
            { time: "7:00 PM", activity: "Prepare balik ke destinasi masing-masing" }
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
      <section className="cute-card animate-fade-up hover-scale" style={{animationDelay: '0.35s'}}>
        <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-[#f9a8d4] to-[#a5d8ff] bg-clip-text text-transparent">
          Special Notes 📝
        </h2>
        <ul className="grid gap-2">
          {[
            "Tido awal, supaya awak bangun dengan bersemangat!",
            "Jangan lupa bawa power bank, kita akan banyak berjalan.",
            "Bawa baju yang cukup untuk 2 hari.",
            "Sediakan payung, cuaca tak menentu.",
            "Bawa sikit makanan ringan, kalau lapar tengah hari.",
            "Kamera atau telefon dengan bateri penuh, nak ambil gambar untuk diary.",
            "Pakai kasut yang selesa, kita akan banyak berjalan kaki.",
            "Jangan lupa bawa topi atau cermin mata hitam, untuk lindungi dari matahari.",
            "Senyum selalu, kita nak enjoy hari kita!"
          ].map((note, index) => (
            <li key={index} className="flex items-center space-x-3 group hover:bg-white/50 rounded-lg p-2 transition-all">
              <span className="w-2 h-2 bg-[#f9a8d4] rounded-full flex-shrink-0"></span>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center animate-fade-up" style={{animationDelay: '0.4s'}}>
        <div className="bg-gradient-to-r from-pink-200/50 to-blue-200/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-lg italic text-gray-700 font-medium">
            &quot;Looking forward to spend this beautiful day with you 💖&quot;
          </p>
        </div>
      </footer>
    </main>
  );
}