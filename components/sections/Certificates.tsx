import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section className="mb-8">
      <h2 className="text-base md:text-lg font-semibold text-primary mb-3 pb-1 border-b border-border">
        Certificates
      </h2>
      <div className="space-y-3">
        {certificates.map((cert) => (
          <div key={cert.id} className="border-l-2 border-accent pl-4">
            <p className="font-semibold text-primary">{cert.name}</p>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <p className="text-sm text-secondary">{cert.issuer}</p>
              <span className="text-sm text-secondary">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
