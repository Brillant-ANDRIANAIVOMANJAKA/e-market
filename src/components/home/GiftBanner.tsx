import { Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function GiftBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-6 flex flex-col items-center justify-between gap-3 rounded-md border border-border bg-secondary p-4 sm:flex-row"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-brand-foreground">
          <Gift className="h-5 w-5" />
        </div>
        <p className="text-sm">
          <span className="font-bold">Gift Special</span> — Wrap new offers / gift every single day on Weekends — New Coupon code:{" "}
          <span className="font-bold text-brand">Brillant2026</span>
        </p>
      </div>
      <button className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-bold uppercase text-brand-foreground hover:bg-brand-hover transition">
        Get Coupon <ArrowRight className="h-3 w-3" />
      </button>
    </motion.div>
  );
}
