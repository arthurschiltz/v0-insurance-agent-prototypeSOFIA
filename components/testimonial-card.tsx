'use client';

interface TestimonialCardProps {
  name: string;
  coverage: string;
  quote: string;
  initials: string;
}

export function TestimonialCard({
  name,
  coverage,
  quote,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="animate-fadeIn rounded-lg bg-card shadow-card p-6 flex flex-col gap-4">
      {/* Avatar */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">{coverage}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-800 italic leading-relaxed">"{quote}"</p>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary text-sm">
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
