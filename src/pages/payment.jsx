import { useState } from 'react'
import qris from '../assets/qrisjbk.jpeg'

const inputClass =
  'w-full border border-neutral-300 rounded-xl px-4 py-3 shadow focus:outline-none focus:border-black focus:ring-2 focus:ring-black/10'

function Required() {
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 text-base rounded-full bg-neutral-200 align-middle ml-1">
      *
    </span>
  )
}

function Payment({ onSubmit }) {
  const [form, setForm] = useState({
    nama: '',
    barang: '',
    metode: '',
    bukti: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm({ ...form, [name]: files ? files[0] : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: kirim data `form` ke backend / Google Sheets / dll di sini
    console.log(form)
    onSubmit()
  }

  return (
    <div className="bg-rose-50 text-slate-900 font-sans leading-normal min-h-screen">
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-pink-200">
        <nav className="max-w-xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold text-pink-500 text-lg">
            🧸 Jajan Bareng Kiya
          </a>
          <ul className="flex gap-5 text-sm font-semibold text-neutral-600">
            <li><a href="#metode" className="hover:text-pink-500 transition">Metode</a></li>
            <li><a href="#form" className="hover:text-pink-500 transition">Form</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-xl mx-auto px-5 pt-12 pb-10">
        <h1 className="text-4xl font-extrabold leading-tight mb-10">
          FORM PAYMENT<br />JAJAN BARENG KIYA
        </h1>

        <section id="metode" className="mb-12">
  <h2 className="text-lg font-bold mb-5">METODE PEMBAYARAN (Pilih salah satu)</h2>

  <h3 className="font-bold mb-2">1. QRIS</h3>
  <img src={qris} alt="QRIS" className="w-full rounded-xl mb-2" />
  <p className="text-center text-sm text-pink-400 mb-6">jangan lupa send proof, ya!</p>

  <h3 className="font-bold mb-1">2. ShopeePay</h3>
  <p className="mb-5">0813-7070-4684 a/n AZKIYA RAIHANA</p>

  <h3 className="font-bold mb-1">3. BCA</h3>
  <p>0710477906 a/n AZKIYA RAIHANA</p>
</section>

        <form id="form" onSubmit={handleSubmit} className="space-y-8">
          <p className="text-lg font-bold">❗ JAM DAN TANGGAL JANGAN DITUTUP ❗</p>

          <div>
            <label htmlFor="nama" className="block text-2xl font-bold mb-2">
              Nama + No. belakang <Required />
            </label>
            <p className="text-neutral-500 mb-2">Cth : Kiya 4684</p>
            <input
              id="nama" name="nama" type="text" required
              value={form.nama} onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="barang" className="block text-2xl font-bold mb-2">
              Nama barang <Required />
            </label>
            <input
              id="barang" name="barang" type="text" required
              value={form.barang} onChange={handleChange}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="pilih-metode" className="block text-2xl font-bold mb-2">
              Payment kemana <Required />
            </label>
            <select
              id="pilih-metode" name="metode" required
              value={form.metode} onChange={handleChange}
              className={inputClass + ' bg-white'}
            >
              <option value="" disabled></option>
              <option>QRIS</option>
              <option>ShopeePay</option>
              <option>BCA</option>
            </select>
          </div>

          <div>
            <label htmlFor="bukti" className="block text-2xl font-bold mb-2">
              PROOF PAYMENT <Required />
            </label>
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-8 text-center text-neutral-500">
              <p className="font-semibold mb-4">⬆️ Pilih file bukti pembayaran</p>
              <input
                id="bukti" name="bukti" type="file" accept="image/*,.pdf" required
                onChange={handleChange}
                className="max-w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-200 file:px-4 file:py-2 file:font-semibold hover:file:bg-neutral-300"
              />
              <small className="block mt-4">Maksimal 10 MB</small>
            </div>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-bold rounded-xl px-6 py-3 hover:bg-neutral-700 active:scale-95 transition"
          >
            Submit →
          </button>
        </form>
      </main>

      <footer className="border-t border-pink-200 bg-white/80 mt-10">
        <div className="max-w-xl mx-auto px-5 py-8 text-center text-sm text-neutral-500 space-y-2">
          <p className="text-pink-400 font-bold">thankies &lt;3 🧸</p>
          <p>Betah betah jajan disini yaa &lt;3</p>
          <p>&copy; 2026 Jajan Bareng Kiya • Azkiya Raihana 26110300008</p>
        </div>
      </footer>
    </div>
  )
}

export default Payment
