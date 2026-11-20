export interface CartInfer {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const mockCartItems: CartInfer[] = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    price: 129.99,
    description: "Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.",
    category: "electronics",
    image: "https://picsum.photos/seed/headphones/400/400",
  },
  {
    id: 2,
    title: "Classic Cotton T-Shirt",
    price: 19.5,
    description: "Soft, breathable crew-neck t-shirt made from 100% organic cotton.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/tshirt/400/400",
  },
  {
    id: 3,
    title: "Stainless Steel Water Bottle",
    price: 24.0,
    description: "Double-wall insulated bottle that keeps drinks cold for 24 hours or hot for 12.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/bottle/400/400",
  },
  {
    id: 4,
    title: "Women's Running Sneakers",
    price: 74.95,
    description: "Lightweight, cushioned running shoes with breathable mesh upper and durable grip sole.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/sneakers/400/400",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    price: 89.0,
    description: "RGB backlit mechanical keyboard with hot-swappable switches and aluminum frame.",
    category: "electronics",
    image: "https://picsum.photos/seed/keyboard/400/400",
  },
  {
    id: 6,
    title: "Silver Pendant Necklace",
    price: 59.99,
    description: "Elegant sterling silver necklace with a minimalist geometric pendant.",
    category: "jewelery",
    image: "https://picsum.photos/seed/necklace/400/400",
  },
  {
    id: 7,
    title: "Ceramic Pour-Over Coffee Set",
    price: 42.75,
    description: "Handcrafted ceramic dripper and server set for brewing smooth, flavorful coffee.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/coffee/400/400",
  },
  {
    id: 8,
    title: "Canvas Backpack",
    price: 54.0,
    description: "Durable waxed-canvas backpack with padded laptop sleeve and multiple pockets.",
    category: "accessories",
    image: "https://picsum.photos/seed/backpack/400/400",
  },
];