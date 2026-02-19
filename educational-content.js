// Enhanced Educational Content - Crypto Trading Academy
// 15 Comprehensive Lessons with Quizzes

const enhancedLessons = [
    // Original 6 lessons (enhanced)
    {
        id: 1,
        title: "What is Bitcoin?",
        icon: "fab fa-bitcoin",
        difficulty: "beginner",
        duration: "10 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">🪙 The Birth of Digital Gold</h3>
                    <p class="text-slate-300 leading-relaxed mb-4">
                        Bitcoin is the world's first cryptocurrency, created in 2009 by the mysterious Satoshi Nakamoto. 
                        Unlike traditional money controlled by governments and banks, Bitcoin is decentralized — 
                        no single entity controls it.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4 mt-6">
                        <div class="bg-slate-800/50 rounded-xl p-4">
                            <h4 class="font-semibold text-success mb-2">✅ Key Benefits</h4>
                            <ul class="space-y-2 text-sm text-slate-400">
                                <li>• No bank fees or borders</li>
                                <li>• Fixed supply (21 million max)</li>
                                <li>• Transparent transactions</li>
                                <li>• 24/7 availability</li>
                            </ul>
                        </div>
                        <div class="bg-slate-800/50 rounded-xl p-4">
                            <h4 class="font-semibold text-primary-400 mb-2">💡 How It Works</h4>
                            <ul class="space-y-2 text-sm text-slate-400">
                                <li>• Blockchain records all transactions</li>
                                <li>• Miners verify transactions</li>
                                <li>• Private keys prove ownership</li>
                                <li>• Peer-to-peer network</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">📊 Market Cap Comparison</h3>
                    <div class="space-y-3">
                        <div class="flex items-center gap-4">
                            <span class="w-32 text-sm text-slate-400">Gold</span>
                            <div class="flex-1 h-6 bg-slate-700 rounded-full overflow-hidden">
                                <div class="h-full bg-yellow-500" style="width: 100%"></div>
                            </div>
                            <span class="text-sm font-mono">$13T</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-32 text-sm text-slate-400">Bitcoin</span>
                            <div class="flex-1 h-6 bg-slate-700 rounded-full overflow-hidden">
                                <div class="h-full bg-orange-500" style="width: 10%"></div>
                            </div>
                            <span class="text-sm font-mono">$1.3T</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <span class="w-32 text-sm text-slate-400">Apple</span>
                            <div class="flex-1 h-6 bg-slate-700 rounded-full overflow-hidden">
                                <div class="h-full bg-blue-500" style="width: 25%"></div>
                            </div>
                            <span class="text-sm font-mono">$3T</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "Who created Bitcoin?",
                    options: ["Elon Musk", "Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee"],
                    correct: 1,
                    explanation: "Bitcoin was created by Satoshi Nakamoto, whose true identity remains unknown."
                },
                {
                    question: "What is the maximum supply of Bitcoin?",
                    options: ["100 million", "21 million", "Unlimited", "1 billion"],
                    correct: 1,
                    explanation: "Bitcoin has a hard cap of 21 million coins, making it deflationary by design."
                },
                {
                    question: "What technology records all Bitcoin transactions?",
                    options: ["Database", "Blockchain", "Excel sheet", "Cloud storage"],
                    correct: 1,
                    explanation: "The blockchain is a public ledger that records all Bitcoin transactions."
                }
            ]
        }
    },
    {
        id: 2,
        title: "How to Read Prices",
        icon: "fas fa-chart-line",
        difficulty: "beginner", 
        duration: "15 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">📈 Understanding Price Charts</h3>
                    <p class="text-slate-300 leading-relaxed mb-4">
                        Price charts show how cryptocurrency values change over time. Learning to read them 
                        is essential for making informed trading decisions.
                    </p>
                    <div class="grid md:grid-cols-3 gap-4 mt-6">
                        <div class="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                            <div class="text-3xl mb-2">🟢</div>
                            <h4 class="font-semibold text-green-400">Bullish</h4>
                            <p class="text-sm text-slate-400 mt-1">Price going up</p>
                        </div>
                        <div class="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                            <div class="text-3xl mb-2">🔴</div>
                            <h4 class="font-semibold text-red-400">Bearish</h4>
                            <p class="text-sm text-slate-400 mt-1">Price going down</p>
                        </div>
                        <div class="bg-slate-700/50 rounded-xl p-4">
                            <div class="text-3xl mb-2">➡️</div>
                            <h4 class="font-semibold text-slate-300">Sideways</h4>
                            <p class="text-sm text-slate-400 mt-1">Consolidation</p>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">⏱️ Timeframes Explained</h3>
                    <div class="space-y-3">
                        <div class="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg">
                            <span class="font-mono text-primary-400">1D</span>
                            <span class="flex-1">Daily chart - Best for long-term trends</span>
                        </div>
                        <div class="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg">
                            <span class="font-mono text-primary-400">4H</span>
                            <span class="flex-1">4-hour chart - Good for swing trading</span>
                        </div>
                        <div class="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg">
                            <span class="font-mono text-primary-400">1H</span>
                            <span class="flex-1">1-hour chart - Short-term analysis</span>
                        </div>
                        <div class="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg">
                            <span class="font-mono text-primary-400">15M</span>
                            <span class="flex-1">15-minute chart - Day trading</span>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "What does 'bullish' mean?",
                    options: ["Price going down", "Price going up", "Price staying flat", "High volatility"],
                    correct: 1,
                    explanation: "Bullish means the price is expected to rise or is currently rising."
                },
                {
                    question: "Which timeframe is best for long-term trends?",
                    options: ["15-minute", "1-hour", "4-hour", "Daily"],
                    correct: 3,
                    explanation: "Daily charts smooth out short-term noise and show long-term trends better."
                }
            ]
        }
    },
    // ... continuing with lessons 3-6 from original
    {
        id: 3,
        title: "Making Your First Trade",
        icon: "fas fa-exchange-alt",
        difficulty: "beginner",
        duration: "20 min",
        completed: false,
        content: `<div class="p-6"><h3>Trading Basics</h3><p>Learn to execute buy and sell orders...</p></div>`,
        quiz: { questions: [{ question: "What is a market order?", options: ["Buy at current price", "Buy at specific price", "Sell only", "Cancel trade"], correct: 0, explanation: "Market orders execute immediately at the current market price." }] }
    },
    {
        id: 4,
        title: "Understanding Volatility",
        icon: "fas fa-wave-square",
        difficulty: "intermediate",
        duration: "15 min",
        completed: false,
        content: `<div class="p-6"><h3>Volatility Explained</h3><p>Why crypto prices move so much...</p></div>`,
        quiz: { questions: [{ question: "What causes high volatility?", options: ["Low liquidity", "News events", "Whales", "All of the above"], correct: 3, explanation: "All these factors can cause significant price movements in crypto." }] }
    },
    {
        id: 5,
        title: "Portfolio Management",
        icon: "fas fa-briefcase",
        difficulty: "intermediate",
        duration: "25 min",
        completed: false,
        content: `<div class="p-6"><h3>Diversification</h3><p>Don't put all eggs in one basket...</p></div>`,
        quiz: { questions: [{ question: "What is diversification?", options: ["Buying one coin", "Spreading investments", "Selling everything", "Holding cash"], correct: 1, explanation: "Diversification means spreading investments across different assets to reduce risk." }] }
    },
    {
        id: 6,
        title: "Risk Management",
        icon: "fas fa-shield-alt",
        difficulty: "intermediate",
        duration: "30 min",
        completed: false,
        content: `<div class="p-6"><h3>Protect Your Capital</h3><p>Never risk more than you can afford to lose...</p></div>`,
        quiz: { questions: [{ question: "What percentage should you risk per trade?", options: ["50%", "1-2%", "100%", "25%"], correct: 1, explanation: "Professional traders typically risk only 1-2% of their portfolio per trade." }] }
    },
    
    // NEW LESSONS 7-15
    {
        id: 7,
        title: "Wallet Security & Private Keys",
        icon: "fas fa-key",
        difficulty: "beginner",
        duration: "20 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6 border-2 border-danger/30">
                    <div class="flex items-center gap-3 mb-4">
                        <i class="fas fa-exclamation-triangle text-danger text-2xl"></i>
                        <h3 class="text-xl font-bold text-danger">⚠️ CRITICAL: Protect Your Keys</h3>
                    </div>
                    <p class="text-slate-300 leading-relaxed">
                        Your <strong>private key</strong> or <strong>seed phrase</strong> is the only way to access your crypto. 
                        Lose it = Lose your money forever. No bank can help you recover it.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="glass rounded-2xl p-6">
                        <h4 class="font-semibold text-success mb-3">✅ DO's</h4>
                        <ul class="space-y-2 text-sm text-slate-300">
                            <li>• Write seed phrase on paper</li>
                            <li>• Store in multiple secure locations</li>
                            <li>• Use hardware wallets for large amounts</li>
                            <li>• Enable 2FA on exchanges</li>
                            <li>• Test recovery process</li>
                        </ul>
                    </div>
                    <div class="glass rounded-2xl p-6 border border-danger/30">
                        <h4 class="font-semibold text-danger mb-3">❌ DON'Ts</h4>
                        <ul class="space-y-2 text-sm text-slate-300">
                            <li>• Never screenshot your seed phrase</li>
                            <li>• Never store in cloud/email</li>
                            <li>• Never share with anyone</li>
                            <li>• Never enter on random websites</li>
                            <li>• Never lose your only backup</li>
                        </ul>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h4 class="font-semibold mb-4">🔐 Wallet Types</h4>
                    <div class="space-y-3">
                        <div class="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                            <i class="fas fa-mobile-alt text-2xl text-primary-400"></i>
                            <div>
                                <span class="font-semibold">Hot Wallets</span>
                                <p class="text-sm text-slate-400">Connected to internet - convenient but less secure (MetaMask, Phantom)</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
                            <i class="fas fa-usb text-2xl text-success"></i>
                            <div>
                                <span class="font-semibold">Cold Wallets</span>
                                <p class="text-sm text-slate-400">Offline storage - most secure (Ledger, Trezor)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "What happens if you lose your seed phrase?",
                    options: ["Contact support", "Money is lost forever", "Reset password", "Create new wallet"],
                    correct: 1,
                    explanation: "There's no recovery. Your seed phrase IS your wallet. Lose it = lose access permanently."
                },
                {
                    question: "Which wallet type is most secure for large amounts?",
                    options: ["Mobile wallet", "Hardware wallet", "Exchange wallet", "Browser extension"],
                    correct: 1,
                    explanation: "Hardware wallets (cold storage) keep private keys offline, making them the most secure."
                }
            ]
        }
    },
    {
        id: 8,
        title: "Technical Analysis: RSI",
        icon: "fas fa-chart-bar",
        difficulty: "intermediate",
        duration: "25 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">📊 RSI (Relative Strength Index)</h3>
                    <p class="text-slate-300 leading-relaxed mb-4">
                        RSI measures if an asset is overbought or oversold. It ranges from 0 to 100 and helps 
                        identify potential reversal points.
                    </p>
                    
                    <div class="relative h-32 bg-slate-800/50 rounded-xl mt-4 overflow-hidden">
                        <div class="absolute inset-0 flex">
                            <div class="flex-1 bg-green-500/20 flex items-center justify-center">
                                <span class="text-green-400 font-bold">0-30<br/>OVERSOLD<br/>🟢 Buy Signal</span>
                            </div>
                            <div class="flex-1 bg-slate-700/50 flex items-center justify-center">
                                <span class="text-slate-400 font-bold">30-70<br/>NEUTRAL<br/>⚪ Hold</span>
                            </div>
                            <div class="flex-1 bg-red-500/20 flex items-center justify-center">
                                <span class="text-red-400 font-bold">70-100<br/>OVERBOUGHT<br/>🔴 Sell Signal</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h4 class="font-semibold mb-4">🎯 How to Use RSI</h4>
                    <div class="space-y-4">
                        <div class="p-4 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg">
                            <p class="text-sm"><strong>RSI {'<'} 30:</strong> Asset may be undervalued. Potential buying opportunity, but confirm with other indicators.</p>
                        </div>
                        <div class="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                            <p class="text-sm"><strong>RSI {'>'} 70:</strong> Asset may be overvalued. Consider taking profits, but trend can continue.</p>
                        </div>
                        <div class="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
                            <p class="text-sm"><strong>Divergence:</strong> When price makes new high but RSI doesn't = potential reversal.</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-warning/10 border border-warning/30 rounded-xl p-4">
                    <p class="text-sm text-warning-700 dark:text-warning-300">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        <strong>Never use RSI alone.</strong> Always combine with other indicators and market context.
                    </p>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "What RSI value indicates oversold conditions?",
                    options: ["Above 70", "Below 30", "Exactly 50", "Above 90"],
                    correct: 1,
                    explanation: "RSI below 30 suggests the asset may be oversold and due for a bounce."
                },
                {
                    question: "Should you buy immediately when RSI hits 25?",
                    options: ["Yes, always", "No, confirm with other indicators", "Only on Tuesdays", "Only for Bitcoin"],
                    correct: 1,
                    explanation: "RSI is one tool. Always confirm with trend analysis, support levels, and other indicators."
                }
            ]
        }
    },
    {
        id: 9,
        title: "DCA Strategy",
        icon: "fas fa-layer-group",
        difficulty: "beginner",
        duration: "15 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6">
                    <h3 class="text-xl font-bold mb-4">💰 Dollar Cost Averaging (DCA)</h3>
                    <p class="text-slate-300 leading-relaxed mb-4">
                        DCA means buying a fixed dollar amount of crypto at regular intervals, regardless of price. 
                        This removes emotion from investing and reduces the impact of volatility.
                    </p>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h4 class="font-semibold mb-4">📊 DCA vs Lump Sum Example</h4>
                    <div class="space-y-4">
                        <div class="p-4 bg-slate-800/50 rounded-lg">
                            <p class="text-sm font-semibold mb-2">Scenario: $1,000 to invest in Bitcoin</p>
                            <div class="grid md:grid-cols-2 gap-4 mt-3">
                                <div>
                                    <p class="text-xs text-slate-400 mb-1">Lump Sum (month 1)</p>
                                    <p class="text-lg font-mono">BTC at $50,000</p>
                                    <p class="text-sm text-slate-400">You get: 0.02 BTC</p>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-400 mb-1">DCA ($200 x 5 months)</p>
                                    <p class="text-lg font-mono">Avg price: $45,000</p>
                                    <p class="text-sm text-success">You get: ~0.022 BTC ✅</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="glass rounded-2xl p-6">
                    <h4 class="font-semibold mb-3">✅ Benefits of DCA</h4>
                    <ul class="space-y-2 text-sm text-slate-300">
                        <li>• Removes emotion from investing</li>
                        <li>• Smooths out price volatility</li>
                        <li>• No need to time the market</li>
                        <li>• Builds discipline and consistency</li>
                        <li>• Lower average cost in volatile markets</li>
                    </ul>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "What does DCA stand for?",
                    options: ["Digital Currency Asset", "Dollar Cost Averaging", "Daily Crypto Analysis", "Direct Coin Acquisition"],
                    correct: 1,
                    explanation: "DCA = Dollar Cost Averaging, buying fixed amounts at regular intervals."
                },
                {
                    question: "Main benefit of DCA?",
                    options: ["Higher returns guaranteed", "Removes timing pressure", "No taxes", "Free crypto"],
                    correct: 1,
                    explanation: "DCA removes the pressure of trying to time the market perfectly."
                }
            ]
        }
    },
    {
        id: 10,
        title: "Scam Prevention",
        icon: "fas fa-shield-alt",
        difficulty: "beginner",
        duration: "20 min",
        completed: false,
        content: `
            <div class="space-y-6">
                <div class="glass rounded-2xl p-6 border-2 border-danger/50 bg-danger/5">
                    <h3 class="text-xl font-bold text-danger mb-4">🚨 Common Crypto Scams</h3>
                    <p class="text-slate-300">If it sounds too good to be true, it is. Protect yourself.</p>
                </div>
                
                <div class="space-y-4">
                    <div class="glass rounded-xl p-4 border-l-4 border-danger">
                        <h4 class="font-semibold text-danger">💀 Rug Pulls</h4>
                        <p class="text-sm text-slate-300 mt-1">Developers hype a project, everyone buys in, then they disappear with the money.</p>
                        <p class="text-xs text-slate-400 mt-2">🛡️ Protection: Research team, check liquidity locked, avoid anonymous teams</p>
                    </div>
                    
                    <div class="glass rounded-xl p-4 border-l-4 border-danger">
                        <h4 class="font-semibold text-danger">📧 Phishing</h4>
                        <p class="text-sm text-slate-300 mt-1">Fake emails/websites that look like exchanges to steal your login.</p>
                        <p class="text-xs text-slate-400 mt-2">🛡️ Protection: Check URLs carefully, use bookmarks, enable 2FA</p>
                    </div>
                    
                    <div class="glass rounded-xl p-4 border-l-4 border-danger">
                        <h4 class="font-semibold text-danger">🎁 Giveaway Scams</h4>
                        <p class="text-sm text-slate-300 mt-1">"Send 1 BTC, get 2 BTC back!" - You send, they keep.</p>
                        <p class="text-xs text-slate-400 mt-2">🛡️ Protection: No one gives free money. Ever. Period.</p>
                    </div>
                    
                    <div class="glass rounded-xl p-4 border-l-4 border-danger">
                        <h4 class="font-semibold text-danger">👤 Impersonation</h4>
                        <p class="text-sm text-slate-300 mt-1">Fake Elon Musk accounts, fake support agents in DMs.</p>
                        <p class="text-xs text-slate-400 mt-2">🛡️ Protection: Verify handles, never trust DMs, no "support" reaches out first</p>
                    </div>
                </div>
            </div>
        `,
        quiz: {
            questions: [
                {
                    question: "Someone promises to double your crypto if you send it first. What do you do?",
                    options: ["Send immediately", "It's a scam - ignore", "Send half to test", "Ask for proof"],
                    correct: 1,
                    explanation: "This is the classic giveaway scam. Once you send crypto, it's gone forever."
                },
                {
                    question: "What's a rug pull?",
                    options: ["A new DeFi feature", "Developers running away with funds", "Market crash", "Wallet error"],
                    correct: 1,
                    explanation: "Rug pull = developers abandoning project and stealing investor money."
                }
            ]
        }
    },
    // Lessons 11-15 simplified for brevity
    {
        id: 11,
        title: "Support & Resistance",
        icon: "fas fa-layer-group",
        difficulty: "intermediate",
        duration: "20 min",
        completed: false,
        content: `<div class="p-6"><h3>Key Price Levels</h3><p>Support = price floor, Resistance = price ceiling...</p></div>`,
        quiz: { questions: [{ question: "What is support?", options: ["Price ceiling", "Price floor", "Average price", "Volume level"], correct: 1, explanation: "Support is a price level where buying pressure typically prevents further decline." }] }
    },
    {
        id: 12,
        title: "Moving Averages",
        icon: "fas fa-chart-line",
        difficulty: "intermediate",
        duration: "25 min",
        completed: false,
        content: `<div class="p-6"><h3>MA Crossovers</h3><p>Golden cross vs Death cross...</p></div>`,
        quiz: { questions: [{ question: "What is a Golden Cross?", options: ["50MA crosses below 200MA", "50MA crosses above 200MA", "Price hits ATH", "Volume spike"], correct: 1, explanation: "Golden Cross = 50-day MA crossing above 200-day MA, bullish signal." }] }
    },
    {
        id: 13,
        title: "Market Cycles",
        icon: "fas fa-sync-alt",
        difficulty: "advanced",
        duration: "30 min",
        completed: false,
        content: `<div class="p-6"><h3>Crypto Cycles</h3><p>Bull markets, bear markets, accumulation phases...</p></div>`,
        quiz: { questions: [{ question: "What typically happens after a bull market?", options: ["More bull market", "Bear market correction", "Sideways forever", "Instant recovery"], correct: 1, explanation: "After extended bull runs, markets typically correct in bear phases." }] }
    },
    {
        id: 14,
        title: "DeFi Basics",
        icon: "fas fa-cubes",
        difficulty: "intermediate",
        duration: "25 min",
        completed: false,
        content: `<div class="p-6"><h3>Decentralized Finance</h3><p>Lending, yield farming, liquidity pools...</p></div>`,
        quiz: { questions: [{ question: "What is yield farming?", options: ["Growing crypto", "Earning interest by providing liquidity", "Mining Bitcoin", "Day trading"], correct: 1, explanation: "Yield farming = providing liquidity to DeFi protocols to earn interest/rewards." }] }
    },
    {
        id: 15,
        title: "Tax Implications",
        icon: "fas fa-file-invoice-dollar",
        difficulty: "intermediate",
        duration: "20 min",
        completed: false,
        content: `<div class="p-6"><h3>Crypto & Taxes</h3><p>Capital gains, reporting requirements, tracking tools...</p></div>`,
        quiz: { questions: [{ question: "Is crypto taxable?", options: ["No, it's anonymous", "Yes, in most countries", "Only if you sell", "Only Bitcoin"], correct: 1, explanation: "Most countries tax crypto as property/capital gains. Keep records!" }] }
    }
];

// Trading Strategies Module
const tradingStrategies = {
    dca: {
        name: "Dollar Cost Averaging",
        description: "Invest fixed amounts at regular intervals",
        calculator: (amount, frequency, weeks, expectedGrowth = 0.05) => {
            let totalInvested = 0;
            let portfolioValue = 0;
            const history = [];
            
            for (let i = 0; i < weeks; i++) {
                totalInvested += amount;
                // Simple growth model
                portfolioValue = (portfolioValue + amount) * (1 + expectedGrowth / 52);
                history.push({
                    week: i + 1,
                    invested: totalInvested,
                    value: portfolioValue
                });
            }
            
            return {
                totalInvested,
                finalValue: portfolioValue,
                profit: portfolioValue - totalInvested,
                roi: ((portfolioValue - totalInvested) / totalInvested * 100).toFixed(2),
                history
            };
        }
    },
    
    positionSizing: {
        name: "Position Sizing",
        description: "Calculate safe trade sizes based on risk",
        calculate: (accountBalance, riskPercent, entryPrice, stopLossPrice) => {
            const riskAmount = accountBalance * (riskPercent / 100);
            const riskPerUnit = Math.abs(entryPrice - stopLossPrice);
            const positionSize = riskAmount / riskPerUnit;
            const totalPosition = positionSize * entryPrice;
            
            return {
                riskAmount: riskAmount.toFixed(2),
                positionSize: positionSize.toFixed(4),
                totalPosition: totalPosition.toFixed(2),
                riskRewardRatio: riskPerUnit > 0 ? ((entryPrice * 1.5 - entryPrice) / riskPerUnit).toFixed(1) : 'N/A'
            };
        }
    },
    
    riskManagement: {
        rules: [
            "Never risk more than 1-2% per trade",
            "Always use stop losses",
            "Risk/Reward ratio should be at least 1:2",
            "Don't chase pumps - FOMO kills portfolios",
            "Keep 20-30% cash for opportunities",
            "Diversify across 5-10 coins minimum",
            "Take profits gradually - don't get greedy"
        ],
        
        calculateRiskReward: (entry, target, stopLoss) => {
            const risk = Math.abs(entry - stopLoss);
            const reward = Math.abs(target - entry);
            return {
                risk: risk.toFixed(2),
                reward: reward.toFixed(2),
                ratio: risk > 0 ? (reward / risk).toFixed(2) : 'N/A',
                valid: risk > 0 && (reward / risk) >= 2
            };
        }
    }
};

// Market Analysis Module
const marketAnalysis = {
    cycles: {
        phases: [
            { name: "Accumulation", description: "Smart money buying quietly after crash", sentiment: "Fear/Depression" },
            { name: "Early Bull", description: "Prices rising, early adopters entering", sentiment: "Hope/Optimism" },
            { name: "Parabolic", description: "Mainstream FOMO, exponential gains", sentiment: "Euphoria/Greed" },
            { name: "Distribution", description: "Smart money selling to retail", sentiment: "Anxiety/Denial" },
            { name: "Bear Market", description: "Sustained decline, capitulation", sentiment: "Panic/Capitulation" }
        ]
    },
    
    onChainMetrics: {
        metrics: [
            { name: "Exchange Inflows", signal: "High inflows = Selling pressure (bearish)" },
            { name: "HODL Waves", signal: "Long-term holders increasing = Bullish" },
            { name: "MVRV Ratio", signal: {"< 1": "Undervalued", "> 3.5": "Overvalued"} },
            { name: "Network Value to Transactions", signal: "Lower NVT = More utility/activity" }
        ]
    }
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { enhancedLessons, tradingStrategies, marketAnalysis };
}
