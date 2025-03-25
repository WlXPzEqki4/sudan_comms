// import React, { useState } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// const IntelligencePackageNavigator = ({ onDocumentOpen }) => {
//   // Simplified data structure with consistent naming
//   const sections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes",
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: "Communications Plan",
//       description: "Countering Sudan disinformation narratives",
//       type: "Strategic Framework",
//       source: "VineSight",
//       color: "orange"
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: "Regional Strategy Comparison",
//       description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: "UAE and Sudan Counter Narrative Summary Recommendations",
//       description: "Practical implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: "UAE and Sudan Counter Narrative Detailed Recommendations",
//       description: "Detailed implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//   ];

//   // State to track which section is currently selected
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Get the selected section from index
//   const selectedSection = sections[selectedIndex];

//   // Map color to actual Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Get icon based on document type
//   const getIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Function to handle document opening - defined separately
//   const openDocument = (documentId) => {
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     }
//   };
//   const sectionDetails = {
//     'counter-narrative-plan': {
//       summary: "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//       keyPoints: [
//         "Executive summary of the situation, impact on the UAE, and product purpose.",
//         "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//         "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//         "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//         "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
//         "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//         "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//       ],
//       relatedPDF: "UAE-SUDAN COUNTER-NARRATIVE PLAN",
//     },
//     'comparative-media-analysis': {
//       summary: "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//       relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//     },
//     'communications-plan': {
//       summary: "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It's a more granular, operational plan.",
//       keyPoints: [
//         "About This Communications Plan: States the purpose, scope, and data source.",
//         "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.",
//         "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",
//         "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.",
//         "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.",
//         "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.",
//         "Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).",
//         "Target Audiences: List of key audiences, prioritized strategically.",
//         "Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets."
//       ],
//       relatedPDF: "Communications Plan For Countering Sudan Disinformation",
//     },
//       'regional-strategy-comparison': {
//       summary: "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach.  This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//          "Media Engagement and Sentiment Across Regions"
//       ],
//       relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//     },
// 'counter-narrative-recommendations': {
//   summary: "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//   keyPoints: [
//     "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//     "Content Approach: Strategic mix of formats to maintain narrative control",
//     "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//     "Response Capability: Establishment of monitoring and rapid response systems",
//     "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//     "Implementation Timeline: Phased approach from immediate to long-term activities",
//     "Target Platforms: Focus on high-impact digital channels and audience segments"
//   ],
//   relatedPDF: "XXXXX",
// },
// 'counter-narrative-recommendations_detailed': {
//   summary: "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//   keyPoints: [
//     "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//     "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//     "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//     "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//     "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//     "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//     "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//   ],
//   relatedPDF: "XXXXX",
// }
//   };


//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis, strategic
//         communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {sections.map((section, index) => {
//             const colorClasses = getColorClasses(section.color);
//             return (
//               <div 
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   selectedIndex === index ? `${colorClasses.bg} border-2 ${colorClasses.border}` : 'bg-white'
//                 }`}
//                 onClick={() => setSelectedIndex(index)}
//               >
//                 <div className="flex items-center">
//                   <div className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}>
//                     {getIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
//                         {section.type}
//                       </span>
//                       <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-500' : 'text-gray-400'}`} />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
//                       {/* IMPORTANT: Using an actual button with separate handler to avoid event issues */}
//                       <button 
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           openDocument(section.documentId);
//                         }}
//                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       >
//                         View Document →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {selectedSection && (
//             <>
//               <div className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} text-sm font-semibold mb-4`}>
//                 {selectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//               <p className="text-gray-600 mb-6">{selectedSection.description}</p>
              
//               <p className="text-gray-800 mb-6">{sectionDetails[selectedSection.documentId].summary}</p>
              
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
//               <ul className="space-y-2">
//                 {sectionDetails[selectedSection.documentId].keyPoints.map((point, index) => (
//                   <li key={index} className="flex items-start">
//                     <div className={`${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
//                       {index + 1}
//                     </div>
//                     <span className="text-gray-700">{point}</span>
//                   </li>
//                 ))}
//               </ul>
              
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">{selectedSection.source}</span>
//                 </div>
//                 {/* IMPORTANT: Explicit button with simpler, more reliable click handler */}
//                 <button 
//                   onClick={() => openDocument(selectedSection.documentId)}
//                   className={`${getColorClasses(selectedSection.color).button} text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntelligencePackageNavigator;















































































// import React, { useState } from 'react';
// import {
//   FileText,
//   BarChart,
//   MessageSquare,
//   Globe,
//   AlertTriangle,
//   ChevronRight
// } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//   // Helper to map color to Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-400',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           border: 'border-green-400',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-400',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-400',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Four articles in a 2x2 grid
//   const packageCards = [
//     {
//       id: 1,
//       color: 'blue',
//       title: 'UAE & Sudan Counter Narrative Plan',
//       subheading: 'Comprehensive strategy to defend UAE interests',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//       structure: [
//         'Executive Summary',
//         'Strategic Messaging Framework',
//         'Media Engagement Approach',
//         'Influencer Outreach',
//         'Response Timelines'
//       ],
//       source: 'Beacon Red',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//     },
//     {
//       id: 2,
//       color: 'green',
//       title: 'Comparative Media Analysis',
//       subheading: 'Analysing narrative treatment across global outlets',
//       icon: 'public/Picture_2.png',
//       summary:
//         'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//       structure: [
//         'Coverage Distribution',
//         'Sentiment Analysis',
//         'Key Influencers',
//         'Emerging Trends',
//         'Strategic Recommendations'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//     },
//     {
//       id: 3,
//       color: 'orange',
//       title: 'Communications Plan',
//       subheading: 'Countering Sudan disinformation narratives',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//       structure: [
//         'Disinformation Themes',
//         'Action Plan & Response',
//         'Platform-Specific Tactics',
//         'Stakeholder Engagement',
//         'Monitoring & Evaluation'
//       ],
//       source: 'VineSight',
//       pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//     },
//     {
//       id: 4,
//       color: 'green',
//       title: 'Regional Strategy Comparison',
//       subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//       icon: 'public/Picture_2.png',
//       summary:
//         'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//       structure: [
//         'Case Studies',
//         'Comparative Matrix',
//         'Media Engagement',
//         'Outcome Analysis',
//         'Actionable Insights'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//     }
//   ];

//   // Simple handler for PDF link clicks
//   const handlePdfClick = (link) => {
//     console.log('Opening PDF:', link);
//     window.open(link, "_blank"); // Re-enabled to open the PDF in a new tab
//   };

//   // Handler for document open from the navigator
//   const handleDocumentOpen = (documentId) => {
//     console.log('Document to open:', documentId);
//   };

//   return (
//     <div className="w-full">
//       {/* 2x2 grid of cards */}
//       <section className="mt-8 mb-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Key Intelligence Package Documents
//           </h2>
//           <p className="text-base text-gray-700">
            
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {packageCards.map((item) => {
//             const colorClasses = getColorClasses(item.color);
//             return (
//               <div
//                 key={item.id}
//                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//               >
//                 <div>
//                   <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                   <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                   <p className="text-sm text-gray-700 mt-2 font-medium">
//                     Source: {item.source}
//                   </p>
//                   {/* Use the icon field from packageCards */}
//                   <img
//                     src={item.icon}
//                     alt="Source Icon"
//                     className="h-6 w-6 mt-2"
//                   />
//                   <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                     {item.structure.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-3">
//                   <button
//                     onClick={() => handlePdfClick(item.pdfLink)}
//                     className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* The Navigator component below */}
//       <div className="max-w-7xl mx-auto px-4 mb-16">
//         <IntelligencePackageNavigator onDocumentOpen={handleDocumentOpen} />
//       </div>
//     </div>
//   );
// }

// /**
//  * IntelligencePackageNavigator
//  *  - Make sure this is defined only once in your file or import it from another file
//  */
// function IntelligencePackageNavigator({ onDocumentOpen }) {
//   // Data
//   const navigatorSections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: 'UAE and Sudan Counter Narrative Plan',
//       description: 'Comprehensive strategy to defend UAE interests',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: 'Comparative Media Analysis',
//       description: 'Analysis of narrative treatment across media landscapes',
//       type: 'Supporting Analysis',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: 'Communications Plan',
//       description: 'Countering Sudan disinformation narratives',
//       type: 'Strategic Framework',
//       source: 'VineSight',
//       color: 'orange'
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: 'Regional Strategy Comparison',
//       description: 'Analysis of Qatar, Saudi Arabia and Sudan approaches',
//       type: 'Contextual Intelligence',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: 'UAE and Sudan Counter Narrative Summary Recommendations',
//       description: 'Practical implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: 'UAE and Sudan Counter Narrative Detailed Recommendations',
//       description: 'Detailed implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     }
//   ];

//   // This mapping will let us open the correct PDF for each doc ID
//   const initialDocIdLinks = {
//     'counter-narrative-plan': 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf',
//     'comparative-media-analysis': 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf',
//     'communications-plan': 'public/Communications Plan - Countering Sudan Disinformation.pdf',
//     'regional-strategy-comparison': 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf',
//     'counter-narrative-recommendations': '#',
//     'counter-narrative-recommendations_detailed': '#'
//   };

//   // State for which section is selected
//   const [navSelectedIndex, setNavSelectedIndex] = useState(0);

//   // Memoize navigator section to avoid recalculations
//   const navSelectedSection = navigatorSections[navSelectedIndex];

//   // Tailwind color classes for the Navigator
//   const getNavigatorColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Icon selection for each doc type
//   const getNavigatorIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Dummy content for detail panel
//   const navSectionDetails = {
//     'counter-narrative-plan': {
//       summary:
//         "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//       keyPoints: [
//         "Executive summary of the situation, impact on the UAE, and product purpose.",
//         "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//         "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//         "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//         "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
//         "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//         "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//       ],
//     },
//     'comparative-media-analysis': {
//       summary:
//         "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//     },
//     'communications-plan': {
//       summary:
//         "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It's a more granular, operational plan.",
//       keyPoints: [
//         "About This Communications Plan: States the purpose, scope, and data source.",
//         "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.",
//         "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",
//         "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.",
//         "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.",
//         "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.",
//         "Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).",
//         "Target Audiences: List of key audiences, prioritized strategically.",
//         "Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets."
//       ],
//     },
//     'regional-strategy-comparison': {
//       summary:
//         "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach. This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//         "Media Engagement and Sentiment Across Regions"
//       ],
//     },
//     'counter-narrative-recommendations': {
//       summary:
//         "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//       keyPoints: [
//         "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//         "Content Approach: Strategic mix of formats to maintain narrative control",
//         "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//         "Response Capability: Establishment of monitoring and rapid response systems",
//         "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//         "Implementation Timeline: Phased approach from immediate to long-term activities",
//         "Target Platforms: Focus on high-impact digital channels and audience segments"
//       ],
//     },
//     'counter-narrative-recommendations_detailed': {
//       summary:
//         "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//       keyPoints: [
//         "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//         "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//         "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organisation representatives",
//         "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//         "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//         "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//         "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organisations, and diaspora networks with tailored engagement protocols for each segment"
//       ],
//     }
//   };

//   // handle open doc
//   const handleOpenDocument = (documentId) => {
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     }
//     // Open the matching PDF if it exists
//     if (initialDocIdLinks[documentId]) {
//       window.open(initialDocIdLinks[documentId], "_blank");
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
//         Intelligence Package Contents
//       </h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis,
//         strategic communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {navigatorSections.map((section, idx) => {
//             const colorClasses = getNavigatorColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   navSelectedIndex === idx
//                     ? `${colorClasses.bg} border-2 ${colorClasses.border}`
//                     : 'bg-white'
//                 }`}
//                 onClick={() => setNavSelectedIndex(idx)}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}
//                   >
//                     {getNavigatorIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}
//                       >
//                         {section.type}
//                       </span>
//                       <ChevronRight
//                         className={`h-5 w-5 ${
//                           navSelectedIndex === idx
//                             ? 'text-blue-500'
//                             : 'text-gray-400'
//                         }`}
//                       />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">
//                       {section.title}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">
//                         Source: <span className="font-medium">{section.source}</span>
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleOpenDocument(section.documentId);
//                         }}
//                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       >
//                         View Document →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {navSelectedSection && (
//             <>
//               <div
//                 className={`inline-block px-3 py-1 rounded-full ${
//                   getNavigatorColorClasses(navSelectedSection.color).iconBg
//                 } ${
//                   getNavigatorColorClasses(navSelectedSection.color).text
//                 } text-sm font-semibold mb-4`}
//               >
//                 {navSelectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {navSelectedSection.title}
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 {navSelectedSection.description}
//               </p>
//               <p className="text-gray-800 mb-6">
//                 {navSectionDetails[navSelectedSection.documentId]?.summary}
//               </p>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Key Components:
//               </h3>
//               <ul className="space-y-2">
//                 {navSectionDetails[navSelectedSection.documentId]?.keyPoints.map(
//                   (point, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <div
//                         className={`${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .iconBg
//                         } ${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .text
//                         } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}
//                       >
//                         {idx + 1}
//                       </div>
//                       <span className="text-gray-700">{point}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">
//                     {navSelectedSection.source}
//                   </span>
//                 </div>

//                 <button 
//                   onClick={() => openDocument(selectedSection.documentId)}
//                   className={`${
//                     getNavigatorColorClasses(navSelectedSection.color).button
//                   } text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>

//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





















// import React, { useState } from 'react';
// import {
//   FileText,
//   BarChart,
//   MessageSquare,
//   Globe,
//   AlertTriangle,
//   ChevronRight
// } from 'lucide-react';

// function IntelligencePackageNavigator({ onDocumentOpen }) {
//   // Data
//   const navigatorSections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: 'UAE and Sudan Counter Narrative Plan',
//       description: 'Comprehensive strategy to defend UAE interests',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: 'Comparative Media Analysis',
//       description: 'Analysis of narrative treatment across media landscapes',
//       type: 'Supporting Analysis',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: 'Communications Plan',
//       description: 'Countering Sudan disinformation narratives',
//       type: 'Strategic Framework',
//       source: 'VineSight',
//       color: 'orange'
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: 'Regional Strategy Comparison',
//       description: 'Analysis of Qatar, Saudi Arabia and Sudan approaches',
//       type: 'Contextual Intelligence',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: 'UAE and Sudan Counter Narrative Summary Recommendations',
//       description: 'Practical implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: 'UAE and Sudan Counter Narrative Detailed Recommendations',
//       description: 'Detailed implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     }
//   ];

//   // This mapping will let us open the correct PDF for each doc ID
//   const initialDocIdLinks = {
//     'counter-narrative-plan': 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf',
//     'comparative-media-analysis':
//       'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf',
//     'communications-plan': 'public/Communications Plan - Countering Sudan Disinformation.pdf',
//     'regional-strategy-comparison':
//       'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf',
//     'counter-narrative-recommendations': '#',
//     'counter-narrative-recommendations_detailed': '#'
//   };

//   // State for which section is selected
//   const [navSelectedIndex, setNavSelectedIndex] = useState(0);

//   // State to hold the content to display at the bottom
//   const [bottomContent, setBottomContent] = useState(null);

//   // Memoize navigator section to avoid recalculations
//   const navSelectedSection = navigatorSections[navSelectedIndex];

//   // Tailwind color classes for the Navigator
//   const getNavigatorColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Icon selection for each doc type
//   const getNavigatorIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Dummy content for detail panel
//   const navSectionDetails = {
//     'counter-narrative-plan': {
//       summary:
//         'The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.',
//       keyPoints: [
//         'Executive summary of the situation, impact on the UAE, and product purpose.',
//         'Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.',
//         'Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.',
//         'Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).',
//         'Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.',
//         'Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.',
//         'Timeline: Immediate, Short Term, Medium Term, and Long Term actions.'
//       ],
//       relatedContent: <p>Additional content for counter-narrative-plan</p> // Example
//     },
//     'comparative-media-analysis': {
//       summary:
//         "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//       relatedContent: <p>Additional content for comparative-media-analysis</p> // Example
//     },
//     'communications-plan': {
//       summary:
//         'A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It\'s a more granular, operational plan.',
//       keyPoints: [
//         'About This Communications Plan: States the purpose, scope, and data source.',
//         'Strategic Goals: Reinforce UAE\'s humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.',
//         'Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.',
//         'Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.',
//         'Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.',
//         'Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.',
//         'Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).',
//         'Target Audiences: List of key audiences, prioritized strategically.',
//         'Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets.'
//       ],
//       relatedContent: <p>Additional content for communications-plan</p> // Example
//     },
//     'regional-strategy-comparison': {
//       summary:
//         "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach. This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//         "Media Engagement and Sentiment Across Regions"
//       ],
//       relatedContent: <p>Additional content for regional-strategy-comparison</p> // Example
//     },
//     'counter-narrative-recommendations': {
//       summary:
//         "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//       keyPoints: [
//         "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//         "Content Approach: Strategic mix of formats to maintain narrative control",
//         "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//         "Response Capability: Establishment of monitoring and rapid response systems",
//         "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//         "Implementation Timeline: Phased approach from immediate to long-term activities",
//         "Target Platforms: Focus on high-impact digital channels and audience segments"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations</p> // Example
//     },
//     'counter-narrative-recommendations_detailed': {
//       summary:
//         "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//       keyPoints: [
//         "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//         "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//         "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//         "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//         "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//         "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//         "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations_detailed</p> // Example
//     }
//   };

//   // handle open doc
//   const handleOpenDocument = (documentId) => {
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     }
//     // Open the matching PDF if it exists
//     if (initialDocIdLinks[documentId]) {
//       window.open(initialDocIdLinks[documentId], "_blank");
//     }
//     // Set the bottom content based on documentId
//     setBottomContent(navSectionDetails[documentId]?.relatedContent || null);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
//         Intelligence Package Contents
//       </h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis,
//         strategic communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {navigatorSections.map((section, idx) => {
//             const colorClasses = getNavigatorColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   navSelectedIndex === idx
//                     ? `${colorClasses.bg} border-2 ${colorClasses.border}`
//                     : 'bg-white'
//                 }`}
//                 onClick={() => setNavSelectedIndex(idx)}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}
//                   >
//                     {getNavigatorIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}
//                       >
//                         {section.type}
//                       </span>
//                       <ChevronRight
//                         className={`h-5 w-5 ${
//                           navSelectedIndex === idx
//                             ? 'text-blue-500'
//                             : 'text-gray-400'
//                         }`}
//                       />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">
//                       {section.title}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">
//                         Source: <span className="font-medium">{section.source}</span>
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleOpenDocument(section.documentId);
//                         }}
//                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       >
//                         View Document →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {navSelectedSection && (
//             <>
//               <div
//                 className={`inline-block px-3 py-1 rounded-full ${
//                   getNavigatorColorClasses(navSelectedSection.color).iconBg
//                 } ${
//                   getNavigatorColorClasses(navSelectedSection.color).text
//                 } text-sm font-semibold mb-4`}
//               >
//                 {navSelectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {navSelectedSection.title}
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 {navSelectedSection.description}
//               </p>
//               <p className="text-gray-800 mb-6">
//                 {navSectionDetails[navSelectedSection.documentId]?.summary}
//               </p>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Key Components:
//               </h3>
//               <ul className="space-y-2">
//                 {navSectionDetails[navSelectedSection.documentId]?.keyPoints.map(
//                   (point, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <div
//                         className={`${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .iconBg
//                         } ${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .text
//                         } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}
//                       >
//                         {idx + 1}
//                       </div>
//                       <span className="text-gray-700">{point}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">
//                     {navSelectedSection.source}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => handleOpenDocument(navSelectedSection.documentId)}
//                   className={`${
//                     getNavigatorColorClasses(navSelectedSection.color).button
//                   } text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* New section to display content at the bottom */}
//       {bottomContent && (
//         <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-900 mb-3">
//             Related Content:
//           </h3>
//           {bottomContent}
//         </div>
//       )}
//     </div>
//   );
// }

// export default IntelligencePackageNavigator;































// import React, { useState } from 'react';
// import {
//   FileText,
//   BarChart,
//   MessageSquare,
//   Globe,
//   AlertTriangle,
//   ChevronRight
// } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//   // Helper to map color to Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-400',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           border: 'border-green-400',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-400',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-400',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Four articles in a 2x2 grid
//   const packageCards = [
//     {
//       id: 1,
//       color: 'blue',
//       title: 'UAE & Sudan Counter Narrative Plan',
//       subheading: 'Comprehensive strategy to defend UAE interests',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//       structure: [
//         'Executive Summary',
//         'Strategic Messaging Framework',
//         'Media Engagement Approach',
//         'Influencer Outreach',
//         'Response Timelines'
//       ],
//       source: 'Beacon Red',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//     },
//     {
//       id: 2,
//       color: 'green',
//       title: 'Comparative Media Analysis',
//       subheading: 'Analysing narrative treatment across global outlets',
//       icon: 'public/Picture_2.png',
//       summary:
//         'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//       structure: [
//         'Coverage Distribution',
//         'Sentiment Analysis',
//         'Key Influencers',
//         'Emerging Trends',
//         'Strategic Recommendations'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//     },
//     {
//       id: 3,
//       color: 'orange',
//       title: 'Communications Plan',
//       subheading: 'Countering Sudan disinformation narratives',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//       structure: [
//         'Disinformation Themes',
//         'Action Plan & Response',
//         'Platform-Specific Tactics',
//         'Stakeholder Engagement',
//         'Monitoring & Evaluation'
//       ],
//       source: 'VineSight',
//       pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//     },
//     {
//       id: 4,
//       color: 'green',
//       title: 'Regional Strategy Comparison',
//       subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//       icon: 'public/Picture_2.png',
//       summary:
//         'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//       structure: [
//         'Case Studies',
//         'Comparative Matrix',
//         'Media Engagement',
//         'Outcome Analysis',
//         'Actionable Insights'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//     }
//   ];

//   // Simple handler for PDF link clicks (for the cards)
//   const handlePdfClick = (link) => {
//     console.log('Opening PDF:', link);
//     window.open(link, "_blank");
//   };

//   // Handler for document open from the navigator
//   const handleDocumentOpen = (documentId) => {
//     console.log('Document to open:', documentId);
//   };

//   return (
//     <div className="w-full">
//       {/* 2x2 grid of cards */}
//       <section className="mt-8 mb-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Key Intelligence Package Documents
//           </h2>
//           <p className="text-base text-gray-700">

//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {packageCards.map((item) => {
//             const colorClasses = getColorClasses(item.color);
//             return (
//               <div
//                 key={item.id}
//                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//               >
//                 <div>
//                   <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                   <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                   <p className="text-sm text-gray-700 mt-2 font-medium">
//                     Source: {item.source}
//                   </p>
//                   {/* Use the icon field from packageCards */}
//                   <img
//                     src={item.icon}
//                     alt="Source Icon"
//                     className="h-6 w-6 mt-2"
//                   />
//                   <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                     {item.structure.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-3">
//                   <button
//                     onClick={() => handlePdfClick(item.pdfLink)}
//                     className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* The Navigator component below */}
//       <div className="max-w-7xl mx-auto px-4 mb-16">
//         <IntelligencePackageNavigator onDocumentOpen={handleDocumentOpen} />
//       </div>
//     </div>
//   );
// }

// /**
//  * IntelligencePackageNavigator
//  *  - Make sure this is defined only once in your file or import it from another file
//  */
// function IntelligencePackageNavigator({ onDocumentOpen }) {
//   // Data
//   const navigatorSections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: 'UAE and Sudan Counter Narrative Plan',
//       description: 'Comprehensive strategy to defend UAE interests',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: 'Comparative Media Analysis',
//       description: 'Analysis of narrative treatment across media landscapes',
//       type: 'Supporting Analysis',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: 'Communications Plan',
//       description: 'Countering Sudan disinformation narratives',
//       type: 'Strategic Framework',
//       source: 'VineSight',
//       color: 'orange'
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: 'Regional Strategy Comparison',
//       description: 'Analysis of Qatar, Saudi Arabia and Sudan approaches',
//       type: 'Contextual Intelligence',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: 'UAE and Sudan Counter Narrative Summary Recommendations',
//       description: 'Practical implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: 'UAE and Sudan Counter Narrative Detailed Recommendations',
//       description: 'Detailed implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     }
//   ];

//   // This mapping will let us open the correct PDF for each doc ID - REMOVED
//   const initialDocIdLinks = {
//     'counter-narrative-plan': 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf',
//     'comparative-media-analysis': 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf',
//     'communications-plan': 'public/Communications Plan - Countering Sudan Disinformation.pdf',
//     'regional-strategy-comparison': 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf',
//     'counter-narrative-recommendations': '#',
//     'counter-narrative-recommendations_detailed': '#'
//   };

//   // State for which section is selected
//   const [navSelectedIndex, setNavSelectedIndex] = useState(0);

//   // State to hold the content to display at the bottom
//   const [bottomContent, setBottomContent] = useState(null);

//   // Memoize navigator section to avoid recalculations
//   const navSelectedSection = navigatorSections[navSelectedIndex];

//   // Tailwind color classes for the Navigator
//   const getNavigatorColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Icon selection for each doc type
//   const getNavigatorIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Dummy content for detail panel
//   const navSectionDetails = {
//     'counter-narrative-plan': {
//       summary:
//         "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//       keyPoints: [
//         "Executive summary of the situation, impact on the UAE, and product purpose.",
//         "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//         "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//         "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//         "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
//         "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//         "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//       ],
//       relatedContent: <p>Additional content for counter-narrative-plan</p> // Example
//     },
//     'comparative-media-analysis': {
//       summary:
//         "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//       relatedContent: <p>Additional content for comparative-media-analysis</p> // Example
//     },
//     'communications-plan': {
//       summary:
//         'A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It\'s a more granular, operational plan.',
//       keyPoints: [
//         'About This Communications Plan: States the purpose, scope, and data source.',
//         'Strategic Goals: Reinforce UAE\'s humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.',
//         'Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.',
//         'Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.',
//         'Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.',
//         'Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.',
//         'Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).',
//         'Target Audiences: List of key audiences, prioritized strategically.',
//         'Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets.'
//       ],
//       relatedContent: <p>Additional content for communications-plan</p> // Example
//     },
//     'regional-strategy-comparison': {
//       summary:
//         "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach. This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//         "Media Engagement and Sentiment Across Regions"
//       ],
//       relatedContent: <p>Additional content for regional-strategy-comparison</p> // Example
//     },
//     'counter-narrative-recommendations': {
//       summary:
//         "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//       keyPoints: [
//         "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//         "Content Approach: Strategic mix of formats to maintain narrative control",
//         "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//         "Response Capability: Establishment of monitoring and rapid response systems",
//         "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//         "Implementation Timeline: Phased approach from immediate to long-term activities",
//         "Target Platforms: Focus on high-impact digital channels and audience segments"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations</p> // Example
//     },
//     'counter-narrative-recommendations_detailed': {
//       summary:
//         "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//       keyPoints: [
//         "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//         "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//         "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//         "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//         "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//         "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//         "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations_detailed</p> // Example
//     }
//   };

//   // handle open doc
//   const handleOpenDocument = (documentId) => {
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     }

//     //Remove Window Open function
//     // Open the matching PDF if it exists
//     // if (initialDocIdLinks[documentId]) {
//     //   window.open(initialDocIdLinks[documentId], "_blank");
//     // }

//     // Set the bottom content based on documentId
//     setBottomContent(navSectionDetails[documentId]?.relatedContent || null);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
//         Intelligence Package Contents
//       </h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis,
//         strategic communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {navigatorSections.map((section, idx) => {
//             const colorClasses = getNavigatorColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   navSelectedIndex === idx
//                     ? `${colorClasses.bg} border-2 ${colorClasses.border}`
//                     : 'bg-white'
//                 }`}
//                 onClick={() => setNavSelectedIndex(idx)}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}
//                   >
//                     {getNavigatorIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}
//                       >
//                         {section.type}
//                       </span>
//                       <ChevronRight
//                         className={`h-5 w-5 ${
//                           navSelectedIndex === idx
//                             ? 'text-blue-500'
//                             : 'text-gray-400'
//                         }`}
//                       />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">
//                       {section.title}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">
//                         Source: <span className="font-medium">{section.source}</span>
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleOpenDocument(section.documentId);
//                         }}
//                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       >
//                         View Document →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {navSelectedSection && (
//             <>
//               <div
//                 className={`inline-block px-3 py-1 rounded-full ${
//                   getNavigatorColorClasses(navSelectedSection.color).iconBg
//                 } ${
//                   getNavigatorColorClasses(navSelectedSection.color).text
//                 } text-sm font-semibold mb-4`}
//               >
//                 {navSelectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {navSelectedSection.title}
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 {navSelectedSection.description}
//               </p>
//               <p className="text-gray-800 mb-6">
//                 {navSectionDetails[navSelectedSection.documentId]?.summary}
//               </p>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Key Components:
//               </h3>
//               <ul className="space-y-2">
//                 {navSectionDetails[navSelectedSection.documentId]?.keyPoints.map(
//                   (point, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <div
//                         className={`${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .iconBg
//                         } ${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .text
//                         } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}
//                       >
//                         {idx + 1}
//                       </div>
//                       <span className="text-gray-700">{point}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">
//                     {navSelectedSection.source}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => handleOpenDocument(navSelectedSection.documentId)}
//                   className={`${
//                     getNavigatorColorClasses(navSelectedSection.color).button
//                   } text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* New section to display content at the bottom */}
//       {bottomContent && (
//         <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-900 mb-3">
//             Related Content:
//           </h3>
//           {bottomContent}
//         </div>
//       )}
//     </div>
//   );
// }



































// import React, { useState } from 'react';
// import {
//   FileText,
//   BarChart,
//   MessageSquare,
//   Globe,
//   AlertTriangle,
//   ChevronRight
// } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//   // Helper to map color to Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-400',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           border: 'border-green-400',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-400',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-400',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Four articles in a 2x2 grid
//   const packageCards = [
//     {
//       id: 1,
//       color: 'blue',
//       title: 'UAE & Sudan Counter Narrative Plan',
//       subheading: 'Comprehensive strategy to defend UAE interests',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//       structure: [
//         'Executive Summary',
//         'Strategic Messaging Framework',
//         'Media Engagement Approach',
//         'Influencer Outreach',
//         'Response Timelines'
//       ],
//       source: 'Beacon Red',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//     },
//     {
//       id: 2,
//       color: 'green',
//       title: 'Comparative Media Analysis',
//       subheading: 'Analysing narrative treatment across global outlets',
//       icon: 'public/Picture_2.png',
//       summary:
//         'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//       structure: [
//         'Coverage Distribution',
//         'Sentiment Analysis',
//         'Key Influencers',
//         'Emerging Trends',
//         'Strategic Recommendations'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//     },
//     {
//       id: 3,
//       color: 'orange',
//       title: 'Communications Plan',
//       subheading: 'Countering Sudan disinformation narratives',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//       structure: [
//         'Disinformation Themes',
//         'Action Plan & Response',
//         'Platform-Specific Tactics',
//         'Stakeholder Engagement',
//         'Monitoring & Evaluation'
//       ],
//       source: 'VineSight',
//       pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//     },
//     {
//       id: 4,
//       color: 'green',
//       title: 'Regional Strategy Comparison',
//       subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//       icon: 'public/Picture_2.png',
//       summary:
//         'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//       structure: [
//         'Case Studies',
//         'Comparative Matrix',
//         'Media Engagement',
//         'Outcome Analysis',
//         'Actionable Insights'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//     }
//   ];

//   // Simple handler for PDF link clicks (for the cards)
//   const handlePdfClick = (link) => {
//     console.log('Opening PDF:', link);
//     window.open(link, "_blank");
//   };

//   // Handler for document open from the navigator (passed to the navigator)
//   const handleDocumentOpen = (documentId) => {
//     console.log('Document to open:', documentId);
//   };

//   return (
//     <div className="w-full">
//       {/* 2x2 grid of cards */}
//       <section className="mt-8 mb-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Key Intelligence Package Documents
//           </h2>
//           <p className="text-base text-gray-700">

//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {packageCards.map((item) => {
//             const colorClasses = getColorClasses(item.color);
//             return (
//               <div
//                 key={item.id}
//                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//               >
//                 <div>
//                   <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                   <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                   <p className="text-sm text-gray-700 mt-2 font-medium">
//                     Source: {item.source}
//                   </p>
//                   {/* Use the icon field from packageCards */}
//                   <img
//                     src={item.icon}
//                     alt="Source Icon"
//                     className="h-6 w-6 mt-2"
//                   />
//                   <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                     {item.structure.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-3">
//                   <button
//                     onClick={() => handlePdfClick(item.pdfLink)}
//                     className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* The Navigator component below */}
//       <div className="max-w-7xl mx-auto px-4 mb-16">
//         <IntelligencePackageNavigator onDocumentOpen={handleDocumentOpen} />
//       </div>
//     </div>
//   );
// }

// /**
//  * IntelligencePackageNavigator
//  *  - Make sure this is defined only once in your file or import it from another file
//  */
// function IntelligencePackageNavigator({ onDocumentOpen }) {
//   // Data
//   const navigatorSections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: 'UAE and Sudan Counter Narrative Plan',
//       description: 'Comprehensive strategy to defend UAE interests',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: 'Comparative Media Analysis',
//       description: 'Analysis of narrative treatment across media landscapes',
//       type: 'Supporting Analysis',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: 'Communications Plan',
//       description: 'Countering Sudan disinformation narratives',
//       type: 'Strategic Framework',
//       source: 'VineSight',
//       color: 'orange'
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: 'Regional Strategy Comparison',
//       description: 'Analysis of Qatar, Saudi Arabia and Sudan approaches',
//       type: 'Contextual Intelligence',
//       source: 'PeakMetrics',
//       color: 'green'
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: 'UAE and Sudan Counter Narrative Summary Recommendations',
//       description: 'Practical implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: 'UAE and Sudan Counter Narrative Detailed Recommendations',
//       description: 'Detailed implementation of the counter-narrative strategy',
//       type: 'Primary Deliverable',
//       source: 'Beacon Red',
//       color: 'blue'
//     }
//   ];

//   // State for which section is selected
//   const [navSelectedIndex, setNavSelectedIndex] = useState(0);

//   // State to hold the content to display at the bottom
//   const [bottomContent, setBottomContent] = useState(null);

//   // Memoize navigator section to avoid recalculations
//   const navSelectedSection = navigatorSections[navSelectedIndex];

//   // Tailwind color classes for the Navigator
//   const getNavigatorColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Icon selection for each doc type
//   const getNavigatorIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Dummy content for detail panel
//   const navSectionDetails = {
//     'counter-narrative-plan': {
//       summary:
//         "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//       keyPoints: [
//         "Executive summary of the situation, impact on the UAE, and product purpose.",
//         "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//         "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//         "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//         "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
//         "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//         "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//       ],
//       relatedContent: <p>Additional content for counter-narrative-plan</p> // Example
//     },
//     'comparative-media-analysis': {
//       summary:
//         "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//       relatedContent: <p>Additional content for comparative-media-analysis</p> // Example
//     },
//     'communications-plan': {
//       summary:
//         'A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It\'s a more granular, operational plan.',
//       keyPoints: [
//         'About This Communications Plan: States the purpose, scope, and data source.',
//         'Strategic Goals: Reinforce UAE\'s humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.',
//         'Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.',
//         'Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.',
//         'Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.',
//         'Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.',
//         'Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).',
//         'Target Audiences: List of key audiences, prioritized strategically.',
//         'Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets.'
//       ],
//       relatedContent: <p>Additional content for communications-plan</p> // Example
//     },
//     'regional-strategy-comparison': {
//       summary:
//         "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach. This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//         "Media Engagement and Sentiment Across Regions"
//       ],
//       relatedContent: <p>Additional content for regional-strategy-comparison</p> // Example
//     },
//     'counter-narrative-recommendations': {
//       summary:
//         "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//       keyPoints: [
//         "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//         "Content Approach: Strategic mix of formats to maintain narrative control",
//         "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//         "Response Capability: Establishment of monitoring and rapid response systems",
//         "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//         "Implementation Timeline: Phased approach from immediate to long-term activities",
//         "Target Platforms: Focus on high-impact digital channels and audience segments"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations</p> // Example
//     },
//     'counter-narrative-recommendations_detailed': {
//       summary:
//         "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//       keyPoints: [
//         "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//         "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//         "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//         "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//         "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//         "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//         "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//       ],
//       relatedContent: <p>Additional content for counter-narrative-recommendations_detailed</p> // Example
//     }
//   };

//   // handle open doc (sets detail panel and triggers onDocumentOpen prop)
//   const openDocument = (documentId) => {
//     setNavSelectedIndex(navigatorSections.findIndex(section => section.documentId === documentId));
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     }
//   };

//   // handle open doc (sets detail panel and triggers onDocumentOpen prop) - NOW FOR BOTTOM CONTENT
//   const handleOpenDocument = (documentId) => {
//       // Set the bottom content based on documentId
//       setBottomContent(navSectionDetails[documentId]?.relatedContent || null);
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
//         Intelligence Package Contents
//       </h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis,
//         strategic communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {navigatorSections.map((section, idx) => {
//             const colorClasses = getNavigatorColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   navSelectedIndex === idx
//                     ? `${colorClasses.bg} border-2 ${colorClasses.border}`
//                     : 'bg-white'
//                 }`}
//                 onClick={() => openDocument(section.documentId)}
//               >
//                 <div className="flex items-center">
//                   <div
//                     className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}
//                   >
//                     {getNavigatorIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}
//                       >
//                         {section.type}
//                       </span>
//                       <ChevronRight
//                         className={`h-5 w-5 ${
//                           navSelectedIndex === idx
//                             ? 'text-blue-500'
//                             : 'text-gray-400'
//                         }`}
//                       />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">
//                       {section.title}
//                     </h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">
//                         Source: <span className="font-medium">{section.source}</span>
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           if (onDocumentOpen) {
//                             onDocumentOpen(section.documentId); // Calls onDocumentOpen
//                           }
//                         }}
//                         className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       >
//                         View Document →
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {navSelectedSection && (
//             <>
//               <div
//                 className={`inline-block px-3 py-1 rounded-full ${
//                   getNavigatorColorClasses(navSelectedSection.color).iconBg
//                 } ${
//                   getNavigatorColorClasses(navSelectedSection.color).text
//                 } text-sm font-semibold mb-4`}
//               >
//                 {navSelectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                 {navSelectedSection.title}
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 {navSelectedSection.description}
//               </p>
//               <p className="text-gray-800 mb-6">
//                 {navSectionDetails[navSelectedSection.documentId]?.summary}
//               </p>
//               <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                 Key Components:
//               </h3>
//               <ul className="space-y-2">
//                 {navSectionDetails[navSelectedSection.documentId]?.keyPoints.map(
//                   (point, idx) => (
//                     <li key={idx} className="flex items-start">
//                       <div
//                         className={`${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .iconBg
//                         } ${
//                           getNavigatorColorClasses(navSelectedSection.color)
//                             .text
//                         } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}
//                       >
//                         {idx + 1}
//                       </div>
//                       <span className="text-gray-700">{point}</span>
//                     </li>
//                   )
//                 )}
//               </ul>
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">
//                     {navSelectedSection.source}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => handleOpenDocument(navSelectedSection.documentId)}
//                   className={`${
//                     getNavigatorColorClasses(navSelectedSection.color).button
//                   } text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* New section to display content at the bottom */}
//       {bottomContent && (
//         <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-900 mb-3">
//             Related Content:
//           </h3>
//           {bottomContent}
//         </div>
//       )}
//     </div>
//   );
// }

































// import React, { useState } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//     // Helper to map color to Tailwind classes
//     const getColorClasses = (color) => {
//         switch (color) {
//             case 'blue':
//                 return {
//                     bg: 'bg-blue-50',
//                     border: 'border-blue-400',
//                     iconBg: 'bg-blue-100',
//                     text: 'text-blue-800',
//                     button: 'bg-blue-600 hover:bg-blue-700'
//                 };
//             case 'green':
//                 return {
//                     bg: 'bg-green-50',
//                     border: 'border-green-400',
//                     iconBg: 'bg-green-100',
//                     text: 'text-green-800',
//                     button: 'bg-green-600 hover:bg-green-700'
//                 };
//             case 'orange':
//                 return {
//                     bg: 'bg-orange-50',
//                     border: 'border-orange-400',
//                     iconBg: 'bg-orange-100',
//                     text: 'text-orange-800',
//                     button: 'bg-orange-600 hover:bg-orange-700'
//                 };
//             default:
//                 return {
//                     bg: 'bg-gray-50',
//                     border: 'border-gray-400',
//                     iconBg: 'bg-gray-100',
//                     text: 'text-gray-800',
//                     button: 'bg-gray-600 hover:bg-gray-700'
//                 };
//         }
//     };

//     // Four articles in a 2x2 grid
//     const packageCards = [
//         {
//             id: 1,
//             color: 'blue',
//             title: 'UAE & Sudan Counter Narrative Plan',
//             subheading: 'Comprehensive strategy to defend UAE interests',
//             icon: 'public/Picture_1.png',
//             summary:
//                 'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//             structure: [
//                 'Executive Summary',
//                 'Strategic Messaging Framework',
//                 'Media Engagement Approach',
//                 'Influencer Outreach',
//                 'Response Timelines'
//             ],
//             source: 'Beacon Red',
//             pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//         },
//         {
//             id: 2,
//             color: 'green',
//             title: 'Comparative Media Analysis',
//             subheading: 'Analysing narrative treatment across global outlets',
//             icon: 'public/Picture_2.png',
//             summary:
//                 'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//             structure: [
//                 'Coverage Distribution',
//                 'Sentiment Analysis',
//                 'Key Influencers',
//                 'Emerging Trends',
//                 'Strategic Recommendations'
//             ],
//             source: 'PeakMetrics',
//             pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//         },
//         {
//             id: 3,
//             color: 'orange',
//             title: 'Communications Plan',
//             subheading: 'Countering Sudan disinformation narratives',
//             icon: 'public/Picture_1.png',
//             summary:
//                 'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//             structure: [
//                 'Disinformation Themes',
//                 'Action Plan & Response',
//                 'Platform-Specific Tactics',
//                 'Stakeholder Engagement',
//                 'Monitoring & Evaluation'
//             ],
//             source: 'VineSight',
//             pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//         },
//         {
//             id: 4,
//             color: 'green',
//             title: 'Regional Strategy Comparison',
//             subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//             icon: 'public/Picture_2.png',
//             summary:
//                 'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//             structure: [
//                 'Case Studies',
//                 'Comparative Matrix',
//                 'Media Engagement',
//                 'Outcome Analysis',
//                 'Actionable Insights'
//             ],
//             source: 'PeakMetrics',
//             pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//         }
//     ];

//     // Simple handler for PDF link clicks (for the cards)
//     const handlePdfClick = (link) => {
//         console.log('Opening PDF:', link);
//         window.open(link, "_blank");
//     };

//     // Handler for document open from the navigator (passed to the navigator)
//     const handleDocumentOpen = (documentId) => {
//         console.log('Document to open:', documentId);
//     };

//     return (
//         <div className="w-full">
//             {/* 2x2 grid of cards */}
//             <section className="mt-8 mb-12">
//                 <div className="max-w-7xl mx-auto px-4 text-center">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-2">
//                         Key Intelligence Package Documents
//                     </h2>
//                     <p className="text-base text-gray-700">

//                     </p>
//                 </div>

//                 <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {packageCards.map((item) => {
//                         const colorClasses = getColorClasses(item.color);
//                         return (
//                             <div
//                                 key={item.id}
//                                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//                             >
//                                 <div>
//                                     <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                                     <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                                     <p className="text-sm text-gray-700 mt-2 font-medium">
//                                         Source: {item.source}
//                                     </p>
//                                     {/* Use the icon field from packageCards */}
//                                     <img
//                                         src={item.icon}
//                                         alt="Source Icon"
//                                         className="h-6 w-6 mt-2"
//                                     />
//                                     <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                                         {item.structure.map((point, idx) => (
//                                             <li key={idx}>{point}</li>
//                                         ))}
//                                     </ul>
//                                 </div>

//                                 <div className="mt-3">
//                                     <button
//                                         onClick={() => handlePdfClick(item.pdfLink)}
//                                         className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                                     >
//                                         View PDF
//                                     </button>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>

//             {/* The Navigator component below */}
//             <div className="max-w-7xl mx-auto px-4 mb-16">
//                 <IntelligencePackageNavigator onDocumentOpen={handleDocumentOpen} />
//             </div>
//         </div>
//     );
// }

// /**
//  * IntelligencePackageNavigator
//  *  - Make sure this is defined only once in your file or import it from another file
//  */
// const IntelligencePackageNavigator = ({ onDocumentOpen }) => {
//     // Simplified data structure with consistent naming
//     const sections = [
//         {
//             id: 1,
//             documentId: 'counter-narrative-plan',
//             title: "UAE and Sudan Counter Narrative Plan",
//             description: "Comprehensive strategy to defend UAE interests",
//             type: "Primary Deliverable",
//             source: "Beacon Red",
//             color: "blue"
//         },
//         {
//             id: 2,
//             documentId: 'comparative-media-analysis',
//             title: "Comparative Media Analysis",
//             description: "Analysis of narrative treatment across media landscapes",
//             type: "Supporting Analysis",
//             source: "PeakMetrics",
//             color: "green"
//         },
//         {
//             id: 3,
//             documentId: 'communications-plan',
//             title: "Communications Plan",
//             description: "Countering Sudan disinformation narratives",
//             type: "Strategic Framework",
//             source: "VineSight",
//             color: "orange"
//         },
//         {
//             id: 4,
//             documentId: 'regional-strategy-comparison',
//             title: "Regional Strategy Comparison",
//             description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//             type: "Contextual Intelligence",
//             source: "PeakMetrics",
//             color: "green"
//         },
//         {
//             id: 5,
//             documentId: 'counter-narrative-recommendations',
//             title: "UAE and Sudan Counter Narrative Summary Recommendations",
//             description: "Practical implementation of the counter-narrative strategy",
//             type: "Primary Deliverable",
//             source: "Beacon Red",
//             color: "blue"
//         },
//         {
//             id: 6,
//             documentId: 'counter-narrative-recommendations_detailed',
//             title: "UAE and Sudan Counter Narrative Detailed Recommendations",
//             description: "Detailed implementation of the counter-narrative strategy",
//             type: "Primary Deliverable",
//             source: "Beacon Red",
//             color: "blue"
//         },
//     ];

//     // State to track which section is currently selected
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     // Get the selected section from index
//     const selectedSection = sections[selectedIndex];

//     // Map color to actual Tailwind classes
//     const getColorClasses = (color) => {
//         switch (color) {
//             case 'blue':
//                 return {
//                     bg: 'bg-blue-50',
//                     iconBg: 'bg-blue-100',
//                     text: 'text-blue-800',
//                     border: 'border-blue-400',
//                     button: 'bg-blue-600 hover:bg-blue-700'
//                 };
//             case 'green':
//                 return {
//                     bg: 'bg-green-50',
//                     iconBg: 'bg-green-100',
//                     text: 'text-green-800',
//                     border: 'border-green-400',
//                     button: 'bg-green-600 hover:bg-green-700'
//                 };
//             case 'orange':
//                 return {
//                     bg: 'bg-orange-50',
//                     iconBg: 'bg-orange-100',
//                     text: 'text-orange-800',
//                     border: 'border-orange-400',
//                     button: 'bg-orange-600 hover:bg-orange-700'
//                 };
//             default:
//                 return {
//                     bg: 'bg-gray-50',
//                     iconBg: 'bg-gray-100',
//                     text: 'text-gray-800',
//                     border: 'border-gray-400',
//                     button: 'bg-gray-600 hover:bg-gray-700'
//                 };
//         }
//     };

//     // Get icon based on document type
//     const getIcon = (type) => {
//         switch (type) {
//             case 'Primary Deliverable':
//                 return <FileText className="h-6 w-6" />;
//             case 'Supporting Analysis':
//                 return <BarChart className="h-6 w-6" />;
//             case 'Strategic Framework':
//                 return <MessageSquare className="h-6 w-6" />;
//             case 'Contextual Intelligence':
//                 return <Globe className="h-6 w-6" />;
//             case 'Requirements Document':
//                 return <AlertTriangle className="h-6 w-6" />;
//             default:
//                 return <FileText className="h-6 w-6" />;
//         }
//     };

//     // Function to handle document opening - defined separately
//     const openDocument = (documentId) => {
//         if (onDocumentOpen) {
//             onDocumentOpen(documentId);
//         }
//     };
//     const sectionDetails = {
//         'counter-narrative-plan': {
//             summary: "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//             keyPoints: [
//                 "Executive summary of the situation, impact on the UAE, and product purpose.",
//                 "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//                 "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//                 "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//                 "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
//                 "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//                 "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//             ],
//             relatedPDF: "UAE-SUDAN COUNTER-NARRATIVE PLAN",
//         },
//         'comparative-media-analysis': {
//             summary: "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//             keyPoints: [
//                 "Executive Summary: Overview of the media analysis and key findings.",
//                 "Key Insights: General observations about media coverage.",
//                 "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//                 "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//                 "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//                 "Narrative Trends: Emerging and declining narratives related to the situation.",
//                 "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//                 "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//             ],
//             relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//         },
//         'communications-plan': {
//             summary: "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It's a more granular, operational plan.",
//             keyPoints: [
//                 "About This Communications Plan: States the purpose, scope, and data source.",
//                 "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.",
//                 "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",
//                 "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.",
//                 "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.",
//                 "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.",
//                 "Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).",
//                 "Target Audiences: List of key audiences, prioritized strategically.",
//                 "Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets."
//             ],
//             relatedPDF: "Communications Plan For Countering Sudan Disinformation",
//         },
//         'regional-strategy-comparison': {
//             summary: "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach.  This is a strategic analysis with detailed case studies.",
//             keyPoints: [
//                 "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//                 "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//                 "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//                 "Key Insights and Executive Summary that contextualize the comparisons.",
//                 "Media Engagement and Sentiment Across Regions"
//             ],
//             relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//         },
//         'counter-narrative-recommendations': {
//             summary: "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//             keyPoints: [
//                 "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//                 "Content Approach: Strategic mix of formats to maintain narrative control",
//                 "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//                 "Response Capability: Establishment of monitoring and rapid response systems",
//                 "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//                 "Implementation Timeline: Phased approach from immediate to long-term activities",
//                 "Target Platforms: Focus on high-impact digital channels and audience segments"
//             ],
//             relatedPDF: "XXXXX",
//         },
//         'counter-narrative-recommendations_detailed': {
//             summary: "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//             keyPoints: [
//                 "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//                 "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//                 "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//                 "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//                 "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//                 "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//                 "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//             ],
//             relatedPDF: "XXXXX",
//         }
//     };

//     return (
//         <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
//             <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//                 A multi-layered intelligence fusion approach combining media analysis, strategic
//                 communications, and counter-narrative frameworks.
//             </p>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {/* Left side - Stacked cards */}
//                 <div className="space-y-4">
//                     {sections.map((section, index) => {
//                         const colorClasses = getColorClasses(section.color);
//                         return (
//                             <div
//                                 key={section.id}
//                                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                                     selectedIndex === index ? `${colorClasses.bg} border-2 ${colorClasses.border}` : 'bg-white'
//                                 }`}
//                                 onClick={() => setSelectedIndex(index)}
//                             >
//                                 <div className="flex items-center">
//                                     <div className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}>
//                                         {getIcon(section.type)}
//                                     </div>
//                                     <div className="flex-1">
//                                         <div className="flex justify-between items-center">
//                                             <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
//                                                 {section.type}
//                                             </span>
//                                             <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-500' : 'text-gray-400'}`} />
//                                         </div>
//                                         <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                                         <div className="flex justify-between items-center mt-2">
//                                             <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
//                                             {/* IMPORTANT: Using an actual button with separate handler to avoid event issues */}
//                                             <button
//                                                 onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     openDocument(section.documentId);
//                                                 }}
//                                                 className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                                             >
//                                                 View Document →
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Right side - Detail panel */}
//                 <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//                     {selectedSection && (
//                         <>
//                             <div className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} text-sm font-semibold mb-4`}>
//                                 {selectedSection.type}
//                             </div>
//                             <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//                             <p className="text-gray-600 mb-6">{selectedSection.description}</p>

//                             <p className="text-gray-800 mb-6">{sectionDetails[selectedSection.documentId].summary}</p>

//                             <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
//                             <ul className="space-y-2">
//                                 {sectionDetails[selectedSection.documentId].keyPoints.map((point, index) => (
//                                     <li key={index} className="flex items-start">
//                                         <div className={`${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
//                                             {index + 1}
//                                         </div>
//                                         <span className="text-gray-700">{point}</span>
//                                     </li>
//                                 ))}
//                             </ul>

//                             <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                                 <div>
//                                     <span className="text-sm text-gray-500">Produced by:</span>
//                                     <span className="ml-2 font-semibold">{selectedSection.source}</span>
//                                 </div>
//                                 {/* IMPORTANT: Explicit button with simpler, more reliable click handler */}
//                                 <button
//                                     onClick={() => setSelectedIndex(sections.findIndex(section => section.documentId === selectedSection.documentId))}
//                                     className={`${getColorClasses(selectedSection.color).button} text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                                 >
//                                     Open Full Document
//                                 </button>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };


































import React, { useState } from 'react';
import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

const IntelligencePackageNavigator = ({ onDocumentOpen }) => {
  // Simplified data structure with consistent naming
  const sections = [
    {
      id: 1,
      documentId: 'counter-narrative-plan',
      title: "UAE and Sudan Counter Narrative Plan",
      description: "Comprehensive strategy to defend UAE interests",
      type: "Primary Deliverable",
      source: "Beacon Red",
      color: "blue"
    },
    {
      id: 2,
      documentId: 'comparative-media-analysis',
      title: "Comparative Media Analysis",
      description: "Analysis of narrative treatment across media landscapes",
      type: "Supporting Analysis",
      source: "PeakMetrics",
      color: "green"
    },
    {
      id: 3,
      documentId: 'communications-plan',
      title: "Communications Plan",
      description: "Countering Sudan disinformation narratives",
      type: "Strategic Framework",
      source: "VineSight",
      color: "orange"
    },
    {
      id: 4,
      documentId: 'regional-strategy-comparison',
      title: "Regional Strategy Comparison",
      description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
      type: "Contextual Intelligence",
      source: "PeakMetrics",
      color: "green"
    },
    {
      id: 5,
      documentId: 'counter-narrative-recommendations',
      title: "UAE and Sudan Counter Narrative Summary Recommendations",
      description: "Practical implementation of the counter-narrative strategy",
      type: "Primary Deliverable",
      source: "Beacon Red",
      color: "blue"
    },
    {
      id: 6,
      documentId: 'counter-narrative-recommendations_detailed',
      title: "UAE and Sudan Counter Narrative Detailed Recommendations",
      description: "Detailed implementation of the counter-narrative strategy",
      type: "Primary Deliverable",
      source: "Beacon Red",
      color: "blue"
    },
  ];

  // State to track which section is currently selected
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get the selected section from index
  const selectedSection = sections[selectedIndex];

  // Map color to actual Tailwind classes
  const getColorClasses = (color) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          iconBg: 'bg-blue-100',
          text: 'text-blue-800',
          border: 'border-blue-400',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          iconBg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-400',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          iconBg: 'bg-orange-100',
          text: 'text-orange-800',
          border: 'border-orange-400',
          button: 'bg-orange-600 hover:bg-orange-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          iconBg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-400',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  // Get icon based on document type
  const getIcon = (type) => {
    switch (type) {
      case 'Primary Deliverable':
        return <FileText className="h-6 w-6" />;
      case 'Supporting Analysis':
        return <BarChart className="h-6 w-6" />;
      case 'Strategic Framework':
        return <MessageSquare className="h-6 w-6" />;
      case 'Contextual Intelligence':
        return <Globe className="h-6 w-6" />;
      case 'Requirements Document':
        return <AlertTriangle className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  // Function to handle document opening - defined separately
  const openDocument = (documentId) => {
    if (onDocumentOpen) {
      onDocumentOpen(documentId);
    }
  };
  const sectionDetails = {
    'counter-narrative-plan': {
      summary: "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
      keyPoints: [
        "Executive summary of the situation, impact on the UAE, and product purpose.",
        "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
        "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
        "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
        "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
        "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
        "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
      ],
      relatedPDF: "UAE-SUDAN COUNTER-NARRATIVE PLAN",
    },
    'comparative-media-analysis': {
      summary: "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
      keyPoints: [
        "Executive Summary: Overview of the media analysis and key findings.",
        "Key Insights: General observations about media coverage.",
        "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
        "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
        "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
        "Narrative Trends: Emerging and declining narratives related to the situation.",
        "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
        "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
      ],
      relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
    },
    'communications-plan': {
      summary: "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It's a more granular, operational plan.",
      keyPoints: [
        "About This Communications Plan: States the purpose, scope, and data source.",
        "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.",
        "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",
        "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.",
        "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.",
        "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.",
        "Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).",
        "Target Audiences: List of key audiences, prioritized strategically.",
        "Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets."
      ],
      relatedPDF: "Communications Plan For Countering Sudan Disinformation",
    },
      'regional-strategy-comparison': {
      summary: "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach.  This is a strategic analysis with detailed case studies.",
      keyPoints: [
        "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
        "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
        "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
        "Key Insights and Executive Summary that contextualize the comparisons.",
         "Media Engagement and Sentiment Across Regions"
      ],
      relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
    },
    'counter-narrative-recommendations': {
      summary: "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
      keyPoints: [
        "Media Strategy: Coordinated outreach across regional outlets and social platforms",
        "Content Approach: Strategic mix of formats to maintain narrative control",
        "Stakeholder Engagement: Framework for influencer and diplomatic communications",
        "Response Capability: Establishment of monitoring and rapid response systems",
        "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
        "Implementation Timeline: Phased approach from immediate to long-term activities",
        "Target Platforms: Focus on high-impact digital channels and audience segments"
      ],
      relatedPDF: "XXXXX",
    },
    'counter-narrative-recommendations_detailed': {
      summary: "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
      keyPoints: [
        "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
        "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
        "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
        "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
        "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
        "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
        "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
      ],
      relatedPDF: "XXXXX",
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
      <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        A multi-layered intelligence fusion approach combining media analysis, strategic
        communications, and counter-narrative frameworks.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side - Stacked cards */}
        <div className="space-y-4">
          {sections.map((section, index) => {
            const colorClasses = getColorClasses(section.color);
            return (
              <div
                key={section.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                  selectedIndex === index ? `${colorClasses.bg} border-2 ${colorClasses.border}` : 'bg-white'
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}>
                    {getIcon(section.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
                        {section.type}
                      </span>
                      <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-500' : 'text-gray-400'}`} />
                    </div>
                    <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
                      {/* IMPORTANT: Using an actual button with separate handler to avoid event issues */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openDocument(section.documentId);
                        }}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        View Document →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right side - Detail panel */}
        <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
          {selectedSection && (
            <>
              <div className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} text-sm font-semibold mb-4`}>
                {selectedSection.type}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
              <p className="text-gray-600 mb-6">{selectedSection.description}</p>

              <p className="text-gray-800 mb-6">{sectionDetails[selectedSection.documentId].summary}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
              <ul className="space-y-2">
                {sectionDetails[selectedSection.documentId].keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Produced by:</span>
                  <span className="ml-2 font-semibold">{selectedSection.source}</span>
                </div>
                {/* IMPORTANT: Explicit button with simpler, more reliable click handler */}
                <button
                  onClick={() => openDocument(selectedSection.documentId)}
                  className={`${getColorClasses(selectedSection.color).button} text-white px-4 py-2 rounded-lg text-sm font-medium`}
                >
                  Open Full Document
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntelligencePackageNavigator;


































// import React, { useState, useEffect } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//   // Helper to map color to Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-400',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           border: 'border-green-400',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-400',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-400',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Four articles in a 2x2 grid
//   const packageCards = [
//     {
//       id: 1,
//       color: 'blue',
//       title: 'UAE & Sudan Counter Narrative Plan',
//       subheading: 'Comprehensive strategy to defend UAE interests',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//       structure: [
//         'Executive Summary',
//         'Strategic Messaging Framework',
//         'Media Engagement Approach',
//         'Influencer Outreach',
//         'Response Timelines'
//       ],
//       source: 'Beacon Red',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//     },
//     {
//       id: 2,
//       color: 'green',
//       title: 'Comparative Media Analysis',
//       subheading: 'Analysing narrative treatment across global outlets',
//       icon: 'public/Picture_2.png',
//       summary:
//         'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//       structure: [
//         'Coverage Distribution',
//         'Sentiment Analysis',
//         'Key Influencers',
//         'Emerging Trends',
//         'Strategic Recommendations'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//     },
//     {
//       id: 3,
//       color: 'orange',
//       title: 'Communications Plan',
//       subheading: 'Countering Sudan disinformation narratives',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//       structure: [
//         'Disinformation Themes',
//         'Action Plan & Response',
//         'Platform-Specific Tactics',
//         'Stakeholder Engagement',
//         'Monitoring & Evaluation'
//       ],
//       source: 'VineSight',
//       pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//     },
//     {
//       id: 4,
//       color: 'green',
//       title: 'Regional Strategy Comparison',
//       subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//       icon: 'public/Picture_2.png',
//       summary:
//         'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//       structure: [
//         'Case Studies',
//         'Comparative Matrix',
//         'Media Engagement',
//         'Outcome Analysis',
//         'Actionable Insights'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//     }
//   ];

//   // Simple handler for PDF link clicks (for the cards)
//   const handlePdfClick = (link) => {
//     console.log('Opening PDF:', link);
//     window.open(link, "_blank");
//   };

//   // Handler for document open from the navigator (passed to the navigator)
//   const [selectedDocument, setSelectedDocument] = useState(null); // Track the selected document
//   const [fullDocument, setFullDocument] = useState(null); // New state for full document

//   const handleDocumentOpen = (documentId) => {
//     console.log('handleDocumentOpen called with:', documentId);
//     setSelectedDocument(documentId);  // Update state when a document is opened
//   };

//   const handleFullDocumentOpen = (documentId) => {
//     console.log('handleFullDocumentOpen called with:', documentId);
//     setFullDocument(documentId);  // Update the *new* state variable
//   };

//   useEffect(() => {
//     console.log('selectedDocument state updated:', selectedDocument);
//   }, [selectedDocument]);

//   useEffect(() => {
//     console.log('fullDocument state updated:', fullDocument);
//   }, [fullDocument]);

//   // Function to render the selected document's content (example)
//   const renderDocumentContent = () => {
//     if (!fullDocument) { // Use fullDocument instead of selectedDocument
//       console.log("No full document selected, rendering null");
//       return <p>Please select a full document to view.</p>;  // Or a default message/component
//     }

//     // Implement logic to render the content based on the fullDocument id
//     // This can be a switch statement, a component mapping, etc.
//     // For now, just a placeholder

//     // Sample Content
//     const contentMap = {
//       'counter-narrative-plan': <p>Content for: counter-narrative-plan - FULL</p>,
//       'comparative-media-analysis': <p>Content for: comparative-media-analysis - FULL</p>,
//       'communications-plan': <p>Content for: communications-plan - FULL</p>,
//       'regional-strategy-comparison': <p>Content for: regional-strategy-comparison - FULL</p>,
//       'counter-narrative-recommendations': <p>Content for: counter-narrative-recommendations - FULL</p>,
//       'counter-narrative-recommendations_detailed': <p>Content for: counter-narrative-recommendations_detailed - FULL</p>
//     };

//     const content = contentMap[fullDocument] || <p>No full content available for this document.</p>; //Use fullDocument

//     return (
//       <div className="mt-8 p-4 bg-gray-100 rounded-md">
//         <h3>Content for document: {fullDocument}</h3> {/* Use fullDocument */}
//         {content}
//         {/* Add the actual content rendering logic here */}
//       </div>
//     );
//   };


//   return (
//     <div className="w-full">
//       {/* 2x2 grid of cards */}
//       <section className="mt-8 mb-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Key Intelligence Package Documents
//           </h2>
//           <p className="text-base text-gray-700">

//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {packageCards.map((item) => {
//             const colorClasses = getColorClasses(item.color);
//             return (
//               <div
//                 key={item.id}
//                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//               >
//                 <div>
//                   <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                   <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                   <p className="text-sm text-gray-700 mt-2 font-medium">
//                     Source: {item.source}
//                   </p>
//                   {/* Use the icon field from packageCards */}
//                   <img
//                     src={item.icon}
//                     alt="Source Icon"
//                     className="h-6 w-6 mt-2"
//                   />
//                   <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                     {item.structure.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-3">
//                   <button
//                     onClick={() => handlePdfClick(item.pdfLink)}
//                     className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* The Navigator component below */}
//       <div className="max-w-7xl mx-auto px-4 mb-16">
//         <IntelligencePackageNavigator onDocumentOpen={handleDocumentOpen} onFullDocumentOpen={handleFullDocumentOpen} />
//       </div>

//       {/* Conditionally render the selected document content */}
//       {renderDocumentContent()}
//     </div>
//   );
// }

// /**
//  * IntelligencePackageNavigator
//  */
// const IntelligencePackageNavigator = ({ onDocumentOpen, onFullDocumentOpen }) => {
//   // Simplified data structure with consistent naming
//   const sections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes",
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: "Communications Plan",
//       description: "Countering Sudan disinformation narratives",
//       type: "Strategic Framework",
//       source: "VineSight",
//       color: "orange"
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: "Regional Strategy Comparison",
//       description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: "UAE and Sudan Counter Narrative Summary Recommendations",
//       description: "Practical implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: "UAE and Sudan Counter Narrative Detailed Recommendations",
//       description: "Detailed implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//   ];

//   // State to track which section is currently selected
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   // Get the selected section from index
//   const selectedSection = sections[selectedIndex];

//   // Map color to actual Tailwind classes
//   const getColorClasses = (color) => {
//     switch (color) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Get icon based on document type
//   const getIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // Function to handle document opening - defined separately
//   const openDocument = (documentId) => {
//     console.log('openDocument in IntelligencePackageNavigator called with:', documentId);
//     if (onDocumentOpen) {
//       console.log('onDocumentOpen prop exists, calling it with:', documentId);
//       onDocumentOpen(documentId);
//     } else {
//       console.warn('onDocumentOpen prop is not defined!');
//     }
//   };

//   const openFullDocument = (documentId) => {
//     console.log('openFullDocument in IntelligencePackageNavigator called with:', documentId);
//     if (onFullDocumentOpen) {
//       console.log('onFullDocumentOpen prop exists, calling it with:', documentId);
//       onFullDocumentOpen(documentId);
//     } else {
//       console.warn('onFullDocumentOpen prop is not defined!');
//     }
//   };


//   const sectionDetails = {
//     'counter-narrative-plan': {
//       summary: "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan. It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols. It focuses on how to implement a counter-narrative campaign.",
//       keyPoints: [
//         "Executive summary of the situation, impact on the UAE, and product purpose.",
//         "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.",
//         "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.",
//         "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).",
//         "Action Plan: Core tenants: High-level principles for the counter-disinformation effort.",
//         "Response Strategy: Guidelines, implementation process, factual database usage, and tiering system.",
//         "Timeline: Immediate, Short Term, Medium Term, and Long Term actions."
//       ],
//       relatedPDF: "UAE-SUDAN COUNTER-NARRATIVE PLAN",
//     },
//     'comparative-media-analysis': {
//       summary: "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan. It focuses on understanding the media landscape and benchmarking against other actors.",
//       keyPoints: [
//         "Executive Summary: Overview of the media analysis and key findings.",
//         "Key Insights: General observations about media coverage.",
//         "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.",
//         "Regional Media Comparison: Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.",
//         "Key Influencer Analysis: Identification and analysis of key influencers and their engagement.",
//         "Narrative Trends: Emerging and declining narratives related to the situation.",
//         "Strategic Communications Recommendations: High-level recommendations based on the analysis.",
//         "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations."
//       ],
//       relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//     },
//     'communications-plan': {
//       summary: "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination. It's a more granular, operational plan.",
//       keyPoints: [
//         "About This Communications Plan: States the purpose, scope, and data source.",
//         "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.",
//         "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",
//         "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.",
//         "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.",
//         "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.",
//         "Priority Platforms: Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).",
//         "Target Audiences: List of key audiences, prioritized strategically.",
//         "Appendices (placeholders): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets."
//       ],
//       relatedPDF: "Communications Plan For Countering Sudan Disinformation",
//     },
//     'regional-strategy-comparison': {
//       summary: "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach.  This is a strategic analysis with detailed case studies.",
//       keyPoints: [
//         "Strategy Comparison Matrix: A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.",
//         "Case Studies: Detailed analysis of each country's (Qatar, Saudi Arabia, and Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.",
//         "Strategic Recommendations: Actionable recommendations based on the comparative analysis.",
//         "Key Insights and Executive Summary that contextualize the comparisons.",
//         "Media Engagement and Sentiment Across Regions"
//       ],
//       relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies",
//     },
//     'counter-narrative-recommendations': {
//       summary: "Executive overview of strategic approaches to counter critical narratives against the UAE regarding Sudan, outlining key channels and tactical recommendations.",
//       keyPoints: [
//         "Media Strategy: Coordinated outreach across regional outlets and social platforms",
//         "Content Approach: Strategic mix of formats to maintain narrative control",
//         "Stakeholder Engagement: Framework for influencer and diplomatic communications",
//         "Response Capability: Establishment of monitoring and rapid response systems",
//         "Messaging Framework: Core themes emphasizing humanitarian efforts and refuting allegations",
//         "Implementation Timeline: Phased approach from immediate to long-term activities",
//         "Target Platforms: Focus on high-impact digital channels and audience segments"
//       ],
//       relatedPDF: "XXXXX",
//     },
//     'counter-narrative-recommendations_detailed': {
//       summary: "Comprehensive tactical blueprint detailing specific, actionable strategies to counter critical narratives against the UAE regarding Sudan, with detailed implementation guidance across multiple communication channels, content formats, stakeholder engagement approaches, and timeline-based execution plans.",
//       keyPoints: [
//         "Regional Media Engagement: Detailed tactics including press briefings, exclusive interviews, media partnerships, op-ed placements, and tailored messaging for Arabic, English, and French language outlets with explicit publication targets and frequency recommendations",
//         "Digital Content Strategy: Comprehensive social media campaign framework with platform-specific posting cadence (4-6 times weekly), content calendar, hashtag strategy, and detailed specifications for short-form videos (30-90 seconds), infographics, fact-sheets, and interactive content",
//         "Influencer Ecosystem Development: Detailed framework for identifying, vetting, and activating credible voices including humanitarian experts, academic authorities, regional policy analysts, diaspora leaders, and multilateral organization representatives",
//         "24/7 Rapid Response Infrastructure: Technical specifications for narrative intelligence monitoring systems, staffing requirements for dedicated response teams, pre-approved messaging templates, and cross-platform coordination protocols",
//         "Comprehensive Messaging Architecture: Detailed talking points highlighting UAE's $100M+ humanitarian contributions, peace mediation efforts, South-South cooperation initiatives, bilateral economic partnerships, with specific data points and case studies to refute allegations",
//         "Detailed Implementation Roadmap: Specific activities mapped across immediate activation (0-1 month), tactical deployment (2-3 months), strategic embedding (4-6 months), and sustained engagement (6+ months) phases",
//         "Audience Segmentation Analysis: Detailed profiling of priority stakeholders including international media, regional opinion leaders, diplomatic communities, multilateral organizations, and diaspora networks with tailored engagement protocols for each segment"
//       ],
//       relatedPDF: "XXXXX",
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis, strategic
//         communications, and counter-narrative frameworks.
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {sections.map((section, index) => {
//             const colorClasses = getColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   selectedIndex === index ? `${colorClasses.bg} border-2 ${colorClasses.border}` : 'bg-white'
//                 }`}
//                 onClick={() => {
//                     setSelectedIndex(index);
//                     openDocument(section.documentId);
//                 }}
//               >
//                 <div className="flex items-center">
//                   <div className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}>
//                     {getIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
//                         {section.type}
//                       </span>
//                       <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-500' : 'text-gray-400'}`} />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {selectedSection && (
//             <>
//               <div className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} text-sm font-semibold mb-4`}>
//                 {selectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//               <p className="text-gray-600 mb-6">{selectedSection.description}</p>

//               <p className="text-gray-800 mb-6">{sectionDetails[selectedSection.documentId].summary}</p>

//               <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
//               <ul className="space-y-2">
//                 {sectionDetails[selectedSection.documentId].keyPoints.map((point, index) => (
//                   <li key={index} className="flex items-start">
//                     <div className={`${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
//                       {index + 1}
//                     </div>
//                     <span className="text-gray-700">{point}</span>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">{selectedSection.source}</span>
//                 </div>
//                   {/* IMPORTANT: Explicit button with simpler, more reliable click handler */}
//                   <button
//                       onClick={() => openFullDocument(selectedSection.documentId)}
//                       className={`${getColorClasses(selectedSection.color).button} text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                   >
//                       Open Full Document
//                   </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };































// import React, { useState, useEffect } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// /**
//  * MAIN PAGE COMPONENT
//  */
// export default function UaeSudanStrategicCommunications() {
//   // Helper to map colour to Tailwind classes
//   const getColorClasses = (colour) => {
//     switch (colour) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           border: 'border-blue-400',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           border: 'border-green-400',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           border: 'border-orange-400',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           border: 'border-gray-400',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Four articles in a 2x2 grid (package cards)
//   const packageCards = [
//     {
//       id: 1,
//       color: 'blue',
//       title: 'UAE & Sudan Counter Narrative Plan',
//       subheading: 'Comprehensive strategy to defend UAE interests',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A concise overview describing how this plan outlines immediate and longer-term tactics to safeguard and promote the UAE’s position regarding Sudan.',
//       structure: [
//         'Executive Summary',
//         'Strategic Messaging Framework',
//         'Media Engagement Approach',
//         'Influencer Outreach',
//         'Response Timelines'
//       ],
//       source: 'Beacon Red',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf'
//     },
//     {
//       id: 2,
//       color: 'green',
//       title: 'Comparative Media Analysis',
//       subheading: 'Analysing narrative treatment across global outlets',
//       icon: 'public/Picture_2.png',
//       summary:
//         'Compares coverage from Western, MENA, and African sources to highlight key themes, sentiments, and influential voices.',
//       structure: [
//         'Coverage Distribution',
//         'Sentiment Analysis',
//         'Key Influencers',
//         'Emerging Trends',
//         'Strategic Recommendations'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf'
//     },
//     {
//       id: 3,
//       color: 'orange',
//       title: 'Communications Plan',
//       subheading: 'Countering Sudan disinformation narratives',
//       icon: 'public/Picture_1.png',
//       summary:
//         'A tactical plan for rebutting misleading claims and shaping public opinion. It includes platform-specific messaging tactics, rapid response protocols, and coordination with NGOs.',
//       structure: [
//         'Disinformation Themes',
//         'Action Plan & Response',
//         'Platform-Specific Tactics',
//         'Stakeholder Engagement',
//         'Monitoring & Evaluation'
//       ],
//       source: 'VineSight',
//       pdfLink: 'public/Communications Plan - Countering Sudan Disinformation.pdf'
//     },
//     {
//       id: 4,
//       color: 'green',
//       title: 'Regional Strategy Comparison',
//       subheading: 'Comparative analysis of Qatar, Saudi Arabia, and Sudan approaches',
//       icon: 'public/Picture_2.png',
//       summary:
//         'By examining how neighbouring countries respond to international scrutiny, this study extracts key lessons to inform the UAE’s counter-narrative.',
//       structure: [
//         'Case Studies',
//         'Comparative Matrix',
//         'Media Engagement',
//         'Outcome Analysis',
//         'Actionable Insights'
//       ],
//       source: 'PeakMetrics',
//       pdfLink: 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf'
//     }
//   ];

//   // Mapping of document IDs to PDF links (used for the "Open Full Document" action)
//   const pdfLinkMapping = {
//     'counter-narrative-plan': 'public/20250321-UAE and Sudan Counter Narrative Plan.pdf',
//     'comparative-media-analysis': 'public/PEAKMETRICS_DEEP_RESEARCH_Comparative_Media_Analysis_UAESudan_ICJ_Narrative_vs_Qatar_Saudi_Arabia_and_Sudan_Strategies.pdf',
//     'communications-plan': 'public/Communications Plan - Countering Sudan Disinformation.pdf',
//     'regional-strategy-comparison': 'public/20250321-UAE and Sudan Counter Narrative-Comparative Media Analysis.pdf',
//     'counter-narrative-recommendations': 'XXXXX',
//     'counter-narrative-recommendations_detailed': 'XXXXX'
//   };

//   // Handler for PDF link clicks in the package cards (if needed)
//   const handlePdfClick = (link) => {
//     console.log('Opening PDF:', link);
//     window.open(link, "_blank");
//   };

//   // State for document preview (separate from the full document action)
//   const [previewDocument, setPreviewDocument] = useState(null);

//   // Update the preview document (when a navigator card is clicked)
//   const handlePreviewDocumentOpen = (documentId) => {
//     console.log('Preview document selected:', documentId);
//     setPreviewDocument(documentId);
//   };

//   // When "Open Full Document" is clicked, open the corresponding PDF link in a new tab
//   const handleFullDocumentOpen = (documentId) => {
//     const link = pdfLinkMapping[documentId];
//     if (link) {
//       console.log(`Opening full document link for ${documentId}: ${link}`);
//       window.open(link, "_blank");
//     } else {
//       console.warn(`No PDF link available for document: ${documentId}`);
//     }
//   };

//   useEffect(() => {
//     console.log('Preview document state updated:', previewDocument);
//   }, [previewDocument]);

//   return (
//     <div className="w-full">
//       {/* 2x2 grid of package cards */}
//       <section className="mt-8 mb-12">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Key Intelligence Package Documents
//           </h2>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           {packageCards.map((item) => {
//             const colorClasses = getColorClasses(item.color);
//             return (
//               <div
//                 key={item.id}
//                 className={`rounded-lg shadow p-4 flex flex-col justify-between ${colorClasses.bg} border ${colorClasses.border}`}
//               >
//                 <div>
//                   <h3 className={`text-lg font-semibold ${colorClasses.text}`}>
//                     {item.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 mt-1">{item.subheading}</p>
//                   <p className="text-sm text-gray-700 mt-2">{item.summary}</p>
//                   <p className="text-sm text-gray-700 mt-2 font-medium">
//                     Source: {item.source}
//                   </p>
//                   <img
//                     src={item.icon}
//                     alt="Source Icon"
//                     className="h-6 w-6 mt-2"
//                   />
//                   <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
//                     {item.structure.map((point, idx) => (
//                       <li key={idx}>{point}</li>
//                     ))}
//                   </ul>
//                 </div>
//                 <div className="mt-3">
//                   <button
//                     onClick={() => handlePdfClick(item.pdfLink)}
//                     className={`text-sm font-medium ${colorClasses.text} hover:underline`}
//                   >
//                     View PDF
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* Navigator component for document preview and full document actions */}
//       <div className="max-w-7xl mx-auto px-4 mb-16">
//         <IntelligencePackageNavigator 
//           onPreviewDocumentOpen={handlePreviewDocumentOpen} 
//           onFullDocumentOpen={handleFullDocumentOpen} 
//         />
//       </div>

//       {/* Optionally, you can render preview details somewhere on the page */}
//       {previewDocument && (
//         <div className="max-w-7xl mx-auto px-4 mb-16">
//           <p className="text-gray-700">Previewing document: {previewDocument}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// /**
//  * IntelligencePackageNavigator Component
//  */
// const IntelligencePackageNavigator = ({ onPreviewDocumentOpen, onFullDocumentOpen }) => {
//   // Data for the document sections in the navigator
//   const sections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes",
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: "Communications Plan",
//       description: "Countering Sudan disinformation narratives",
//       type: "Strategic Framework",
//       source: "VineSight",
//       color: "orange"
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: "Regional Strategy Comparison",
//       description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       color: "green"
//     },
//     {
//       id: 5,
//       documentId: 'counter-narrative-recommendations',
//       title: "UAE and Sudan Counter Narrative Summary Recommendations",
//       description: "Practical implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     },
//     {
//       id: 6,
//       documentId: 'counter-narrative-recommendations_detailed',
//       title: "UAE and Sudan Counter Narrative Detailed Recommendations",
//       description: "Detailed implementation of the counter-narrative strategy",
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "blue"
//     }
//   ];

//   // State to track which section is currently selected for preview
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const selectedSection = sections[selectedIndex];

//   // Helper to map colour to Tailwind classes (duplicated for the navigator)
//   const getColorClasses = (colour) => {
//     switch (colour) {
//       case 'blue':
//         return {
//           bg: 'bg-blue-50',
//           iconBg: 'bg-blue-100',
//           text: 'text-blue-800',
//           border: 'border-blue-400',
//           button: 'bg-blue-600 hover:bg-blue-700'
//         };
//       case 'green':
//         return {
//           bg: 'bg-green-50',
//           iconBg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-400',
//           button: 'bg-green-600 hover:bg-green-700'
//         };
//       case 'orange':
//         return {
//           bg: 'bg-orange-50',
//           iconBg: 'bg-orange-100',
//           text: 'text-orange-800',
//           border: 'border-orange-400',
//           button: 'bg-orange-600 hover:bg-orange-700'
//         };
//       default:
//         return {
//           bg: 'bg-gray-50',
//           iconBg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-400',
//           button: 'bg-gray-600 hover:bg-gray-700'
//         };
//     }
//   };

//   // Get icon based on document type
//   const getIcon = (type) => {
//     switch (type) {
//       case 'Primary Deliverable':
//         return <FileText className="h-6 w-6" />;
//       case 'Supporting Analysis':
//         return <BarChart className="h-6 w-6" />;
//       case 'Strategic Framework':
//         return <MessageSquare className="h-6 w-6" />;
//       case 'Contextual Intelligence':
//         return <Globe className="h-6 w-6" />;
//       case 'Requirements Document':
//         return <AlertTriangle className="h-6 w-6" />;
//       default:
//         return <FileText className="h-6 w-6" />;
//     }
//   };

//   // When a navigator card is clicked, update the preview state
//   const openPreviewDocument = (documentId) => {
//     console.log('Navigator: preview document selected:', documentId);
//     if (onPreviewDocumentOpen) {
//       onPreviewDocumentOpen(documentId);
//     }
//   };

//   // When the "Open Full Document" button is clicked, call the full document action
//   const openFullDocument = (documentId) => {
//     console.log('Navigator: open full document requested for:', documentId);
//     if (onFullDocumentOpen) {
//       onFullDocumentOpen(documentId);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis, strategic communications, and counter-narrative frameworks.
//       </p>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Navigator Cards */}
//         <div className="space-y-4">
//           {sections.map((section, index) => {
//             const colorClasses = getColorClasses(section.color);
//             return (
//               <div
//                 key={section.id}
//                 className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                   selectedIndex === index ? `${colorClasses.bg} border-2 ${colorClasses.border}` : 'bg-white'
//                 }`}
//                 onClick={() => {
//                   setSelectedIndex(index);
//                   openPreviewDocument(section.documentId);
//                 }}
//               >
//                 <div className="flex items-center">
//                   <div className={`p-2 rounded-full ${colorClasses.iconBg} mr-3`}>
//                     {getIcon(section.type)}
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-center">
//                       <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorClasses.iconBg} ${colorClasses.text}`}>
//                         {section.type}
//                       </span>
//                       <ChevronRight className={`h-5 w-5 ${selectedIndex === index ? 'text-blue-500' : 'text-gray-400'}`} />
//                     </div>
//                     <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                     <div className="flex justify-between items-center mt-2">
//                       <span className="text-sm text-gray-500">
//                         Source: <span className="font-medium">{section.source}</span>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {/* Detail Panel for the Selected Preview */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           {selectedSection && (
//             <>
//               <div className={`inline-block px-3 py-1 rounded-full ${getColorClasses(selectedSection.color).iconBg} ${getColorClasses(selectedSection.color).text} text-sm font-semibold mb-4`}>
//                 {selectedSection.type}
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//               <p className="text-gray-600 mb-6">{selectedSection.description}</p>
//               <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//                 <div>
//                   <span className="text-sm text-gray-500">Produced by:</span>
//                   <span className="ml-2 font-semibold">{selectedSection.source}</span>
//                 </div>
//                 <button
//                   onClick={() => openFullDocument(selectedSection.documentId)}
//                   className={`${getColorClasses(selectedSection.color).button} text-white px-4 py-2 rounded-lg text-sm font-medium`}
//                 >
//                   Open Full Document
//                 </button>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };










