import { Star } from "lucide-react";

const items = [
  { id: "lp1", name: "Notebook Black Spire V Nitro VN7-591G", price: 6000.86, oldPrice: 8400.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=200&q=70" },
  { id: "lp2", name: "The FEED Mini is The Globally Conscious", price: 6000.86, oldPrice: 8400.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=70" },
  { id: "lp3", name: "Smartwatch 2.0 LTE Wifi Waterproof", price: 6000.86, oldPrice: 8400.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=200&q=70" },
  { id: "lp4", name: "OPPO 89S Teaser Poster", price: 6000.86, oldPrice: 8400.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=200&q=70" },
];

export function LatestProducts() {
  return (
    <div className="mt-4 rounded-md border border-border bg-card overflow-hidden">
      <div className="bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground">
        Latest Products
      </div>
      <ul>
        {items.map((p) => (
          <li key={p.id} className="flex items-start gap-3 border-b border-border p-3 last:border-0 hover:bg-secondary transition-colors">
            <img src={p.image} alt={p.name} loading="lazy" className="h-14 w-14 rounded object-cover bg-muted" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-2.5 w-2.5 fill-current" />)}
              </div>
              <p className="mt-0.5 line-clamp-2 text-xs leading-snug">{p.name}</p>
              <p className="mt-0.5">
                <span className="text-xs text-muted-foreground line-through mr-1">Ar{p.oldPrice}</span>
                <span className="text-xs font-bold text-brand">Ar{p.price}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
