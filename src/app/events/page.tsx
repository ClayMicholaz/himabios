import Layout from "@/components/Layout";
import { pastEvents } from "@/data/events";

function formatEventDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export default function AcaraPage() {
  const sortedEvents = [...pastEvents].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  return (
    <Layout
      title="Acara - BIOS"
      description="Informasi mengenai acara-acara yang diselenggarakan oleh HIMA BIOS Universitas Bunda Mulia"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="flex flex-col gap-4">
          <span className="font-mono text-sm tracking-widest text-accent">
            &gt; ARSIP BIOS
          </span>
          <h1 className="font-display text-4xl leading-tight font-extrabold tracking-tight text-heading sm:text-5xl">
            Acara &amp; kegiatan
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            Kilas balik kegiatan yang diselenggarakan oleh HIMA BIOS.
          </p>
        </header>

        <section
          aria-labelledby="past-events-heading"
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <h2
              id="past-events-heading"
              className="font-display text-2xl font-bold text-heading"
            >
              Kegiatan terdahulu
            </h2>
            <p className="text-muted">Dokumentasi kegiatan dan acara BIOS.</p>
          </div>

          {sortedEvents.length > 0 ? (
            <ul className="grid gap-4">
              {sortedEvents.map((event) => (
                <li key={event.id}>
                  <article className="flex flex-col gap-4 rounded-md border border-line bg-surface p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-8">
                    <time
                      dateTime={event.date}
                      className="w-fit shrink-0 rounded border border-line bg-bg px-4 py-3 font-mono text-sm text-accent"
                    >
                      {formatEventDate(event.date)}
                    </time>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-display text-xl font-bold text-heading">
                        {event.title}
                      </h3>
                      <p className="leading-relaxed">{event.description}</p>
                      {event.speaker && (
                        <p className="font-mono text-sm text-muted">
                          Pembicara: {event.speaker}
                        </p>
                      )}
                      {event.location && (
                        <p className="font-mono text-sm text-muted">
                          {event.location}
                        </p>
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-md border-2 border-dashed border-line bg-surface px-6 py-12 text-center sm:px-10">
              <p className="font-mono text-sm tracking-widest text-accent">
                ARSIP KEGIATAN
              </p>
              <h3 className="mt-3 font-display text-xl font-bold text-heading">
                Dokumentasi acara sedang disiapkan
              </h3>
              <p className="mx-auto mt-2 max-w-xl leading-relaxed text-muted">
                Riwayat kegiatan BIOS akan ditampilkan di sini setelah
                dokumentasinya ditambahkan.
              </p>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}
