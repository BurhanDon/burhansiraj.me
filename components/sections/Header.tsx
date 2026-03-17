import { profile } from "@/data/profile";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border pb-8 mb-8">
      <h1 className="text-4xl font-bold text-primary mb-2">{profile.name}</h1>
      <p className="text-xl text-secondary mb-4">{profile.title}</p>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
        {/* Email */}
        <div className="flex items-start gap-2">
          <span className="text-secondary">Email:</span>
          <Link
            href={`mailto:${profile.email}`}
            className="text-accent hover:underline"
          >
            {profile.email}
          </Link>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-2">
          <span className="text-secondary">Phone:</span>
          <Link
            href="https://wa.me/923182677471?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20an%20opportunity..."
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {profile.phone}
          </Link>
        </div>

        {/* Location */}
        <div className="flex items-start gap-2">
          <span className="text-secondary">Location:</span>
          <span className="text-primary">{profile.location}</span>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
