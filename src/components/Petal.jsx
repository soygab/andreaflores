import { motion } from 'framer-motion';
export const Petals = ({ className = '' }) => (
  <svg aria-hidden="true" viewBox="0 0 200 200" className={className}>
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <motion.ellipse
        key={a}
        cx="100"
        cy="55"
        rx="22"
        ry="48"
        fill="currentColor"
        opacity=".35"
        transform={`rotate(${a} 100 100)`}
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, delay: i * 0.6 }}
      />
    ))}
    <circle cx="100" cy="100" r="10" fill="currentColor" opacity=".6" />
  </svg>
);
export const Img = ({ src, alt, className = '' }) =>
  src ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  ) : (
    <div
      role="img"
      aria-label={alt}
      className={`grid h-full w-full place-items-center bg-gradient-to-br from-rosa/15 to-vinho/20 text-vinho ${className}`}
    >
      <Petals className="w-1/3 max-w-24" />
    </div>
  );
