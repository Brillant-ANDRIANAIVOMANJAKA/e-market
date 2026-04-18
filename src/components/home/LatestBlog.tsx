import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  { id: 1, image: blog1, title: "Lorem Khaled Ipsum is a Major Key to Success", date: "Feb 28, 2026", comments: 18, excerpt: "Discover how a curated decor approach transforms any room into a personal retreat." },
  { id: 2, image: blog2, title: "Designing the Perfect Workspace at Home", date: "Mar 12, 2026", comments: 9, excerpt: "Productivity meets aesthetics. Our top tips to design a workspace you actually love." },
  { id: 3, image: blog3, title: "5 Scandinavian Design Principles to Live By", date: "Apr 04, 2026", comments: 24, excerpt: "Light, function, simplicity — the timeless rules behind Scandinavian interiors." },
];

export function LatestBlog() {
  return (
    <section className="mt-12">
      <div className="mb-4 border-b border-border">
        <span className="section-title">Latest Blog</span>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <motion.img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3" /> {p.comments} Comments</span>
              </div>
              <h3 className="mt-2 line-clamp-2 text-base font-bold leading-snug group-hover:text-brand transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-xs text-muted-foreground">{p.excerpt}</p>
              <button className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-brand">
                Read more <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
