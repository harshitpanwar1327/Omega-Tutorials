import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[hsl(215_85%_45%)]/10 text-[hsl(215_85%_45%)] mb-4">
        {badge}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-[hsl(215_30%_15%)]">{title}</h2>
    {subtitle && <p className="mt-3 text-[hsl(215_15%_50%)] max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;