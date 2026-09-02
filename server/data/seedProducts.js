const products = [
  {
    name: "iPhone 16 Pro",
    slug: "iphone-16-pro",
    brand: "Apple",
    category: "Smartphone",

    shortDescription:
      "Experience next-generation performance with the powerful iPhone 16 Pro.",

    description:
      "The iPhone 16 Pro combines exceptional performance, an advanced camera system and a premium titanium design. Powered by Apple's latest generation chip, it delivers a fast and seamless smartphone experience.",

    badge: "NEW",

    features: [
      "Pro camera system",
      "Titanium design",
      "Advanced A-series chip",
      "All-day battery life",
    ],

    rating: 4.8,
    reviewCount: 248,

    variants: [
      {
        name: "128GB Natural Titanium",
        storage: "128GB",
        color: "Natural Titanium",
        colorCode: "#B7B2AA",

        mrp: 119900,
        price: 112900,

        images: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 37634,
            interestRate: 0,
            cashback: 1500,
            label: "Best for short-term",
          },
          {
            tenure: 6,
            monthlyAmount: 18817,
            interestRate: 0,
            cashback: 2500,
            label: "Popular choice",
          },
          {
            tenure: 12,
            monthlyAmount: 9409,
            interestRate: 0,
            cashback: 5000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 5100,
            interestRate: 5.5,
            cashback: 6000,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 3800,
            interestRate: 10.5,
            cashback: 7500,
            label: "",
          },
        ],
      },

      {
        name: "256GB Natural Titanium",
        storage: "256GB",
        color: "Natural Titanium",
        colorCode: "#B7B2AA",

        mrp: 129900,
        price: 122900,

        images: [
          "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 40967,
            interestRate: 0,
            cashback: 2000,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 20483,
            interestRate: 0,
            cashback: 3000,
            label: "Popular choice",
          },
          {
            tenure: 12,
            monthlyAmount: 10242,
            interestRate: 0,
            cashback: 5000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 5550,
            interestRate: 5.5,
            cashback: 6500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 4150,
            interestRate: 10.5,
            cashback: 8000,
            label: "",
          },
        ],
      },

      {
        name: "512GB Black Titanium",
        storage: "512GB",
        color: "Black Titanium",
        colorCode: "#252525",

        mrp: 149900,
        price: 142900,

        images: [
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 47634,
            interestRate: 0,
            cashback: 2500,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 23817,
            interestRate: 0,
            cashback: 3500,
            label: "",
          },
          {
            tenure: 12,
            monthlyAmount: 11909,
            interestRate: 0,
            cashback: 6000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 6450,
            interestRate: 5.5,
            cashback: 7500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 4750,
            interestRate: 10.5,
            cashback: 9000,
            label: "",
          },
        ],
      },
    ],
  },

  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-galaxy-s24-ultra",
    brand: "Samsung",
    category: "Smartphone",

    shortDescription:
      "Galaxy AI meets exceptional performance and a professional-grade camera.",

    description:
      "Samsung Galaxy S24 Ultra delivers a premium smartphone experience with Galaxy AI, a powerful Snapdragon processor and an advanced camera system designed for creativity and productivity.",

    badge: "BESTSELLER",

    features: [
      "Galaxy AI",
      "200MP camera",
      "Built-in S Pen",
      "Titanium frame",
    ],

    rating: 4.7,
    reviewCount: 193,

    variants: [
      {
        name: "256GB Titanium Black",
        storage: "256GB",
        color: "Titanium Black",
        colorCode: "#303030",

        mrp: 129999,
        price: 119999,

        images: [
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 39999,
            interestRate: 0,
            cashback: 1500,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 19999,
            interestRate: 0,
            cashback: 3000,
            label: "Popular choice",
          },
          {
            tenure: 12,
            monthlyAmount: 9999,
            interestRate: 0,
            cashback: 5000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 5400,
            interestRate: 5.5,
            cashback: 7000,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 4050,
            interestRate: 10.5,
            cashback: 8500,
            label: "",
          },
        ],
      },

      {
        name: "512GB Titanium Gray",
        storage: "512GB",
        color: "Titanium Gray",
        colorCode: "#777777",

        mrp: 139999,
        price: 129999,

        images: [
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 43333,
            interestRate: 0,
            cashback: 2000,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 21667,
            interestRate: 0,
            cashback: 3500,
            label: "",
          },
          {
            tenure: 12,
            monthlyAmount: 10833,
            interestRate: 0,
            cashback: 5500,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 5850,
            interestRate: 5.5,
            cashback: 7500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 4350,
            interestRate: 10.5,
            cashback: 9000,
            label: "",
          },
        ],
      },

      {
        name: "512GB Titanium Violet",
        storage: "512GB",
        color: "Titanium Violet",
        colorCode: "#665A72",

        mrp: 139999,
        price: 129999,

        images: [
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 43333,
            interestRate: 0,
            cashback: 2000,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 21667,
            interestRate: 0,
            cashback: 3500,
            label: "",
          },
          {
            tenure: 12,
            monthlyAmount: 10833,
            interestRate: 0,
            cashback: 5500,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 5850,
            interestRate: 5.5,
            cashback: 7500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 4350,
            interestRate: 10.5,
            cashback: 9000,
            label: "",
          },
        ],
      },
    ],
  },

  {
    name: "Google Pixel 9 Pro",
    slug: "google-pixel-9-pro",
    brand: "Google",
    category: "Smartphone",

    shortDescription:
      "Google's smartest Pixel with advanced AI and an exceptional camera.",

    description:
      "Google Pixel 9 Pro combines Google's AI capabilities with an advanced camera system, a beautiful display and powerful performance for an intelligent smartphone experience.",

    badge: "AI POWERED",

    features: [
      "Google Gemini AI",
      "Pro camera system",
      "Super Actua display",
      "All-day battery",
    ],

    rating: 4.6,
    reviewCount: 156,

    variants: [
      {
        name: "128GB Obsidian",
        storage: "128GB",
        color: "Obsidian",
        colorCode: "#2C2C2C",

        mrp: 109999,
        price: 99999,

        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 33333,
            interestRate: 0,
            cashback: 1500,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 16667,
            interestRate: 0,
            cashback: 2500,
            label: "Popular choice",
          },
          {
            tenure: 12,
            monthlyAmount: 8333,
            interestRate: 0,
            cashback: 4500,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 4500,
            interestRate: 5.5,
            cashback: 6000,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 3500,
            interestRate: 10.5,
            cashback: 7000,
            label: "",
          },
        ],
      },

      {
        name: "256GB Hazel",
        storage: "256GB",
        color: "Hazel",
        colorCode: "#6A6B58",

        mrp: 119999,
        price: 109999,

        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 36667,
            interestRate: 0,
            cashback: 2000,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 18333,
            interestRate: 0,
            cashback: 3000,
            label: "",
          },
          {
            tenure: 12,
            monthlyAmount: 9167,
            interestRate: 0,
            cashback: 5000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 4950,
            interestRate: 5.5,
            cashback: 6500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 3650,
            interestRate: 10.5,
            cashback: 7500,
            label: "",
          },
        ],
      },

      {
        name: "256GB Porcelain",
        storage: "256GB",
        color: "Porcelain",
        colorCode: "#E6E0D7",

        mrp: 119999,
        price: 109999,

        images: [
          "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=80",
          "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=80",
        ],

        emiPlans: [
          {
            tenure: 3,
            monthlyAmount: 36667,
            interestRate: 0,
            cashback: 2000,
            label: "",
          },
          {
            tenure: 6,
            monthlyAmount: 18333,
            interestRate: 0,
            cashback: 3000,
            label: "",
          },
          {
            tenure: 12,
            monthlyAmount: 9167,
            interestRate: 0,
            cashback: 5000,
            label: "Most popular",
          },
          {
            tenure: 24,
            monthlyAmount: 4950,
            interestRate: 5.5,
            cashback: 6500,
            label: "",
          },
          {
            tenure: 36,
            monthlyAmount: 3650,
            interestRate: 10.5,
            cashback: 7500,
            label: "",
          },
        ],
      },
    ],
  },
];

module.exports = products;