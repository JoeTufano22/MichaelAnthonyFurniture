export const CATEGORIES = [
  { slug: "living-room",  label: "Living Room" },
  { slug: "dining-room",  label: "Dining Room" },
  { slug: "bedroom",      label: "Bedroom" },
  { slug: "entertainment",label: "Entertainment" },
  { slug: "home-office",  label: "Home Office" },
  { slug: "mattresses",   label: "Mattresses" },
  { slug: "accessories",  label: "Accessories" },
];

export const BRANDS = [
  { slug: "american-drew",      label: "American Drew",       description: "Traditional and transitional styles with superior craftsmanship." },
  { slug: "amisco",             label: "Amisco",              description: "Modern metal and upholstered furniture for every room." },
  { slug: "art-furniture",      label: "ART Furniture",       description: "Artisan-inspired designs with a global aesthetic." },
  { slug: "ashley",             label: "Ashley",              description: "Value-driven furniture collections for the whole home." },
  { slug: "bassett",            label: "Bassett Mirror Company", description: "Curated mirrors and occasional pieces with timeless style." },
  { slug: "benchcraft",         label: "Benchcraft",          description: "Casual upholstery built for everyday comfort." },
  { slug: "bernhardt",          label: "Bernhardt",           description: "Elevated residential furniture with a fashion-forward edge." },
  { slug: "canadel",            label: "Canadel",             description: "Fully customizable Canadian dining furniture in 100s of finishes." },
  { slug: "craftmaster",        label: "Craftmaster",         description: "Custom-order upholstery made in the USA." },
  { slug: "flexsteel",          label: "Flexsteel",           description: "Blue Steel Spring seating built to last a lifetime." },
  { slug: "kincaid",            label: "Kincaid",             description: "Solid wood bedroom and dining in American hardwoods." },
  { slug: "la-z-boy",           label: "La-Z-Boy",            description: "Iconic comfort recliners and motion furniture." },
];

export type Product = {
  id: string;
  brand: string;
  collection: string;
  name: string;
  sku: string;
  category: string;
  material: string;
  image: string;
  tag?: string;
};

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=75",
  "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=75",
  "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=75",
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&q=75",
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=75",
  "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=75",
  "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=75",
  "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=75",
  "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=75",
];

const raw: Omit<Product, "image">[] = [
  // Living Room
  { id:"lr-1",  brand:"Craftmaster", collection:"Design Options",       name:"Sofa",           sku:"C9",      category:"living-room",   material:"Fabric",           tag:"Best Seller" },
  { id:"lr-2",  brand:"Craftmaster", collection:"L9 Collection",        name:"Sofa",           sku:"L9",      category:"living-room",   material:"Leather" },
  { id:"lr-3",  brand:"Craftmaster", collection:"Craftmaster Essentials",name:"Sofa",          sku:"725550",  category:"living-room",   material:"Fabric" },
  { id:"lr-4",  brand:"Kincaid",     collection:"Brooke",               name:"Brooke Sofa",    sku:"202-86",  category:"living-room",   material:"Fabric",           tag:"New" },
  { id:"lr-5",  brand:"Kincaid",     collection:"Lynchburg",            name:"Lynchburg Sofa", sku:"814-86",  category:"living-room",   material:"Fabric" },
  { id:"lr-6",  brand:"La-Z-Boy",    collection:"Laurel",               name:"Laurel Sofa",    sku:"610411",  category:"living-room",   material:"Fabric",           tag:"Hot Buy" },
  { id:"lr-7",  brand:"Flexsteel",   collection:"Wynwood",              name:"Sectional",      sku:"6076",    category:"living-room",   material:"Fabric" },
  { id:"lr-8",  brand:"Flexsteel",   collection:"Henry",                name:"Power Recliner", sku:"1910-50", category:"living-room",   material:"Leather",          tag:"Best Seller" },
  { id:"lr-9",  brand:"Bernhardt",   collection:"Plush",                name:"Accent Chair",   sku:"B2317",   category:"living-room",   material:"Fabric" },
  // Dining Room
  { id:"dr-1",  brand:"Canadel",     collection:"Downtown",             name:"Dining Table",   sku:"TBL04242",category:"dining-room",   material:"Wood" },
  { id:"dr-2",  brand:"Canadel",     collection:"Loft",                 name:"Side Chair",     sku:"CHA0282", category:"dining-room",   material:"Fabric and Leather" },
  { id:"dr-3",  brand:"Kincaid",     collection:"Tuscany",              name:"Dining Table",   sku:"96-054",  category:"dining-room",   material:"Wood",             tag:"New" },
  { id:"dr-4",  brand:"Kincaid",     collection:"Tuscany",              name:"Side Chair",     sku:"96-061",  category:"dining-room",   material:"Fabric" },
  { id:"dr-5",  brand:"American Drew",collection:"Litchfield",          name:"Dining Table",   sku:"651-760", category:"dining-room",   material:"Wood" },
  { id:"dr-6",  brand:"Bernhardt",   collection:"Interiors",            name:"Buffet",         sku:"306-131", category:"dining-room",   material:"Wood" },
  // Bedroom
  { id:"bd-1",  brand:"Kincaid",     collection:"Montreat",             name:"Queen Bed",      sku:"84-135P", category:"bedroom",       material:"Wood",             tag:"Best Seller" },
  { id:"bd-2",  brand:"American Drew",collection:"Litchfield",          name:"King Bed",       sku:"651-306K",category:"bedroom",       material:"Wood" },
  { id:"bd-3",  brand:"Bernhardt",   collection:"Criteria",             name:"Queen Bed",      sku:"B36821",  category:"bedroom",       material:"Wood" },
  { id:"bd-4",  brand:"Kincaid",     collection:"Montreat",             name:"Dresser",        sku:"84-160",  category:"bedroom",       material:"Wood" },
  { id:"bd-5",  brand:"Ashley",      collection:"Signature Design",     name:"Queen Bed",      sku:"B376-57", category:"bedroom",       material:"Wood",             tag:"Hot Buy" },
  { id:"bd-6",  brand:"Ashley",      collection:"Signature Design",     name:"Nightstand",     sku:"B376-91", category:"bedroom",       material:"Wood" },
  // Entertainment
  { id:"en-1",  brand:"Flexsteel",   collection:"wynwood",              name:"TV Console",     sku:"W1621-09",category:"entertainment",  material:"Wood" },
  { id:"en-2",  brand:"Bernhardt",   collection:"Interiors",            name:"Media Console",  sku:"346-568", category:"entertainment",  material:"Wood" },
  // Home Office
  { id:"ho-1",  brand:"American Drew",collection:"Litchfield",          name:"Writing Desk",   sku:"651-940", category:"home-office",   material:"Wood" },
  { id:"ho-2",  brand:"Kincaid",     collection:"Montreat",             name:"Home Office Desk",sku:"84-940", category:"home-office",   material:"Wood" },
  // Mattresses
  { id:"mt-1",  brand:"Ashley",      collection:"Ashley Sleep",         name:"Queen Mattress", sku:"M82731",  category:"mattresses",    material:"Foam",             tag:"Hot Buy" },
  { id:"mt-2",  brand:"Ashley",      collection:"Ashley Sleep",         name:"King Mattress",  sku:"M82741",  category:"mattresses",    material:"Foam" },
];

export const PRODUCTS: Product[] = raw.map((p, i) => ({
  ...p,
  image: PRODUCT_IMAGES[i % PRODUCT_IMAGES.length],
}));

export function getProductsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getProductsByBrand(slug: string) {
  return PRODUCTS.filter((p) => {
    const brand = BRANDS.find((b) => b.slug === slug);
    return brand && p.brand === brand.label;
  });
}

export const PROMOTIONS = [
  {
    id: "promo-1",
    title: "Summer Clearance Event",
    subtitle: "Save up to 40% on select living room sets",
    tag: "Limited Time",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80",
    cta: "Shop Clearance",
  },
  {
    id: "promo-2",
    title: "Canadel Custom Dining",
    subtitle: "100s of finishes. Any size. Built for you.",
    tag: "Featured Brand",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80",
    cta: "Customize Now",
  },
  {
    id: "promo-3",
    title: "0% Financing Available",
    subtitle: "12 months same as cash on qualifying purchases",
    tag: "Financing",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1200&q=80",
    cta: "Learn More",
  },
  {
    id: "promo-4",
    title: "Flexsteel — Built to Last",
    subtitle: "Blue Steel Spring seating with a lifetime guarantee",
    tag: "Brand Spotlight",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1200&q=80",
    cta: "Shop Flexsteel",
  },
];
