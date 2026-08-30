import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { testimonials } from "@/content/testimonials";
export function TestimonialsSection() {
  return (
    <Section register="light" className="bg-brand-soft/40 pb-12 lg:pb-16">
      <Container>
        <Reveal>
          <Eyebrow>What our clients say</Eyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
            Who we&apos;ve <span className="text-brand-deep">worked</span> with
          </h2>
        </Reveal>
        <Reveal className="mt-16 overflow-hidden relative -mx-4 px-4 sm:mx-0 sm:px-0 pb-4">
          <div className="flex w-max animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="w-[320px] sm:w-[400px] shrink-0 mr-6 group relative border-brand-line bg-canvas-raised hover:border-brand flex h-[420px] flex-col rounded-3xl border p-8 transition-[border-color,box-shadow] duration-500 hover:shadow-[0_20px_50px_-15px_rgba(213,175,84,0.35)] overflow-hidden">
                {}
                <svg
                  className="absolute top-6 right-6 h-20 w-20 text-brand-soft/50 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-soft"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 text-brand mb-6 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 drop-shadow-sm">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  {}
                  <div className="flex-1 overflow-y-auto pr-3 mr-[-12px] pb-4 scrollbar-thin scrollbar-thumb-brand/30 hover:scrollbar-thumb-brand scrollbar-track-transparent">
                    <p className="text-canvas-fg text-[17px] italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 border-t border-brand-line/50 pt-6 shrink-0">
                    {testimonial.photoUrl ? (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-soft ring-1 ring-brand-line shadow-sm">
                        <img
                          src={testimonial.photoUrl}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-soft to-brand text-brand-deep font-bold tracking-widest text-lg border-2 border-canvas-raised shadow-sm">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-canvas-fg font-[family-name:var(--font-display)] font-bold text-lg tracking-tight">
                        {testimonial.name}
                      </p>
                      <p className="text-canvas-fg-dim text-sm mt-0.5">
                        {testimonial.designation}
                      </p>
                      <p className="text-brand-deep text-sm font-semibold mt-0.5 leading-tight">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
