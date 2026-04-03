'use client';

interface PricingCardProps {
  tier: string;
  name: string;
  features: string[];
  isHighlighted?: boolean;
  onGetQuote?: () => void;
}

export function PricingCard({
  tier,
  name,
  features,
  isHighlighted = false,
  onGetQuote,
}: PricingCardProps) {
  return (
    <div
      className={`animate-fadeIn rounded-lg bg-card p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-hover ${
        isHighlighted
          ? 'border-2 border-primary shadow-hover ring-2 ring-primary ring-opacity-20'
          : 'border border-gray-200 shadow-card hover:shadow-hover'
      }`}
    >
      {/* Badge */}
      {isHighlighted && (
        <div className="inline-block w-fit bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      {/* Tier Name */}
      <div>
        <p className="text-gray-600 text-sm font-medium">{tier}</p>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-gray-700">
            <span className="text-primary font-bold mt-1">✓</span>
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={onGetQuote}
        className="w-full mt-4 bg-primary hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded-sm transition-colors duration-200"
      >
        Get Your Quote
      </button>
    </div>
  );
}
