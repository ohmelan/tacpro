import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { services } from "@/content/services";
export function ServicesGrid() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.slug} className={index === 0 ? "sm:col-span-2" : ""}>
          <Link
            href={`/services/${service.slug}`}
            className={index === 0 ? "group block h-full" : "block h-full"}
          >
            {index === 0 ? (
              <div className="bg-ink text-ink-fg border-brand-line/25 hover:border-brand flex h-full flex-col justify-between rounded-3xl border p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-12px_rgba(213,175,84,0.4)]">
                <div>
                  <span className="text-brand font-[family-name:var(--font-display)] text-3xl font-bold">
                    {service.number}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-ink-fg-secondary mt-3 max-w-md text-sm">{service.summary}</p>
                </div>
                <span className="text-brand mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                  Learn more
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </div>
            ) : (
              <Card className="flex h-full flex-col justify-between p-8">
                <div>
                  <span className="text-brand-deep font-[family-name:var(--font-display)] text-2xl font-bold">
                    {service.number}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-canvas-fg-secondary mt-2 text-sm">{service.summary}</p>
                </div>
                <span className="text-brand-deep mt-6 inline-flex items-center gap-1 text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Card>
            )}
          </Link>
        </Reveal>
      ))}
    </RevealGroup>
  );
}
