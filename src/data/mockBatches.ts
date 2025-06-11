
export interface Batch {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  studentsEnrolled: number;
  image: string;
  instructor: string;
  features: string[];
  syllabus: string[];
}

export const mockBatches: Batch[] = [
  {
    id: '1',
    title: 'Forex Trading Fundamentals',
    description: 'Master the basics of forex trading with comprehensive market analysis and risk management strategies.',
    price: 299,
    duration: '8 weeks',
    level: 'Beginner',
    studentsEnrolled: 234,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop',
    instructor: 'John Smith',
    features: [
      'Live trading sessions',
      'Market analysis tools',
      'Risk management strategies',
      'Community access',
      'Certificate of completion'
    ],
    syllabus: [
      'Introduction to Forex Markets',
      'Currency Pairs and Exchange Rates',
      'Technical Analysis Basics',
      'Fundamental Analysis',
      'Risk Management',
      'Trading Psychology',
      'Live Trading Practice',
      'Portfolio Management'
    ]
  },
  {
    id: '2',
    title: 'Advanced Technical Analysis',
    description: 'Deep dive into advanced chart patterns, indicators, and algorithmic trading strategies.',
    price: 499,
    duration: '12 weeks',
    level: 'Advanced',
    studentsEnrolled: 156,
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=400&h=300&fit=crop',
    instructor: 'Sarah Johnson',
    features: [
      'Advanced chart patterns',
      'Custom indicator development',
      'Algorithmic trading strategies',
      'Backtesting techniques',
      'One-on-one mentorship'
    ],
    syllabus: [
      'Advanced Chart Patterns',
      'Custom Indicators',
      'Elliott Wave Theory',
      'Fibonacci Analysis',
      'Options Trading',
      'Algorithmic Trading',
      'Backtesting Strategies',
      'Portfolio Optimization'
    ]
  },
  {
    id: '3',
    title: 'Cryptocurrency Trading',
    description: 'Learn to trade digital currencies with professional strategies and risk management.',
    price: 399,
    duration: '10 weeks',
    level: 'Intermediate',
    studentsEnrolled: 189,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop',
    instructor: 'Mike Chen',
    features: [
      'Crypto market analysis',
      'DeFi trading strategies',
      'NFT investment guide',
      'Wallet security',
      'Tax optimization'
    ],
    syllabus: [
      'Cryptocurrency Basics',
      'Blockchain Technology',
      'Trading Altcoins',
      'DeFi Protocols',
      'NFT Trading',
      'Crypto Security',
      'Tax Considerations',
      'Future Trends'
    ]
  },
  {
    id: '4',
    title: 'Day Trading Mastery',
    description: 'Intensive course on day trading strategies, scalping, and intraday market analysis.',
    price: 599,
    duration: '6 weeks',
    level: 'Advanced',
    studentsEnrolled: 98,
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=300&fit=crop',
    instructor: 'David Wilson',
    features: [
      'Scalping strategies',
      'Real-time market analysis',
      'High-frequency trading',
      'Risk-reward optimization',
      'Professional trading tools'
    ],
    syllabus: [
      'Day Trading Fundamentals',
      'Scalping Techniques',
      'Market Microstructure',
      'Order Flow Analysis',
      'Risk Management',
      'Trading Psychology',
      'Performance Analytics',
      'Professional Setup'
    ]
  },
  {
    id: '5',
    title: 'Options Trading Basics',
    description: 'Comprehensive introduction to options trading with practical strategies and risk management.',
    price: 359,
    duration: '8 weeks',
    level: 'Intermediate',
    studentsEnrolled: 145,
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
    instructor: 'Lisa Rodriguez',
    features: [
      'Options fundamentals',
      'Strategy development',
      'Greeks analysis',
      'Volatility trading',
      'Portfolio hedging'
    ],
    syllabus: [
      'Options Basics',
      'Call and Put Options',
      'Options Greeks',
      'Covered Calls',
      'Protective Puts',
      'Straddles and Strangles',
      'Iron Condors',
      'Volatility Strategies'
    ]
  },
  {
    id: '6',
    title: 'Swing Trading Strategies',
    description: 'Learn to capture market swings with medium-term trading strategies and technical analysis.',
    price: 449,
    duration: '10 weeks',
    level: 'Intermediate',
    studentsEnrolled: 167,
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop',
    instructor: 'Robert Taylor',
    features: [
      'Swing trading patterns',
      'Position sizing',
      'Multi-timeframe analysis',
      'Sector rotation',
      'Portfolio management'
    ],
    syllabus: [
      'Swing Trading Basics',
      'Chart Patterns',
      'Trend Analysis',
      'Support and Resistance',
      'Moving Averages',
      'Momentum Indicators',
      'Risk Management',
      'Trade Planning'
    ]
  }
];

export const getUserEnrolledBatches = (userId: string): string[] => {
  // Mock enrolled batches for demo
  return ['1', '3'];
};
