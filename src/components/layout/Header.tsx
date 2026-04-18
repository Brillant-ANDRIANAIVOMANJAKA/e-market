import { Search, ShoppingCart, Heart, User, Phone, Globe, Truck, Menu, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { useSearch } from "@/context/SearchContext";
import { motion } from "framer-motion";
import { useState } from "react";

export function Header({ onToggleSidebar }: { onToggleSidebar?: () => void }) {
  const { count, subtotal } = useCart();
  const { theme, toggle } = useTheme();
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();
  const [local, setLocal] = useState(query);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(local);
    navigate("/");
  };

  return (
    <header className="w-full">
      {/* Top promo bar */}
      <div className="bg-header-top text-white/80 text-xs">
        <div className="container-x flex h-9 items-center justify-between">
          <p className="hidden md:block">
            Welcome to <span className="font-semibold text-white">eMarket</span> · Wrap new offers, free shipping over Ar4900 — Code:{" "}
            <span className="font-semibold text-brand">Brillant2026</span>
          </p>
          <div className="flex items-center gap-4">
            <button onClick={toggle} aria-label="Toggle theme" className="hover:text-white transition">
              {theme === "light" ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-header-bar text-white">
        <div className="container-x flex h-16 items-center gap-6">
          <button onClick={onToggleSidebar} className="lg:hidden p-2 -ml-2"><Menu className="h-5 w-5" /></button>

          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="h-9 w-9 rounded-full overflow-hidden">
              <img
                src="/e-market.png"
                alt="profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-lg tracking-tight">e-market</p>
              <p className="text-[9px] uppercase tracking-widest opacity-60">all in one store</p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden lg:flex items-center">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Features</Link>
            <Link to="/" className="nav-link">Best-selling</Link>
            <Link to="/" className="nav-link">Deal</Link>
            <Link to="/" className="nav-link">Shop</Link>
            <Link to="/" className="nav-link">Blog</Link>
          </nav>

          <div className="ml-auto flex items-center gap-3 text-xs">
            <Link to="/" className="hidden md:flex items-center gap-1.5 hover:text-brand transition">
              <User className="h-4 w-4" /> Login / Register
            </Link>
            <span className="hidden md:inline opacity-30">|</span>
            <Link to="/" className="hidden md:flex items-center gap-1.5 hover:text-brand transition">
              <Truck className="h-4 w-4" /> Track Order
            </Link>
            <span className="hidden md:inline opacity-30">|</span>
            <a href="tel:+11234567890" className="hidden md:flex items-center gap-1.5 opacity-80">
              <Phone className="h-4 w-4" /> +261 34 66 108 39
            </a>
          </div>
        </div>

        {/* Search row */}
        <div className="container-x flex items-center gap-3 pb-4">
          <button className="hidden md:flex items-center gap-2 h-11 rounded bg-brand px-4 text-sm font-bold text-brand-foreground hover:bg-brand-hover transition">
            <Menu className="h-4 w-4" /> All Departments
          </button>

          <form onSubmit={submitSearch} className="flex-1 flex h-11 overflow-hidden rounded bg-white text-foreground">
            <select className="hidden md:block h-full bg-secondary px-3 text-xs font-medium border-r border-border outline-none">
              <option>All Categories</option>
            </select>
            <input
              value={local}
              onChange={(e) => setLocal(e.target.value)}
              placeholder="Enter your keyword..."
              className="flex-1 px-4 text-sm outline-none bg-transparent"
            />
            <button type="submit" className="h-full w-12 bg-brand text-brand-foreground hover:bg-brand-hover transition flex items-center justify-center">
              <Search className="h-4 w-4" />
            </button>
          </form>

          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Wishlist" className="relative p-2 hover:text-brand transition">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand text-[10px] flex items-center justify-center font-bold">8</span>
            </button>
            <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-2">
              <Link to="/cart" className="relative flex items-center gap-2 rounded bg-white/10 px-3 py-2 hover:bg-white/15 transition">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-brand text-[10px] flex items-center justify-center font-bold">{count}</span>
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[10px] opacity-70">MY CART</p>
                  <p className="text-sm font-bold">Ar{subtotal.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          </div>

          <Link to="/cart" className="md:hidden relative p-2">
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-brand text-[10px] flex items-center justify-center font-bold">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
