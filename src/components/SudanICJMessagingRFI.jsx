import React from 'react';
import { AlertTriangle, Search, FileText, Target, CalendarClock, CheckSquare, Users } from 'lucide-react';

const SudanICJMessagingRFI = () => {
  // Placeholder data structure
  const rfiData = {
    title: "Sudan ICJ Messaging RFI",
    subtitle: "Request for Information: Strategic Communications Response",
    dateIssued: "March 17, 2025",
    dueDate: "March 20, 2025",
    source: "Beacon Red",
    background: "The UAE is currently facing a coordinated disinformation campaign related to ongoing ICJ proceedings involving Sudan. This campaign threatens to damage the UAE's international standing and undermine its strategic humanitarian and regional security objectives. A comprehensive counter-narrative strategy is urgently required to defend UAE interests and shift the narrative landscape in a more favorable direction.",
    objectives: [
      "Develop a detailed Counter-Narrative plan to defend from ongoing attacks",
      "Create a strategic framework to shift the narrative to UAE's favor",
      "Identify key stakeholders, channels, and messaging opportunities",
      "Establish metrics for measuring communications effectiveness",
      "Outline implementation timeline and resource requirements"
    ],
    informationRequirements: [
      {
        category: "Media Analysis",
        requirements: [
          "Comprehensive analysis of current narrative landscape across Western and regional media",
          "Identification of primary narrative drivers and influential voices",
          "Comparative analysis of narrative treatment in different media ecosystems",
          "Evidence of disinformation techniques and coordination patterns",
          "Historical context of similar narrative challenges and effective responses"
        ]
      },
      {
        category: "Strategic Framework",
        requirements: [
          "Defensive messaging framework with evidence-based refutation points",
          "Proactive narrative positioning strategy with core messaging themes",
          "Channel-specific tactical approaches (diplomatic, media, digital)",
          "Stakeholder mapping with engagement prioritization",
          "Differentiated messaging for key audience segments"
        ]
      },
      {
        category: "Regional Context",
        requirements: [
          "Comparative analysis of similar challenges faced by regional actors",
          "Assessment of Qatar and Saudi Arabia's strategic communications approaches",
          "Analysis of Sudan's current messaging strategy and vulnerabilities",
          "Identification of regional coalition-building opportunities",
          "Evaluation of historical precedents for similar regional challenges"
        ]
      },
      {
        category: "Implementation Plan",
        requirements: [
          "Detailed tactical roadmap with phased implementation timeline",
          "Channel-specific content strategies and distribution mechanisms",
          "Resource requirements and organizational structure recommendations",
          "Coordination framework across relevant UAE entities and stakeholders",
          "Success metrics and evaluation methodology"
        ]
      }
    ],
    priorityAreas: [
      {
        area: "Western Media Engagement",
        rationale: "Critical for shaping international institutional perspectives and minimizing reputational damage in key diplomatic contexts.",
        priority: "High"
      },
      {
        area: "Factual Evidence Compilation",
        rationale: "Essential for evidence-based refutation of specific claims and establishing credibility with neutral third parties.",
        priority: "High"
      },
      {
        area: "Humanitarian Narrative Development",
        rationale: "Strategic opportunity to reframe discussion around UAE's substantial humanitarian commitments and positive regional impact.",
        priority: "Medium-High"
      },
      {
        area: "Regional Media Strategy",
        rationale: "Important for maintaining regional influence and countering Sudan's positioning with neighboring states.",
        priority: "Medium"
      },
      {
        area: "Digital Response Capability",
        rationale: "Necessary for rapid response to emerging narratives and engagement with online stakeholders.",
        priority: "Medium"
      }
    ],
    deliverables: [
      {
        item: "UAE and Sudan Counter Narrative Plan",
        description: "Comprehensive strategy document integrating all analysis and recommendations",
        format: "Detailed report with executive summary",
        deadline: "March 21, 2025"
      },
      {
        item: "Comparative Media Analysis",
        description: "Analysis of narrative treatment across media landscapes",
        format: "Analytical report with visualizations",
        deadline: "March 18, 2025"
      },
      {
        item: "Strategic Communications Framework",
        description: "Tactical roadmap for countering disinformation",
        format: "Strategic framework document",
        deadline: "March 19, 2025"
      },
      {
        item: "Regional Strategy Comparison",
        description: "Analysis of Qatar, Saudi Arabia and Sudan approaches",
        format: "Comparative analysis report",
        deadline: "March 18, 2025"
      }
    ],
    pointsOfContact: [
      {
        name: "Strategic Communications Team",
        role: "Primary recipient of intelligence products",
        contact: "comms@beaconred.example"
      },
      {
        name: "Legal Affairs Coordination",
        role: "Coordination with ICJ proceedings team",
        contact: "legal@beaconred.example"
      },
      {
        name: "Intelligence Analysis Division",
        role: "Supporting analysis and monitoring",
        contact: "intel@beaconred.example"
      }
    ]
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">{rfiData.title}</h1>
            <p className="text-blue-100 mt-1">{rfiData.subtitle}</p>
          </div>
          <div className="flex flex-col items-end space-y-1 text-sm">
            <div className="flex items-center">
              <span>Date Issued: {rfiData.dateIssued}</span>
            </div>
            <div className="flex items-center">
              <span>Response Due: {rfiData.dueDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        {/* Background */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-800 mb-2">Background & Context</h2>
          <p className="text-gray-800">{rfiData.background}</p>
        </div>

        {/* Objectives */}
        <div className="mb-10">
          <div className="flex items-center mb-4">
            <Target className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Intelligence Objectives</h2>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              {rfiData.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Information Requirements */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <Search className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Information Requirements</h2>
          </div>
          
          <div className="space-y-6">
            {rfiData.informationRequirements.map((category, idx) => (
              <div key={idx} className="border rounded-lg overflow-hidden">
                <div className="bg-blue-100 text-blue-800 px-4 py-3 font-bold text-lg">
                  {category.category}
                </div>
                <div className="p-5">
                  <ul className="space-y-2">
                    {category.requirements.map((requirement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 mr-3">
                          {i + 1}
                        </div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Areas */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <AlertTriangle className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Priority Focus Areas</h2>
          </div>
          
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Area
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rationale
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rfiData.priorityAreas.map((area, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{area.area}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{area.rationale}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        area.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        area.priority === 'Medium-High' ? 'bg-orange-100 text-orange-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <FileText className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Required Deliverables</h2>
          </div>
          
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deliverable
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Format
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rfiData.deliverables.map((deliverable, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{deliverable.item}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{deliverable.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{deliverable.format}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {deliverable.deadline}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Points of Contact */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Points of Contact</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rfiData.pointsOfContact.map((contact, idx) => (
              <div key={idx} className="border rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">{contact.name}</h3>
                <div className="text-sm text-gray-500 mb-1">{contact.role}</div>
                <div className="flex items-center text-blue-600">
                  <a href={`mailto:${contact.contact}`} className="text-sm font-medium hover:underline">
                    {contact.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-600">Issued by <span className="font-semibold">{rfiData.source}</span></span>
          </div>
          {/* <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors">
              Download RFI
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Submit Response
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SudanICJMessagingRFI;