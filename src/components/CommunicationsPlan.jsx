// import React from 'react';
// import { MessageSquare, AlertTriangle, Target, Users, Clock, Share2, ArrowUpRight } from 'lucide-react';

// const CommunicationsPlan = () => {
//   // Placeholder data structure
//   const planData = {
//     title: "Communications Plan - Countering Sudan Disinformation",
//     subtitle: "Tactical Framework for Neutralizing False Narratives",
//     lastUpdated: "March 20, 2025",
//     source: "VineSight",
//     executiveSummary: "This communications plan provides a comprehensive tactical approach to identifying, tracking, and effectively countering disinformation narratives originating from Sudan regarding the ICJ proceedings. The plan employs channel-specific strategies across diplomatic, media, and social platforms with pre-approved messaging frameworks and rapid response protocols.",
//     disinformationLandscape: {
//       overview: "Sudan has deployed a coordinated disinformation campaign across multiple channels, targeting international organizations, regional stakeholders, and Western media with narratives designed to mischaracterize UAE activities and intentions.",
//       primaryNarratives: [
//         "False allegations of UAE military support to specific factions",
//         "Mischaracterization of humanitarian aid as political intervention",
//         "Claims of economic exploitation disguised as development aid",
//         "Portrayal of UAE as undermining Sudanese sovereignty",
//         "Allegations of UAE interference in peace negotiations"
//       ],
//       primaryChannels: [
//         "Official government statements and diplomatic communications",
//         "State-controlled media outlets with international reach",
//         "Coordinated social media campaigns targeting international audiences",
//         "Briefings to international organizations and NGOs",
//         "Direct engagement with Western journalists and publications"
//       ]
//     },
//     responseFramework: {
//       principles: [
//         "Evidence-based refutation with documented support",
//         "Proactive dissemination of factual information",
//         "Consistent messaging across all channels",
//         "Rapid response capability for emerging narratives",
//         "Calibrated tone avoiding unnecessarily escalatory language"
//       ],
//       messagingThemes: [
//         "UAE's documented humanitarian commitment to Sudan",
//         "Transparency and accountability in all regional activities",
//         "Coordination with international institutions and frameworks",
//         "Historical context of UAE-Sudan relations",
//         "Alignment with international community objectives for Sudan"
//       ]
//     },
//     channelStrategy: {
//       diplomatic: {
//         channels: "Embassies, UN missions, multilateral forums",
//         approach: "Formal diplomatic communications with factual dossiers",
//         keyAudiences: ["UN Security Council members", "Regional diplomatic corps", "International organizations"],
//         tactics: [
//           "Regular diplomatic briefings with evidence packages",
//           "Formal responses to Sudanese diplomatic communications",
//           "Engagement with neutral mediating parties",
//           "Background briefings for diplomatic community"
//         ]
//       },
//       media: {
//         channels: "International press, regional publications, wire services",
//         approach: "Proactive engagement with factual corrections and context",
//         keyAudiences: ["Major international publications", "Regional influential outlets", "Specialized foreign policy media"],
//         tactics: [
//           "Rapid fact-checking response to false claims",
//           "Placement of op-eds in strategic publications",
//           "Background briefings for key journalists",
//           "Media tours highlighting humanitarian efforts"
//         ]
//       },
//       digital: {
//         channels: "Social media, digital platforms, online communities",
//         approach: "Consistent factual content with visual evidence",
//         keyAudiences: ["Policy influencers online", "International public", "Media researchers and fact-checkers"],
//         tactics: [
//           "Coordinated digital content strategy across platforms",
//           "Visual evidence packages optimized for sharing",
//           "Engagement with digital influencers in policy space",
//           "Monitoring and rapid response to emerging narratives"
//         ]
//       }
//     },
//     implementation: {
//       rapidResponse: {
//         title: "Rapid Response Protocol",
//         steps: [
//           "24/7 monitoring of emerging disinformation narratives",
//           "Categorization of claims by severity and potential impact",
//           "Activation of relevant response team based on channel and content",
//           "Deployment of pre-approved messaging with factual evidence",
//           "Coordination with legal and diplomatic teams as needed"
//         ]
//       },
//       coordination: {
//         title: "Coordination Mechanism",
//         entities: [
//           "Communications team (message development and distribution)",
//           "Legal team (ICJ proceedings coordination)",
//           "Diplomatic corps (international engagement)",
//           "Intelligence team (monitoring and early warning)",
//           "Third-party validators (amplification and credibility)"
//         ]
//       },
//       timeline: {
//         title: "Implementation Timeline",
//         phases: [
//           {
//             name: "Initial Deployment",
//             timeframe: "Immediate",
//             activities: ["Response protocols activation", "Distribution of messaging packages", "Initial media engagements"]
//           },
//           {
//             name: "Sustained Operations",
//             timeframe: "Ongoing",
//             activities: ["Regular messaging updates", "Proactive content development", "Continuous monitoring and response"]
//           },
//           {
//             name: "Strategic Review",
//             timeframe: "Monthly",
//             activities: ["Effectiveness assessment", "Strategy refinement", "New narrative development"]
//           }
//         ]
//       }
//     },
//     successMetrics: [
//       "Reduction in pickup of false narratives by Tier 1 media",
//       "Increased representation of UAE perspective in coverage",
//       "Measurable shift in online conversation sentiment",
//       "Demonstrable counter-narrative adoption by third parties",
//       "Diminished amplification of Sudanese government claims"
//     ]
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-orange-900 to-orange-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{planData.title}</h1>
//             <p className="text-orange-100 mt-1">{planData.subtitle}</p>
//           </div>
//           <div className="flex items-center space-x-2 text-sm">
//             <Clock className="h-4 w-4" />
//             <span>Last Updated: {planData.lastUpdated}</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="p-8">
//         {/* Executive Summary */}
//         <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
//           <h2 className="text-xl font-bold text-orange-800 mb-2">Executive Summary</h2>
//           <p className="text-gray-800">{planData.executiveSummary}</p>
//         </div>

//         {/* Disinformation Landscape */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Disinformation Landscape</h2>
//           </div>
//           <p className="text-gray-700 mb-6">{planData.disinformationLandscape.overview}</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">Primary Disinformation Narratives</h3>
//               <ul className="space-y-3">
//                 {planData.disinformationLandscape.primaryNarratives.map((narrative, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       !
//                     </div>
//                     <span className="text-gray-700">{narrative}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">Primary Distribution Channels</h3>
//               <ul className="space-y-3">
//                 {planData.disinformationLandscape.primaryChannels.map((channel, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{channel}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Response Framework */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <MessageSquare className="h-6 w-6 text-orange-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Response Framework</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">Guiding Principles</h3>
//               <ul className="space-y-3">
//                 {planData.responseFramework.principles.map((principle, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-orange-100 text-orange-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{principle}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">Core Messaging Themes</h3>
//               <ul className="space-y-3">
//                 {planData.responseFramework.messagingThemes.map((theme, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       ✓
//                     </div>
//                     <span className="text-gray-700">{theme}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Channel Strategy */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Share2 className="h-6 w-6 text-orange-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Channel-Specific Strategies</h2>
//           </div>
          
//           <div className="space-y-6">
//             {/* Diplomatic Channels */}
//             <div className="border rounded-lg overflow-hidden">
//               <div className="bg-blue-100 text-blue-800 px-4 py-3 font-bold text-lg">
//                 Diplomatic Channels
//               </div>
//               <div className="p-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.diplomatic.channels}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.diplomatic.approach}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {planData.channelStrategy.diplomatic.keyAudiences.map((audience, i) => (
//                           <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">{audience}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
//                       <ul className="space-y-2">
//                         {planData.channelStrategy.diplomatic.tactics.map((tactic, i) => (
//                           <li key={i} className="flex items-start">
//                             <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
//                               {i + 1}
//                             </div>
//                             <span className="text-gray-700">{tactic}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Media Channels */}
//             <div className="border rounded-lg overflow-hidden">
//               <div className="bg-purple-100 text-purple-800 px-4 py-3 font-bold text-lg">
//                 Media Channels
//               </div>
//               <div className="p-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.media.channels}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.media.approach}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {planData.channelStrategy.media.keyAudiences.map((audience, i) => (
//                           <span key={i} className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-sm">{audience}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
//                       <ul className="space-y-2">
//                         {planData.channelStrategy.media.tactics.map((tactic, i) => (
//                           <li key={i} className="flex items-start">
//                             <div className="bg-purple-100 text-purple-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
//                               {i + 1}
//                             </div>
//                             <span className="text-gray-700">{tactic}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Digital Channels */}
//             <div className="border rounded-lg overflow-hidden">
//               <div className="bg-indigo-100 text-indigo-800 px-4 py-3 font-bold text-lg">
//                 Digital Channels
//               </div>
//               <div className="p-5">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.digital.channels}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
//                       <p className="font-medium text-gray-900">{planData.channelStrategy.digital.approach}</p>
//                     </div>
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {planData.channelStrategy.digital.keyAudiences.map((audience, i) => (
//                           <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-sm">{audience}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
//                       <ul className="space-y-2">
//                         {planData.channelStrategy.digital.tactics.map((tactic, i) => (
//                           <li key={i} className="flex items-start">
//                             <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
//                               {i + 1}
//                             </div>
//                             <span className="text-gray-700">{tactic}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Implementation */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Target className="h-6 w-6 text-orange-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Implementation Framework</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//             {/* Rapid Response */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">{planData.implementation.rapidResponse.title}</h3>
//               <ul className="space-y-3">
//                 {planData.implementation.rapidResponse.steps.map((step, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-orange-100 text-orange-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{step}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             {/* Coordination */}
//             <div className="border rounded-lg p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">{planData.implementation.coordination.title}</h3>
//               <ul className="space-y-3">
//                 {planData.implementation.coordination.entities.map((entity, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{entity}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
          
//           {/* Timeline */}
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-4">{planData.implementation.timeline.title}</h3>
//             <div className="space-y-4">
//               {planData.implementation.timeline.phases.map((phase, idx) => (
//                 <div key={idx} className="border-l-4 border-orange-500 pl-6 pb-4">
//                   <div className="flex items-center mb-2">
//                     <div className="bg-orange-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">{idx + 1}</div>
//                     <h4 className="text-lg font-bold text-gray-800">{phase.name}</h4>
//                     <span className="ml-3 text-sm bg-orange-100 text-orange-800 rounded-full px-3 py-1">
//                       {phase.timeframe}
//                     </span>
//                   </div>
//                   <ul className="space-y-1 ml-9">
//                     {phase.activities.map((activity, i) => (
//                       <li key={i} className="text-gray-700 list-disc">{activity}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Success Metrics */}
//         <div className="mb-8">
//           <div className="flex items-center mb-4">
//             <ArrowUpRight className="h-6 w-6 text-orange-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Success Metrics</h2>
//           </div>
          
//           <div className="bg-orange-50 rounded-lg p-6">
//             <ul className="space-y-3">
//               {planData.successMetrics.map((metric, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-orange-100 text-orange-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-800">{metric}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <MessageSquare className="h-5 w-5 text-orange-600 mr-2" />
//             <span className="text-gray-600">Produced by <span className="font-semibold">{planData.source}</span></span>
//           </div>
//           <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-lg font-medium hover:bg-orange-200 transition-colors">
//               Download PDF
//             </button>
//             <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
//               Implementation Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunicationsPlan;
















import React from 'react';
import { MessageSquare, AlertTriangle, Target, Users, Clock, Share2, ArrowUpRight, FileText, BarChart3, Shield } from 'lucide-react';





const CommunicationsPlan = () => {
  const planData = {
    title: "Fighting the Fire Without Fanning the Flames", //From PDF title
    subtitle: "Communications Plan For Countering Sudan Disinformation", // From the PDF
    lastUpdated: "March 19, 2025",  // From contents page
    source: "Prepared for the Ministry of Foreign Affairs of the United Arab Emirates", //From the PDF
    confidential: "[CONFIDENTIAL]",
    executiveSummary: "This communications plan is meant to counter malicious narratives and disinformation targeting the UAE with regard to its relations with Sudan. The narrative intelligence and recommendations are based on social media conversations across platforms and languages taken from a 30 day period (February 17-March 17 2025).", //From About this plan section
    strategicGoals: [ // From "Strategic Goals" section
      "Reinforce the UAE's Humanitarian Image",
      "Discredit Accusations with Evidence-Based Counterclaims",
      "Engage International and Regional Stakeholders",
      "Highlight Regional Stability Efforts",
    ],
    disinformationLandscape: {  // Combining info from "Understanding the Conversation"
      overview: "There is currently a vacuum of supporting conversation regarding the UAE's positive role in Sudan. The UAE's positive influence and activities in the region go relatively unnoticed, and the UAE's detractors take up a significant portion of the total discourse via relentless disinformation attacks.",
      primaryNarratives: [], // Placeholder, no specific list in this document
      primaryChannels: [],  //Placeholder.
      keyFindings: [ // Key points from "Understanding the Conversation"
        "Only 8% of the discourse over the past 30 days supports the UAE's role.",
        "48% of the conversation is attacking or criticizing the UAE.",
        "73% of traditional media articles shared on social media either attacked the UAE or portrayed it negatively.",
        "Attacking content dominates X (Twitter) and Telegram.",
        "Attacking posts generate significantly higher engagement than neutral posts on Instagram, Telegram, TikTok, and X.",
        "Over 24% of accounts attacking the UAE were flagged for exhibiting bot-like behavior.",
        "On average, attacking posts received 77% reposts/shares and other amplification from bot-like accounts.",
        "81.43% of posts have more than 50% bot-driven amplification.",
      ],
    },
    responseFramework: { //Principles will be derived from goals.
      principles: [
        "Evidence-based refutation with documented support.",
        "Proactive dissemination of factual information.",
        "Consistent messaging across all channels.",
        "Rapid response capability for emerging narratives.",
        "Calibrated tone avoiding unnecessarily escalatory language."

      ],
      messagingThemes: [ //Will be used for the defensive strategy
        "UAE's documented humanitarian commitment to Sudan",
        "Transparency and accountability in all regional activities",
        "Coordination with international institutions and frameworks",
        "Historical context of UAE-Sudan relations",
        "Alignment with international community objectives for Sudan"
      ]
    },

      defensiveStrategy: {  // Using the goals and "Countering Messages To Be Amplified"
      corePrinciples: [
        "Evidence-based refutation of false claims",
        "Contextual framing of UAE regional policy",
        "Consistency across all diplomatic and media channels",
        "Measured tone avoiding escalatory rhetoric",
        "Transparency regarding humanitarian initiatives"
      ],
      keyMessages: [ // From "Countering Messages To Be Amplified"
        "Commitment to Peace and Diplomacy: The UAE has actively participated in international peace efforts...",
        "Humanitarian Leadership: The UAE has delivered thousands of tons of humanitarian aid to Sudanese refugees...",
        "Rejection of Baseless Allegations: The UAE has publicly and categorically denied allegations of military support...",
      ],
    },
    proactiveStrategy: { //Keeping the previous one.
      strategicObjectives: [
        "Reframe narrative around humanitarian commitment",
        "Highlight contrast with destabilizing actors in region",
        "Establish UAE as stabilizing force amid regional tensions",
        "Demonstrate alignment with international community objectives",
        "Build coalition of supportive voices across diplomatic spectrum"
      ],
      narrativePillars: [
        "UAE as humanitarian leader in regional crisis response",
        "UAE diplomatic engagement supports inclusive political process",
        "Evidence-based policy contrasts with opportunistic actors",
        "Long-term regional stability as guiding principle",
        "Protection of civilian populations as paramount concern"
      ]
    },

     implementationFramework: { // Modified to align with PDF's "Timeline"
      phaseOne: {
        title: "Immediate Response",
        timeline: "Week 1-2",
        actions: [
          "Roll out official statements and rebuttals",
          "Deploy senior officials for interviews",
          "Push an aggressive social media blitz",
          "Engage embassies to communicate with host country media in Africa and Asia",
          "Activate third-party validators in policy community", // From previous version, kept
          "Monitor narrative penetration across target audiences", // From previous version, kept
          "Coordinate messaging with legal team handling ICJ proceedings" // From previous version, kept
        ]
      },
      phaseTwo: {
        title: "Short Term (2-3 months)", // From PDF Timeline
        timeline: "Month 1-3",          // Modified for clarity
        actions: [
          "Execute planned op-eds, influencer collaborations, and regional media placements", // From PDF
          "Host a high-profile press conference or panel", // From PDF
          "Deeper Content", //From PDF
          "Release comprehensive white paper on UAE regional policy",  // From previous, kept for long term context.
          "Coordinate messaging with regional allies"       // From previous, kept for long term context
        ]
      },
      phaseThree: {
        title: "Medium Term (4-6 Months) & Long Term (6+ months)", // Combined from PDF, as actions overlap
        timeline: "Month 4+", // Simplified
        actions: [
          "Maintain regular communications, but pivot to showcasing outcomes", // From PDF
          "Continue engaging Sudan's neighbors and the AU", // From PDF
          "Begin subtle reputation repair in Western circles", // From PDF
          "Integration of the narrative campaign into broader public diplomacy.", // From PDF (Long Term)
          "Continue periodic updates on humanitarian aid", // From PDF (Long Term)
          "Leverage global events e.g. UAE's participation in UNGA or Expo", // From PDF (Long Term)
          "Continuous monitoring and adaptive messaging", // From previous, kept and overlaps with PDF
          "Proactive engagement with critical voices", // From previous, kept and overlaps with PDF
          "Expansion of third-party validator network", // From previous, kept and overlaps with PDF
        ]
      }
    },
    channelStrategy: {  //High level summary. More details in specific sections.
      diplomatic: {
        channels: "Embassies, UN missions, multilateral forums",
        approach: "Formal diplomatic communications with factual dossiers.",
        keyAudiences: ["UN Security Council members", "Regional diplomatic corps", "International organizations"],
        tactics: [
            "Regular diplomatic briefings.",
            "Formal responses to Sudanese communications."
          ]
      },
      media: {
        channels: "International press, regional publications, wire services",
        approach: "Proactive engagement with factual corrections and context.",
        keyAudiences: ["Major international publications", "Regional influential outlets", "Specialized foreign policy media"],
        tactics: [
            "Rapid fact-checking.",
            "Placement of op-eds"
          ]
      },
      digital: {
        channels: "Social media, digital platforms, online communities",
        approach: "Consistent factual content with visual evidence.",
        keyAudiences: ["Policy influencers online", "International public", "Media researchers and fact-checkers"],
        tactics: [
            "Coordinated digital content strategy.",
            "Visual evidence packages."
          ]
      }
    },

    priorityPlatforms: [ // From "Priority Platforms for Campaign Execution" section.
      { platform: "X (Twitter)", reasons: ["Highest critical content vacuum", "Volume dominance", "Moderate engagement metrics", "Rapid spread", "Influential audience"] },
      { platform: "Instagram", reasons: ["Highest engagement efficiency", "Positive sentiment foundation", "Visual storytelling advantage", "Lower content saturation", "Content longevity"] },
      { platform: "TikTok", reasons: ["Strongest audience receptivity", "Highest engagement efficiency (supporting content)", "Superior video performance", "Demographic advantage", "Algorithmic advantage", "Authentic testimonial opportunity"] },
      { platform: "Facebook", reasons: ["Significant content gap", "Superior commenting dynamics", "Demographic complementarity", "Group-based targeting", "Content format versatility", "Cross-regional impact"] },
      { platform: "Telegram", reasons: ["Complete narrative vacuum", "Exceptional engagement metrics", "Video performance", "Channel-based architecture", "Regional significance", "Information persistence", "Closed ecosystem advantage"] },
    ],
    targetAudiences: [  // From "Target Audiences - In Order of Priority"
        { audience: "Western Policymakers (US, UK, EU, UN Security Council Members)", why: "Western governments influence diplomatic relations, arms sales, and sanctions that could impact the UAE’s national security interests. Sudan has been lobbying for international action against the UAE, so it’s critical to ensure key decision-makers in Washington, Brussels, and London hear the UAE’s perspective first.", messageAgenda: "Rebuttal with facts, cooperation with the ICJ and investigations, rather than to aggressively push emotional narratives."},
        { audience: "African Union and Arab League Officials", why: "These regional bodies mediate conflicts and influence diplomatic resolutions. By securing their support, the UAE can prevent Sudan from using these platforms to escalate pressure. The UAE’s engagement must highlight its role in regional stability, aid efforts, and diplomatic mediation. The data further shows that African countries are the most at risk from turning against the UAE as a result of Sudan disinformation, mainly in Kenya and Somalia.", messageAgenda: "Regional camaraderie and the falsehood of the allegations. The UAE's proven track record of helping Arab and Muslim brothers in need." },
        { audience: "Sudanese Public (Civilians, Refugees, Business Leaders, Community Groups)", why: "Winning over Sudanese civilians weakens the Sudanese government’s anti-UAE propaganda. The UAE should amplify stories of its humanitarian aid, medical assistance, and economic investments in Sudanese communities to maintain goodwill and prevent hostility.", messageAgenda: "African and UAE partnerships are helping Sudanese civilians, showcasing stories like UAE-funded clinics in Chad for Sudanese refugees. Aim" },
        { audience: "Humanitarian Organizations (UNHCR, Red Cross, WFP, NGOs in Sudan and Chad)", why: "These groups are trusted voices in conflict zones and can validate the UAE’s aid contributions. If humanitarian actors publicly acknowledge the UAE’s support, it strengthens the argument that the UAE is focused on helping civilians, not fueling war.", messageAgenda: "Reinforcing the UAE's history of humanitarian actions, and transparency in the conflict as a force for good." },
        { audience: "Global Business and Investment Leaders (Sovereign Wealth Funds, Multinational Corporations, UAE Investors in Africa)", why: "The Sudan war affects regional economic stability and trust in institutions for investment (weary of ESG and legal changes to the landscape from sanctions)", messageAgenda: "Reassure investors and business networks that the UAE remains committed to economic partnerships, infrastructure development and long-term stability in Sudan and Africa." },
        { audience: "Think Tanks and Policy Institutes (Chatham House, Brookings, CSIS, Carnegie Endowment, African Policy Centers)", why: "These institutions provide policy recommendations to governments and international bodies. Global geopolitical analysis and discourse can be generated, or affected by these institutions.", messageAgenda: "The UAE is a contributor to peacekeeping and development. The conflict is immensely complex, not a simple victim and aggressor, the SAF is not a victim." },
        { audience: "BRICS Countries (China, Russia, India, Brazil, South Africa, and New Members like Egypt and Saudi Arabia)", why: "BRICS members hold significant diplomatic, economic, and security influence, and some have strategic relations with both the UAE and Sudan. And this is a power dynamic that is developing in global importance, not only to the UAE, but also the BRICS members. By ensuring BRICS countries do not align with Sudan’s claims, the UAE protects its standing in emerging global power structures.", messageAgenda: "A 'Western-Centralized' UN looking to discredit BRICS nations by undercutting worthwhile peacekeeping pursuits." },
        { audience: "G20 Countries (Including Indonesia, Turkey, Saudi Arabia, Mexico, and Argentina)", why: "The UAE has strong economic and political ties with many G20 nations, making them vital for diplomatic support and trade relations.", messageAgenda: "Reassure the UAE remains committed to economic partnerships, infrastructure development and long-term stability." },
      ],
    topNarratives: [ // From the "Top Disinformation Themes Promoted by Attackers" section
      { narrative: "RSF Funding", description: "UAE writes checks to the Rapid Support Forces." },
      { narrative: "ICJ Lawsuit", description: "Sudan accuses UAE of bankrolling genocide." },
      { narrative: "Palestine Connection", description: "UAE actions in Sudan paralleled with Israel's in Gaza." },
      { narrative: "Military Arms Supply", description: "UAE weapons flow into Sudan, arming militias." },
      { narrative: "War Crimes", description: "UAE military aid linked to atrocities." },
      { narrative: "Kenya UAE Connection", description: "Tangled web connecting Kenya's leadership with UAE and Sudanese warlords." },
      { narrative: "Refugee Crisis", description: "UAE money created the refugee exodus." },
      { narrative: "Darfur Crisis", description: "UAE accused of reigniting genocide in Darfur." },
      { narrative: "UAE PR Distraction", description: "UAE diverting attention from its role in Sudan's tragedy." },
      { narrative: "Dubai Luxury Contrast", description: "Contrast between Dubai's luxury and Sudanese suffering." },
      { narrative: "Genocide Complicity", description: "UAE knowingly enabling systematic destruction." },
      { narrative: "Gold Mining Interests", description: "UAE's thirst for Sudan's gold." },
      { narrative: "UAE Mercenaries", description: "UAE actively recruits mercenaries." },
      { narrative: "US UAE Relations", description: "Hypocrisy of US embracing UAE." },
      { narrative: "UN Response", description: "Sudan's representatives detail UAE's alleged role." },
      { narrative: "Western Hypocrisy", description: "Silence on UAE's actions as evidence of double standards." },
      { narrative: "Muslim Brotherhood Claims", description: "UAE officials link critics to Muslim Brotherhood." },
      { narrative: "UAE Regional Ambitions", description: "UAE's calculated move to expand regional influence." },
      { narrative: "Calls for Boycott", description: "Activists urge global citizens to boycott UAE." },
      { narrative: "Ethnic Cleansing", description: "RSF's targeted attacks made possible by UAE support." },
    ],
    actionPlan: {  // From "Action Plan for Countering Sudan Disinformation" Section.
      coreTenants: [
        "Initial Capacity Building for 24/7 Rapid Response and Strategic Narrative Shift",
        "Establish Strategic Partnerships for Counter-Narrative Amplification/Validation",
        "Proactive Communications Approach - Omni Channel Positive Campaign",
        "Aggressive Deflection Campaign: Attacking the Attackers"
      ],
        responseStrategy: {
          generalGuidelines: [
            "Direct engagement with top 20 non-bot accounts.",
            "Focus responses on accounts with >10K authentic followers.",
            "Avoid engaging with accounts showing extreme posting patterns (>100 posts/day).",
          ],
          implementationProcess: [
            "Maintain Crisis Response Team monitoring for triggering posts.",
            "Deploy appropriate evidence package within 2 hours.",
            "Mobilize 3-5 authenticated accounts to support/upvote community notes.",
            "Track acceptance/rejection rates.",
          ],
            factualDatabase: [
            "UAE-Sudan Facts Portal",
            "Interactive Evidence Maps",
            "Flight Tracking Archive",
            "Humanitarian Impact Dashboard",
          ],
          strategicDeployment: [
            "Direct Response Linking",
            "Media Embed Strategy",
            "Evidence Documentation",
            "Update Cycle",
          ],
           verificationPartnerships: [
            "Third-Party Validation",
            "Influencers",
          ],
            rapidResponseProtocol: {
            responseTiering: [
              "Tier 1 (Critical): False claims from verified accounts or media outlets with >100K followers (respond within 30-60 minutes)",
              "Tier 2 (High Priority): False claims generating >1,000 engagements (respond within 2-4 hours)",
              "Tier 3 (Standard): Repeated false narratives from accounts with 10K-100K followers (respond within 24 hours)",
              "Tier 4 (Monitor Only): Low-engagement claims from accounts with <10K followers or high bot indicators (track but don't engage)",
            ],
            responseType: { //Will need specific data.
              claimTypes: [
                { type: "Legal allegations", public: "✓", private: "✓", communityNotes: "✓", mediaOutreach: "✓" },
                { type: "Military support claims", public: "✓", private: "", communityNotes: "✓", mediaOutreach: "✓" },
                // ... other claim types
              ],
              responseChannels : [
                "High-Credibility Accounts", "Subject Matter Experts", "Third-Party Validators"
              ],
                strategicEngagement : [
                    "Engagement Threshold", "Response-to-Post Ratio", "Historical Positioning"
                ],
                tacticalMethods : [
                    "Socratic Approach", "Evidence Escalation", "Coalition Engagement", "Amplification Control"
                ]

            }
          },
        },

      },
    appendices: { // Placeholder, as we don't have the full appendix content.
      topAttackers: [], // From Appendix A in previous PDF.
      thinkTankOutreach: [], // From Appendix B
      factCheckingNGO: {}, // From Appendix C
      mediaOutlets: {},   // From Appendix D
    },
    successMetrics: [ // Keeping from the previous one.
      "Reduction in pickup of false narratives by Tier 1 media",
      "Increased representation of UAE perspective in coverage",
      "Measurable shift in online conversation sentiment",
      "Demonstrable counter-narrative adoption by third parties",
      "Diminished amplification of Sudanese government claims"
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 px-8 py-6 text-white">
       {/*Changed gradient to red*/}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{planData.title}</h1>
            <p className="text-red-100 mt-1">{planData.subtitle}</p>
             <p className="text-sm text-red-100 mt-2">
              {planData.lastUpdated} {/* Display the date */}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Last Updated: {planData.lastUpdated}</span>

          </div>

        </div>
         <div className="flex items-center space-x-2 text-sm mt-2">
                    <span>{planData.confidentiality}</span>  {/* Display Confidentiality */}
         </div>
          <div className="text-sm mt-1">
            <span>ICOD: {planData.icod}</span> {/* Display ICOD */}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Executive Summary */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
         {/*Changed to red*/}
          <h2 className="text-xl font-bold text-red-800 mb-2">About This Communications Plan</h2>
          <p className="text-gray-800">{planData.executiveSummary}</p>
        </div>

        {/* Strategic Goals */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-red-600 mr-2" />
            {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Strategic Goals</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {planData.strategicGoals.map((goal, index) => (
              <li key={index} className="text-gray-700">{goal}</li>
            ))}
          </ul>
        </div>

        {/* Disinformation Landscape */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Understanding the Conversation</h2>
          </div>
          <p className="text-gray-700 mb-4">{planData.disinformationLandscape.overview}</p>

          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Key Findings</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {planData.disinformationLandscape.keyFindings.map((finding, idx) => (
                <li key={idx} className="text-gray-700">{finding}</li>
              ))}
            </ul>
          </div>
        </div>
        
         {/* Defensive Strategy */}
        <div className="mb-10">
            <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-2"/>
                 {/*Changed color to red*/}
                <h2 className="text-2xl font-bold text-gray-900">Defensive Strategy</h2>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-3">Core Principles</h3>
            <ul className="space-y-2 mb-6">
                {planData.defensiveStrategy.corePrinciples.map((principle, idx) => (
                    <li key={idx} className="flex items-start">
                    <div
                        className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                        {/*Changed to red*/}
                        {idx + 1}
                    </div>
                    <span className="text-gray-700">{principle}</span>
                    </li>
                ))}
            </ul>

             <h3 className="text-lg font-bold text-gray-800 mb-3">Key Messages</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-3">
                    {planData.defensiveStrategy.keyMessages.map((message, idx) => (
                        <li key={idx} className="flex items-start">
                        <div
                            className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                            ✓
                        </div>
                        <span className="text-gray-700">{message}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Proactive Strategy */}
        <div className="mb-10">

            <div className="flex items-center mb-4">
                <ArrowUpRight className="h-6 w-6 text-red-600 mr-2"/>
                {/*Changed color to red*/}
                <h2 className="text-2xl font-bold text-gray-900">Proactive Strategy</h2>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-3">Strategic Objectives</h3>
            <ul className="space-y-2 mb-6">
                {planData.proactiveStrategy.strategicObjectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start">
                    <div
                        className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                        {/*Changed to red*/}
                        {idx + 1}
                    </div>
                    <span className="text-gray-700">{objective}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mb-3">Narrative Pillars</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-3">
                    {planData.proactiveStrategy.narrativePillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start">
                        <div
                        className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                         {/*Changed to red*/}
                        ★
                        </div>
                        <span className="text-gray-700">{pillar}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>


        {/* Implementation Timeline */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Target className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Implementation Framework</h2>
          </div>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="border-l-4 border-red-500 pl-6 pb-6">
             {/*Changed to red*/}
              <div className="flex items-center mb-3">
                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                 {/*Changed to red*/}
                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseOne.title}</h3>
                <span className="ml-3 text-sm bg-red-100 text-red-800 rounded-full px-3 py-1">
                 {/*Changed to red*/}
                  {planData.implementationFramework.phaseOne.timeline}
                </span>
              </div>
              <ul className="space-y-2">
                {planData.implementationFramework.phaseOne.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="border-l-4 border-red-500 pl-6 pb-6">
             {/*Changed to red*/}
              <div className="flex items-center mb-3">
                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                 {/*Changed to red*/}
                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseTwo.title}</h3>
                <span className="ml-3 text-sm bg-red-100 text-red-800 rounded-full px-3 py-1">
                 {/*Changed to red*/}
                  {planData.implementationFramework.phaseTwo.timeline}
                </span>
              </div>
              <ul className="space-y-2">
                {planData.implementationFramework.phaseTwo.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="border-l-4 border-red-500 pl-6 pb-6">
             {/*Changed to red*/}
              <div className="flex items-center mb-3">
                <div className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                 {/*Changed to red*/}
                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseThree.title}</h3>
                <span className="ml-3 text-sm bg-red-100 text-red-800 rounded-full px-3 py-1">
                 {/*Changed to red*/}
                  {planData.implementationFramework.phaseThree.timeline}
                </span>
              </div>
              <ul className="space-y-2">
                {planData.implementationFramework.phaseThree.actions.map((action, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      {idx + 1}
                    </div>
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

         {/* Channel Strategy */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Share2 className="h-6 w-6 text-red-600 mr-2" />
            {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Channel-Specific Strategies</h2>
          </div>
          
          <div className="space-y-6">
            {/* Diplomatic Channels */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-red-100 text-red-800 px-4 py-3 font-bold text-lg">
               {/*Changed color to red*/}
                Diplomatic Channels
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.diplomatic.channels}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.diplomatic.approach}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
                      <div className="flex flex-wrap gap-2">
                        {planData.channelStrategy.diplomatic.keyAudiences.map((audience, i) => (
                          <span key={i} className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">{audience}</span>
                           /*Changed color to red*/
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
                      <ul className="space-y-2">
                        {planData.channelStrategy.diplomatic.tactics.map((tactic, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
                             {/*Changed color to red*/}
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* Media Channels */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-red-100 text-red-800 px-4 py-3 font-bold text-lg">
               {/*Changed color to red*/}
                Media Channels
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.media.channels}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.media.approach}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
                      <div className="flex flex-wrap gap-2">
                        {planData.channelStrategy.media.keyAudiences.map((audience, i) => (
                          <span key={i} className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">{audience}</span>
                           /*Changed color to red*/
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
                      <ul className="space-y-2">
                        {planData.channelStrategy.media.tactics.map((tactic, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
                             {/*Changed color to red*/}
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
               {/* Digital Channels */}
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-red-100 text-red-800 px-4 py-3 font-bold text-lg">
               {/*Changed color to red*/}
                Digital Channels
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Primary Channels</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.digital.channels}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Strategic Approach</h4>
                      <p className="font-medium text-gray-900">{planData.channelStrategy.digital.approach}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-600 mb-1">Key Audiences</h4>
                      <div className="flex flex-wrap gap-2">
                        {planData.channelStrategy.digital.keyAudiences.map((audience, i) => (
                          <span key={i} className="bg-red-50 text-red-700 px-2 py-1 rounded text-sm">{audience}</span>
                           /*Changed color to red*/
                        ))}
                      </div>

                    </div>
                  </div>

                  <div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 mb-2">Tactical Approach</h4>
                      <ul className="space-y-2">
                        {planData.channelStrategy.digital.tactics.map((tactic, i) => (
                          <li key={i} className="flex items-start">
                            <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2">
                             {/*Changed color to red*/}
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Priority Platforms (Could be a separate component) */}
        <div className="mb-10">
            <div className="flex items-center mb-6">
                <BarChart3 className="h-6 w-6 text-red-600 mr-2"/>
                 {/*Changed color to red*/}
                <h2 className="text-2xl font-bold text-gray-900">Priority Platforms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {planData.priorityPlatforms.map((platform, idx) => (
                    <div key={idx} className="border rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{platform.platform}</h4>
                        <ul className="space-y-1">
                            {platform.reasons.map((reason, rIdx) => (
                                <li key={rIdx} className="text-gray-700 text-sm">
                                    - {reason}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>



        {/* Target Audiences (Could be a separate component or table) */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed color to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Target Audiences</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audience</th>
                </tr>
              </thead>

              {/* <tbody className="bg-white divide-y divide-gray-200">
                {planData.targetAudiences.map((audience, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{audience.audience}</td>
                  </tr>
                ))}
              </tbody> */}



                <tbody className="bg-white divide-y divide-gray-200">
                    {planData.targetAudiences.map((audience, idx) => (
                        <tr key={idx}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{audience.audience}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{audience.why}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{audience.messageAgenda}</td>
                        </tr>
                    ))}
                </tbody>







            </table>
          </div>
        </div>

          {/* Top Narratives (Could be a separate component) */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-red-600 mr-2" />
            {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Top Disinformation Narratives</h2>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
           {/*Changed to red*/}
            <ul className="space-y-2">
              {planData.topNarratives.map((narrativeItem, idx) => (
                <li key={idx} className="text-gray-700">
                  <span className="font-semibold">{idx + 1}. {narrativeItem.narrative}:</span> {narrativeItem.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Action Plan: Core Tenants */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-red-600 mr-2" />
             {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Action Plan: Core Tenants</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2">
            {planData.actionPlan.coreTenants.map((tenant, index) => (
              <li key={index} className="text-gray-700">{tenant}</li>
            ))}
          </ul>
        </div>

        {/* Action Plan: Response Strategy */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
           {/*Changed to red*/}
            <h2 className="text-2xl font-bold text-gray-900">Action Plan: Response Strategy</h2>
          </div>
            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">General Guidelines</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                {planData.actionPlan.responseStrategy.generalGuidelines.map((guideline, index) => (
                  <li key={index} className="text-gray-700">{guideline}</li>
                ))}
                </ul>

              <h3 className="text-lg font-bold text-gray-800 mb-3">Implementation Process</h3>
                 <ul className="list-disc pl-5 space-y-2 mb-4">
                    {planData.actionPlan.responseStrategy.implementationProcess.map((processStep, index) => (
                    <li key={index} className="text-gray-700">{processStep}</li>
                    ))}
                 </ul>

                <h3 className="text-lg font-bold text-gray-800 mb-1">Factual Database</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            {planData.actionPlan.responseStrategy.factualDatabase.map((item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Strategic Deployment</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                    {planData.actionPlan.responseStrategy.strategicDeployment.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                    ))}
                </ul>

                  <h3 className="text-lg font-bold text-gray-800 mb-1">Verification Partnerships</h3>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            {planData.actionPlan.responseStrategy.verificationPartnerships.map((item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
              
                <h4 className="text-lg font-bold text-gray-800 mt-4 mb-2">Rapid Response Protocol</h4>
                  <h5 className="text-base font-medium text-gray-700 mb-1">Response Tiering:</h5>
                    <ul className="list-disc pl-8 space-y-1">
                    {planData.actionPlan.responseStrategy.rapidResponseProtocol.responseTiering.map((tier, index) => (
                    <li key={index} className="text-gray-700">{tier}</li>
                    ))}
                  </ul>
          </div>
        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            <MessageSquare className="h-5 w-5 text-red-600 mr-2" />
            {/*Changed to red*/}
            <span className="text-gray-600">Produced by <span className="font-semibold">{planData.source}</span></span>
          </div>

          {/* <div className="flex space-x-4">
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-medium hover:bg-red-200 transition-colors">
              Download PDF
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              Implementation Dashboard
            </button>
          </div> */}

                        <button 
                            onClick={() => window.location.href = '/Communications Plan - Countering Sudan Disinformation.pdf'} 
                            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
                        >
                            Download PDF
                        </button>



        </div>
      </div>
    </div>
  );
};

export default CommunicationsPlan;












