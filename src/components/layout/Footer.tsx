import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-header-bar text-white/80">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">Subscribe to our newsletter</h3>
            <p className="text-sm opacity-70">Get the latest deals & updates straight to your inbox.</p>
          </div>
          <form className="flex w-full max-w-md overflow-hidden rounded">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-white/50"
            />
            <button className="bg-brand px-6 text-sm font-bold uppercase hover:bg-brand-hover transition">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container-x grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-9 w-9 rounded-full overflow-hidden">
              <img
                src="/e-market.png"
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-xl font-extrabold text-white">e-market</p>
          </div>
          <p className="text-sm opacity-70 max-w-sm">
            Your modern marketplace for furniture, fashion, electronics and more — daily deals, premium quality, fast shipping worldwide.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand" /> 123 Analakely, Antananarivo</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /> +261 34 66 108 39</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /> support@emarket.com</li>
          </ul>
        </div>

        {[
          { title: "Information", links: ["About Us", "Contact", "Careers", "Affiliate", "Stores"] },
          { title: "Customer Service", links: ["Help Center", "Returns", "Shipping", "Order Tracking", "Privacy"] },
          { title: "My Account", links: ["Sign In", "Wishlist", "Cart", "Track Order", "Help"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l}><a href="#" className="opacity-70 hover:opacity-100 hover:text-brand transition">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs opacity-70 md:flex-row">
          <p>© {new Date().getFullYear()} eMarket by Brillant — All rights reserved.</p>
          <div className="flex items-center gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition">
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
