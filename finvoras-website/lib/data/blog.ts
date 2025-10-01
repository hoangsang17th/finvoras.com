import { BlogPost } from "@/lib/types";

// Mock data for development
export const mockBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Simple Ways to Start Saving Money Today",
    slug: "10-simple-ways-start-saving-money-today",
    excerpt: "Discover practical and easy-to-implement strategies that can help you build your savings account without dramatically changing your lifestyle.",
    content: `
      <h2>Introduction</h2>
      <p>Saving money doesn't have to be complicated or require major lifestyle changes. With the right strategies, you can start building your savings today while still enjoying life.</p>
      
      <h2>1. Track Your Expenses</h2>
      <p>The first step to saving money is understanding where it goes. Use apps like Finvoras to automatically categorize and track your spending.</p>
      
      <h2>2. Create a Budget</h2>
      <p>A budget is your roadmap to financial success. Start with the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings.</p>
      
      <h2>3. Automate Your Savings</h2>
      <p>Set up automatic transfers to your savings account. Even $25 per week adds up to $1,300 per year!</p>
      
      <h2>Conclusion</h2>
      <p>Small steps lead to big results. Start implementing these strategies today and watch your savings grow.</p>
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "/authors/sarah.jpg"
    },
    publishedAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    tags: ["saving", "budgeting", "personal-finance"],
    category: "Personal Finance",
    readingTime: 5,
    featured: true,
    coverImage: "/blog/saving-money.jpg"
  },
  {
    id: "2",
    title: "Understanding Credit Scores: A Beginner's Guide",
    slug: "understanding-credit-scores-beginners-guide",
    excerpt: "Learn what credit scores are, how they're calculated, and practical steps you can take to improve yours.",
    content: `
      <h2>What is a Credit Score?</h2>
      <p>A credit score is a three-digit number that represents your creditworthiness to lenders.</p>
      
      <h2>Factors That Affect Your Credit Score</h2>
      <ul>
        <li>Payment history (35%)</li>
        <li>Credit utilization (30%)</li>
        <li>Length of credit history (15%)</li>
        <li>New credit (10%)</li>
        <li>Credit mix (10%)</li>
      </ul>
      
      <h2>How to Improve Your Credit Score</h2>
      <p>Focus on paying bills on time, keeping credit utilization low, and maintaining old credit accounts.</p>
    `,
    author: {
      name: "Michael Chen",
      avatar: "/authors/michael.jpg"
    },
    publishedAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-10"),
    tags: ["credit-score", "credit", "financial-health"],
    category: "Credit & Debt",
    readingTime: 7,
    featured: false,
    coverImage: "/blog/credit-score.jpg"
  },
  {
    id: "3",
    title: "Investment Basics for Young Adults",
    slug: "investment-basics-young-adults",
    excerpt: "Get started with investing in your 20s and 30s. Learn about different investment types and how to build a diversified portfolio.",
    content: `
      <h2>Why Start Investing Young?</h2>
      <p>The power of compound interest means that starting early, even with small amounts, can lead to significant wealth over time.</p>
      
      <h2>Types of Investments</h2>
      <h3>Stocks</h3>
      <p>Represent ownership in companies. Higher risk, higher potential return.</p>
      
      <h3>Bonds</h3>
      <p>Loans to governments or corporations. Lower risk, lower return.</p>
      
      <h3>ETFs and Mutual Funds</h3>
      <p>Diversified investment vehicles that pool money from many investors.</p>
      
      <h2>Getting Started</h2>
      <p>Start with low-cost index funds through a retirement account like a 401(k) or IRA.</p>
    `,
    author: {
      name: "Emily Rodriguez",
      avatar: "/authors/emily.jpg"
    },
    publishedAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-05"),
    tags: ["investing", "stocks", "retirement"],
    category: "Investing",
    readingTime: 8,
    featured: true,
    coverImage: "/blog/investing-basics.jpg"
  },
  {
    id: "4",
    title: "Emergency Fund: How Much Do You Really Need?",
    slug: "emergency-fund-how-much-do-you-need",
    excerpt: "Learn how to calculate the right emergency fund size for your situation and strategies to build it faster.",
    content: `
      <h2>What is an Emergency Fund?</h2>
      <p>An emergency fund is money set aside to cover unexpected expenses or financial emergencies.</p>
      
      <h2>How Much Should You Save?</h2>
      <p>The traditional advice is 3-6 months of expenses, but your situation may require more or less.</p>
      
      <h2>Factors to Consider</h2>
      <ul>
        <li>Job stability</li>
        <li>Income variability</li>
        <li>Health conditions</li>
        <li>Family responsibilities</li>
      </ul>
      
      <h2>Building Your Emergency Fund</h2>
      <p>Start small with $500-$1000, then gradually build to your target amount.</p>
    `,
    author: {
      name: "David Kim",
      avatar: "/authors/david.jpg"
    },
    publishedAt: new Date("2023-12-28"),
    updatedAt: new Date("2023-12-28"),
    tags: ["emergency-fund", "saving", "financial-planning"],
    category: "Personal Finance",
    readingTime: 6,
    featured: false,
    coverImage: "/blog/emergency-fund.jpg"
  },
  {
    id: "5",
    title: "Debt Snowball vs. Debt Avalanche: Which Strategy is Right for You?",
    slug: "debt-snowball-vs-debt-avalanche-strategy",
    excerpt: "Compare two popular debt repayment strategies and learn which one might work best for your financial situation.",
    content: `
      <h2>Understanding Debt Repayment Strategies</h2>
      <p>When you're ready to tackle debt, having a strategy can make all the difference.</p>
      
      <h2>Debt Snowball Method</h2>
      <p>Pay minimum amounts on all debts, then put extra money toward the smallest debt first.</p>
      <h3>Pros:</h3>
      <ul>
        <li>Quick wins boost motivation</li>
        <li>Simplifies your debt picture faster</li>
      </ul>
      
      <h2>Debt Avalanche Method</h2>
      <p>Pay minimum amounts on all debts, then put extra money toward the highest interest rate debt first.</p>
      <h3>Pros:</h3>
      <ul>
        <li>Saves more money in interest</li>
        <li>Mathematically optimal</li>
      </ul>
      
      <h2>Which Should You Choose?</h2>
      <p>Consider your personality: do you need quick wins (snowball) or prefer mathematical optimization (avalanche)?</p>
    `,
    author: {
      name: "Lisa Thompson",
      avatar: "/authors/lisa.jpg"
    },
    publishedAt: new Date("2023-12-20"),
    updatedAt: new Date("2023-12-20"),
    tags: ["debt", "debt-repayment", "financial-strategy"],
    category: "Credit & Debt",
    readingTime: 5,
    featured: false,
    coverImage: "/blog/debt-strategy.jpg"
  },
  {
    id: "6",
    title: "Side Hustles That Can Boost Your Income in 2024",
    slug: "side-hustles-boost-income-2024",
    excerpt: "Explore profitable side hustle opportunities that fit your skills and schedule to increase your earning potential.",
    content: `
      <h2>Why Consider a Side Hustle?</h2>
      <p>Extra income can accelerate your financial goals, whether it's paying off debt, building savings, or investing for the future.</p>
      
      <h2>Online Side Hustles</h2>
      <h3>Freelance Writing</h3>
      <p>Write articles, blog posts, or copy for businesses. Platforms: Upwork, Fiverr, Contently.</p>
      
      <h3>Virtual Assistant</h3>
      <p>Provide administrative support remotely. Great for organized individuals.</p>
      
      <h3>Online Tutoring</h3>
      <p>Teach subjects you're knowledgeable in through platforms like Wyzant or Chegg.</p>
      
      <h2>Local Side Hustles</h2>
      <h3>Food Delivery</h3>
      <p>Work for DoorDash, Uber Eats, or Grubhub on your schedule.</p>
      
      <h3>Pet Services</h3>
      <p>Offer dog walking or pet sitting through Rover or Wag.</p>
      
      <h2>Tips for Success</h2>
      <ul>
        <li>Start small and scale gradually</li>
        <li>Track your income and expenses</li>
        <li>Set aside money for taxes</li>
      </ul>
    `,
    author: {
      name: "Carlos Martinez",
      avatar: "/authors/carlos.jpg"
    },
    publishedAt: new Date("2023-12-15"),
    updatedAt: new Date("2023-12-15"),
    tags: ["side-hustle", "income", "entrepreneurship"],
    category: "Income & Career",
    readingTime: 9,
    featured: true,
    coverImage: "/blog/side-hustles.jpg"
  }
];

export const mockCategories = [
  {
    id: "1",
    name: "Personal Finance",
    slug: "personal-finance",
    description: "Budgeting, saving, and money management basics",
    postCount: 2
  },
  {
    id: "2",
    name: "Credit & Debt",
    slug: "credit-debt",
    description: "Understanding and managing credit and debt",
    postCount: 2
  },
  {
    id: "3",
    name: "Investing",
    slug: "investing",
    description: "Investment strategies and market insights",
    postCount: 1
  },
  {
    id: "4",
    name: "Income & Career",
    slug: "income-career",
    description: "Growing your income and career development",
    postCount: 1
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return mockBlogPosts.filter(post => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return mockBlogPosts.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === category
  );
}