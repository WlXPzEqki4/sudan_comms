// import React from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle } from 'lucide-react';

// const ContentIntroduction = () => {
//   const documents = [
//     {
//       id: 1,
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests and reshape public discourse regarding ICJ proceedings",
//       icon: <FileText className="h-6 w-6" />,
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       color: "bg-blue-100 text-blue-800"
//     },
//     {
//       id: 2,
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes with focus on regional differentials",
//       icon: <BarChart className="h-6 w-6" />,
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       color: "bg-green-100 text-green-800"
//     },
//     {
//       id: 3,
//       title: "Communications Plan - Countering Sudan Disinformation",
//       description: "Tactical roadmap for addressing and neutralizing false narratives from Sudan",
//       icon: <MessageSquare className="h-6 w-6" />,
//       type: "Strategic Framework",
//       source: "VineSight",
//       color: "bg-orange-100 text-orange-800"
//     },
//     {
//       id: 4,
//       title: "Regional Strategy Comparison",
//       description: "Comparative analysis of Qatar, Saudi Arabia and Sudan narrative approaches",
//       icon: <Globe className="h-6 w-6" />,
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       color: "bg-green-100 text-green-800"
//     },
//     {
//       id: 5,
//       title: "Sudan ICJ Messaging RFI",
//       description: "Original requirements and intelligence focus areas",
//       icon: <AlertTriangle className="h-6 w-6" />,
//       type: "Requirements Document",
//       source: "Beacon Red",
//       color: "bg-blue-100 text-blue-800"
//     }
//   ];

//   return (
//     <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Intelligence Package Contents</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             A multi-layered intelligence fusion approach combining media analysis, 
//             strategic communications, and counter-narrative frameworks.
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {documents.map((doc) => (
//             <div key={doc.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className={`p-3 rounded-full ${doc.color} mr-4`}>
//                     {doc.icon}
//                   </div>
//                   <div>
//                     <span className={`text-xs font-semibold px-2 py-1 rounded-full ${doc.color}`}>
//                       {doc.type}
//                     </span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
//                 <p className="text-gray-600 mb-4">{doc.description}</p>
                
//                 <div className="flex items-center justify-between mt-6">
//                   <div className="flex items-center">
//                     <span className="text-sm text-gray-500">Source:</span>
//                     <span className="ml-2 text-sm font-medium text-gray-900">{doc.source}</span>
//                   </div>
//                   <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                     View Document →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
//           <h3 className="text-lg font-bold text-blue-900 mb-2">Beacon Red Fusion Methodology</h3>
//           <p className="text-blue-800">
//             This package demonstrates Beacon Red's analytical approach to synthesizing multiple 
//             intelligence sources into a comprehensive, actionable counter-narrative strategy.
//             The color-coded demonstration version reveals how vendor inputs were integrated and enhanced.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContentIntroduction;









// import React, { useState } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// const IntelligencePackageNavigator = () => {
//   // Data structure with information about each section
//   const sections = [
//     {
//       id: 1,
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests and reshape public discourse regarding ICJ proceedings",
//       icon: <FileText className="h-6 w-6" />,
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       textColor: "text-blue-800",
//       summary: "The primary strategy document that provides a comprehensive approach to counter ongoing narrative attacks against the UAE related to Sudan activities. This document synthesizes all inputs from various intelligence sources and provides clear defensive messaging, proactive narrative redirection, and implementation frameworks.",
//       keyPoints: [
//         "Executive summary of the current narrative landscape",
//         "Core defensive messaging points with supporting evidence",
//         "Proactive narrative shift strategies and talking points",
//         "Implementation timeline and channel recommendations",
//         "Success metrics and evaluation framework"
//       ]
//     },
//     {
//       id: 2,
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes with focus on regional differentials",
//       icon: <BarChart className="h-6 w-6" />,
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       bgColor: "bg-green-50",
//       iconBg: "bg-green-100",
//       textColor: "text-green-800",
//       summary: "Detailed analysis of how the UAE-Sudan situation is being portrayed across different media ecosystems, with particular attention to regional variations in coverage, framing, and narrative emphasis.",
//       keyPoints: [
//         "Media coverage volume analysis by region and outlet type",
//         "Key message penetration across Western vs. MENA region media",
//         "Sentiment analysis of coverage by geography",
//         "Identification of primary narrative drivers and influential voices",
//         "Trend analysis showing narrative evolution over time"
//       ]
//     },
//     {
//       id: 3,
//       title: "Communications Plan - Countering Sudan Disinformation",
//       description: "Tactical roadmap for addressing and neutralizing false narratives from Sudan",
//       icon: <MessageSquare className="h-6 w-6" />,
//       type: "Strategic Framework",
//       source: "VineSight",
//       bgColor: "bg-orange-50",
//       iconBg: "bg-orange-100",
//       textColor: "text-orange-800",
//       summary: "A comprehensive tactical communications plan focused specifically on identifying, tracking, and effectively countering disinformation narratives originating from Sudan regarding the ICJ proceedings.",
//       keyPoints: [
//         "Catalog of primary disinformation narratives currently in circulation",
//         "Channel-specific response strategies across diplomatic, media, and social platforms",
//         "Message development framework with pre-approved response templates",
//         "Rapid response protocol for emerging disinformation",
//         "Coordination mechanism with diplomatic and legal teams"
//       ]
//     },
//     {
//       id: 4,
//       title: "Regional Strategy Comparison",
//       description: "Comparative analysis of Qatar, Saudi Arabia and Sudan narrative approaches",
//       icon: <Globe className="h-6 w-6" />,
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       bgColor: "bg-green-50",
//       iconBg: "bg-green-100",
//       textColor: "text-green-800",
//       summary: "An examination of how other regional players, specifically Qatar and Saudi Arabia, are approaching similar reputation management and narrative challenges, providing valuable context and potential strategic insights.",
//       keyPoints: [
//         "Comparative analysis of messaging strategies employed by Qatar in similar situations",
//         "Saudi Arabia's approach to international legal challenges and media management",
//         "Sudan's current narrative strategy and messaging infrastructure",
//         "Effectiveness assessment of different regional approaches",
//         "Opportunity identification for UAE strategic differentiation"
//       ]
//     },
//     {
//       id: 5,
//       title: "Sudan ICJ Messaging RFI",
//       description: "Original requirements and intelligence focus areas",
//       icon: <AlertTriangle className="h-6 w-6" />,
//       type: "Requirements Document",
//       source: "Beacon Red",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       textColor: "text-blue-800",
//       summary: "The original Request for Information document that initiated this intelligence package, outlining the specific requirements, intelligence focus areas, and strategic objectives for the counter-narrative effort.",
//       keyPoints: [
//         "Background context on the ICJ proceedings and current narrative landscape",
//         "Specific intelligence requirements and priority information needs",
//         "Strategic objectives for the counter-narrative campaign",
//         "Timeline and delivery requirements",
//         "Integration with broader diplomatic and legal strategy"
//       ]
//     }
//   ];

//   // State to track which section is currently selected
//   const [selectedSection, setSelectedSection] = useState(sections[0]);

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
//           {sections.map((section) => (
//             <div 
//               key={section.id}
//               className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                 selectedSection.id === section.id ? `${section.bgColor} border-2 border-${section.textColor.split('-')[1]}-400` : 'bg-white'
//               }`}
//               onClick={() => setSelectedSection(section)}
//             >
//               <div className="flex items-center">
//                 <div className={`p-2 rounded-full ${section.iconBg} mr-3`}>
//                   {section.icon}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-center">
//                     <span className={`text-xs font-semibold px-2 py-1 rounded-full ${section.iconBg} ${section.textColor}`}>
//                       {section.type}
//                     </span>
//                     <ChevronRight className={`h-5 w-5 ${selectedSection.id === section.id ? 'text-blue-500' : 'text-gray-400'}`} />
//                   </div>
//                   <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
//                     <a 
//                       href="#" 
//                       className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       View Document →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           <div className={`inline-block px-3 py-1 rounded-full ${selectedSection.iconBg} ${selectedSection.textColor} text-sm font-semibold mb-4`}>
//             {selectedSection.type}
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//           <p className="text-gray-600 mb-6">{selectedSection.description}</p>
          
//           <p className="text-gray-800 mb-6">{selectedSection.summary}</p>
          
//           <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
//           <ul className="space-y-2">
//             {selectedSection.keyPoints.map((point, index) => (
//               <li key={index} className="flex items-start">
//                 <div className={`${selectedSection.iconBg} ${selectedSection.textColor} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
//                   {index + 1}
//                 </div>
//                 <span className="text-gray-700">{point}</span>
//               </li>
//             ))}
//           </ul>
          
//           <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//             <div>
//               <span className="text-sm text-gray-500">Produced by:</span>
//               <span className="ml-2 font-semibold">{selectedSection.source}</span>
//             </div>
//             <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
//               Open Full Document
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntelligencePackageNavigator;













// import React, { useState } from 'react';
// import { FileText, BarChart, MessageSquare, Globe, AlertTriangle, ChevronRight } from 'lucide-react';

// // For debugging purposes, let's log all clicks
// const IntelligencePackageNavigator = ({ onDocumentOpen }) => {
//   // Data structure with information about each section
//   const sections = [
//     {
//       id: 1,
//       documentId: 'counter-narrative-plan',
//       title: "UAE and Sudan Counter Narrative Plan",
//       description: "Comprehensive strategy to defend UAE interests and reshape public discourse regarding ICJ proceedings",
//       icon: <FileText className="h-6 w-6" />,
//       type: "Primary Deliverable",
//       source: "Beacon Red",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       textColor: "text-blue-800",
//       summary: "The primary strategy document that provides a comprehensive approach to counter ongoing narrative attacks against the UAE related to Sudan activities. This document synthesizes all inputs from various intelligence sources and provides clear defensive messaging, proactive narrative redirection, and implementation frameworks.",
//       keyPoints: [
//         "Executive summary of the current narrative landscape",
//         "Core defensive messaging points with supporting evidence",
//         "Proactive narrative shift strategies and talking points",
//         "Implementation timeline and channel recommendations",
//         "Success metrics and evaluation framework"
//       ]
//     },
//     {
//       id: 2,
//       documentId: 'comparative-media-analysis',
//       title: "Comparative Media Analysis",
//       description: "Analysis of narrative treatment across media landscapes with focus on regional differentials",
//       icon: <BarChart className="h-6 w-6" />,
//       type: "Supporting Analysis",
//       source: "PeakMetrics",
//       bgColor: "bg-green-50",
//       iconBg: "bg-green-100",
//       textColor: "text-green-800",
//       summary: "Detailed analysis of how the UAE-Sudan situation is being portrayed across different media ecosystems, with particular attention to regional variations in coverage, framing, and narrative emphasis.",
//       keyPoints: [
//         "Media coverage volume analysis by region and outlet type",
//         "Key message penetration across Western vs. MENA region media",
//         "Sentiment analysis of coverage by geography",
//         "Identification of primary narrative drivers and influential voices",
//         "Trend analysis showing narrative evolution over time"
//       ]
//     },
//     {
//       id: 3,
//       documentId: 'communications-plan',
//       title: "Communications Plan - Countering Sudan Disinformation",
//       description: "Tactical roadmap for addressing and neutralizing false narratives from Sudan",
//       icon: <MessageSquare className="h-6 w-6" />,
//       type: "Strategic Framework",
//       source: "VineSight",
//       bgColor: "bg-orange-50",
//       iconBg: "bg-orange-100",
//       textColor: "text-orange-800",
//       summary: "A comprehensive tactical communications plan focused specifically on identifying, tracking, and effectively countering disinformation narratives originating from Sudan regarding the ICJ proceedings.",
//       keyPoints: [
//         "Catalog of primary disinformation narratives currently in circulation",
//         "Channel-specific response strategies across diplomatic, media, and social platforms",
//         "Message development framework with pre-approved response templates",
//         "Rapid response protocol for emerging disinformation",
//         "Coordination mechanism with diplomatic and legal teams"
//       ]
//     },
//     {
//       id: 4,
//       documentId: 'regional-strategy-comparison',
//       title: "Regional Strategy Comparison",
//       description: "Comparative analysis of Qatar, Saudi Arabia and Sudan narrative approaches",
//       icon: <Globe className="h-6 w-6" />,
//       type: "Contextual Intelligence",
//       source: "PeakMetrics",
//       bgColor: "bg-green-50",
//       iconBg: "bg-green-100",
//       textColor: "text-green-800",
//       summary: "An examination of how other regional players, specifically Qatar and Saudi Arabia, are approaching similar reputation management and narrative challenges, providing valuable context and potential strategic insights.",
//       keyPoints: [
//         "Comparative analysis of messaging strategies employed by Qatar in similar situations",
//         "Saudi Arabia's approach to international legal challenges and media management",
//         "Sudan's current narrative strategy and messaging infrastructure",
//         "Effectiveness assessment of different regional approaches",
//         "Opportunity identification for UAE strategic differentiation"
//       ]
//     },
//     {
//       id: 5,
//       documentId: 'sudan-icj-messaging-rfi',
//       title: "Sudan ICJ Messaging RFI",
//       description: "Original requirements and intelligence focus areas",
//       icon: <AlertTriangle className="h-6 w-6" />,
//       type: "Requirements Document",
//       source: "Beacon Red",
//       bgColor: "bg-blue-50",
//       iconBg: "bg-blue-100",
//       textColor: "text-blue-800",
//       summary: "The original Request for Information document that initiated this intelligence package, outlining the specific requirements, intelligence focus areas, and strategic objectives for the counter-narrative effort.",
//       keyPoints: [
//         "Background context on the ICJ proceedings and current narrative landscape",
//         "Specific intelligence requirements and priority information needs",
//         "Strategic objectives for the counter-narrative campaign",
//         "Timeline and delivery requirements",
//         "Integration with broader diplomatic and legal strategy"
//       ]
//     }
//   ];

//   // State to track which section is currently selected
//   const [selectedSection, setSelectedSection] = useState(sections[0]);

//   // Handle clicking on "View Document" button
//   const handleDocumentView = (e, documentId) => {
//     e.stopPropagation(); // Prevent the card click event from firing
//     console.log(`Document view clicked: ${documentId}`); // Debug logging
    
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     } else {
//       console.error('onDocumentOpen prop is not provided');
//     }
//   };

//   const handleCardClick = (section) => {
//     console.log(`Card clicked: ${section.documentId}`); // Debug logging
//     setSelectedSection(section);
//   };

//   // Testing direct open button click
//   const debugOpenDocument = (documentId) => {
//     console.log(`Direct open document: ${documentId}`); // Debug logging
//     if (onDocumentOpen) {
//       onDocumentOpen(documentId);
//     } else {
//       console.error('onDocumentOpen prop is not provided');
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Intelligence Package Contents</h2>
//       <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
//         A multi-layered intelligence fusion approach combining media analysis, strategic
//         communications, and counter-narrative frameworks.
//       </p>

//       {/* Debug section */}
//       <div className="mb-4 p-3 bg-gray-100 rounded">
//         <h3 className="font-bold mb-2">Debug Navigation</h3>
//         <div className="flex flex-wrap gap-2">
//           {sections.map(section => (
//             <button 
//               key={section.id}
//               onClick={() => debugOpenDocument(section.documentId)}
//               className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               Open {section.title.substring(0, 15)}...
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Left side - Stacked cards */}
//         <div className="space-y-4">
//           {sections.map((section) => (
//             <div 
//               key={section.id}
//               className={`border rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
//                 selectedSection.id === section.id ? `${section.bgColor} border-2 border-blue-400` : 'bg-white'
//               }`}
//               onClick={() => handleCardClick(section)}
//             >
//               <div className="flex items-center">
//                 <div className={`p-2 rounded-full ${section.iconBg} mr-3`}>
//                   {section.icon}
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex justify-between items-center">
//                     <span className={`text-xs font-semibold px-2 py-1 rounded-full ${section.iconBg} ${section.textColor}`}>
//                       {section.type}
//                     </span>
//                     <ChevronRight className={`h-5 w-5 ${selectedSection.id === section.id ? 'text-blue-500' : 'text-gray-400'}`} />
//                   </div>
//                   <h3 className="text-gray-900 font-bold mt-1">{section.title}</h3>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-sm text-gray-500">Source: <span className="font-medium">{section.source}</span></span>
//                     <button 
//                       onClick={(e) => handleDocumentView(e, section.documentId)}
//                       className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//                     >
//                       View Document →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right side - Detail panel */}
//         <div className="col-span-2 border rounded-lg p-6 bg-gray-50">
//           <div className={`inline-block px-3 py-1 rounded-full ${selectedSection.iconBg} ${selectedSection.textColor} text-sm font-semibold mb-4`}>
//             {selectedSection.type}
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedSection.title}</h2>
//           <p className="text-gray-600 mb-6">{selectedSection.description}</p>
          
//           <p className="text-gray-800 mb-6">{selectedSection.summary}</p>
          
//           <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Components:</h3>
//           <ul className="space-y-2">
//             {selectedSection.keyPoints.map((point, index) => (
//               <li key={index} className="flex items-start">
//                 <div className={`${selectedSection.iconBg} ${selectedSection.textColor} rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3`}>
//                   {index + 1}
//                 </div>
//                 <span className="text-gray-700">{point}</span>
//               </li>
//             ))}
//           </ul>
          
//           <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
//             <div>
//               <span className="text-sm text-gray-500">Produced by:</span>
//               <span className="ml-2 font-semibold">{selectedSection.source}</span>
//             </div>
//             <button 
//               onClick={() => debugOpenDocument(selectedSection.documentId)}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
//             >
//               Open Full Document
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntelligencePackageNavigator;













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
    }
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

  // // Extra section data for details panel
  // const sectionDetails = {
  //   'counter-narrative-plan': {
  //     summary: "The primary strategy document that provides a comprehensive approach to counter ongoing narrative attacks against the UAE related to Sudan activities. This document synthesizes all inputs from various intelligence sources and provides clear defensive messaging, proactive narrative redirection, and implementation frameworks.",
  //     keyPoints: [
  //       "Executive summary of the current narrative landscape",
  //       "Core defensive messaging points with supporting evidence",
  //       "Proactive narrative shift strategies and talking points",
  //       "Implementation timeline and channel recommendations",
  //       "Success metrics and evaluation framework"
  //     ]
  //   },
  //   'comparative-media-analysis': {
  //     summary: "Detailed analysis of how the UAE-Sudan situation is being portrayed across different media ecosystems, with particular attention to regional variations in coverage, framing, and narrative emphasis.",
  //     keyPoints: [
  //       "Media coverage volume analysis by region and outlet type",
  //       "Key message penetration across Western vs. MENA region media",
  //       "Sentiment analysis of coverage by geography",
  //       "Identification of primary narrative drivers and influential voices",
  //       "Trend analysis showing narrative evolution over time"
  //     ]
  //   },
  //   'communications-plan': {
  //     summary: "A comprehensive tactical communications plan focused specifically on identifying, tracking, and effectively countering disinformation narratives originating from Sudan regarding the ICJ proceedings.",
  //     keyPoints: [
  //       "Catalog of primary disinformation narratives currently in circulation",
  //       "Channel-specific response strategies across diplomatic, media, and social platforms",
  //       "Message development framework with pre-approved response templates",
  //       "Rapid response protocol for emerging disinformation",
  //       "Coordination mechanism with diplomatic and legal teams"
  //     ]
  //   },
  //   'regional-strategy-comparison': {
  //     summary: "An examination of how other regional players, specifically Qatar and Saudi Arabia, are approaching similar reputation management and narrative challenges, providing valuable context and potential strategic insights.",
  //     keyPoints: [
  //       "Comparative analysis of messaging strategies employed by Qatar in similar situations",
  //       "Saudi Arabia's approach to international legal challenges and media management",
  //       "Sudan's current narrative strategy and messaging infrastructure",
  //       "Effectiveness assessment of different regional approaches",
  //       "Opportunity identification for UAE strategic differentiation"
  //     ]
  //   }
  // };






  // const sectionDetails = {
  //   'counter-narrative-plan': {  // Corresponds to: UAE-SUDAN COUNTER-NARRATIVE PLAN.jsx
  //     summary: "The primary strategy document providing a comprehensive, actionable approach to counter negative narratives about the UAE related to Sudan.  It outlines immediate, short-term, medium-term, and long-term strategies, including proactive media engagement, influencer outreach, and crisis response protocols.  It focuses on *how* to implement a counter-narrative campaign.",
  //     keyPoints: [
  //       "Executive summary of the situation, impact on the UAE, and product purpose.", // From original PDF
  //       "Recommendations summary: Regional Media Outreach, Social Media Campaign, Content, Influencers, 24/7 Rapid Response, Deflection.", // From page 1
  //       "Strategic Counter-Narrative Messaging Framework: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships, Rejection of Baseless Allegations, Negative/Deflection Messaging.", // Page 2
  //       "Priority Platforms and Audiences: Detailed breakdown of platforms (Twitter/X, Instagram, TikTok, Facebook, Telegram) and target audiences (Western Policymakers, AU/Arab League, etc.).", // Page 3
  //       "Action Plan: Core tenants, including capacity building, strategic partnerships, proactive communications, and aggressive deflection.",
  //       "Response Strategy: Guidelines, implementation process, factual database, and tiering system.", // From Action Plan.
  //       "Timeline: Immediate, Short Term, Medium Term, and Long Term actions." // From PDF
  //     ],
  //     relatedPDF: "UAE-SUDAN COUNTER-NARRATIVE PLAN", // Added for clarity
  //   },
  //   'comparative-media-analysis': { // Corresponds to: ComparativeMediaAnalysis.jsx (both original *and* updated)
  //     summary: "Provides a data-driven comparative analysis of how the UAE-Sudan ICJ narrative is covered across different media ecosystems (Western, MENA, African), and compares the UAE's media strategy with those of Qatar, Saudi Arabia, and Sudan.  It focuses on *understanding* the media landscape and *benchmarking* against other actors.",
  //     keyPoints: [
  //       "Executive Summary: Overview of the media analysis and key findings.", // From PDF
  //       "Key Insights: General observations about media coverage.",    // From original component + PDF
  //       "Media Monitoring Overview: Coverage distribution, sentiment analysis, and source distribution.", // From original + PDF
  //       "Regional Media Comparison:  Detailed breakdown of framing, top sources, key narratives, and UAE perspective in Western, MENA, and African media.", // From original + PDF
  //       "Key Influencer Analysis:  Identification and analysis of key influencers and their engagement.", // From original + PDF
  //       "Narrative Trends: Emerging and declining narratives related to the situation.",  // From original.
  //       "Strategic Communications Recommendations:  High-level recommendations based on the analysis.", // From original
  //       "Comparative Analysis (Key Actors): Summaries of Qatar, Saudi Arabia, and Sudan's media strategies in similar situations." // Added from PDF
  //     ],
  //     relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies", // Added for clarity
  //   },
  //   'communications-plan': { // Corresponds to: CommunicationsPlan.jsx
  //     summary: "A tactical communications plan specifically focused on countering disinformation originating from Sudan regarding the ICJ proceedings. It provides detailed guidance on messaging, platform strategies, rapid response, and coordination.  It's a more *granular, operational* plan than the 'Counter-Narrative Plan'.",
  //     keyPoints: [
  //       "About This Communications Plan: States the purpose, scope, and data source.",
  //       "Strategic Goals: Reinforce UAE's humanitarian image, discredit accusations, engage stakeholders, highlight regional stability.", // From PDF
  //       "Understanding the Conversation: Analysis of the current discourse, including key findings, platforms, and bot activity.",  // From PDF
  //       "Top Disinformation Themes Promoted by Attackers: List of 20 key disinformation narratives.", // From PDF
  //       "Action Plan: Core Tenants: High-level principles for the counter-disinformation effort.", // From PDF
  //       "Response Strategy: Detailed guidelines, implementation process, factual database usage, and tiering system.", //From Action Plan.
  //       "Priority Platforms:  Deep dive into platform-specific strategies (Twitter/X, Instagram, TikTok, Facebook, Telegram).", // From PDF
  //       "Target Audiences: List of key audiences, prioritized strategically.", //From PDF
  //       "Appendices (placeholders for now, as original jsx did not go into this level of detail): Top Attackers, Think-Tank Outreach, Fact-Checking NGO Guidelines, Media Outlets." // Referenced in PDF
  //     ],
  //     relatedPDF: "Communications Plan For Countering Sudan Disinformation", // Added for clarity
  //   },
  //     'regional-strategy-comparison': { // Corresponds to: RegionalStrategyComparison.jsx AND ComparativeMediaAnalysis.jsx
  //     summary: "Examines the narrative strategies of Qatar, Saudi Arabia, and Sudan in response to international challenges, drawing lessons and comparisons to inform the UAE's approach. This is a more in-depth *strategic analysis* than the 'Comparative Media Analysis' overview, with detailed case studies.",
  //     keyPoints: [
  //       "Strategy Comparison Matrix:  A table comparing the strategies of Qatar, Saudi Arabia, and Sudan across key criteria.", // From original component
  //       "Case Studies: Detailed analysis of each country's (Qatar, Saudi, Sudan) approach, including situation, tactics, outcomes, and relevance to the UAE.", // From original
  //       "Strategic Recommendations: Actionable recommendations based on the comparative analysis.", //From Original
  //       "Key Insights and Executive Summary that contextualize the comparisons", //From original.
  //       "Media Engagement and Sentiment Across Regions",
  
  //     ],
  //     relatedPDF: "STRATEGIC NARRATIVE REPORT & Comparative Media Analysis: UAE–Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies", // Added for clarity
  //   }
  // };


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