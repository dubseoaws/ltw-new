import Button from "@/components/button";

export type ClinicMapClinic = {
  label: string;
  lines: readonly string[];
  note?: string;
  mapUrl: string;
  mapEmbed: string;
};

export default function ClinicMap({
  clinic,
  className = "",
  aspect = "aspect-4/3",
  showAddress = true,
}: {
  clinic: ClinicMapClinic;
  className?: string;
  aspect?: string;
  showAddress?: boolean;
}) {
  const address = clinic.lines.join(", ");

  return (
    <div
      className={`flex min-w-0 w-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white ${className}`}
    >
      <div className={`relative min-h-60 w-full flex-1 ${aspect}`}>
        <iframe
          src={clinic.mapEmbed}
          title={`Map showing ${clinic.label} clinic at ${address}`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showAddress ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 p-4">
          <div>
            <p className="text-sm font-bold text-slate-900">{clinic.label}</p>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-600">{address}</p>
            {clinic.note ? (
              <p className="mt-0.5 text-xs font-semibold text-emerald-800">{clinic.note}</p>
            ) : null}
          </div>
          <Button href={clinic.mapUrl} tone="outline" size="sm">
            Get Directions →
          </Button>
        </div>
      ) : null}
    </div>
  );
}
