import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import collageStudio from "@/assets/collage-studio.jpg";
import collageDecor from "@/assets/collage-decor.jpg";
import collageTowels from "@/assets/collage-towels.jpg";

export function CollageBanner() {
  return (
    <section className="mt-10 grid gap-4 md:grid-cols-4 md:grid-rows-2 md:h-[360px]">
      {/* Top-left small */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -3 }}
        className="relative overflow-hidden rounded-md md:row-span-1"
      >
        <img src={collageDecor} alt="Target Home decor" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <div className="text-center text-white">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Target Home</p>
            <p className="text-lg font-extrabold">Decor Beautiful</p>
          </div>
        </div>
      </motion.div>

      {/* Center large */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="relative overflow-hidden rounded-md md:col-span-2 md:row-span-2"
      >
        <img src={collageStudio} alt="Studio.w exclusive collection" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-primary/80 via-primary/30 to-transparent text-center text-white">
          <p className="text-3xl font-extrabold tracking-tight md:text-5xl">Studio.w</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.3em] opacity-90">Exclusive to Woolworths</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-xs font-bold uppercase text-brand-foreground hover:bg-brand-hover transition">
            Shop Now <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </motion.div>

      {/* Top-right */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -3 }}
        className="relative overflow-hidden rounded-md md:row-span-1"
      >
        <img src={collageTowels} alt="Towels Decor Beautiful" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/25">
          <div className="text-center text-white">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80">Towels</p>
            <p className="text-lg font-extrabold">Decor Beautiful</p>
          </div>
        </div>
      </motion.div>

      {/* Bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -3 }}
        className="relative overflow-hidden rounded-md bg-gradient-to-br from-accent to-secondary p-5"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-brand">New Arrival</p>
        <p className="mt-1 text-xl font-extrabold leading-tight">Living Room Collection</p>
        <button className="mt-3 inline-block text-xs font-bold uppercase border-b border-brand text-brand">Discover →</button>
      </motion.div>

      {/* Bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        whileHover={{ y: -3 }}
        className="relative overflow-hidden rounded-md bg-primary p-5 text-primary-foreground"
      >
        <p className="text-xs font-bold uppercase tracking-widest opacity-70">Best Seller</p>
        <p className="mt-1 text-xl font-extrabold leading-tight">Premium Bedroom Set</p>
        <p className="mt-2 text-2xl font-extrabold text-brand">−40%</p>
        <button className="mt-2 inline-block text-xs font-bold uppercase border-b border-brand text-brand">Shop now →</button>
      </motion.div>
    </section>
  );
}
