import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bannerTowels from "@/assets/banner-towels.jpg";

export function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative my-8 overflow-hidden rounded-md"
    >
      <img src={bannerTowels} alt="Premium home textile sale" loading="lazy" className="h-56 w-full object-cover md:h-64" />
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-background/80 via-background/40 to-transparent dark:from-background/90">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <div className="text-center leading-tight">
              <p className="text-xs font-bold">75%</p>
              <p className="text-[9px]">OFF</p>
            </div>
          </div>
          <h3 className="text-2xl font-extrabold md:text-3xl">Jacquard Warp Knitted Microfiber Towel</h3>
          <p className="mt-1 text-sm text-muted-foreground">They key is to have every key, the key to open every door.</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-brand-foreground hover:bg-brand-hover transition">
            Shop Now <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
