const highlights = [
  {
    title: "บริการที่เข้าใจง่าย",
    description: "โครงสร้างเนื้อหาชัดเจนและเรียบง่ายเพื่อให้ผู้ใช้เข้าถึงข้อมูลได้ทันที",
  },
  {
    title: "สีสันทางการและน่าเชื่อถือ",
    description: "ใช้โทนสีน้ำเงิน-เขียวที่ให้ความรู้สึกโปร่งใสและเป็นทางการ",
  },
  {
    title: "ออกแบบตอบโจทย์ทุกอุปกรณ์",
    description: "รองรับการดูบนมือถือและเดสก์ท็อปด้วยความสวยงามที่คงเดิม",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f6db1] text-lg font-bold text-white shadow-lg shadow-sky-200"
            style={{ backgroundColor: "var(--brand-primary)" }}
          >
            P
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f6db1]" style={{ color: "var(--brand-primary)" }}>
              PWA
            </p>
            <p className="text-xs text-[#5a7289]" style={{ color: "var(--brand-muted)" }}>
              Digital Service
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#services" className="transition hover:text-[#0f6db1]" style={{ color: "var(--brand-primary)" }}>
            Services
          </a>
          <a href="#about" className="transition hover:text-[#0f6db1]" style={{ color: "var(--brand-primary)" }}>
            About
          </a>
          <a href="#contact" className="transition hover:text-[#0f6db1]" style={{ color: "var(--brand-primary)" }}>
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section className="grid items-center gap-8 rounded-4xl border border-sky-100 bg-white/90 p-8 shadow-[0_20px_60px_rgba(15,109,177,0.12)] backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-6">
            <span
              className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm font-semibold"
              style={{ color: "var(--brand-primary)" }}
            >
              Theme สีเดียวที่ดูน่าเชื่อถือ
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                ออกแบบเว็บให้ดูเรียบง่ายด้วยโทนสีน้ำเงินและเขียวอ่อน
              </h1>
              <p className="max-w-xl text-lg leading-8" style={{ color: "var(--brand-muted)" }}>
                เหมาะสำหรับบริการรัฐหรือองค์กรที่ต้องการความเป็นทางการ พร้อมความรู้สึกโปร่งใสและทันสมัย
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full px-5 py-3 text-sm font-semibold text-white transition"
                style={{ backgroundColor: "var(--brand-primary)" }}
              >
                ดูตัวอย่างบริการ
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition"
                style={{ borderColor: "var(--brand-accent)", color: "var(--brand-primary)" }}
              >
                ติดต่อเรา
              </a>
            </div>
          </div>

          <div
            className="rounded-3xl p-6 text-white shadow-xl"
            style={{ background: "linear-gradient(135deg, rgba(15,109,177,0.95), rgba(31,182,200,0.9))" }}
          >
            <div className="rounded-[20px] bg-white/15 p-4 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">
                Preview
              </p>
              <div className="mt-4 space-y-3">
                <div className="h-3 w-3/4 rounded-full bg-white/80" />
                <div className="h-3 w-2/3 rounded-full bg-sky-100/80" />
                <div className="h-3 w-1/2 rounded-full bg-sky-50/80" />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/20 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-100">Status</p>
                    <p className="mt-2 text-xl font-semibold">Online</p>
                  </div>
                  <div className="rounded-2xl bg-white/20 p-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-sky-100">Trust</p>
                    <p className="mt-2 text-xl font-semibold">Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
            >
              <div className="mb-4 h-10 w-10 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--brand-accent) 20%, white)" }} />
              <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-7" style={{ color: "var(--brand-muted)" }}>
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-sky-100 p-8 text-white shadow-lg"
          style={{ backgroundColor: "color-mix(in srgb, var(--brand-primary) 95%, white)" }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100">
                Ready to use
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                พัฒนาเว็บให้สอดคล้องกับแบรนด์ที่น่าเชื่อถือและเรียบง่าย
              </h2>
            </div>
            <a
              href="mailto:hello@example.com"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold transition hover:bg-sky-50"
              style={{ color: "var(--brand-primary)" }}
            >
              hello@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
