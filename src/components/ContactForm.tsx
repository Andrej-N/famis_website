"use client";

export default function ContactForm() {
  return (
    <div className="border border-white/8 rounded-[var(--radius-lg)] p-8 lg:p-10">
      <h3 className="text-white text-lg font-semibold uppercase tracking-wide mb-8">
        Pošaljite poruku
      </h3>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-white/40 text-xs uppercase tracking-wider mb-2"
          >
            Ime i prezime
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-md)] px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
            placeholder="Vaše ime"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-white/40 text-xs uppercase tracking-wider mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-md)] px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors"
            placeholder="vas@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-white/40 text-xs uppercase tracking-wider mb-2"
          >
            Poruka
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-[var(--radius-md)] px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/25 transition-colors resize-none"
            placeholder="Vaša poruka..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-4 text-sm font-medium uppercase tracking-[0.15em] rounded-[var(--radius-md)] hover:bg-white/90 transition-colors cursor-pointer"
        >
          Pošaljite
        </button>
      </form>
    </div>
  );
}
