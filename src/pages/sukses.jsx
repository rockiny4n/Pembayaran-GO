function Sukses({ onBack }) {
  return (
    <div className="bg-white text-neutral-800 font-sans leading-normal min-h-screen">
      <main className="max-w-xl mx-auto px-5 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 flex items-center justify-center text-5xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-extrabold leading-tight mb-3">SUDAH SUBMIT!</h1>
        <p className="text-lg text-neutral-600 mb-2">Bukti pembayaran kamu sudah terkirim.</p>
        <p className="text-neutral-500 mb-10">Tunggu konfirmasi ya, thankies 💗</p>

        <button
          type="button"
          onClick={onBack}
          className="bg-black text-white font-bold rounded-xl px-6 py-3 hover:bg-neutral-700 active:scale-95 transition"
        >
          ← Isi form lagi
        </button>
      </main>
    </div>
  )
}

export default Sukses
