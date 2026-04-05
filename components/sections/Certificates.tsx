import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section className="mb-8">
      <h2 className="text-base md:text-lg font-semibold text-primary mb-3">
        Certificates
      </h2>
      <div className="space-y-2">
        {certificates.map((cert) => (
          <p key={cert.id} className="text-sm text-primary leading-6">
            • {cert.name}
          </p>
        ))}
      </div>
    </section>
  );
}
