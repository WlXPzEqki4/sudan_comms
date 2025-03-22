



import React from 'react';
import { Globe, Map, ArrowLeftRight, TrendingUp, AlertCircle, Award, Users, Clock, Share2, FileText, BarChart3 } from 'lucide-react';

const RegionalStrategyComparison = () => {
  // Placeholder data structure
  const comparisonData = {
    title: "Comparative Media Analysis", //Updated Title
    subtitle: "UAE-Sudan ICJ Narrative vs Qatar, Saudi Arabia, and Sudan Strategies", //Updated Subtitle
    lastUpdated: "March 18, 2025", // Keeping the old date. Could be updated.
    source: "PeakMetrics", // Keeping old source.
    executiveSummary: "In early 2025, Sudan filed a case at the International Court of Justice (ICJ) accusing the United Arab Emirates of complicity in genocide during Sudan’s ongoing conflict. This unprecedented allegation sparked intense global media scrutiny and a largely negative narrative for the UAE. This analysis compares the UAE’s media narrative and strategy amid these ICJ allegations with how Qatar has handled past geopolitical criticism, Saudi Arabia’s responses to international allegations, and Sudan’s own media tactics in shaping conflict narratives and legal claims. Key dimensions include media engagement and sentiment across regions, the impact of influencers, strategic communications (short-term vs. long-term messaging), and the effectiveness of each actor’s approach in shifting public discourse. Data-driven insights inform recommendations for the UAE’s media strategy, distinguishing immediate crisis response (6–12 months) from longer-term reputation management.", //Taken directly from PDF
    keyInsights: [ // Keeping old key insights
      "Qatar employs a multi-layered Western media engagement strategy focusing on policy community outreach",
      "Saudi Arabia utilizes formal diplomatic channels with emphasis on sovereignty principles",
      "Sudan's approach relies heavily on humanitarian framing and victimization narratives",
      "Success rates vary significantly based on pre-existing media relationships",
      "Digitally-native content strategies show higher engagement than traditional press releases"
    ],

    compareMatrix: {
        criteria: ["Primary Channels", "Core Narrative", "Engagement Approach", "Message Discipline", "Third-Party Validators", "Digital Strategy", "Effectiveness Rating"],
        countries: [
          {
            name: "Qatar",
            primarychannels: "Western think tanks, international media, lobbying firms", // all lowercase
            corenarrative: "Progressive regional partner committed to international norms", // all lowercase
            engagementapproach: "Proactive outreach to policy community and opinion leaders", // all lowercase
            messagediscipline: "High consistency across all platforms and messengers", // all lowercase
            thirdpartyvalidators: "Academic institutions, policy experts, business leaders", // all lowercase
            digitalstrategy: "Sophisticated content targeting with high production value", // all lowercase
            effectivenessrating: "High in Western contexts, moderate regionally", // all lowercase
            colorScheme: "blue" // Keep this the same
          },
          {
            name: "Saudi Arabia",
            primarychannels: "Formal diplomatic communications, state media, international forums", // all lowercase
            corenarrative: "Sovereign regional leader maintaining stability and security", // all lowercase
            engagementapproach: "Formal institutional engagement with limited media access", // all lowercase
            messagediscipline: "Very high with centralized message control", // all lowercase
            thirdpartyvalidators: "Regional allies, security experts, economic partners", // all lowercase
            digitalstrategy: "Growing social media presence with controlled messaging", // all lowercase
            effectivenessrating: "Moderate globally, high within allied countries", // all lowercase
            colorScheme: "green" // Keep this the same
          },
          {
            name: "Sudan",
            primarychannels: "International organizations, human rights groups, regional media",// all lowercase
            corenarrative: "Victim of external interference seeking international protection", // all lowercase
            engagementapproach: "Appeal to international norms and humanitarian concerns", // all lowercase
            messagediscipline: "Moderate with some factional inconsistencies", // all lowercase
            thirdpartyvalidators: "Humanitarian organizations, sympathetic nations, diaspora", // all lowercase
            digitalstrategy: "Grassroots amplification with emotional appeals", // all lowercase
            effectivenessrating: "Variable depending on international attention cycles", // all lowercase
            colorScheme: "yellow" // Keep this the same
          }
        ]
      },
    caseStudies: [ //Keeping Old Case Studies
      {
        country: "Qatar",
        situation: "Response to 2017 regional diplomatic crisis",
        approach: "Qatar deployed a comprehensive Western-focused media strategy, engaging top lobbying firms, placing strategic content in policy publications, and conducting extensive outreach to U.S. and European opinion leaders.",
        tactics: [
          "Establishment of dedicated crisis communication team with clear hierarchy",
          "Engagement of multiple Western PR firms with specific regional focus",
          "Development of tailored messaging for different Western audiences",
          "Significant investment in think tank relationships and academic partnerships",
          "Consistent messaging emphasizing reform commitments and strategic partnership"
        ],
        outcomes: [
          "Significant improvement in Western media framing over 6-month period",
          "Successful repositioning as progressive reform-oriented Gulf state",
          "Development of lasting institutional relationships with policy influencers",
          "Creation of narrative separation from other regional actors",
          "Effective internationalization of originally regional dispute"
        ],
        relevanceToUAE: "Qatar's approach demonstrates the effectiveness of comprehensive Western media engagement, though the UAE has opportunity to differentiate through greater emphasis on evidence-based communication and technical expertise."
      },
      {
        country: "Saudi Arabia",
        situation: "Management of international reputation following Khashoggi incident",
        approach: "Saudi Arabia emphasized formal diplomatic channels, leveraged economic relationships, maintained strict message discipline, and focused on sovereignty and regional stability narratives.",
        tactics: [
          "Centralized communication through official channels only",
          "Emphasis on bilateral state-to-state engagement over media relations",
          "Consistent focus on broader strategic importance and regional stability",
          "Leveraging of economic and security relationships to maintain support",
          "Minimal engagement with critical media outlets"
        ],
        outcomes: [
          "Maintained support from key strategic allies despite public criticism",
          "Effectively contained long-term diplomatic damage",
          "Successfully shifted narrative to future-oriented economic initiatives",
          "Struggled with persistent reputation challenges in Western media",
          "Demonstrated resilience of state-to-state relationships despite public opinion"
        ],
        relevanceToUAE: "Saudi approach highlights importance of state-level engagement, though UAE has opportunity to demonstrate greater transparency and media accessibility while maintaining sovereign positioning."
      },
      {
        country: "Sudan",
        situation: "Current ICJ proceedings and international positioning",
        approach: "Sudan has adopted a victim narrative stance, emphasizing humanitarian concerns, appealing to international law protections, and portraying itself as defending sovereign rights against external interference.",
        tactics: [
          "Emotional appeals centered on civilian impact and humanitarian concerns",
          "Direct engagement with human rights organizations and UN agencies",
          "Simplification of complex regional dynamics into clear victim/aggressor framing",
          "Leveraging of anti-intervention sentiment in international forums",
          "Coordinated digital campaigns targeting international audiences"
        ],
        outcomes: [
          "Partial success in framing narrative around humanitarian concerns",
          "Limited scrutiny of internal contradictions and factional dynamics",
          "Effective mobilization of specific international constituencies",
          "Challenges in maintaining consistent narrative across factional interests",
          "Variable impact depending on competing international priorities"
        ],
        relevanceToUAE: "Sudan's approach reveals vulnerability to fact-based countering and opportunity for UAE to demonstrate factual inconsistencies while maintaining humanitarian commitment."
      }
    ],
    recommendations: [ //Keeping old recs
      {
        title: "Strategic Differentiation Opportunities",
        points: [
          "Evidence-based communication with verifiable data points",
          "Transparency regarding humanitarian operations and international coordination",
          "Balanced engagement across Western and regional media ecosystems",
          "Technical expertise positioning rather than purely political framing",
          "Consistent demonstration of regional stability objectives"
        ]
      },
      {
        title: "Tactical Implementation Considerations",
        points: [
          "Combine Qatar's sophisticated Western media engagement with Saudi message discipline",
          "Counter Sudan's emotional appeals with documented factual evidence",
          "Develop both formal diplomatic and media engagement simultaneously",
          "Create region-specific content with appropriate contextual framing",
          "Establish clear metrics for narrative effectiveness across channels"
        ]
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 px-8 py-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{comparisonData.title}</h1>
            <p className="text-green-100 mt-1">{comparisonData.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span>Last Updated: {comparisonData.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Executive Summary */}
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <h2 className="text-xl font-bold text-green-800 mb-2">Executive Summary</h2>
          <p className="text-gray-800">{comparisonData.executiveSummary}</p>
        </div>

        {/* Key Insights */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Key Insights</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              {comparisonData.keyInsights.map((insight, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Matrix */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <ArrowLeftRight className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Strategy Comparison Matrix</h2>
          </div>
          
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Criteria
                  </th>
                  {comparisonData.compareMatrix.countries.map((country, idx) => (
                    <th key={idx} scope="col" className={`px-6 py-3 text-left text-xs font-medium bg-${country.colorScheme}-50 text-${country.colorScheme}-800 uppercase tracking-wider`}>
                      {country.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {comparisonData.compareMatrix.criteria.map((criteria, idx) => {
                  const criteriaKey = criteria.toLowerCase().replace(/\s+/g, '');
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{criteria}</div>
                      </td>
                      {comparisonData.compareMatrix.countries.map((country, countryIdx) => {
                        const value = country[criteriaKey.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()];
                        return (
                          <td key={countryIdx} className={`px-6 py-4 bg-${country.colorScheme}-50`}>
                            <div className="text-sm text-gray-900">{value}</div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Map className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Regional Case Studies</h2>
          </div>
          
          <div className="space-y-8">
            {comparisonData.caseStudies.map((caseStudy, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <div className={`px-4 py-3 ${
                  caseStudy.country === 'Qatar' ? 'bg-blue-100 text-blue-800' : 
                  caseStudy.country === 'Saudi Arabia' ? 'bg-green-100 text-green-800' : 
                  'bg-yellow-100 text-yellow-800'
                } font-bold text-lg`}>
                  {caseStudy.country}: {caseStudy.situation}
                </div>
                <div className="p-5">
                  <p className="text-gray-700 mb-4">{caseStudy.approach}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Key Tactics</h4>
                      <ul className="space-y-2">
                        {caseStudy.tactics.map((tactic, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`${
                              caseStudy.country === 'Qatar' ? 'bg-blue-100 text-blue-800' : 
                              caseStudy.country === 'Saudi Arabia' ? 'bg-green-100 text-green-800' : 
                              'bg-yellow-100 text-yellow-800'
                            } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2`}>
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{tactic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Outcomes</h4>
                      <ul className="space-y-2">
                        {caseStudy.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start">
                            <div className={`${
                              caseStudy.country === 'Qatar' ? 'bg-blue-100 text-blue-800' : 
                              caseStudy.country === 'Saudi Arabia' ? 'bg-green-100 text-green-800' : 
                              'bg-yellow-100 text-yellow-800'
                            } rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-2`}>
                              ✓
                            </div>
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Relevance to UAE Strategy</h4>
                    <p className="text-gray-700">{caseStudy.relevanceToUAE}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Strategic Recommendations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonData.recommendations.map((rec, idx) => (
              <div key={idx} className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4">{rec.title}</h3>
                <ul className="space-y-3">
                  {rec.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                        {i + 1}
                      </div>
                      <span className="text-gray-800">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-gray-600">Produced by <span className="font-semibold">{comparisonData.source}</span></span>
          </div>
          {/* <div className="flex space-x-4">
            <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition-colors">
              Download PDF
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
              View Detailed Analysis
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegionalStrategyComparison;

























