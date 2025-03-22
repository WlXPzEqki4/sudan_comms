// import React from 'react';
// import { Shield, ArrowUpRight, Clock, Target, BarChart3, Users } from 'lucide-react';

// const CounterNarrativePlan = () => {
//   // Placeholder data structure
//   const planData = {
//     title: "UAE and Sudan Counter Narrative Plan",
//     subtitle: "Strategic Framework for Defending UAE Interests",
//     lastUpdated: "March 21, 2025",
//     source: "Beacon Red",
//     executiveSummary: "This document provides a comprehensive counter-narrative strategy designed to defend UAE interests in the context of ongoing ICJ proceedings related to Sudan. The strategy employs a multi-faceted approach combining defensive messaging, proactive narrative redirection, and targeted communications across key stakeholder audiences.",
//     narrativeContext: {
//       currentSituation: "The UAE is currently facing significant criticism in international forums regarding alleged activities in Sudan, with particular focus on the ongoing ICJ proceedings. These narratives threaten to undermine UAE credibility and strategic positioning in the region.",
//       primaryChallenges: [
//         "Distortion of UAE humanitarian initiatives in Sudan",
//         "False equivalence with other regional actors' interventions",
//         "Mischaracterization of UAE's regional security objectives",
//         "Amplification of Sudanese government claims without context",
//         "Limited penetration of UAE perspective in Western media"
//       ]
//     },
//     defensiveStrategy: {
//       corePrinciples: [
//         "Evidence-based refutation of false claims",
//         "Contextual framing of UAE regional policy",
//         "Consistency across all diplomatic and media channels",
//         "Measured tone avoiding escalatory rhetoric",
//         "Transparency regarding humanitarian initiatives"
//       ],
//       keyMessages: [
//         "UAE humanitarian aid to Sudan exceeds $1.5B since 2019",
//         "All UAE activities conducted with full UN coordination",
//         "UAE maintains consistent diplomatic engagement with all parties",
//         "Regional stability remains central to UAE foreign policy",
//         "Historical context of UAE-Sudan relations demonstrates long-term commitment"
//       ]
//     },
//     proactiveStrategy: {
//       strategicObjectives: [
//         "Reframe narrative around humanitarian commitment",
//         "Highlight contrast with destabilizing actors in region",
//         "Establish UAE as stabilizing force amid regional tensions",
//         "Demonstrate alignment with international community objectives",
//         "Build coalition of supportive voices across diplomatic spectrum"
//       ],
//       narrativePillars: [
//         "UAE as humanitarian leader in regional crisis response",
//         "UAE diplomatic engagement supports inclusive political process",
//         "Evidence-based policy contrasts with opportunistic actors",
//         "Long-term regional stability as guiding principle",
//         "Protection of civilian populations as paramount concern"
//       ]
//     },
//     implementationFramework: {
//       phaseOne: {
//         title: "Immediate Response",
//         timeline: "Week 1-2",
//         actions: [
//           "Deploy statement package to diplomatic missions",
//           "Brief key media contacts with evidence dossier",
//           "Activate third-party validators in policy community",
//           "Monitor narrative penetration across target audiences",
//           "Coordinate messaging with legal team handling ICJ proceedings"
//         ]
//       },
//       phaseTwo: {
//         title: "Narrative Establishment",
//         timeline: "Week 3-6",
//         actions: [
//           "Release comprehensive white paper on UAE regional policy",
//           "Host background briefings for influential journalists",
//           "Deploy social media content highlighting humanitarian efforts",
//           "Engage policy forum discussions with supporting evidence",
//           "Coordinate messaging with regional allies"
//         ]
//       },
//       phaseThree: {
//         title: "Sustained Engagement",
//         timeline: "Month 2-6",
//         actions: [
//           "Continuous monitoring and adaptive messaging",
//           "Regular evidence updates reflecting ongoing activities",
//           "Proactive engagement with critical voices",
//           "Expansion of third-party validator network",
//           "Integration with broader diplomatic strategy"
//         ]
//       }
//     }
//   };

//   // Component rendering
//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//       {/* Header Banner */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-3xl font-bold">{planData.title}</h1>
//             <p className="text-blue-100 mt-1">{planData.subtitle}</p>
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
//         <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
//           <h2 className="text-xl font-bold text-blue-800 mb-2">Executive Summary</h2>
//           <p className="text-gray-800">{planData.executiveSummary}</p>
//         </div>

//         {/* Narrative Context */}
//         <div className="mb-10">
//           <div className="flex items-center mb-4">
//             <Shield className="h-6 w-6 text-blue-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Current Narrative Landscape</h2>
//           </div>
//           <p className="text-gray-700 mb-4">{planData.narrativeContext.currentSituation}</p>
          
//           <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Primary Challenges</h3>
//           <div className="bg-gray-50 p-4 rounded-lg">
//             <ul className="space-y-2">
//               {planData.narrativeContext.primaryChallenges.map((challenge, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     !
//                   </div>
//                   <span className="text-gray-700">{challenge}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Two-column layout for strategies */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
//           {/* Defensive Strategy */}
//           <div className="border rounded-lg p-6">
//             <div className="flex items-center mb-4">
//               <Shield className="h-6 w-6 text-blue-600 mr-2" />
//               <h2 className="text-xl font-bold text-gray-900">Defensive Strategy</h2>
//             </div>
            
//             <h3 className="text-lg font-bold text-gray-800 mb-3">Core Principles</h3>
//             <ul className="space-y-2 mb-6">
//               {planData.defensiveStrategy.corePrinciples.map((principle, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{principle}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <h3 className="text-lg font-bold text-gray-800 mb-3">Key Messages</h3>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <ul className="space-y-3">
//                 {planData.defensiveStrategy.keyMessages.map((message, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       ✓
//                     </div>
//                     <span className="text-gray-700">{message}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Proactive Strategy */}
//           <div className="border rounded-lg p-6">
//             <div className="flex items-center mb-4">
//               <ArrowUpRight className="h-6 w-6 text-green-600 mr-2" />
//               <h2 className="text-xl font-bold text-gray-900">Proactive Strategy</h2>
//             </div>
            
//             <h3 className="text-lg font-bold text-gray-800 mb-3">Strategic Objectives</h3>
//             <ul className="space-y-2 mb-6">
//               {planData.proactiveStrategy.strategicObjectives.map((objective, idx) => (
//                 <li key={idx} className="flex items-start">
//                   <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                     {idx + 1}
//                   </div>
//                   <span className="text-gray-700">{objective}</span>
//                 </li>
//               ))}
//             </ul>
            
//             <h3 className="text-lg font-bold text-gray-800 mb-3">Narrative Pillars</h3>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <ul className="space-y-3">
//                 {planData.proactiveStrategy.narrativePillars.map((pillar, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       ★
//                     </div>
//                     <span className="text-gray-700">{pillar}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Implementation Timeline */}
//         <div className="mb-10">
//           <div className="flex items-center mb-6">
//             <Target className="h-6 w-6 text-indigo-600 mr-2" />
//             <h2 className="text-2xl font-bold text-gray-900">Implementation Framework</h2>
//           </div>

//           <div className="space-y-6">
//             {/* Phase 1 */}
//             <div className="border-l-4 border-blue-500 pl-6 pb-6">
//               <div className="flex items-center mb-3">
//                 <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
//                 <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseOne.title}</h3>
//                 <span className="ml-3 text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1">
//                   {planData.implementationFramework.phaseOne.timeline}
//                 </span>
//               </div>
//               <ul className="space-y-2">
//                 {planData.implementationFramework.phaseOne.actions.map((action, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{action}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Phase 2 */}
//             <div className="border-l-4 border-indigo-500 pl-6 pb-6">
//               <div className="flex items-center mb-3">
//                 <div className="bg-indigo-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
//                 <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseTwo.title}</h3>
//                 <span className="ml-3 text-sm bg-indigo-100 text-indigo-800 rounded-full px-3 py-1">
//                   {planData.implementationFramework.phaseTwo.timeline}
//                 </span>
//               </div>
//               <ul className="space-y-2">
//                 {planData.implementationFramework.phaseTwo.actions.map((action, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{action}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Phase 3 */}
//             <div className="border-l-4 border-purple-500 pl-6 pb-6">
//               <div className="flex items-center mb-3">
//                 <div className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
//                 <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseThree.title}</h3>
//                 <span className="ml-3 text-sm bg-purple-100 text-purple-800 rounded-full px-3 py-1">
//                   {planData.implementationFramework.phaseThree.timeline}
//                 </span>
//               </div>
//               <ul className="space-y-2">
//                 {planData.implementationFramework.phaseThree.actions.map((action, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <div className="bg-gray-200 h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
//                       {idx + 1}
//                     </div>
//                     <span className="text-gray-700">{action}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
//           <div className="flex items-center">
//             <Shield className="h-5 w-5 text-blue-600 mr-2" />
//             <span className="text-gray-600">Produced by <span className="font-semibold">{planData.source}</span></span>
//           </div>
//           <div className="flex space-x-4">
//             <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors">
//               Download PDF
//             </button>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//               Implementation Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CounterNarrativePlan;






















import React from 'react';
import { Shield, ArrowUpRight, Clock, Target, BarChart3, Users, Mail, Phone, FileText } from 'lucide-react';

const CounterNarrativePlan = () => {
    const planData = {
        title: "UAE-SUDAN COUNTER-NARRATIVE PLAN", //From PDF title
        subtitle: "",  // No clear subtitle on Page 1
        lastUpdated: "March 21, 2025",  // From PDF
        source: "BEACON RED",   //From PDF
        confidentiality: "CONFIDENTIAL", // Added confidentiality
        icod: "March 21, 2025, 1200hrs/12pm UAE (GMT+4)", // Added ICOD
        executiveSummary: "This report provides a comprehensive narrative intelligence analysis of current global media coverage related to the UAE-Sudan situation. It also contains an actionable communication strategy intended to counter critical narratives targeting the UAE but also reframe the situation into a more UAE-aligned conversation.", //From PDF
        recommendationsSummary: [ // Direct mapping from "Recommendations Summary"
            "Regional Media Outreach: Grant opinion articles, interviews, and exclusive access pieces to media outlets.",
            "Social Media Campaign: Launch a coordinated social media campaign using a dedicated hashtag (e.g. #UAEForSudanPeace).",
            "Content Formats & Frequency: Mix up content types (short-form videos, infographics, fact-sheets, op-eds).",
            "Influencer & Grassroots Engagement: Identify and collaborate with influencers and humanitarian NGOs.",
            "Initial Capacity Building for 24/7 Rapid Response: Establish narrative intelligence/disinformation monitoring.",
            "Aggressive Deflection Campaign: Target top influencers attacking UAE.",
        ],
         narrativeContext: { //Added from PDF + a bit of previous info
          currentSituation: "The UAE is currently facing significant criticism in international forums regarding alleged activities in Sudan, with particular focus on the ongoing ICJ proceedings and accusations from the Sudanese government. These narratives threaten to undermine UAE credibility and strategic positioning, particularly with allegations of supporting the Rapid Support Forces (RSF) and complicity in genocide.",
          primaryChallenges: [
            "Distortion of UAE humanitarian initiatives in Sudan",
            "False equivalence with other regional actors' interventions",
            "Mischaracterization of UAE's regional security objectives",
            "Amplification of Sudanese government claims without context",
            "Limited penetration of UAE perspective in Western media",
            "Prevalence of negative sentiment (87%) in media coverage.", //Added from PDF
            "Dominance of the term 'genocide' in related discourse.",       //Added from PDF
            "Influence of bot-like activity amplifying negative narratives."     //Added from PDF
          ]
        },
    defensiveStrategy: {  // Modified to incorporate PDF's "Strategic Counter-Narrative Messaging Framework"
      corePrinciples: [
        "Evidence-based refutation of false claims",
        "Contextual framing of UAE regional policy",
        "Consistency across all diplomatic and media channels",
        "Measured tone avoiding escalatory rhetoric",
        "Transparency regarding humanitarian initiatives"
      ],
      keyMessages: [  // Combination of original and PDF's core themes
        "Humanitarian Leadership: UAE's substantial humanitarian aid to Sudan (over $600 million since 2023).", // From PDF
        "Proactive Peace Advocacy: UAE's role in seeking peace and stability, diplomatic efforts.", // From PDF
        "Global South Solidarity: Framing UAE as standing with African and Asian nations.", // From PDF
        "Economic Partnerships: Highlighting UAE's long-term investments in Sudan's stability.", // From PDF
        "Rejection of Baseless Allegations: Refuting claims with lack of direct evidence.", // From PDF
        "Negative/Deflection Messaging: Highlighting SAF human rights violations", //From PDF
        "UAE activities conducted with international coordination.", // Adapted
        "Regional stability remains central to UAE foreign policy.", // Adapted
        "Historical context of UAE-Sudan relations demonstrates long-term commitment." // Adapted
      ]
    },
      proactiveStrategy: { //Kept and will be used for long-term goals
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
        title: "Immediate (0-1 Month)",  // From PDF Timeline
        timeline: "Week 1-4",  // Modified for clarity
        actions: [
          "Roll out official statements and rebuttals", // From PDF
          "Deploy senior officials for interviews",    // From PDF
          "Push an aggressive social media blitz",   // From PDF
          "Engage embassies to communicate with host country media in Africa and Asia", // From PDF
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
    priorityPlatforms: [ // Added from PDF, detailed information will be in a separate component
      { platform: "Twitter/X", reasons: ["85.8% negative content", "Largest opportunity to shift sentiment", "Influential user base"] },
      { platform: "Instagram", reasons: ["Highest engagement efficiency", "Favorable positive basis", "Visual evidence of aid"] },
      { platform: "TikTok", reasons: ["More supporting than critical content", "High engagement", "Access to younger audiences"] },
      { platform: "Facebook", reasons: ["Significant content gap", "Strong engagement with positive content", "Reaches older audiences"] },
      { platform: "Telegram", reasons: ["Zero identified supporting content", "High engagement", "Dedicated information channels"] },
    ],
     targetAudiences: [  // Added from PDF, to be potentially used in a separate component or section
        { audience: "Western Policymakers", why: "Influence diplomatic relations, arms sales, and sanctions.", messageAgenda: "Rebuttal with facts, cooperation with the ICJ." },
        { audience: "AU and Arab League", why: "African countries are the most at risk.", messageAgenda: "Regional camaraderie, UAE's track record of helping." },
        { audience: "Sudanese Public", why: "Weaken Sudanese government's anti-UAE propaganda.", messageAgenda: "UAE and African partnerships are helping Sudanese civilians." },
        { audience: "Humanitarian Organizations", why: "Strengthen argument of UAE's focus on helping civilians.", messageAgenda: "Reinforcing the UAE's history of humanitarian actions." },
        { audience: "Global Business and Investment Leaders", why: "The Sudan war affects regional economic stability.", messageAgenda: "Reassure investors, UAE remains committed." },
        { audience: "Think Tanks and Policy Institutes", why: "Can steer geopolitical analysis and discourse.", messageAgenda: "The UAE is a contributor to peacekeeping and development." },
        { audience: "BRICS Countries", why: "Significant diplomatic, economic, and security influence.", messageAgenda: "A 'Western-Centralized' UN looking to discredit BRICS nations." },
        { audience: "G20 Countries", why: "UAE has strong economic and political ties.", messageAgenda: "Reassure the UAE remains committed to economic partnerships." },
      ],
        topNarratives: [ // Added from PDF's "Top Narratives Promoted by Attackers"
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
       appendices: { // Added from PDF, placeholders for now
        topAttackers: [], // Would need to be structured data, similar to keyInfluencers
        thinkTankOutreach: [], // List of think tanks
        factCheckingNGO: {}, // Details for the proposed NGO
        mediaOutlets: {},   // Structured data of media outlets per audience
      },
  };


    // Component rendering
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">{planData.title}</h1>
                        <p className="text-blue-100 mt-1">{planData.subtitle}</p>
                         <p className="text-sm text-blue-100 mt-1">
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
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                    <h2 className="text-xl font-bold text-blue-800 mb-2">Executive Summary</h2>
                    <p className="text-gray-800">{planData.executiveSummary}</p>

                    <h3 className="text-lg font-bold text-blue-700 mt-4 mb-1">Recommendations Summary</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {planData.recommendationsSummary.map((recommendation, index) => (
                            <li key={index} className="text-gray-700">{recommendation}</li>
                        ))}
                    </ul>
                </div>
                {/* Narrative Context */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Current Narrative Landscape</h2>
          </div>
          <p className="text-gray-700 mb-4">{planData.narrativeContext.currentSituation}</p>
          
          <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">Primary Challenges</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              {planData.narrativeContext.primaryChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-red-100 text-red-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                    !
                  </div>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

                {/* Two-column layout for strategies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    {/* Defensive Strategy */}
                    <div className="border rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <Shield className="h-6 w-6 text-blue-600 mr-2" />
                            <h2 className="text-xl font-bold text-gray-900">Defensive Strategy</h2>
                        </div>

                        <h3 className="text-lg font-bold text-gray-800 mb-3">Core Principles</h3>
                        <ul className="space-y-2 mb-6">
                            {planData.defensiveStrategy.corePrinciples.map((principle, idx) => (
                                <li key={idx} className="flex items-start">
                                    <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
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
                                        <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                                            ✓
                                        </div>
                                        <span className="text-gray-700">{message}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Proactive Strategy */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <ArrowUpRight className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">Proactive Strategy</h2>
            </div>
            
            <h3 className="text-lg font-bold text-gray-800 mb-3">Strategic Objectives</h3>
            <ul className="space-y-2 mb-6">
              {planData.proactiveStrategy.strategicObjectives.map((objective, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
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
                    <div className="bg-indigo-100 text-indigo-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                      ★
                    </div>
                    <span className="text-gray-700">{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
                </div>


                {/* Implementation Timeline */}
                <div className="mb-10">
                    <div className="flex items-center mb-6">
                        <Target className="h-6 w-6 text-indigo-600 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-900">Implementation Framework</h2>
                    </div>

                    <div className="space-y-6">
                        {/* Phase 1 */}
                        <div className="border-l-4 border-blue-500 pl-6 pb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-blue-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">1</div>
                                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseOne.title}</h3>
                                <span className="ml-3 text-sm bg-blue-100 text-blue-800 rounded-full px-3 py-1">
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
                        <div className="border-l-4 border-indigo-500 pl-6 pb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-indigo-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">2</div>
                                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseTwo.title}</h3>
                                <span className="ml-3 text-sm bg-indigo-100 text-indigo-800 rounded-full px-3 py-1">
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
                        <div className="border-l-4 border-purple-500 pl-6 pb-6">
                            <div className="flex items-center mb-3">
                                <div className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold mr-3">3</div>
                                <h3 className="text-xl font-bold text-gray-800">{planData.implementationFramework.phaseThree.title}</h3>
                                <span className="ml-3 text-sm bg-purple-100 text-purple-800 rounded-full px-3 py-1">
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

                {/* Priority Platforms (Could be a separate component) */}
                <div className="mb-10">
                    <div className="flex items-center mb-6">
                        <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
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
                        <Users className="h-6 w-6 text-blue-600 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-900">Target Audiences</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audience</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Why</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message Agenda</th>
                                </tr>
                            </thead>
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
                        <h2 className="text-2xl font-bold text-gray-900">Top Narratives Promoted by Attackers</h2>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">

                        <ul className="space-y-2">
                        {planData.topNarratives.map((narrativeItem, idx) => (
                            <li key={idx} className="text-gray-700">
                                <span className="font-semibold">{idx + 1}. {narrativeItem.narrative}:</span> {narrativeItem.description}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <Shield className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-gray-600">Produced by <span className="font-semibold">{planData.source}</span></span>
                    </div>
                    {/* <div className="flex space-x-4">
                        <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors">
                            Download PDF
                        </button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                            Implementation Dashboard
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CounterNarrativePlan;










