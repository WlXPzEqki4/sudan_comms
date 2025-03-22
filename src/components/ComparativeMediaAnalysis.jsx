// import React from 'react';
// import { BarChart, PieChart, LineChart, Map, Globe, ArrowDownUp, Newspaper, User } from 'lucide-react';

// // Fix: Added User icon to replace missing Users icon
// // Note: We'll use the User icon as a replacement since Users isn't available in Lucide

// const ComparativeMediaAnalysis = () => {
//   // Placeholder data structure (unchanged)
//   const analysisData = {
//     title: "Comparative Media Analysis",
//     subtitle: "UAE-Sudan Narrative Treatment Across Media Ecosystems",
//     lastUpdated: "March 18, 2025",
//     source: "PeakMetrics",
//     executiveSummary: "This analysis examines the differential treatment of UAE-Sudan relations and ICJ proceedings across various media landscapes, identifying key narrative trends, influential voices, and regional variations in coverage approaches. The findings reveal significant disparities between Western and MENA region reporting, with implications for strategic communications.",
//     keyInsights: [
//       "Western media coverage emphasizes legal proceedings while minimizing regional context",
//       "MENA outlets demonstrate significant polarization based on state alignment",
//       "Social media discourse shows higher engagement with emotional framing vs. factual reporting",
//       "UAE perspective receives approximately 18% representation in Western coverage vs. 42% in regional outlets",
//       "Narrative trajectory shows increasing criticism in Western outlets following specific ICJ filings"
//     ],
//     mediaMonitoring: {
//       coverage: {
//         total: 3845,
//         western: 1680,
//         mena: 1250,
//         africa: 680,
//         other: 235
//       },
//       sentiment: {
//         positive: 22,
//         neutral: 35,
//         negative: 43
//       },
//       sources: {
//         traditional: 42,
//         social: 58
//       }
//     },
//     regionalComparison: [
//       {
//         region: "Western Media",
//         primaryFraming: "Legal/Regulatory Framework",
//         topSources: ["Washington Post", "The Guardian", "Le Monde"],
//         keyNarratives: ["ICJ Jurisdiction", "Precedent Cases", "International Norms"],
//         uaePerspective: "18% of coverage",
//         notableQuotes: [
//           "Questions remain about UAE involvement despite denials",
//           "Case represents significant test for ICJ authority",
//           "Regional dynamics complicate straightforward legal assessment"
//         ]
//       },
//       {
//         region: "MENA Media",
//         primaryFraming: "Regional Security Dynamics",
//         topSources: ["Al Jazeera", "Al Arabiya", "Al Sharq"],
//         keyNarratives: ["Regional Power Competition", "Historical Context", "Humanitarian Impact"],
//         uaePerspective: "42% of coverage",
//         notableQuotes: [
//           "UAE humanitarian efforts underreported in Western press",
//           "Context of regional destabilization critical to understanding",
//           "Sudan government claims require greater scrutiny"
//         ]
//       },
//       {
//         region: "African Media",
//         primaryFraming: "Impact on Sudan Stability",
//         topSources: ["Sudan Tribune", "The East African", "Daily Nation"],
//         keyNarratives: ["Domestic Implications", "Economic Impact", "Refugee Crisis"],
//         uaePerspective: "24% of coverage",
//         notableQuotes: [
//           "Complex dynamics beyond simple external intervention narrative",
//           "Economic implications overshadowed by political framing",
//           "Local stakeholders view situation differently than international coverage suggests"
//         ]
//       }
//     ],
//     keyInfluencers: [
//       {
//         name: "International Policy Analysts",
//         reach: "High among policy community",
//         primaryNarratives: "Legal precedent, sovereignty implications",
//         engagementLevel: "Medium",
//         potentialEngagement: "Background briefings, evidence dossiers"
//       },
//       {
//         name: "Regional Commentators",
//         reach: "High in MENA region",
//         primaryNarratives: "Historical context, regional stability",
//         engagementLevel: "Medium-High",
//         potentialEngagement: "Direct engagement, facilitated site visits"
//       },
//       {
//         name: "Human Rights Organizations",
//         reach: "High among international institutions",
//         primaryNarratives: "Civilian impact, humanitarian concerns",
//         engagementLevel: "Low",
//         potentialEngagement: "Data sharing, coordinated humanitarian reporting"
//       },
//       {
//         name: "Social Media Influencers",
//         reach: "High among younger demographics",
//         primaryNarratives: "Simplified conflict narratives, moral framing",
//         engagementLevel: "Very Low",
//         potentialEngagement: "Digital fact sheets, visual evidence packages"
//       }
//     ],
//     narrativeTrends: {
//       timeframeMonths: 6,
//       emerging: [
//         "Increased focus on economic implications of regional instability",
//         "Growing examination of parallel regional conflicts as context",
//         "Rising attention to humanitarian operations effectiveness",
//         "New emphasis on diplomatic engagement opportunities",
//         "Developing interest in regional mediation initiatives"
//       ],
//       declining: [
//         "Direct military intervention framing",
//         "Simplified proxy conflict characterization",
//         "Exclusive focus on legal proceedings without context",
//         "Zero-sum regional competition narrative",
//         "Isolated examination of UAE actions without regional context"
//       ]
//     },
//     recommendations: [
//       "Develop region-specific messaging streams with tailored evidence packages",
//       "Prioritize engagement with African media outlets to balance Western framing",
//       "Create dedicated fact-checking resource for journalists covering ICJ proceedings",
//       "Establish regular background briefing cadence with key international journalists",
//       "Develop visual data presentations highlighting humanitarian impact and investment"
//     ]
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-green-900 to-green-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{analysisData.title}</h1>
//             <p className="text-green-100 mt-1">{analysisData.subtitle}</p>
//           </div>
//           <div className="flex items-center space-x-2 text-sm">
//             <span>Last Updated: {analysisData.lastUpdated}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Executive Summary */}
//         <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
//           <h2 className="text-xl font-bold text-green-800 mb-2">Executive Summary</h2>
//           <p className="text-gray-800">{analysisData.executiveSummary}</p>
//         </div>

//         {/* Key Insights */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <BarChart className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Key Insights</h2>
//           </div>
          
//           <div className="bg-gray-50 rounded-lg p-6">
//             <ul className="space-y-3">
//               {analysisData.keyInsights.map((insight, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{insight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Media Monitoring Statistics */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <LineChart className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Media Monitoring Overview</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {/* Coverage Distribution */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Coverage Distribution</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <PieChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                     Western Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.western} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                     MENA Region
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.mena} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
//                     African Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.africa} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
//                     Other
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.other} articles</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Sentiment Analysis */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Sentiment Analysis</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <BarChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-2">
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-green-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.positive}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.positive}% Positive</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-gray-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.neutral}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.neutral}% Neutral</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-red-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.negative}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.negative}% Negative</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Source Distribution */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Source Distribution</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <PieChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
//                     Traditional Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.sources.traditional}%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
//                     Social Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.sources.social}%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Regional Comparison */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Globe className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Regional Media Comparison</h2>
//           </div>
          
//           <div className="space-y-6">
//             {analysisData.regionalComparison.map((region, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <div className={`px-4 py-3 ${
//                   idx === 0 ? 'bg-blue-100 text-blue-800' : 
//                   idx === 1 ? 'bg-green-100 text-green-800' : 
//                   'bg-yellow-100 text-yellow-800'
//                 } font-bold text-lg`}>
//                   {region.region}
//                 </div>
//                 <div className="p-5">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Framing Approach</h4>
//                         <p className="font-medium text-gray-900">{region.primaryFraming}</p>
//                       </div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Top Sources</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {region.topSources.map((source, i) => (
//                             <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{source}</span>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">UAE Perspective Representation</h4>
//                         <p className="font-medium text-gray-900">{region.uaePerspective}</p>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Narratives</h4>
//                         <ul className="space-y-1 list-disc pl-5">
//                           {region.keyNarratives.map((narrative, i) => (
//                             <li key={i} className="text-gray-700">{narrative}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Notable Quotes</h4>
//                         <div className="space-y-2">
//                           {region.notableQuotes.map((quote, i) => (
//                             <div key={i} className="italic text-gray-600 border-l-2 pl-3 py-1 border-gray-300">
//                               "{quote}"
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Influencers */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             {/* FIX: Replaced Users with User */}
//             <User className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Key Influencer Analysis</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Influencer Group
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Audience Reach
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Primary Narratives
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Current Engagement
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Engagement Strategy
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {analysisData.keyInfluencers.map((influencer, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{influencer.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-700">{influencer.reach}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{influencer.primaryNarratives}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         influencer.engagementLevel.includes('High') ? 'bg-green-100 text-green-800' : 
//                         influencer.engagementLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
//                         'bg-red-100 text-red-800'
//                       }`}>
//                         {influencer.engagementLevel}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{influencer.potentialEngagement}</div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Narrative Trends */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <ArrowDownUp className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Narrative Trends</h2>
//             <span className="ml-3 text-sm bg-gray-100 rounded-full px-3 py-1">
//               Past {analysisData.narrativeTrends.timeframeMonths} months
//             </span>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Emerging Narratives */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
//                 <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-800">
//                   ↗
//                 </div>
//                 Emerging Narratives
//               </h3>
//               <ul className="space-y-3">
//                 {analysisData.narrativeTrends.emerging.map((narrative, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       +
//                     </div>
//                     <span className="text-gray-700">{narrative}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Declining Narratives */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
//                 <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-800">
//                   ↘
//                 </div>
//                 Declining Narratives
//               </h3>
//               <ul className="space-y-3">
//                 {analysisData.narrativeTrends.declining.map((narrative, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       -
//                     </div>
//                     <span className="text-gray-700">{narrative}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Recommendations */}
//         <div className="mb-8">
//           <div className="flex items-center mb-6">
//             <Newspaper className="h-6 w-6 text-green-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Strategic Communications Recommendations</h2>
//           </div>
          
//           <div className="bg-green-50 rounded-lg p-6 border border-green-200">
//             <ul className="space-y-4">
//               {analysisData.recommendations.map((recommendation, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-800">{recommendation}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <BarChart className="h-5 w-5 text-green-600 mr-2" />
//             <span className="text-gray-600">Produced by <span className="font-semibold">{analysisData.source}</span></span>
//           </div>
//           <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
//               Download PDF
//             </button>
//             <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
//               View Interactive Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparativeMediaAnalysis;










































// import React from 'react';
// import { BarChart, PieChart, LineChart, Globe, ArrowDownUp, Newspaper, User } from 'lucide-react';

// const ComparativeMediaAnalysis = () => {
//   // Comprehensive data object, incorporating content from both the original structure and the PDF.
//   const analysisData = {
//     title: "STRATEGIC NARRATIVE REPORT",
//     subtitle: "UAE-SUDAN COUNTER-NARRATIVE PLAN – SUPPLEMENT",
//     date: "Friday, March 21, 2025", // Added date from PDF
//     source: "BEACON RED", //Updated with value from PDF
//     confidentiality: "CONFIDENTIAL", // Added confidentiality notice
//     icod: "March 21, 2025, 1200hrs/12pm UAE (GMT+4)", // Added ICOD
//     executiveSummary: {
//       productPurpose: "This report was partially generated by using an LLM Deep Research capability focused specifically on comparing the UAE's media narrative and strategy amid the Sudan-ICJ allegations with how Qatar, Saudi Arabia and Sudan have in shaped conflict narratives, geopolitical situations and legal claims. Key dimensions include media engagement and sentiment across regions, the impact of influencers, strategic communications (short-term vs. long-term messaging), and the effectiveness of each actor's approach in shifting public discourse. Data-driven insights inform recommendations for the UAE's media strategy, distinguishing immediate crisis response (6–12 months) from longer-term reputation management.",
//       situationInGeneral: [
//         "In early 2025, Sudan filed a case at the International Court of Justice (ICJ) accusing the UAE of complicity in genocide during Sudan's ongoing conflict.",
//         "This unprecedented allegation sparked intense global media coverage, overwhelmingly critical towards the UAE.",
//         "The UAE can glean critical insights from comparative analysis to navigate the crisis, repair its reputation, and revert conversations to a supporting nature.",
//         "Experiences of Qatar, Saudi Arabia, and Sudan illustrate both effective tactics and cautionary lessons."
//       ],
//        // Added situation summary.
//       impactForUAE: [
//         "Growing victim-persecutor narrative from Sudan hides the conflict's opacity and forces the UAE onto the back foot.",
//         "The term 'genocide' appears in over half of all mentions (51k+ instances) related to the UAE and Sudan.",
//         "Wider terms like 'war crimes' and 'imperialist' are used in conjunction when discussing the UAE in Sudan.",
//         "Sudan currently possesses the initiative, which must be reclaimed by the UAE."
//       ]
//     },
//     keyInsights: [
//       "Western media coverage emphasizes legal proceedings while minimizing regional context.",
//       "MENA outlets demonstrate significant polarization based on state alignment.",
//       "Social media discourse shows higher engagement with emotional framing vs. factual reporting.",
//       "UAE perspective receives approximately 18% representation in Western coverage vs. 42% in regional outlets.",
//       "Narrative trajectory shows increasing criticism in Western outlets following specific ICJ filings."
//     ],
//     mediaMonitoring: {
//       coverage: {
//         total: 92000, // Updated with number from PDF
//         western: 30000, // Placeholder - need breakdown from data source
//         mena: 40000,   // Placeholder
//         africa: 15000,  // Placeholder
//         other: 7000   // Placeholder
//       },
//       sentiment: {
//         positive: 5,    // Placeholder, needs dynamic update.
//         neutral: 8, // Placeholder
//         negative: 87   // Updated from PDF
//       },
//       sources: {
//         traditional: 42, //Keep, as it aligns with the Regional Media Comparision component.
//         social: 58      //Keep, as it aligns with the Regional Media Comparision component.
//       }
//     },
//      regionalComparison: [
//       {
//         region: "Western Media",
//         primaryFraming: "Legal/Regulatory Framework",
//         topSources: ["Washington Post", "The Guardian", "Le Monde", "Reuters", "AP"], // Expanded
//         keyNarratives: ["ICJ Jurisdiction", "Precedent Cases", "International Norms", "Alleged Atrocities"],
//         uaePerspective: "18% of coverage",
//         notableQuotes: [
//           "Questions remain about UAE involvement despite denials",
//           "Case represents significant test for ICJ authority",
//           "Regional dynamics complicate straightforward legal assessment"
//         ]
//       },
//       {
//         region: "MENA Media",
//         primaryFraming: "Regional Security Dynamics",
//         topSources: ["Al Jazeera", "Al Arabiya", "Al Sharq", "UAE-friendly outlets"], // Expanded
//         keyNarratives: ["Regional Power Competition", "Historical Context", "Humanitarian Impact", "Political Alignments"],
//         uaePerspective: "42% of coverage",
//         notableQuotes: [
//           "UAE humanitarian efforts underreported in Western press",
//           "Context of regional destabilization critical to understanding",
//           "Sudan government claims require greater scrutiny"
//         ]
//       },
//       {
//         region: "African Media",
//         primaryFraming: "Impact on Sudan Stability",
//         topSources: ["Sudan Tribune", "The East African", "Daily Nation"],
//         keyNarratives: ["Domestic Implications", "Economic Impact", "Refugee Crisis", "Foreign Interference"],
//         uaePerspective: "24% of coverage",
//         notableQuotes: [
//           "Complex dynamics beyond simple external intervention narrative",
//           "Economic implications overshadowed by political framing",
//           "Local stakeholders view situation differently than international coverage suggests"
//         ]
//       }
//     ],
//     keyInfluencers: [
//       {
//         name: "International Policy Analysts",
//         reach: "High among policy community",
//         primaryNarratives: "Legal precedent, sovereignty implications",
//         engagementLevel: "Medium",
//         potentialEngagement: "Background briefings, evidence dossiers"
//       },
//       {
//         name: "Regional Commentators",
//         reach: "High in MENA region",
//         primaryNarratives: "Historical context, regional stability",
//         engagementLevel: "Medium-High",
//         potentialEngagement: "Direct engagement, facilitated site visits"
//       },
//       {
//         name: "Human Rights Organizations",
//         reach: "High among international institutions",
//         primaryNarratives: "Civilian impact, humanitarian concerns",
//         engagementLevel: "Low",
//         potentialEngagement: "Data sharing, coordinated humanitarian reporting"
//       },
//       {
//         name: "Social Media Influencers",
//         reach: "High among younger demographics",
//         primaryNarratives: "Simplified conflict narratives, moral framing",
//         engagementLevel: "Very Low",
//         potentialEngagement: "Digital fact sheets, visual evidence packages"
//       },
//        {
//         name: "Sudanese Diaspora & Activists", // Added from PDF analysis
//         reach: "High on social media (X/Twitter)",
//         primaryNarratives: "Sudanese victimhood, UAE complicity",
//         engagementLevel: "Very High (Organic)",
//         potentialEngagement: "Counter-narrative messaging, targeted outreach"
//       },
//       {
//         name: "Pro-UAE GCC Influencers", // Added from PDF analysis
//         reach: "Limited compared to opposing voices",
//         primaryNarratives: "Downplaying accusations, highlighting UAE aid",
//         engagementLevel: "Low",
//         potentialEngagement: "Amplifying pro-UAE messaging, providing alternative perspectives"
//       }
//     ],
//    narrativeTrends: {
//       timeframeMonths: 6,
//       emerging: [
//         "Increased focus on economic implications of regional instability",
//         "Growing examination of parallel regional conflicts as context",
//         "Rising attention to humanitarian operations effectiveness",
//         "New emphasis on diplomatic engagement opportunities",
//         "Developing interest in regional mediation initiatives"
//       ],
//       declining: [
//         "Direct military intervention framing",
//         "Simplified proxy conflict characterization",
//         "Exclusive focus on legal proceedings without context",
//         "Zero-sum regional competition narrative",
//         "Isolated examination of UAE actions without regional context"
//       ]
//     },
//    recommendations: [
//         "Engage Proactively and Shape the Narrative Early: Launch a proactive media campaign saturating traditional and social media with the UAE's perspective and positive contributions.",
//         "Leverage Influencers and Credible Voices: Build a coalition of credible voices to speak on UAE's behalf, including African Union dignitaries, Sudanese community leaders, and journalists.",
//         "Emphasize Transparency and Consistency: Acknowledge concerns to rebut them, provide evidence, and deploy a unified message matrix.",
//         "Short-Term Crisis Containment: Implement a crisis communications task force, provide rapid response rebuttals, highlight humanitarian focus, and partner with media.",
//         "Long-Term Reputation Management: Institutionalize public diplomacy, align UAE's brand with Global South solidarity, implement regular transparency initiatives, and invest in cultural diplomacy.",
//         // Combined and summarized from the PDF's detailed recommendations.
//       ],
//      comparativeAnalysis: {  // Added section to hold comparative analysis data.
//       qatar: {
//         crisis: "2017-2021 Gulf Diplomatic Crisis",
//         strategy: "Swiftly took control of the narrative, invested in PR, leveraged Al Jazeera, highlighted human interest stories.",
//         outcome: "Successfully changed public perception from destabilizer to victim, restored reputation.",
//         keyTactics: [
//           "Embraced domestic grassroots movement.",
//           "International outreach with polished senior figures.",
//           "Enlisted reputable international influencers.",
//           "Emphasized resilience and benevolence.",
//           "Savvy media engagement and a narrative of dignified resistance."
//         ]
//       },
//       saudiArabia: {
//         crisis: "Handling of International Allegations (Khashoggi, Yemen War)",
//         strategy: "Defensive and tightly controlled, mixed sentiment outcomes, heavy-handed media control.",
//         outcome: "Struggles to win Western public sentiment, but secures domestic approval and some regional influence.",
//         keyTactics: [
//           "Initial blanket denials, shifting narratives.",
//           "State-aligned media offensive.",
//           "Leveraged lobbying and PR networks.",
//           "Heavy-handed media control.",
//           "Long-term reputation management through Vision 2030."
//         ]
//       },
//       sudan: {
//         crisis: "2023-2025 Conflict & ICJ Case",
//         strategy: "Tight control of domestic narrative, aggressive push on international stage, leveraging legal avenues.",
//         outcome: "Effectively steered media narratives, garnered empathy, justified hardline stance.",
//         keyTactics: [
//           "State media as a mouthpiece for the army.",
//           "Stifled independent journalism.",
//           "Leveraged legal avenues (ICJ case).",
//           "Framed conflict as legitimate state vs. genocidal militia.",
//           "Engaged African and Global South commentators."
//         ]
//       }
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//        <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 px-8 py-6 text-white">
//         {/*Changed the from and to colors to red-900 to simulate the banner in image*/}
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{analysisData.title}</h1>
//             <p className="text-red-100 mt-1">{analysisData.subtitle}</p>
//              <p className="text-red-100 mt-1">{analysisData.date}</p> {/* Added Date */}
//           </div>
//           <div className="flex items-center space-x-2 text-sm">
//              <span>{analysisData.confidentiality}</span> {/* Added Confidentiality */}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8">
//        {/* Executive Summary */}
//         <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
//           {/*Changed to red to match img*/}
//           <h2 className="text-xl font-bold text-red-800 mb-2">Executive Summary</h2>
//           <h3 className="text-lg font-bold text-red-700 mb-1">Product Purpose</h3>
//           <p className="text-gray-800 mb-4">{analysisData.executiveSummary.productPurpose}</p>
//           <h3 className="text-lg font-bold text-red-700 mb-1">Situation in General</h3>
//           <ul className="list-disc pl-5 space-y-2">
//             {analysisData.executiveSummary.situationInGeneral.map((point, index) => (
//               <li key={index} className="text-gray-800">{point}</li>
//             ))}
//           </ul>
//            <h3 className="text-lg font-bold text-red-700 mb-1 mt-4">Impact for UAE</h3>
//             <ul className="list-disc pl-5 space-y-2">
//               {analysisData.executiveSummary.impactForUAE.map((point, index) => (
//                 <li key={index} className="text-gray-800">{point}</li>
//               ))}
//             </ul>
//         </div>

//         {/* Key Insights */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <BarChart className="h-6 w-6 text-red-600 mr-2" />
//             {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Key Insights</h2>
//           </div>
          
//           <div className="bg-gray-50 rounded-lg p-6">
//             <ul className="space-y-3">
//               {analysisData.keyInsights.map((insight, idx) => (
//                 <li key={idx} className="flex items-start">
//                    <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {/*Changed color to red*/}
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{insight}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//        {/* Media Monitoring Statistics */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <LineChart className="h-6 w-6 text-red-600 mr-2" />
//              {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Media Monitoring Overview</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             {/* Coverage Distribution */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Coverage Distribution</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <PieChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-2">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                     Western Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.western} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                     MENA Region
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.mena} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
//                     African Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.africa} articles</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
//                     Other
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.coverage.other} articles</span>
//                 </div>
//                  <div className="flex justify-between items-center mt-2">
//                   <span className="text-sm font-bold">Total Articles</span>
//                   <span className="font-bold">{analysisData.mediaMonitoring.coverage.total}</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Sentiment Analysis */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Sentiment Analysis</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <BarChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-2">
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-green-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.positive}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.positive}% Positive</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-gray-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.neutral}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.neutral}% Neutral</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-full bg-gray-200 rounded-full h-4">
//                     <div className="bg-red-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.negative}%` }}></div>
//                   </div>
//                   <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.negative}% Negative</span>
//                 </div>
//               </div>
//             </div>
            
//             {/* Source Distribution */}
//             <div className="bg-white border rounded-lg p-4 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Source Distribution</h3>
//               <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
//                 <PieChart className="h-32 w-32 text-gray-400" />
//               </div>
//               <div className="mt-4 space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
//                     Traditional Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.sources.traditional}%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm flex items-center">
//                     <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
//                     Social Media
//                   </span>
//                   <span className="font-medium">{analysisData.mediaMonitoring.sources.social}%</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Regional Comparison */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Globe className="h-6 w-6 text-red-600 mr-2" />
//              {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Regional Media Comparison</h2>
//           </div>
          
//           <div className="space-y-6">
//             {analysisData.regionalComparison.map((region, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <div className={`px-4 py-3 ${
//                   idx === 0 ? 'bg-blue-100 text-blue-800' : 
//                   idx === 1 ? 'bg-green-100 text-green-800' : 
//                   'bg-yellow-100 text-yellow-800'
//                 } font-bold text-lg`}>
//                   {region.region}
//                 </div>
//                 <div className="p-5">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Framing Approach</h4>
//                         <p className="font-medium text-gray-900">{region.primaryFraming}</p>
//                       </div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Top Sources</h4>
//                         <div className="flex flex-wrap gap-2">
//                           {region.topSources.map((source, i) => (
//                             <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{source}</span>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">UAE Perspective Representation</h4>
//                         <p className="font-medium text-gray-900">{region.uaePerspective}</p>
//                       </div>
//                     </div>
                    
//                     <div>
//                       <div className="mb-4">
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Narratives</h4>
//                         <ul className="space-y-1 list-disc pl-5">
//                           {region.keyNarratives.map((narrative, i) => (
//                             <li key={i} className="text-gray-700">{narrative}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-600 mb-1">Notable Quotes</h4>
//                         <div className="space-y-2">
//                           {region.notableQuotes.map((quote, i) => (
//                             <div key={i} className="italic text-gray-600 border-l-2 pl-3 py-1 border-gray-300">
//                               "{quote}"
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Key Influencers */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             {/* FIX: Replaced Users with User */}
//             <User className="h-6 w-6 text-red-600 mr-2" />
//              {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Key Influencer Analysis</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Influencer Group
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Audience Reach
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Primary Narratives
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Current Engagement
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Engagement Strategy
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {analysisData.keyInfluencers.map((influencer, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{influencer.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-700">{influencer.reach}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{influencer.primaryNarratives}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         influencer.engagementLevel.includes('High') ? 'bg-green-100 text-green-800' : 
//                         influencer.engagementLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
//                         'bg-red-100 text-red-800'
//                       }`}>
//                         {influencer.engagementLevel}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{influencer.potentialEngagement}</div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//        {/* Narrative Trends */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <ArrowDownUp className="h-6 w-6 text-red-600 mr-2" />
//              {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Narrative Trends</h2>
//             <span className="ml-3 text-sm bg-gray-100 rounded-full px-3 py-1">
//               Past {analysisData.narrativeTrends.timeframeMonths} months
//             </span>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Emerging Narratives */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
//                 <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-800">
//                   ↗
//                 </div>
//                 Emerging Narratives
//               </h3>
//               <ul className="space-y-3">
//                 {analysisData.narrativeTrends.emerging.map((narrative, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       +
//                     </div>
//                     <span className="text-gray-700">{narrative}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Declining Narratives */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
//                 <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-800">
//                   ↘
//                 </div>
//                 Declining Narratives
//               </h3>
//               <ul className="space-y-3">
//                 {analysisData.narrativeTrends.declining.map((narrative, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       -
//                     </div>
//                     <span className="text-gray-700">{narrative}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Recommendations */}
//         <div className="mb-8">
//           <div className="flex items-center mb-6">
//             <Newspaper className="h-6 w-6 text-red-600 mr-2" />
//              {/*Changed color to red*/}
//             <h2 className="text-2xl font-bold text-gray-900">Strategic Communications Recommendations</h2>
//           </div>
          
//           <div className="bg-red-50 rounded-lg p-6 border border-red-200">
//            {/*Changed colors to red*/}
//             <ul className="space-y-4">
//               {analysisData.recommendations.map((recommendation, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                    {/*Changed color to red*/}
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-800">{recommendation}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//         {/* Comparative Analysis (New Section) */}
//         <div className="mb-10">
//             <div className="flex items-center mb-6">
//                 <BarChart className="h-6 w-6 text-red-600 mr-2"/>
//                 <h2 className="text-2xl font-bold text-gray-900">Comparative Analysis: Key Actors</h2>
//             </div>
//             <div className="space-y-8">
//                 {Object.entries(analysisData.comparativeAnalysis).map(([actor, data]) => (
//                     <div key={actor} className="border rounded-lg p-6">
//                         <h3 className="text-xl font-bold text-gray-900 mb-3">{actor.toUpperCase()}</h3>
//                         <p className="text-gray-700 mb-2"><span className="font-semibold">Crisis:</span> {data.crisis}</p>
//                         <p className="text-gray-700 mb-2"><span className="font-semibold">Strategy:</span> {data.strategy}</p>
//                         <p className="text-gray-700 mb-2"><span className="font-semibold">Outcome:</span> {data.outcome}</p>
//                         <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-1">Key Tactics:</h4>
//                         <ul className="list-disc pl-5 space-y-1">
//                             {data.keyTactics.map((tactic, index) => (
//                                 <li key={index} className="text-gray-700">{tactic}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}
//             </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <BarChart className="h-5 w-5 text-red-600 mr-2" />
//             {/*Changed to red*/}
//             <span className="text-gray-600">Produced by <span className="font-semibold">{analysisData.source}</span></span>
//              <span className="text-gray-600 ml-4">ICOD: {analysisData.icod}</span> {/* Added ICOD */}
//           </div>
//           {/* <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors">
//               Download PDF
//             </button>
//             <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
//               View Interactive Dashboard
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparativeMediaAnalysis;


































import React from 'react';
import { BarChart, PieChart, LineChart, Globe, ArrowDownUp, Newspaper, User } from 'lucide-react';
// Import Recharts components
import {
  BarChart as ReBarChart,  // Rename to avoid conflict with Lucide icon
  Bar,
  PieChart as RePieChart,  // Rename to avoid conflict
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ComparativeMediaAnalysis = () => {
  // ... (analysisData object remains the same as before) ...
    const analysisData = {
    title: "STRATEGIC NARRATIVE REPORT",
    subtitle: "UAE-SUDAN COUNTER-NARRATIVE PLAN – SUPPLEMENT",
    date: "Friday, March 21, 2025", // Added date from PDF
    source: "BEACON RED", //Updated with value from PDF
    confidentiality: "CONFIDENTIAL", // Added confidentiality notice
    icod: "March 21, 2025, 1200hrs/12pm UAE (GMT+4)", // Added ICOD
    executiveSummary: {
      productPurpose: "This report was partially generated by using an LLM Deep Research capability focused specifically on comparing the UAE's media narrative and strategy amid the Sudan-ICJ allegations with how Qatar, Saudi Arabia and Sudan have in shaped conflict narratives, geopolitical situations and legal claims. Key dimensions include media engagement and sentiment across regions, the impact of influencers, strategic communications (short-term vs. long-term messaging), and the effectiveness of each actor's approach in shifting public discourse. Data-driven insights inform recommendations for the UAE's media strategy, distinguishing immediate crisis response (6–12 months) from longer-term reputation management.",
      situationInGeneral: [
        "In early 2025, Sudan filed a case at the International Court of Justice (ICJ) accusing the UAE of complicity in genocide during Sudan's ongoing conflict.",
        "This unprecedented allegation sparked intense global media coverage, overwhelmingly critical towards the UAE.",
        "The UAE can glean critical insights from comparative analysis to navigate the crisis, repair its reputation, and revert conversations to a supporting nature.",
        "Experiences of Qatar, Saudi Arabia, and Sudan illustrate both effective tactics and cautionary lessons."
      ],
       // Added situation summary.
      impactForUAE: [
        "Growing victim-persecutor narrative from Sudan hides the conflict's opacity and forces the UAE onto the back foot.",
        "The term 'genocide' appears in over half of all mentions (51k+ instances) related to the UAE and Sudan.",
        "Wider terms like 'war crimes' and 'imperialist' are used in conjunction when discussing the UAE in Sudan.",
        "Sudan currently possesses the initiative, which must be reclaimed by the UAE."
      ]
    },
    keyInsights: [
      "Western media coverage emphasizes legal proceedings while minimizing regional context.",
      "MENA outlets demonstrate significant polarization based on state alignment.",
      "Social media discourse shows higher engagement with emotional framing vs. factual reporting.",
      "UAE perspective receives approximately 18% representation in Western coverage vs. 42% in regional outlets.",
      "Narrative trajectory shows increasing criticism in Western outlets following specific ICJ filings."
    ],
    mediaMonitoring: {
      coverage: {
        total: 92000, // Updated with number from PDF
        western: 30000, // Placeholder - need breakdown from data source
        mena: 40000,   // Placeholder
        africa: 15000,  // Placeholder
        other: 7000   // Placeholder
      },
      sentiment: {
        positive: 5,    // Placeholder, needs dynamic update.
        neutral: 8, // Placeholder
        negative: 87   // Updated from PDF
      },
      sources: {
        traditional: 42, //Keep, as it aligns with the Regional Media Comparision component.
        social: 58      //Keep, as it aligns with the Regional Media Comparision component.
      }
    },
     regionalComparison: [
      {
        region: "Western Media",
        primaryFraming: "Legal/Regulatory Framework",
        topSources: ["Washington Post", "The Guardian", "Le Monde", "Reuters", "AP"], // Expanded
        keyNarratives: ["ICJ Jurisdiction", "Precedent Cases", "International Norms", "Alleged Atrocities"],
        uaePerspective: "18% of coverage",
        notableQuotes: [
          "Questions remain about UAE involvement despite denials",
          "Case represents significant test for ICJ authority",
          "Regional dynamics complicate straightforward legal assessment"
        ]
      },
      {
        region: "MENA Media",
        primaryFraming: "Regional Security Dynamics",
        topSources: ["Al Jazeera", "Al Arabiya", "Al Sharq", "UAE-friendly outlets"], // Expanded
        keyNarratives: ["Regional Power Competition", "Historical Context", "Humanitarian Impact", "Political Alignments"],
        uaePerspective: "42% of coverage",
        notableQuotes: [
          "UAE humanitarian efforts underreported in Western press",
          "Context of regional destabilization critical to understanding",
          "Sudan government claims require greater scrutiny"
        ]
      },
      {
        region: "African Media",
        primaryFraming: "Impact on Sudan Stability",
        topSources: ["Sudan Tribune", "The East African", "Daily Nation"],
        keyNarratives: ["Domestic Implications", "Economic Impact", "Refugee Crisis", "Foreign Interference"],
        uaePerspective: "24% of coverage",
        notableQuotes: [
          "Complex dynamics beyond simple external intervention narrative",
          "Economic implications overshadowed by political framing",
          "Local stakeholders view situation differently than international coverage suggests"
        ]
      }
    ],
    keyInfluencers: [
      {
        name: "International Policy Analysts",
        reach: "High among policy community",
        primaryNarratives: "Legal precedent, sovereignty implications",
        engagementLevel: "Medium",
        potentialEngagement: "Background briefings, evidence dossiers"
      },
      {
        name: "Regional Commentators",
        reach: "High in MENA region",
        primaryNarratives: "Historical context, regional stability",
        engagementLevel: "Medium-High",
        potentialEngagement: "Direct engagement, facilitated site visits"
      },
      {
        name: "Human Rights Organizations",
        reach: "High among international institutions",
        primaryNarratives: "Civilian impact, humanitarian concerns",
        engagementLevel: "Low",
        potentialEngagement: "Data sharing, coordinated humanitarian reporting"
      },
      {
        name: "Social Media Influencers",
        reach: "High among younger demographics",
        primaryNarratives: "Simplified conflict narratives, moral framing",
        engagementLevel: "Very Low",
        potentialEngagement: "Digital fact sheets, visual evidence packages"
      },
       {
        name: "Sudanese Diaspora & Activists", // Added from PDF analysis
        reach: "High on social media (X/Twitter)",
        primaryNarratives: "Sudanese victimhood, UAE complicity",
        engagementLevel: "Very High (Organic)",
        potentialEngagement: "Counter-narrative messaging, targeted outreach"
      },
      {
        name: "Pro-UAE GCC Influencers", // Added from PDF analysis
        reach: "Limited compared to opposing voices",
        primaryNarratives: "Downplaying accusations, highlighting UAE aid",
        engagementLevel: "Low",
        potentialEngagement: "Amplifying pro-UAE messaging, providing alternative perspectives"
      }
    ],
   narrativeTrends: {
      timeframeMonths: 6,
      emerging: [
        "Increased focus on economic implications of regional instability",
        "Growing examination of parallel regional conflicts as context",
        "Rising attention to humanitarian operations effectiveness",
        "New emphasis on diplomatic engagement opportunities",
        "Developing interest in regional mediation initiatives"
      ],
      declining: [
        "Direct military intervention framing",
        "Simplified proxy conflict characterization",
        "Exclusive focus on legal proceedings without context",
        "Zero-sum regional competition narrative",
        "Isolated examination of UAE actions without regional context"
      ]
    },
   recommendations: [
        "Engage Proactively and Shape the Narrative Early: Launch a proactive media campaign saturating traditional and social media with the UAE's perspective and positive contributions.",
        "Leverage Influencers and Credible Voices: Build a coalition of credible voices to speak on UAE's behalf, including African Union dignitaries, Sudanese community leaders, and journalists.",
        "Emphasize Transparency and Consistency: Acknowledge concerns to rebut them, provide evidence, and deploy a unified message matrix.",
        "Short-Term Crisis Containment: Implement a crisis communications task force, provide rapid response rebuttals, highlight humanitarian focus, and partner with media.",
        "Long-Term Reputation Management: Institutionalize public diplomacy, align UAE's brand with Global South solidarity, implement regular transparency initiatives, and invest in cultural diplomacy.",
        // Combined and summarized from the PDF's detailed recommendations.
      ],
     comparativeAnalysis: {  // Added section to hold comparative analysis data.
      qatar: {
        crisis: "2017-2021 Gulf Diplomatic Crisis",
        strategy: "Swiftly took control of the narrative, invested in PR, leveraged Al Jazeera, highlighted human interest stories.",
        outcome: "Successfully changed public perception from destabilizer to victim, restored reputation.",
        keyTactics: [
          "Embraced domestic grassroots movement.",
          "International outreach with polished senior figures.",
          "Enlisted reputable international influencers.",
          "Emphasized resilience and benevolence.",
          "Savvy media engagement and a narrative of dignified resistance."
        ]
      },
      saudiArabia: {
        crisis: "Handling of International Allegations (Khashoggi, Yemen War)",
        strategy: "Defensive and tightly controlled, mixed sentiment outcomes, heavy-handed media control.",
        outcome: "Struggles to win Western public sentiment, but secures domestic approval and some regional influence.",
        keyTactics: [
          "Initial blanket denials, shifting narratives.",
          "State-aligned media offensive.",
          "Leveraged lobbying and PR networks.",
          "Heavy-handed media control.",
          "Long-term reputation management through Vision 2030."
        ]
      },
      sudan: {
        crisis: "2023-2025 Conflict & ICJ Case",
        strategy: "Tight control of domestic narrative, aggressive push on international stage, leveraging legal avenues.",
        outcome: "Effectively steered media narratives, garnered empathy, justified hardline stance.",
        keyTactics: [
          "State media as a mouthpiece for the army.",
          "Stifled independent journalism.",
          "Leveraged legal avenues (ICJ case).",
          "Framed conflict as legitimate state vs. genocidal militia.",
          "Engaged African and Global South commentators."
        ]
      }
    }
  };

  // Prepare data for Recharts
  const coverageData = [
    { name: 'Western Media', value: analysisData.mediaMonitoring.coverage.western, color: '#0088FE' }, // Blue
    { name: 'MENA Region', value: analysisData.mediaMonitoring.coverage.mena, color: '#00C49F' },   // Green
    { name: 'African Media', value: analysisData.mediaMonitoring.coverage.africa, color: '#FFBB28' }, // Yellow
    { name: 'Other', value: analysisData.mediaMonitoring.coverage.other, color: '#8884d8' },      // Light Purple
  ];

  const sentimentData = [
    { name: 'Positive', value: analysisData.mediaMonitoring.sentiment.positive, fill: '#00C49F' },
    { name: 'Neutral', value: analysisData.mediaMonitoring.sentiment.neutral, fill: '#8884d8' },
    { name: 'Negative', value: analysisData.mediaMonitoring.sentiment.negative, fill: '#FF8042' },
  ];

  const sourceData = [
    { name: 'Traditional Media', value: analysisData.mediaMonitoring.sources.traditional, color: '#8884d8' },
    { name: 'Social Media', value: analysisData.mediaMonitoring.sources.social, color: '#82ca9d' },
  ];
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Banner */}
       <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 px-8 py-6 text-white">
        {/*Changed the from and to colors to red-900 to simulate the banner in image*/}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{analysisData.title}</h1>
            <p className="text-red-100 mt-1">{analysisData.subtitle}</p>
             <p className="text-red-100 mt-1">{analysisData.date}</p> {/* Added Date */}
          </div>
          <div className="flex items-center space-x-2 text-sm">
             <span>{analysisData.confidentiality}</span> {/* Added Confidentiality */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
       {/* Executive Summary */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          {/*Changed to red to match img*/}
          <h2 className="text-xl font-bold text-red-800 mb-2">Executive Summary</h2>
          <h3 className="text-lg font-bold text-red-700 mb-1">Product Purpose</h3>
          <p className="text-gray-800 mb-4">{analysisData.executiveSummary.productPurpose}</p>
          <h3 className="text-lg font-bold text-red-700 mb-1">Situation in General</h3>
          <ul className="list-disc pl-5 space-y-2">
            {analysisData.executiveSummary.situationInGeneral.map((point, index) => (
              <li key={index} className="text-gray-800">{point}</li>
            ))}
          </ul>
           <h3 className="text-lg font-bold text-red-700 mb-1 mt-4">Impact for UAE</h3>
            <ul className="list-disc pl-5 space-y-2">
              {analysisData.executiveSummary.impactForUAE.map((point, index) => (
                <li key={index} className="text-gray-800">{point}</li>
              ))}
            </ul>
        </div>

        {/* Key Insights */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <BarChart className="h-6 w-6 text-red-600 mr-2" />
            {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Key Insights</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              {analysisData.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start">
                   <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                    {/*Changed color to red*/}
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

       {/* Media Monitoring Statistics */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <LineChart className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Media Monitoring Overview</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Coverage Distribution */}
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Coverage Distribution</h3>
              <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
                {/* Recharts Pie Chart */}
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={coverageData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {coverageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              {/* ... (rest of the Coverage Distribution text content remains the same) ... */}
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    Western Media
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.coverage.western} articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    MENA Region
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.coverage.mena} articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    African Media
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.coverage.africa} articles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                    Other
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.coverage.other} articles</span>
                </div>
                 <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-bold">Total Articles</span>
                  <span className="font-bold">{analysisData.mediaMonitoring.coverage.total}</span>
                </div>
              </div>
            </div>

            {/* Sentiment Analysis */}
           <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Sentiment Analysis</h3>
              <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
                {/* Recharts Bar Chart */}
                <ResponsiveContainer width="100%" height="100%">
                  <ReBarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" />
                  </ReBarChart>
                </ResponsiveContainer>
               </div>
              {/* ... (rest of the Sentiment Analysis text content remains the same) ... */}
               <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.positive}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.positive}% Positive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.neutral}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.neutral}% Neutral</span>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: `${analysisData.mediaMonitoring.sentiment.negative}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{analysisData.mediaMonitoring.sentiment.negative}% Negative</span>
                </div>
              </div>
             </div>

            {/* Source Distribution */}
            <div className="bg-white border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Source Distribution</h3>
              <div className="h-52 bg-gray-100 rounded flex items-center justify-center">
                {/* Recharts Pie Chart */}
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-dist-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              {/* ... (rest of the Source Distribution text content remains the same) ... */}
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                    Traditional Media
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.sources.traditional}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    Social Media
                  </span>
                  <span className="font-medium">{analysisData.mediaMonitoring.sources.social}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Comparison */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Globe className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Regional Media Comparison</h2>
          </div>
          
          <div className="space-y-6">
            {analysisData.regionalComparison.map((region, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <div className={`px-4 py-3 ${
                  idx === 0 ? 'bg-blue-100 text-blue-800' : 
                  idx === 1 ? 'bg-green-100 text-green-800' : 
                  'bg-yellow-100 text-yellow-800'
                } font-bold text-lg`}>
                  {region.region}
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Framing Approach</h4>
                        <p className="font-medium text-gray-900">{region.primaryFraming}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Top Sources</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.topSources.map((source, i) => (
                            <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm">{source}</span>
                          ))}
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">UAE Perspective Representation</h4>
                        <p className="font-medium text-gray-900">{region.uaePerspective}</p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Narratives</h4>
                        <ul className="space-y-1 list-disc pl-5">
                          {region.keyNarratives.map((narrative, i) => (
                            <li key={i} className="text-gray-700">{narrative}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-600 mb-1">Notable Quotes</h4>
                        <div className="space-y-2">
                          {region.notableQuotes.map((quote, i) => (
                            <div key={i} className="italic text-gray-600 border-l-2 pl-3 py-1 border-gray-300">
                              "{quote}"
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Influencers */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            {/* FIX: Replaced Users with User */}
            <User className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Key Influencer Analysis</h2>
          </div>
          
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Influencer Group
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Audience Reach
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Primary Narratives
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Current Engagement
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Engagement Strategy
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analysisData.keyInfluencers.map((influencer, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{influencer.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{influencer.reach}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{influencer.primaryNarratives}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        influencer.engagementLevel.includes('High') ? 'bg-green-100 text-green-800' : 
                        influencer.engagementLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {influencer.engagementLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{influencer.potentialEngagement}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

       {/* Narrative Trends */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <ArrowDownUp className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Narrative Trends</h2>
            <span className="ml-3 text-sm bg-gray-100 rounded-full px-3 py-1">
              Past {analysisData.narrativeTrends.timeframeMonths} months
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Emerging Narratives */}
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-green-100 text-green-800">
                  ↗
                </div>
                Emerging Narratives
              </h3>
              <ul className="space-y-3">
                {analysisData.narrativeTrends.emerging.map((narrative, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      +
                    </div>
                    <span className="text-gray-700">{narrative}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Declining Narratives */}
            <div className="border rounded-lg p-5">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-red-100 text-red-800">
                  ↘
                </div>
                Declining Narratives
              </h3>
              <ul className="space-y-3">
                {analysisData.narrativeTrends.declining.map((narrative, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      -
                    </div>
                    <span className="text-gray-700">{narrative}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Newspaper className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Strategic Communications Recommendations</h2>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
           {/*Changed colors to red*/}
            <ul className="space-y-4">
              {analysisData.recommendations.map((recommendation, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                   {/*Changed color to red*/}
                    {idx + 1}
                  </div>
                  <span className="text-gray-800">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Comparative Analysis (New Section) */}
        <div className="mb-10">
            <div className="flex items-center mb-6">
                <BarChart className="h-6 w-6 text-red-600 mr-2"/>
                <h2 className="text-2xl font-bold text-gray-900">Comparative Analysis: Key Actors</h2>
            </div>
            <div className="space-y-8">
                {Object.entries(analysisData.comparativeAnalysis).map(([actor, data]) => (
                    <div key={actor} className="border rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{actor.toUpperCase()}</h3>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Crisis:</span> {data.crisis}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Strategy:</span> {data.strategy}</p>
                        <p className="text-gray-700 mb-2"><span className="font-semibold">Outcome:</span> {data.outcome}</p>
                        <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-1">Key Tactics:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            {data.keyTactics.map((tactic, index) => (
                                <li key={index} className="text-gray-700">{tactic}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            <BarChart className="h-5 w-5 text-red-600 mr-2" />
            {/*Changed to red*/}
            <span className="text-gray-600">Produced by <span className="font-semibold">{analysisData.source}</span></span>
             <span className="text-gray-600 ml-4">ICOD: {analysisData.icod}</span> {/* Added ICOD */}
          </div>
          {/* <div className="flex space-x-4">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors">
              Download PDF
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              View Interactive Dashboard
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComparativeMediaAnalysis;



























