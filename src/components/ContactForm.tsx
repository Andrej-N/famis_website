"use client";

export default function ContactForm() {
  return (
    <div
      className="rounded-[var(--radius-lg)] p-8 lg:p-10"
      style={{ border: "1px solid var(--theme-border)" }}
    >
      <h3
        className="text-lg font-semibold uppercase tracking-wide mb-8"
        style={{ color: "var(--theme-fg)" }}
      >
        Pošaljite poruku
      </h3>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--theme-fg-subtle)" }}
          >
            Ime i prezime
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-[var(--radius-md)] px-4 py-3 focus:outline-none transition-colors"
            style={{
              backgroundColor: "var(--theme-input-bg)",
              border: "1px solid var(--theme-input-border)",
              color: "var(--theme-fg)",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-focus)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-border)")
            }
            placeholder="Vaše ime"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--theme-fg-subtle)" }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-[var(--radius-md)] px-4 py-3 focus:outline-none transition-colors"
            style={{
              backgroundColor: "var(--theme-input-bg)",
              border: "1px solid var(--theme-input-border)",
              color: "var(--theme-fg)",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-focus)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-border)")
            }
            placeholder="vas@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--theme-fg-subtle)" }}
          >
            Poruka
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full rounded-[var(--radius-md)] px-4 py-3 focus:outline-none transition-colors resize-none"
            style={{
              backgroundColor: "var(--theme-input-bg)",
              border: "1px solid var(--theme-input-border)",
              color: "var(--theme-fg)",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-focus)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "var(--theme-input-border)")
            }
            placeholder="Vaša poruka..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 text-sm font-medium uppercase tracking-[0.15em] rounded-[var(--radius-md)] transition-colors cursor-pointer"
          style={{
            backgroundColor: "var(--theme-btn-bg)",
            color: "var(--theme-btn-fg)",
          }}
        >
          Pošaljite
        </button>
      </form>
    </div>
  );
}
