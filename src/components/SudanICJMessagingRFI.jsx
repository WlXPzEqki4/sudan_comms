// import React from 'react';
// import { AlertTriangle, Search, FileText, Target, CalendarClock, CheckSquare, Users } from 'lucide-react';

// const SudanICJMessagingRFI = () => {
//   // Placeholder data structure
//   const rfiData = {
//     title: "Sudan ICJ Messaging RFI",
//     subtitle: "Request for Information: Strategic Communications Response",
//     dateIssued: "March 17, 2025",
//     dueDate: "March 20, 2025",
//     source: "Beacon Red",
//     background: "The UAE is currently facing a coordinated disinformation campaign related to ongoing ICJ proceedings involving Sudan. This campaign threatens to damage the UAE's international standing and undermine its strategic humanitarian and regional security objectives. A comprehensive counter-narrative strategy is urgently required to defend UAE interests and shift the narrative landscape in a more favorable direction.",
//     objectives: [
//       "Develop a detailed Counter-Narrative plan to defend from ongoing attacks",
//       "Create a strategic framework to shift the narrative to UAE's favor",
//       "Identify key stakeholders, channels, and messaging opportunities",
//       "Establish metrics for measuring communications effectiveness",
//       "Outline implementation timeline and resource requirements"
//     ],
//     informationRequirements: [
//       {
//         category: "Media Analysis",
//         requirements: [
//           "Comprehensive analysis of current narrative landscape across Western and regional media",
//           "Identification of primary narrative drivers and influential voices",
//           "Comparative analysis of narrative treatment in different media ecosystems",
//           "Evidence of disinformation techniques and coordination patterns",
//           "Historical context of similar narrative challenges and effective responses"
//         ]
//       },
//       {
//         category: "Strategic Framework",
//         requirements: [
//           "Defensive messaging framework with evidence-based refutation points",
//           "Proactive narrative positioning strategy with core messaging themes",
//           "Channel-specific tactical approaches (diplomatic, media, digital)",
//           "Stakeholder mapping with engagement prioritization",
//           "Differentiated messaging for key audience segments"
//         ]
//       },
//       {
//         category: "Regional Context",
//         requirements: [
//           "Comparative analysis of similar challenges faced by regional actors",
//           "Assessment of Qatar and Saudi Arabia's strategic communications approaches",
//           "Analysis of Sudan's current messaging strategy and vulnerabilities",
//           "Identification of regional coalition-building opportunities",
//           "Evaluation of historical precedents for similar regional challenges"
//         ]
//       },
//       {
//         category: "Implementation Plan",
//         requirements: [
//           "Detailed tactical roadmap with phased implementation timeline",
//           "Channel-specific content strategies and distribution mechanisms",
//           "Resource requirements and organizational structure recommendations",
//           "Coordination framework across relevant UAE entities and stakeholders",
//           "Success metrics and evaluation methodology"
//         ]
//       }
//     ],
//     priorityAreas: [
//       {
//         area: "Western Media Engagement",
//         rationale: "Critical for shaping international institutional perspectives and minimizing reputational damage in key diplomatic contexts.",
//         priority: "High"
//       },
//       {
//         area: "Factual Evidence Compilation",
//         rationale: "Essential for evidence-based refutation of specific claims and establishing credibility with neutral third parties.",
//         priority: "High"
//       },
//       {
//         area: "Humanitarian Narrative Development",
//         rationale: "Strategic opportunity to reframe discussion around UAE's substantial humanitarian commitments and positive regional impact.",
//         priority: "Medium-High"
//       },
//       {
//         area: "Regional Media Strategy",
//         rationale: "Important for maintaining regional influence and countering Sudan's positioning with neighboring states.",
//         priority: "Medium"
//       },
//       {
//         area: "Digital Response Capability",
//         rationale: "Necessary for rapid response to emerging narratives and engagement with online stakeholders.",
//         priority: "Medium"
//       }
//     ],
//     deliverables: [
//       {
//         item: "UAE and Sudan Counter Narrative Plan",
//         description: "Comprehensive strategy document integrating all analysis and recommendations",
//         format: "Detailed report with executive summary",
//         deadline: "March 21, 2025"
//       },
//       {
//         item: "Comparative Media Analysis",
//         description: "Analysis of narrative treatment across media landscapes",
//         format: "Analytical report with visualizations",
//         deadline: "March 18, 2025"
//       },
//       {
//         item: "Strategic Communications Framework",
//         description: "Tactical roadmap for countering disinformation",
//         format: "Strategic framework document",
//         deadline: "March 19, 2025"
//       },
//       {
//         item: "Regional Strategy Comparison",
//         description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//         format: "Comparative analysis report",
//         deadline: "March 18, 2025"
//       }
//     ],
//     pointsOfContact: [
//       {
//         name: "Strategic Communications Team",
//         role: "Primary recipient of intelligence products",
//         contact: "comms@beaconred.example"
//       },
//       {
//         name: "Legal Affairs Coordination",
//         role: "Coordination with ICJ proceedings team",
//         contact: "legal@beaconred.example"
//       },
//       {
//         name: "Intelligence Analysis Division",
//         role: "Supporting analysis and monitoring",
//         contact: "intel@beaconred.example"
//       }
//     ]
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{rfiData.title}</h1>
//             <p className="text-blue-100 mt-1">{rfiData.subtitle}</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: {rfiData.dateIssued}</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: {rfiData.dueDate}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Background */}
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
//           <h2 className="text-xl font-bold text-blue-800 mb-2">Background & Context</h2>
//           <p className="text-gray-800">{rfiData.background}</p>
//         </div>

//         {/* Objectives */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <Target className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Intelligence Objectives</h2>
//           </div>
          
//           <div className="bg-gray-50 rounded-lg p-6">
//             <ul className="space-y-3">
//               {rfiData.objectives.map((objective, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{objective}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Information Requirements */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Search className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Information Requirements</h2>
//           </div>
          
//           <div className="space-y-6">
//             {rfiData.informationRequirements.map((category, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <div className="bg-blue-100 text-blue-800 px-4 py-3 font-bold text-lg">
//                   {category.category}
//                 </div>
//                 <div className="p-5">
//                   <ul className="space-y-2">
//                     {category.requirements.map((requirement, i) => (
//                       <li key={i} className="flex items-start">
//                         <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                           {i + 1}
//                         </div>
//                         <span className="text-gray-700">{requirement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Priority Areas */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Priority Focus Areas</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Area
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Rationale
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Priority
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.priorityAreas.map((area, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{area.area}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{area.rationale}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         area.priority === 'High' ? 'bg-red-100 text-red-800' : 
//                         area.priority === 'Medium-High' ? 'bg-orange-100 text-orange-800' : 
//                         'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {area.priority}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Deliverables */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <FileText className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Required Deliverables</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Deliverable
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Description
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Format
//                   </th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Deadline
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.deliverables.map((deliverable, idx) => (
//                   <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{deliverable.item}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{deliverable.description}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-700">{deliverable.format}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                         {deliverable.deadline}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Points of Contact */}
//         <div className="mb-8">
//           <div className="flex items-center mb-6">
//             <Users className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Points of Contact</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {rfiData.pointsOfContact.map((contact, idx) => (
//               <div key={idx} className="border rounded-lg p-5">
//                 <h3 className="font-bold text-gray-900 mb-2">{contact.name}</h3>
//                 <div className="text-sm text-gray-500 mb-1">{contact.role}</div>
//                 <div className="flex items-center text-blue-600">
//                   <a href={`mailto:${contact.contact}`} className="text-sm font-medium hover:underline">
//                     {contact.contact}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
//             <span className="text-gray-600">Issued by <span className="font-semibold">{rfiData.source}</span></span>
//           </div>
//           {/* <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors">
//               Download RFI
//             </button>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Submit Response
//             </button>
//           </div> */}


//                         <button 
//                             onClick={() => window.location.href = '/20250321-UAE and Sudan Counter Narrative Plan.pdf'} 
//                             className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
//                         >
//                             Download PDF
//                         </button>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;















// import React from 'react';
// import { AlertTriangle, Search, FileText, Target, CalendarClock, CheckSquare, Users } from 'lucide-react';

// const SudanICJMessagingRFI = () => {
//   // NEW SUMMARY DATA (VERBATIM, INTERPRETED FOR DISPLAY)
//   const summarySection = (
//     <div className="p-8 bg-blue-50 border-l-4 border-blue-500 mb-8">
//       {/* First Subsection: Platform Table */}
//       <div className="mb-8">
//         {/* We interpret the top line "Platform | Reasons for Usage" as a table heading */}
//         <h2 className="text-2xl font-bold text-blue-800 mb-4">
//           Platform | Reasons for Usage
//         </h2>
//         <div className="overflow-hidden border rounded-lg">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Platform
//                 </th>
//                 <th
//                   scope="col"
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   Reasons for Usage
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {/* Twitter/X */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Twitter/X
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
//                     </li>
//                     <li>
//                       Critical content spreads quickly due to retweet functionality, making establishing positive counter-narratives vital
//                     </li>
//                     <li>
//                       User base includes an influential audience, making sentiment change here disproportionately valuable
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Instagram */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Instagram
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       High engagement especially for emotive or humanitarian content, which can be leveraged to showcase positive examples of UAE-Sudan support to a wide pro-peace audience (62% female user base)
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* TikTok */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   TikTok
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       New capabilities for viral counter-narratives due to low barrier to entry, plus major Sudanese diaspora usage potential
//                     </li>
//                     <li>
//                       Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Facebook */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Facebook
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       Larger, older user base (67% supporting coverage from diaspora) though overshadowed by Twitter and Tiktok engagement for Sudan coverage
//                     </li>
//                     <li>
//                       Average engagement shows 5,868 views per trending post
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* YouTube */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   YouTube
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       Particularly effective for documentary or interview-style content, though typically slower uptake
//                     </li>
//                     <li>
//                       Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Audience */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Audience
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   <ul className="list-disc ml-4 space-y-1">
//                     <li>
//                       Western Policymakers: Influence diplomatic relations, arms deals, and trade
//                     </li>
//                     <li>
//                       AU and Arab League: Key regional bodies whose stances can affect and align against the UAE Sudanese Public Opinion: Directly shaping minds in Sudan re the Ongoing government’s narrative
//                     </li>
//                   </ul>
//                 </td>
//               </tr>
//               {/* Humanitarian Partners */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Humanitarian Partners
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   Focus on NGO collaboration and real stories from the field that the UAE is focused on helping civilians
//                 </td>
//               </tr>
//               {/* Media Outlets */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   Media Outlets
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   Western media coverage remains extremely influential and can shape global narratives on the Sudanese government
//                 </td>
//               </tr>
//               {/* BRICS Countries */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   BRICS Countries
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   Significant geopolitical, economic, and security relationships
//                 </td>
//               </tr>
//               {/* G20 Countries */}
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   G20 Countries
//                 </td>
//                 <td className="px-6 py-4 text-gray-700">
//                   The UAE has strong economic and political ties with many G20 nations
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Second Subsection: Recommendations Summary */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-blue-800 mb-4">
//           **Recommendations Summary**
//         </h2>
//         <p className="text-gray-900">
//           The recommended strategic, multi-faceted approach to countering the critical narratives
//           against the UAE in the context of Sudan is as follows*.* 
//         </p>
//       </div>

//       {/* Third Subsection: Countering Critical Sudan Narratives */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-blue-800 mb-4">
//           **Countering Critical Sudan Narratives**
//         </h2>
//         <ul className="list-disc ml-6 space-y-2 text-gray-900">
//           <li>
//             <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
//           </li>
//           <li>
//             <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
//             <ul className="list-disc ml-6 space-y-1 mt-1">
//               <li>
//                 General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
//               </li>
//               <li>
//                 Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
//               </li>
//             </ul>
//           </li>
//           <li>
//             <strong>Content Formats & Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
//           </li>
//           <li>
//             <strong>Influencer & Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
//           </li>
//           <li>
//             <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
//           </li>
//           <li>
//             <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
//           </li>
//         </ul>
//       </div>

//       {/* Fourth Subsection: Strategic Counter-Narrative Messaging Framework */}
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-blue-800 mb-4">
//           **Strategic Counter-Narrative Messaging Framework**
//         </h2>
//         <ul className="list-disc ml-6 space-y-2 text-gray-900">
//           <li>
//             <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
//           </li>
//           <li>
//             <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
//           </li>
//           <li>
//             <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
//           </li>
//           <li>
//             <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
//           </li>
//           <li>
//             <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
//           </li>
//           <li>
//             <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
//           </li>
//         </ul>
//       </div>

//       {/* Fifth Subsection: Timeline */}
//       <div>
//         <h2 className="text-2xl font-bold text-blue-800 mb-4">
//           **Timeline**
//         </h2>
//         <div className="text-gray-900 space-y-4">
//           <p>
//             <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
//             <ul className="list-disc ml-6 mt-1 space-y-1">
//               <li>Roll out official statements and rebuttals</li>
//               <li>Deploy senior officials for interviews</li>
//               <li>Push an aggressive social media blitz</li>
//               <li>Engage embassies to communicate with host country media in Africa and Asia</li>
//             </ul>
//           </p>
//           <p>
//             <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
//             <ul className="list-disc ml-6 mt-1 space-y-1">
//               <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
//               <li>Deeper content</li>
//               <li>Host a high-profile press conference or panel.</li>
//             </ul>
//           </p>
//           <p>
//             <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
//             <ul className="list-disc ml-6 mt-1 space-y-1">
//               <li>Maintain regular communications, but pivot to showcasing outcomes</li>
//               <li>Continue engaging Sudan’s neighbours and the AU</li>
//               <li>Begin subtle reputation repair in Western circles</li>
//             </ul>
//           </p>
//           <p>
//             <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
//             <ul className="list-disc ml-6 mt-1 space-y-1">
//               <li>Integration of the narrative campaign into broader public diplomacy.</li>
//               <li>Continue periodic updates on humanitarian aid</li>
//               <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
//               <li>
//                 If the ICJ case progresses to substantive stages, mount a communications push around legal
//                 victories or expert opinions favouring the UAE.
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//   );

//   // Placeholder data structure (existing)
//   const rfiData = {
//     title: "Sudan ICJ Messaging RFI",
//     subtitle: "Request for Information: Strategic Communications Response",
//     dateIssued: "March 17, 2025",
//     dueDate: "March 20, 2025",
//     source: "Beacon Red",
//     background: "The UAE is currently facing a coordinated disinformation campaign related to ongoing ICJ proceedings involving Sudan. This campaign threatens to damage the UAE's international standing and undermine its strategic humanitarian and regional security objectives. A comprehensive counter-narrative strategy is urgently required to defend UAE interests and shift the narrative landscape in a more favorable direction.",
//     objectives: [
//       "Develop a detailed Counter-Narrative plan to defend from ongoing attacks",
//       "Create a strategic framework to shift the narrative to UAE's favor",
//       "Identify key stakeholders, channels, and messaging opportunities",
//       "Establish metrics for measuring communications effectiveness",
//       "Outline implementation timeline and resource requirements"
//     ],
//     informationRequirements: [
//       {
//         category: "Media Analysis",
//         requirements: [
//           "Comprehensive analysis of current narrative landscape across Western and regional media",
//           "Identification of primary narrative drivers and influential voices",
//           "Comparative analysis of narrative treatment in different media ecosystems",
//           "Evidence of disinformation techniques and coordination patterns",
//           "Historical context of similar narrative challenges and effective responses"
//         ]
//       },
//       {
//         category: "Strategic Framework",
//         requirements: [
//           "Defensive messaging framework with evidence-based refutation points",
//           "Proactive narrative positioning strategy with core messaging themes",
//           "Channel-specific tactical approaches (diplomatic, media, digital)",
//           "Stakeholder mapping with engagement prioritisation",
//           "Differentiated messaging for key audience segments"
//         ]
//       },
//       {
//         category: "Regional Context",
//         requirements: [
//           "Comparative analysis of similar challenges faced by regional actors",
//           "Assessment of Qatar and Saudi Arabia's strategic communications approaches",
//           "Analysis of Sudan's current messaging strategy and vulnerabilities",
//           "Identification of regional coalition-building opportunities",
//           "Evaluation of historical precedents for similar regional challenges"
//         ]
//       },
//       {
//         category: "Implementation Plan",
//         requirements: [
//           "Detailed tactical roadmap with phased implementation timeline",
//           "Channel-specific content strategies and distribution mechanisms",
//           "Resource requirements and organisational structure recommendations",
//           "Coordination framework across relevant UAE entities and stakeholders",
//           "Success metrics and evaluation methodology"
//         ]
//       }
//     ],
//     priorityAreas: [
//       {
//         area: "Western Media Engagement",
//         rationale: "Critical for shaping international institutional perspectives and minimising reputational damage in key diplomatic contexts.",
//         priority: "High"
//       },
//       {
//         area: "Factual Evidence Compilation",
//         rationale: "Essential for evidence-based refutation of specific claims and establishing credibility with neutral third parties.",
//         priority: "High"
//       },
//       {
//         area: "Humanitarian Narrative Development",
//         rationale: "Strategic opportunity to reframe discussion around UAE's substantial humanitarian commitments and positive regional impact.",
//         priority: "Medium-High"
//       },
//       {
//         area: "Regional Media Strategy",
//         rationale: "Important for maintaining regional influence and countering Sudan's positioning with neighbouring states.",
//         priority: "Medium"
//       },
//       {
//         area: "Digital Response Capability",
//         rationale: "Necessary for rapid response to emerging narratives and engagement with online stakeholders.",
//         priority: "Medium"
//       }
//     ],
//     deliverables: [
//       {
//         item: "UAE and Sudan Counter Narrative Plan",
//         description: "Comprehensive strategy document integrating all analysis and recommendations",
//         format: "Detailed report with executive summary",
//         deadline: "March 21, 2025"
//       },
//       {
//         item: "Comparative Media Analysis",
//         description: "Analysis of narrative treatment across media landscapes",
//         format: "Analytical report with visualisations",
//         deadline: "March 18, 2025"
//       },
//       {
//         item: "Strategic Communications Framework",
//         description: "Tactical roadmap for countering disinformation",
//         format: "Strategic framework document",
//         deadline: "March 19, 2025"
//       },
//       {
//         item: "Regional Strategy Comparison",
//         description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
//         format: "Comparative analysis report",
//         deadline: "March 18, 2025"
//       }
//     ],
//     pointsOfContact: [
//       {
//         name: "Strategic Communications Team",
//         role: "Primary recipient of intelligence products",
//         contact: "comms@beaconred.example"
//       },
//       {
//         name: "Legal Affairs Coordination",
//         role: "Coordination with ICJ proceedings team",
//         contact: "legal@beaconred.example"
//       },
//       {
//         name: "Intelligence Analysis Division",
//         role: "Supporting analysis and monitoring",
//         contact: "intel@beaconred.example"
//       }
//     ]
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* NEW: SUMMARY SECTION AT THE VERY TOP */}
//       {summarySection}

//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{rfiData.title}</h1>
//             <p className="text-blue-100 mt-1">{rfiData.subtitle}</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: {rfiData.dateIssued}</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: {rfiData.dueDate}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Background */}
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
//           <h2 className="text-xl font-bold text-blue-800 mb-2">Background &amp; Context</h2>
//           <p className="text-gray-800">{rfiData.background}</p>
//         </div>

//         {/* Objectives */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <Target className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Intelligence Objectives</h2>
//           </div>
          
//           <div className="bg-gray-50 rounded-lg p-6">
//             <ul className="space-y-3">
//               {rfiData.objectives.map((objective, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{objective}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Information Requirements */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Search className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Information Requirements</h2>
//           </div>
          
//           <div className="space-y-6">
//             {rfiData.informationRequirements.map((category, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <div className="bg-blue-100 text-blue-800 px-4 py-3 font-bold text-lg">
//                   {category.category}
//                 </div>
//                 <div className="p-5">
//                   <ul className="space-y-2">
//                     {category.requirements.map((requirement, i) => (
//                       <li key={i} className="flex items-start">
//                         <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                           {i + 1}
//                         </div>
//                         <span className="text-gray-700">{requirement}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Priority Areas */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Priority Focus Areas</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Area
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Rationale
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Priority
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.priorityAreas.map((area, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{area.area}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">{area.rationale}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           area.priority === 'High'
//                             ? 'bg-red-100 text-red-800'
//                             : area.priority === 'Medium-High'
//                             ? 'bg-orange-100 text-orange-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}
//                       >
//                         {area.priority}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Deliverables */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <FileText className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Required Deliverables</h2>
//           </div>
          
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Deliverable
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Description
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Format
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Deadline
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.deliverables.map((deliverable, idx) => (
//                   <tr
//                     key={idx}
//                     className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">
//                         {deliverable.item}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="text-sm text-gray-700">
//                         {deliverable.description}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-700">
//                         {deliverable.format}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
//                         {deliverable.deadline}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Points of Contact */}
//         <div className="mb-8">
//           <div className="flex items-center mb-6">
//             <Users className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Points of Contact</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {rfiData.pointsOfContact.map((contact, idx) => (
//               <div key={idx} className="border rounded-lg p-5">
//                 <h3 className="font-bold text-gray-900 mb-2">{contact.name}</h3>
//                 <div className="text-sm text-gray-500 mb-1">{contact.role}</div>
//                 <div className="flex items-center text-blue-600">
//                   <a
//                     href={`mailto:${contact.contact}`}
//                     className="text-sm font-medium hover:underline"
//                   >
//                     {contact.contact}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
//             <span className="text-gray-600">
//               Issued by <span className="font-semibold">{rfiData.source}</span>
//             </span>
//           </div>
//           <button
//             onClick={() => window.location.href = '/20250321-UAE and Sudan Counter Narrative Plan.pdf'}
//             className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
//           >
//             Download PDF
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;
















// import React from 'react';

// const SudanICJMessagingRFI = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Reused Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Sudan ICJ Messaging RFI</h1>
//             <p className="text-blue-100 mt-1">Request for Information: Strategic Communications Response</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: March 17, 2025</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: March 20, 2025</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NEW CONTENT ONLY */}
//       <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
//         {/* First Subsection: Platform Table */}
//         <div className="mb-8">
//           {/* We interpret the top line "Platform | Reasons for Usage" as a table heading */}
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Platform | Reasons for Usage
//           </h2>
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Platform
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Reasons for Usage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Twitter/X */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Twitter/X
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
//                       </li>
//                       <li>
//                         Critical content spreads quickly due to retweet functionality, making establishing positive counter-narratives vital
//                       </li>
//                       <li>
//                         User base includes an influential audience, making sentiment change here disproportionately valuable
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Instagram */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Instagram
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         High engagement especially for emotive or humanitarian content, which can be leveraged to showcase positive examples of UAE-Sudan support to a wide pro-peace audience (62% female user base)
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* TikTok */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     TikTok
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         New capabilities for viral counter-narratives due to low barrier to entry, plus major Sudanese diaspora usage potential
//                       </li>
//                       <li>
//                         Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Facebook */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Facebook
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Larger, older user base (67% supporting coverage from diaspora) though overshadowed by Twitter and Tiktok engagement for Sudan coverage
//                       </li>
//                       <li>
//                         Average engagement shows 5,868 views per trending post
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* YouTube */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     YouTube
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Particularly effective for documentary or interview-style content, though typically slower uptake
//                       </li>
//                       <li>
//                         Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Audience */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Audience
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Western Policymakers: Influence diplomatic relations, arms deals, and trade
//                       </li>
//                       <li>
//                         AU and Arab League: Key regional bodies whose stances can affect and align against the UAE Sudanese Public Opinion: Directly shaping minds in Sudan re the Ongoing government’s narrative
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Humanitarian Partners */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Humanitarian Partners
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Focus on NGO collaboration and real stories from the field that the UAE is focused on helping civilians
//                   </td>
//                 </tr>
//                 {/* Media Outlets */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Media Outlets
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Western media coverage remains extremely influential and can shape global narratives on the Sudanese government
//                   </td>
//                 </tr>
//                 {/* BRICS Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     BRICS Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Significant geopolitical, economic, and security relationships
//                   </td>
//                 </tr>
//                 {/* G20 Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     G20 Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     The UAE has strong economic and political ties with many G20 nations
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Second Subsection: Recommendations Summary */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             **Recommendations Summary**
//           </h2>
//           <p className="text-gray-900">
//             The recommended strategic, multi-faceted approach to countering the critical narratives
//             against the UAE in the context of Sudan is as follows*.* 
//           </p>
//         </div>

//         {/* Third Subsection: Countering Critical Sudan Narratives */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             **Countering Critical Sudan Narratives**
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
//             </li>
//             <li>
//               <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
//               <ul className="list-disc ml-6 space-y-1 mt-1">
//                 <li>
//                   General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
//                 </li>
//                 <li>
//                   Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <strong>Content Formats & Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
//             </li>
//             <li>
//               <strong>Influencer & Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
//             </li>
//             <li>
//               <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
//             </li>
//             <li>
//               <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
//             </li>
//           </ul>
//         </div>

//         {/* Fourth Subsection: Strategic Counter-Narrative Messaging Framework */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             **Strategic Counter-Narrative Messaging Framework**
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
//             </li>
//             <li>
//               <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
//             </li>
//             <li>
//               <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
//             </li>
//             <li>
//               <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
//             </li>
//             <li>
//               <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
//             </li>
//             <li>
//               <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
//             </li>
//           </ul>
//         </div>

//         {/* Fifth Subsection: Timeline */}
//         <div>
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             **Timeline**
//           </h2>
//           <div className="text-gray-900 space-y-4">
//             <p>
//               <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Roll out official statements and rebuttals</li>
//                 <li>Deploy senior officials for interviews</li>
//                 <li>Push an aggressive social media blitz</li>
//                 <li>Engage embassies to communicate with host country media in Africa and Asia</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
//                 <li>Deeper content</li>
//                 <li>Host a high-profile press conference or panel.</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Maintain regular communications, but pivot to showcasing outcomes</li>
//                 <li>Continue engaging Sudan’s neighbors and the AU</li>
//                 <li>Begin subtle reputation repair in Western circles</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Integration of the narrative campaign into broader public diplomacy.</li>
//                 <li>Continue periodic updates on humanitarian aid</li>
//                 <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
//                 <li>
//                   If the ICJ case progresses to substantive stages, mount a communications push around legal
//                   victories or expert opinions favoring the UAE.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;


















// import React from 'react';

// const SudanICJMessagingRFI = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Reused Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Sudan ICJ Messaging RFI</h1>
//             <p className="text-blue-100 mt-1">Request for Information: Strategic Communications Response</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: March 17, 2025</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: March 20, 2025</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NEW CONTENT ONLY */}
//       <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
//         {/* First Subsection: Platform Table */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Platform | Reasons for Usage
//           </h2>
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Platform
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Reasons for Usage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Twitter/X */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Twitter/X
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
//                       </li>
//                       <li>
//                         Critical content spreads quickly due to retweet functionality, making establishing positive counter-narratives vital
//                       </li>
//                       <li>
//                         User base includes an influential audience, making sentiment change here disproportionately valuable
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Instagram */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Instagram
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         High engagement especially for emotive or humanitarian content, which can be leveraged to showcase positive examples of UAE-Sudan support to a wide pro-peace audience (62% female user base)
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* TikTok */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     TikTok
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         New capabilities for viral counter-narratives due to low barrier to entry, plus major Sudanese diaspora usage potential
//                       </li>
//                       <li>
//                         Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Facebook */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Facebook
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Larger, older user base (67% supporting coverage from diaspora) though overshadowed by Twitter and Tiktok engagement for Sudan coverage
//                       </li>
//                       <li>
//                         Average engagement shows 5,868 views per trending post
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* YouTube */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     YouTube
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Particularly effective for documentary or interview-style content, though typically slower uptake
//                       </li>
//                       <li>
//                         Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Audience */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Audience
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Western Policymakers: Influence diplomatic relations, arms deals, and trade
//                       </li>
//                       <li>
//                         AU and Arab League: Key regional bodies whose stances can affect and align against the UAE Sudanese Public Opinion: Directly shaping minds in Sudan re the Ongoing government’s narrative
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Humanitarian Partners */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Humanitarian Partners
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Focus on NGO collaboration and real stories from the field that the UAE is focused on helping civilians
//                   </td>
//                 </tr>
//                 {/* Media Outlets */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Media Outlets
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Western media coverage remains extremely influential and can shape global narratives on the Sudanese government
//                   </td>
//                 </tr>
//                 {/* BRICS Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     BRICS Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Significant geopolitical, economic, and security relationships
//                   </td>
//                 </tr>
//                 {/* G20 Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     G20 Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     The UAE has strong economic and political ties with many G20 nations
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recommendations Summary */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Recommendations Summary
//           </h2>
//           <p className="text-gray-900">
//             The recommended strategic, multi-faceted approach to countering the critical narratives
//             against the UAE in the context of Sudan is as follows*.* 
//           </p>
//         </div>

//         {/* Countering Critical Sudan Narratives */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Countering Critical Sudan Narratives
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
//             </li>
//             <li>
//               <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
//               <ul className="list-disc ml-6 space-y-1 mt-1">
//                 <li>
//                   General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
//                 </li>
//                 <li>
//                   Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <strong>Content Formats & Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
//             </li>
//             <li>
//               <strong>Influencer & Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
//             </li>
//             <li>
//               <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
//             </li>
//             <li>
//               <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
//             </li>
//           </ul>
//         </div>

//         {/* Strategic Counter-Narrative Messaging Framework */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Strategic Counter-Narrative Messaging Framework
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
//             </li>
//             <li>
//               <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
//             </li>
//             <li>
//               <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
//             </li>
//             <li>
//               <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
//             </li>
//             <li>
//               <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
//             </li>
//             <li>
//               <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
//             </li>
//           </ul>
//         </div>

//         {/* Timeline */}
//         <div>
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Timeline
//           </h2>
//           <div className="text-gray-900 space-y-4">
//             <p>
//               <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Roll out official statements and rebuttals</li>
//                 <li>Deploy senior officials for interviews</li>
//                 <li>Push an aggressive social media blitz</li>
//                 <li>Engage embassies to communicate with host country media in Africa and Asia</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
//                 <li>Deeper content</li>
//                 <li>Host a high-profile press conference or panel.</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Maintain regular communications, but pivot to showcasing outcomes</li>
//                 <li>Continue engaging Sudan’s neighbors and the AU</li>
//                 <li>Begin subtle reputation repair in Western circles</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Integration of the narrative campaign into broader public diplomacy.</li>
//                 <li>Continue periodic updates on humanitarian aid</li>
//                 <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
//                 <li>
//                   If the ICJ case progresses to substantive stages, mount a communications push around legal
//                   victories or expert opinions favoring the UAE.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;



































// import React from 'react';

// const SudanICJMessagingRFI = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Reused Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Sudan ICJ Messaging RFI</h1>
//             <p className="text-blue-100 mt-1">Request for Information: Strategic Communications Response</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: March 17, 2025</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: March 20, 2025</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NEW CONTENT ONLY */}
//       <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
//         {/* First Subsection: Platform Table */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Platform | Reasons for Usage
//           </h2>
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Platform
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Reasons for Usage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Twitter/X */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Twitter/X
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
//                       </li>
//                       <li>
//                         Critical content spreads quickly due to retweet functionality, making establishing positive counter-narratives vital
//                       </li>
//                       <li>
//                         User base includes an influential audience, making sentiment change here disproportionately valuable
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Instagram */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Instagram
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         High engagement especially for emotive or humanitarian content, which can be leveraged to showcase positive examples of UAE-Sudan support to a wide pro-peace audience (62% female user base)
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* TikTok */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     TikTok
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         New capabilities for viral counter-narratives due to low barrier to entry, plus major Sudanese diaspora usage potential
//                       </li>
//                       <li>
//                         Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Facebook */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Facebook
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Larger, older user base (67% supporting coverage from diaspora) though overshadowed by Twitter and Tiktok engagement for Sudan coverage
//                       </li>
//                       <li>
//                         Average engagement shows 5,868 views per trending post
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* YouTube */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     YouTube
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Particularly effective for documentary or interview-style content, though typically slower uptake
//                       </li>
//                       <li>
//                         Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Audience */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Audience
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Western Policymakers: Influence diplomatic relations, arms deals, and trade
//                       </li>
//                       <li>
//                         AU and Arab League: Key regional bodies whose stances can affect and align against the UAE Sudanese Public Opinion: Directly shaping minds in Sudan re the Ongoing government’s narrative
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Humanitarian Partners */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Humanitarian Partners
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Focus on NGO collaboration and real stories from the field that the UAE is focused on helping civilians
//                   </td>
//                 </tr>
//                 {/* Media Outlets */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Media Outlets
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Western media coverage remains extremely influential and can shape global narratives on the Sudanese government
//                   </td>
//                 </tr>
//                 {/* BRICS Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     BRICS Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Significant geopolitical, economic, and security relationships
//                   </td>
//                 </tr>
//                 {/* G20 Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     G20 Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     The UAE has strong economic and political ties with many G20 nations
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recommendations Summary */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Recommendations Summary
//           </h2>
//           <p className="text-gray-900">
//             The recommended strategic, multi-faceted approach to countering the critical narratives
//             against the UAE in the context of Sudan is as follows*.* 
//           </p>
//         </div>

//         {/* Countering Critical Sudan Narratives */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Countering Critical Sudan Narratives
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
//             </li>
//             <li>
//               <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
//               <ul className="list-disc ml-6 space-y-1 mt-1">
//                 <li>
//                   General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
//                 </li>
//                 <li>
//                   Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <strong>Content Formats & Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
//             </li>
//             <li>
//               <strong>Influencer & Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
//             </li>
//             <li>
//               <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
//             </li>
//             <li>
//               <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
//             </li>
//           </ul>
//         </div>

//         {/* Strategic Counter-Narrative Messaging Framework */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Strategic Counter-Narrative Messaging Framework
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
//             </li>
//             <li>
//               <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
//             </li>
//             <li>
//               <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
//             </li>
//             <li>
//               <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
//             </li>
//             <li>
//               <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
//             </li>
//             <li>
//               <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
//             </li>
//           </ul>
//         </div>

//         {/* Timeline */}
//         <div>
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Timeline
//           </h2>
//           <div className="text-gray-900 space-y-4">
//             <p>
//               <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Roll out official statements and rebuttals</li>
//                 <li>Deploy senior officials for interviews</li>
//                 <li>Push an aggressive social media blitz</li>
//                 <li>Engage embassies to communicate with host country media in Africa and Asia</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
//                 <li>Deeper content</li>
//                 <li>Host a high-profile press conference or panel.</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Maintain regular communications, but pivot to showcasing outcomes</li>
//                 <li>Continue engaging Sudan’s neighbors and the AU</li>
//                 <li>Begin subtle reputation repair in Western circles</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Integration of the narrative campaign into broader public diplomacy.</li>
//                 <li>Continue periodic updates on humanitarian aid</li>
//                 <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
//                 <li>
//                   If the ICJ case progresses to substantive stages, mount a communications push around legal
//                   victories or expert opinions favoring the UAE.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;
















// import React from 'react';
// import { AlertTriangle, Search, FileText, Target, CalendarClock, Users } from 'lucide-react';

// // Mock Button component to avoid the import error.  In a real application,
// // you'd make sure this component is correctly imported and available.
// const Button = ({ variant, onClick, className, children }) => {
//   let baseClassName = "px-4 py-2 rounded-lg font-medium transition-colors";
//   let combinedClassName = `${baseClassName} ${className}`;

//   if (variant === "outline") {
//     combinedClassName = `${combinedClassName} bg-blue-100 text-blue-700 hover:bg-blue-200`;
//   } else {
//     combinedClassName = `${combinedClassName} bg-blue-600 text-white hover:bg-blue-700`;
//   }

//   return (
//     <button onClick={onClick} className={combinedClassName}>
//       {children}
//     </button>
//   );
// };

// const SudanICJMessagingRFI = () => {
//   // Data structure
//   const rfiData = {
//     title: "Countering Critical Sudan Narratives",
//     subtitle: "Strategic Communications Response",
//     dateIssued: "March 17, 2025",
//     dueDate: "March 20, 2025",
//     source: "Beacon Red",
//     background: "The recommended strategic, multi-faceted approach to countering the critical narratives against the UAE in the context of Sudan is as follows.",
//     objectives: [
//       "Regional Media Outreach: Grant opinion articles, interviews, and exclusive access pieces.",
//       "Social Media Campaign: Launch a coordinated campaign with #UAEForSudanPeace.",
//       "Content Formats & Frequency: Mix short videos, infographics, op-eds.",
//       "Influencer & Grassroots Engagement: Collaborate with credible influencers and engage with NGOs and diaspora leaders.",
//       "Initial Capacity Building: Establish 24/7 rapid response monitoring.",
//       "Aggressive Deflection Campaign: Target and counter top influencers attacking UAE."
//     ],
//     informationRequirements: [
//       {
//         category: "Strategic Counter-Narrative Messaging Framework",
//         requirements: [
//           "Core Themes: Humanitarian Leadership, Proactive Peace Advocacy, Global South Solidarity, Economic Partnerships.",
//           "Refute Claims: Emphasize lack of evidence, highlight Sudanese government shortfalls.",
//           "Deflection: Reflect narrative back onto SAF human rights violations."
//         ]
//       },
//     ],
//     priorityAreas: [
//       { area: "Timeline", rationale: "", priority: "" },
//       { area: "Immediate (0–1 Month)", rationale: "Control narrative in aftermath.", priority: "" },
//       { area: "Short Term (2-3 months)", rationale: "Introduce and solidify themes.", priority: "" },
//       { area: "Medium Term (4-6)", rationale: "Normalize balanced narrative.", priority: "" },
//       { area: "Long Term (6+ months)", rationale: "Sustain image, prepare for ICJ.", priority: "" }
//     ],
//     deliverables: [
//       { item: "Official statements and rebuttals", deadline: "Immediate (0–1 Month)" },
//       { item: "Senior official interviews", deadline: "Immediate (0–1 Month)" },
//       { item: "Aggressive social media blitz", deadline: "Immediate (0–1 Month)" },
//       { item: "Embassy communications", deadline: "Immediate (0–1 Month)" },
//       { item: "Op-eds and influencer collaborations", deadline: "Short Term (2-3 months)" },
//       { item: "Deeper content", deadline: "Short Term (2-3 months)" },
//       { item: "Press conference or panel", deadline: "Short Term (2-3 months)" },
//       { item: "Showcasing outcomes", deadline: "Medium Term (4-6)" },
//       { item: "Engage Sudan's neighbors and the AU", deadline: "Medium Term (4-6)" },
//       { item: "Reputation repair in West", deadline: "Medium Term (4-6)" },
//       { item: "Integrate into public diplomacy", deadline: "Long Term (6+ months)" },
//       { item: "Humanitarian aid updates", deadline: "Long Term (6+ months)" },
//       { item: "Leverage global events", deadline: "Long Term (6+ months)" },
//       { item: "ICJ communications push", deadline: "Long Term (6+ months)" }
//     ],
//     pointsOfContact: [
//       { name: "Platform/X", role: "Reasons for Usage", contact: "High negative content; crucial for sentiment shift." },
//       { name: "Instagram", role: "Reasons for Usage", contact: "High engagement efficiency; strong visual potential." },
//       { name: "TikTok", role: "Reasons for Usage", contact: "More supporting content; reaches younger audiences." },
//       { name: "Facebook", role: "Reasons for Usage", contact: "Reaches older audiences; strong in Africa/Middle East." },
//       { name: "Telegram", role: "Reasons for Usage", contact: "Opportunity for counter-narratives; influential in specific regions." },
//       { name: "Audience", role: "Why", contact: "Influence diplomatic relations." },
//       { name: "AU and Arab League", role: "Why", contact: "Crucial for regional support." },
//       { name: "Sudanese Public", role: "Why", contact: "Strengthens pro-civilian stance." },
//       { name: "Humanitarian Organizations", role: "Why", contact: "Highlights impact on stability." },
//       { name: "Global Business and Investment Leaders", role: "Why", contact: "Affects economic trust." },
//       { name: "Think Tanks and Policy Institutes", role: "Why", contact: "Shapes policy discourse." },
//       { name: "BRICS Countries", role: "Why", contact: "UAE has ties with G20 nations" },
//       { name: "G20 Countries", role: "Why", contact: "" }
//     ]
//   };

//   const handleDownload = () => {
//     // In a real application, you would trigger the download here.  This is
//     // a placeholder for that functionality.  For example, you might
//     // construct a URL to a downloadable file on your server.
//     console.log("Downloading PDF...");
//     window.location.href = '/20250321-UAE and Sudan Counter Narrative Plan.pdf';
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{rfiData.title}</h1>
//             <p className="text-blue-100 mt-1">{rfiData.subtitle}</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: {rfiData.dateIssued}</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: {rfiData.dueDate}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8 space-y-8">
//         {/* Recommendations Summary */}
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
//           <h2 className="text-xl font-bold text-blue-800 mb-2">Recommendations Summary</h2>
//           <p className="text-gray-800">{rfiData.background}</p>
//         </div>

//         {/* Countering Critical Sudan Narratives */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
//             <Target className="h-6 w-6 text-blue-600 mr-2" />
//             Countering Critical Sudan Narratives
//           </h2>
//           <ul className="list-disc list-inside space-y-2 bg-gray-50 rounded-lg p-6">
//             {rfiData.objectives.map((objective, idx) => (
//               <li key={idx} className="text-gray-700">
//                 {objective}
//                 {idx === 1 && (
//                   <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
//                     <li>General Messaging Cadence: 15-20 daily posts. Peak times: 9-11am & 7-9pm GMT.</li>
//                     <li>Languages: Arabic (68%), English (22%), French (10%).</li>
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Strategic Counter-Narrative Messaging Framework */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
//             <Search className="h-6 w-6 text-blue-600 mr-2" />
//             Strategic Counter-Narrative Messaging Framework
//           </h2>
//           <div className="space-y-6">
//             {rfiData.informationRequirements.map((category, idx) => (
//               <div key={idx} className="border rounded-lg overflow-hidden">
//                 <div className="bg-blue-100 text-blue-800 px-4 py-3 font-bold text-lg">
//                   {category.category}
//                 </div>
//                 <ul className="list-disc list-inside space-y-2 p-5">
//                   {category.requirements.map((requirement, i) => (
//                     <li key={i} className="text-gray-700">{requirement}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Timeline */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
//             <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
//             Timeline
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rationale</th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.priorityAreas.map((area, idx) => (
//                   <tr key={idx}>
//                     <td className="px-6 py-4 whitespace-nowrap"><div className="font-medium text-gray-900">{area.area}</div></td>
//                     <td className="px-6 py-4"><div className="text-sm text-gray-700">{area.rationale}</div></td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                         area.priority === 'High' ? 'bg-red-100 text-red-800' :
//                         area.priority === 'Medium-High' ? 'bg-orange-100 text-orange-800' :
//                         'bg-yellow-100 text-yellow-800'
//                       }`}>
//                         {area.priority}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Action Items and Deadlines */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
//             <FileText className="h-6 w-6 text-blue-600 mr-2" />
//             Action Items and Deadlines
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deliverable</th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
//                   <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rfiData.deliverables.map((deliverable, idx) => (
//                   <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                     <td className="px-6 py-4 whitespace-nowrap"><div className="font-medium text-gray-900">{deliverable.item}</div></td>
//                     <td className="px-6 py-4"><div className="text-sm text-gray-700">{deliverable.description}</div></td>
//                     <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-700">{deliverable.format}</div></td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
//                         {deliverable.deadline}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Target Audience and Rationale */}
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
//             <Users className="h-6 w-6 text-blue-600 mr-2" />
//             Target Audience and Rationale
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {rfiData.pointsOfContact.map((contact, idx) => (
//               <div key={idx} className="border rounded-lg p-5 space-y-2">
//                 <h3 className="font-bold text-gray-900">{contact.name}</h3>
//                 <div className="text-sm text-gray-500">{contact.role}</div>
//                 <div className="text-sm text-gray-500">{contact.contact}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
//             <span className="text-gray-600">Issued by <span className="font-semibold">{rfiData.source}</span></span>
//           </div>
//           <Button
//             variant="outline"
//             onClick={handleDownload} // Use the handleDownload function
//             className="bg-blue-100 text-blue-700 hover:bg-blue-200"
//           >
//             Download PDF
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;





















// import React from 'react';

// const SudanICJMessagingRFI = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Reused Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">Sudan ICJ Messaging RFI</h1>
//             <p className="text-blue-100 mt-1">Request for Information: Strategic Communications Response</p>
//           </div>
//           <div className="flex flex-col items-end space-y-1 text-sm">
//             <div className="flex items-center">
//               <span>Date Issued: March 17, 2025</span>
//             </div>
//             <div className="flex items-center">
//               <span>Response Due: March 20, 2025</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NEW CONTENT ONLY */}
//       <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
//         {/* First Subsection: Platform Table */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Platform | Reasons for Usage
//           </h2>
//           <div className="overflow-hidden border rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Platform
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Reasons for Usage
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {/* Twitter/X */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Twitter/X
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
//                       </li>
//                       <li>
//                         Critical content spreads quickly due to retweet functionality, making establishing positive counter-narratives vital
//                       </li>
//                       <li>
//                         User base includes an influential audience, making sentiment change here disproportionately valuable
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Instagram */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Instagram
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         High engagement especially for emotive or humanitarian content, which can be leveraged to showcase positive examples of UAE-Sudan support to a wide pro-peace audience (62% female user base)
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* TikTok */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     TikTok
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         New capabilities for viral counter-narratives due to low barrier to entry, plus major Sudanese diaspora usage potential
//                       </li>
//                       <li>
//                         Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Facebook */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Facebook
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Larger, older user base (67% supporting coverage from diaspora) though overshadowed by Twitter and Tiktok engagement for Sudan coverage
//                       </li>
//                       <li>
//                         Average engagement shows 5,868 views per trending post
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* YouTube */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     YouTube
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Particularly effective for documentary or interview-style content, though typically slower uptake
//                       </li>
//                       <li>
//                         Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Audience */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Audience
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     <ul className="list-disc ml-4 space-y-1">
//                       <li>
//                         Western Policymakers: Influence diplomatic relations, arms deals, and trade
//                       </li>
//                       <li>
//                         AU and Arab League: Key regional bodies whose stances can affect and align against the UAE Sudanese Public Opinion: Directly shaping minds in Sudan re the Ongoing government’s narrative
//                       </li>
//                     </ul>
//                   </td>
//                 </tr>
//                 {/* Humanitarian Partners */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Humanitarian Partners
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Focus on NGO collaboration and real stories from the field that the UAE is focused on helping civilians
//                   </td>
//                 </tr>
//                 {/* Media Outlets */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     Media Outlets
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Western media coverage remains extremely influential and can shape global narratives on the Sudanese government
//                   </td>
//                 </tr>
//                 {/* BRICS Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     BRICS Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     Significant geopolitical, economic, and security relationships
//                   </td>
//                 </tr>
//                 {/* G20 Countries */}
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                     G20 Countries
//                   </td>
//                   <td className="px-6 py-4 text-gray-700">
//                     The UAE has strong economic and political ties with many G20 nations
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Recommendations Summary */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Recommendations Summary
//           </h2>
//           <p className="text-gray-900">
//             The recommended strategic, multi-faceted approach to countering the critical narratives
//             against the UAE in the context of Sudan is as follows*.* 
//           </p>
//         </div>

//         {/* Countering Critical Sudan Narratives */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Countering Critical Sudan Narratives
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
//             </li>
//             <li>
//               <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
//               <ul className="list-disc ml-6 space-y-1 mt-1">
//                 <li>
//                   General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
//                 </li>
//                 <li>
//                   Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <strong>Content Formats & Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
//             </li>
//             <li>
//               <strong>Influencer & Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
//             </li>
//             <li>
//               <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
//             </li>
//             <li>
//               <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
//             </li>
//           </ul>
//         </div>

//         {/* Strategic Counter-Narrative Messaging Framework */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Strategic Counter-Narrative Messaging Framework
//           </h2>
//           <ul className="list-disc ml-6 space-y-2 text-gray-900">
//             <li>
//               <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
//             </li>
//             <li>
//               <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
//             </li>
//             <li>
//               <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
//             </li>
//             <li>
//               <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
//             </li>
//             <li>
//               <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
//             </li>
//             <li>
//               <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
//             </li>
//           </ul>
//         </div>

//         {/* Timeline */}
//         <div>
//           <h2 className="text-2xl font-bold text-blue-800 mb-4">
//             Timeline
//           </h2>
//           <div className="text-gray-900 space-y-4">
//             <p>
//               <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Roll out official statements and rebuttals</li>
//                 <li>Deploy senior officials for interviews</li>
//                 <li>Push an aggressive social media blitz</li>
//                 <li>Engage embassies to communicate with host country media in Africa and Asia</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
//                 <li>Deeper content</li>
//                 <li>Host a high-profile press conference or panel.</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Maintain regular communications, but pivot to showcasing outcomes</li>
//                 <li>Continue engaging Sudan’s neighbors and the AU</li>
//                 <li>Begin subtle reputation repair in Western circles</li>
//               </ul>
//             </p>
//             <p>
//               <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
//               <ul className="list-disc ml-6 mt-1 space-y-1">
//                 <li>Integration of the narrative campaign into broader public diplomacy.</li>
//                 <li>Continue periodic updates on humanitarian aid</li>
//                 <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
//                 <li>
//                   If the ICJ case progresses to substantive stages, mount a communications push around legal
//                   victories or expert opinions favoring the UAE.
//                 </li>
//               </ul>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SudanICJMessagingRFI;










import React from 'react';
import { Shield } from 'lucide-react';



const SudanICJMessagingRFI = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Reused Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">UAE-SUDAN COUNTER-NARRATIVE PLAN Summary Recommendations</h1>
            <p className="text-blue-100 mt-1">
              
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1 text-sm">
            <div className="flex items-center">
              <span>Date Issued: March 17, 2025</span>
            </div>
            <div className="flex items-center">
              <span>Response Due: March 20, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* NEW CONTENT ONLY */}
      <div className="p-8 bg-blue-50 border-l-4 border-blue-500">
        {/* Table 1: Platform vs. Reasons for Usage */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Platform 
          </h2>
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Platform
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Reasons for Usage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Twitter/X */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Twitter/X
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        Measures 85.8% negative content within the platform, with 82.8% of all critical content across all platform, therefore the largest opportunity to shift conversation sentiment
                      </li>
                      <li>
                        Moderate engagement metrics for critical attacking posts, which remain heavily retweeted
                      </li>
                      <li>
                        Critical content spreads rapidly due to retweet functionality, making establishing positive counter-narratives crucial
                      </li>
                      <li>
                        Wider user base includes an influential audience, making sentiment change here disproportionately valuable
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* Instagram */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Instagram
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        High engagement especially for content creation in general.
                      </li>
                      <li>
                        A favorable 62% positive base of UAE-Sudan efforts, which is more persuasive than text-based mediums
                      </li>
                      <li>
                        Allows for compelling visual evidence of humanitarian efforts, which is more persuasive than text-based mediums
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* TikTok */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    TikTok
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        Higher visibility potential for critical content regarding UAE-Sudan, the only major platform with user counts near Twitter (5 vs 4.434 on Twitter)
                      </li>
                      <li>
                        Content geared to younger audience, offering a chance to shape their perception before negative narratives solidify
                      </li>
                      <li>
                        Tiktok’s average engagement shows 5,868 views per video, creating significant coverage
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* Facebook */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Facebook
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        Significant diaspora growth with 963 critical posts vs 209 daily supporting posts
                      </li>
                      <li>
                        News-driven comments 9.2x more comments than typical general content, indicating especially strong diaspora presence
                      </li>
                      <li>
                        Larger user base (35+) and includes family-based networks
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* YouTube */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    YouTube
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        Particularly effective for documentary or interview-style content, though typically slower uptake
                      </li>
                      <li>
                        Opportunity to host longer, in-depth coverage and expert analysis, can be used to shape deeper opinions
                      </li>
                      <li>
                        Facebook dominates in Africa and Middle East markets
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* Telegram */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Telegram
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc ml-4 space-y-1">
                      <li>
                        Zero identified robust disinformation presence &amp; 100% opportunity to intrude counter-narratives
                      </li>
                      <li>
                        Engagement levels are significantly lower than Tiktok, though higher than Twitter, indicating potential future usage
                      </li>
                      <li>
                        Especially accessible in channels that open audiences up
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Audience vs. Why */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Audience 
          </h2>
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Audience
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Why
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Western Policymakers */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Western Policymakers
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Influence diplomatic relations, arms sales, and sanctions
                  </td>
                </tr>
                {/* AU and Arab League */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    AU and Arab League
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    that African countries are the most at risk from turning against the UAE
                  </td>
                </tr>
                {/* Sudanese Public */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Sudanese Public
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Winning over Sudanese civilians weakens the Sudanese government's anti-UAE propaganda
                  </td>
                </tr>
                {/* Humanitarian Organizations */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Humanitarian Organizations
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Strengthens the argument that the UAE is focused on helping civilians
                  </td>
                </tr>
                {/* Global Business and Investment Leaders */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Global Business and Investment Leaders
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    The Sudan war affects regional economic stability and trust in institutions for investment
                  </td>
                </tr>
                {/* Think Tanks and Policy Institutes */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    Think Tanks and Policy Institutes
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Can steer geopolitical analysis and discourse and they provide policy recommendations to governments and international bodies
                  </td>
                </tr>
                {/* BRICS Countries */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    BRICS Countries
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Significant diplomatic, economic, and security influence
                  </td>
                </tr>
                {/* G20 Countries */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                    G20 Countries
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    The UAE has strong economic and political ties with many G20 nations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendations Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Recommendations Summary
          </h2>
          <p className="text-gray-900">
            The recommended strategic, multi-faceted approach to countering the critical narratives
            against the UAE in the context of Sudan is as follows.
          </p>
        </div>

        {/* Countering Critical Sudan Narratives */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Countering Critical Sudan Narratives
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-900">
            <li>
              <strong>Regional Media Outreach</strong> - Grant opinion articles, interviews, and exclusive access pieces to media outlets catering to specific target audiences, including Western policy makers, Pan-African and Asian media, Think Tanks, and entities from the Global South.
            </li>
            <li>
              <strong>Social Media Campaign</strong> - Launch a coordinated social media campaign using a dedicated hashtag (e.g. <strong>#UAEForSudanPeace</strong>), employing a multi-channel approach to share a variety of content formats, shared at high-traffic times
              <ul className="list-disc ml-6 space-y-1 mt-1">
                <li>
                  General Messaging Cadence: 15-20 daily posts across platforms. Peak posting times: 9-11am and 7-9pm GMT (matching 83% of critical content posting patterns)
                </li>
                <li>
                  Languages: Arabic (primary - 68% of critical content), English (secondary - 22%), French (tertiary - 10%)
                </li>
              </ul>
            </li>
            <li>
              <strong>Content Formats &amp; Frequency</strong> - Mix up content types to keep the narrative fresh and engaging. Short-form videos (1–2 minute clips), infographics and fact-sheets distilling key metrics, Op-eds and thought leadership pieces
            </li>
            <li>
              <strong>Influencer &amp; Grassroots Engagement</strong> - Identify and collaborate with influencers who carry credibility in target communities, such as respected journalists, academics, or pan-African youth influencers. In parallel, engage with humanitarian NGOs or diaspora leaders who have seen UAE’s aid on the ground, as they can add authentic third-party validation of the UAE’s positive role. Utilize UAE embassies to issue statements and engage with policymakers to clarify facts.
            </li>
            <li>
              <strong>Initial Capacity Building for 24/7 Rapid Response</strong> - Establish narrative intelligence/ disinformation monitoring dedicated to Sudan content, including alerting and reporting thresholds. Assign a dedicated team to swiftly respond to misinformation on traditional and social media. Consider also setting up an independent fact-checking NGO.
            </li>
            <li>
              <strong>Aggressive Deflection Campaign</strong> - Target top influencers attacking UAE by deploying community notes, asserting counter-messaging in comment responses, and reduce influence through technical methods such as shadow-banning, take-down requests, etc.
            </li>
          </ul>
        </div>

        {/* Strategic Counter-Narrative Messaging Framework */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Strategic Counter-Narrative Messaging Framework
          </h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-900">
            <li>
              <strong>Humanitarian Leadership</strong> - Portray the UAE as a compassionate leader aiding the Sudanese people. Highlight the UAE’s substantial humanitarian engagement, exemplified by over $600 million in humanitarian assistance provided to Sudan since 2023.
            </li>
            <li>
              <strong>Proactive Peace Advocacy</strong> - Stress the UAE’s role in seeking peace and stability in Sudan and the UAE’s proactive diplomatic endeavors, including mediation efforts and advocacy for ceasefires.
            </li>
            <li>
              <strong>Global South Solidarity</strong> - A clear articulation of Global South solidarity, emphasizing regional collaboration and peace-building. Frame the UAE as standing in solidarity with African and Asian nations in upholding stability and sovereignty.
            </li>
            <li>
              <strong>Economic Partnerships</strong> - Remind audiences of the UAE’s long-term investments in Sudan’s stability and prosperity. Constructive economic initiatives, notably a $6 billion infrastructure investment aimed at fostering Sudanese socioeconomic development.
            </li>
            <li>
              <strong>Rejection of Baseless Allegations</strong> - Refute the harmful claims against the UAE by emphasizing the lack of direct evidence, while also highlighting the short fallings of the Sudanese government
            </li>
            <li>
              <strong>Negative/Deflection Messaging</strong> - Reflect the narrative back onto the severe human rights violations the Sudanese Armed Forces (SAF) have been accused of.
            </li>
          </ul>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Timeline
          </h2>
          <div className="text-gray-900 space-y-4">
            <p>
              <strong>Immediate (0–1 Month)</strong> - Seize control of the narrative’s direction during the critical initial aftermath.
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Roll out official statements and rebuttals</li>
                <li>Deploy senior officials for interviews</li>
                <li>Push an aggressive social media blitz</li>
                <li>Engage embassies to communicate with host country media in Africa and Asia</li>
              </ul>
            </p>
            <p>
              <strong>Short Term (2-3 months)</strong> - Introduce and solidify the counter-narrative themes in the public domain.
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Execute planned op-eds, influencer collaborations, and regional media placements</li>
                <li>Deeper content</li>
                <li>Host a high-profile press conference or panel.</li>
              </ul>
            </p>
            <p>
              <strong>Medium Term (4-6)</strong> - Normalize a balanced narrative and demonstrate tangible proof of the UAE’s positive role.
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Maintain regular communications, but pivot to showcasing outcomes</li>
                <li>Continue engaging Sudan’s neighbors and the AU</li>
                <li>Begin subtle reputation repair in Western circles</li>
              </ul>
            </p>
            <p>
              <strong>Long Term (6+ months)</strong> - Sustain and cement the UAE’s rehabilitated image and be prepared for the ICJ case’s evolution.
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>Integration of the narrative campaign into broader public diplomacy.</li>
                <li>Continue periodic updates on humanitarian aid</li>
                <li>Leverage global events e.g. UAE’s participation in UNGA or Expo</li>
                <li>
                  If the ICJ case progresses to substantive stages, mount a communications push around legal
                  victories or expert opinions favoring the UAE.
                </li>
              </ul>
            </p>
          </div>
        </div>


                {/* Footer */}
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-600">Produced by Beacon Red</span>
                    </div>
                    <div className="flex space-x-4">


                        <button 
                            onClick={() => window.location.href = '/20250324-Sudan Consolidated Recommendations.pdf'} 
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                        >
                            Download PDF
                        </button>

                    </div>
                </div>









      </div>
    </div>
  );
};

export default SudanICJMessagingRFI;






