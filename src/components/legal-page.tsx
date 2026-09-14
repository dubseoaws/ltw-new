import Link from "next/link";
import { Section } from "@/components/ui";
import type { LegalBlock, LegalDoc } from "@/lib/legal";

function Block({ block }: { block: LegalBlock }) {
  if (block.type === "h3") {
    return <h3 className="mt-6 text-base font-bold text-slate-900">{block.text}</h3>;
  }

  if (block.type === "ul") {
    return (
      <ul className="mt-3 grid gap-2">
        {block.items.map((item) => {
          const key = typeof item === "string" ? item : item.label;
          return (
            <li
              key={key}
              className="relative pl-5 text-sm leading-relaxed text-slate-600 before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-600"
            >
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  <strong className="font-semibold text-slate-900">{item.label}</strong>{" "}
                  {item.text}
                </>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return <p className="mt-3 text-sm leading-relaxed text-slate-600">{block.text}</p>;
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="gradient-hero border-b border-slate-200/80 py-12 lg:py-16">
        <div className="container-x text-center">
          <h1 className="font-display text-3xl font-bold tracking-normal text-slate-900 sm:text-4xl">
            {doc.h1}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">{doc.lead}</p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-600">{doc.intro}</p>

          {doc.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-xl font-bold tracking-tight text-slate-900">
                {section.heading}
              </h2>
              {section.blocks.map((block, i) => (
                <Block key={`${section.heading}-${i}`} block={block} />
              ))}
            </section>
          ))}

          <div className="mt-12 border-t border-slate-200 pt-6">
            <Link
              href={doc.footerLink.href}
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              {doc.footerLink.label}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
