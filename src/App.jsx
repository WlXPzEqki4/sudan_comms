// import React from 'react';
// // import Template from './components/Template';
// // import Template_2 from './components/Template_2';
// // import Template_3 from './components/Template_3';
// // import Template_4 from './components/Template_4';
// // import Template_5 from './components/Template_5';
// // import Template_6 from './components/Template_6';
// // import Template_7 from './components/Template_7';
// // import Template_8 from './components/Template_8';
// // import Template_9 from './components/Template_9';
// // import Template_10 from './components/Template_10';



// import HeroSection from './components/HeroSection';
// import ContentIntroduction from './components/ContentIntroduction';

// import CounterNarrativePlan from './components/CounterNarrativePlan';
// import ComparativeMediaAnalysis from './components/ComparativeMediaAnalysis';
// import CommunicationsPlan from './components/CommunicationsPlan';
// import RegionalStrategyComparison from './components/RegionalStrategyComparison';
// import SudanICJMessagingRFI from './components/SudanICJMessagingRFI';



// // import Template_10 from './components/Template_10';
// // import Template_10 from './components/Template_10';



// function App() {
//   return (
//     <div>
//       {/* <Template /> */}

//       {/* <Template_2 /> */}

//       {/* <Template_3 /> */}

//       {/* <Template_4 /> */}

//       {/* <Template_5 /> */}

//       {/* <Template_6 /> */}

//       {/* <Template_7 /> */}

//       {/* <Template_8 /> */}

//       {/* <Template_9 /> */}

//       {/* <Template_10 /> */}



//       <HeroSection />
//       <ContentIntroduction />

//       <CounterNarrativePlan />
//       <ComparativeMediaAnalysis />
//       <CommunicationsPlan />
//       <RegionalStrategyComparison />
//       <SudanICJMessagingRFI />



//       {/* <Template_10 /> */}
//       {/* <Template_10 /> */}
//     </div>

//   );
// }

// export default App;


















import React, { useState } from 'react';
import IntelligencePackageNavigator from './components/IntelligencePackageNavigator';
import CounterNarrativePlan from './components/CounterNarrativePlan';
import ComparativeMediaAnalysis from './components/ComparativeMediaAnalysis';
import CommunicationsPlan from './components/CommunicationsPlan';
import RegionalStrategyComparison from './components/RegionalStrategyComparison';
// import SudanICJMessagingRFI from './components/SudanICJMessagingRFI';
import HeroSection from './components/HeroSection';

const App = () => {
  const [currentView, setCurrentView] = useState('navigator');

  // This function will be passed to the navigator to handle document opening
  const handleOpenDocument = (documentId) => {
    console.log('Opening document:', documentId); // Debugging
    setCurrentView(documentId);
  };

  // Navigation back to the main navigator
  const handleBackToNavigator = () => {
    setCurrentView('navigator');
  };

  // Render the appropriate component based on the current view
  const renderContent = () => {
    switch (currentView) {
      case 'counter-narrative-plan':
        return (
          <div>
            <button 
              onClick={handleBackToNavigator}
              className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
            >
              ← Back to Navigator
            </button>
            <CounterNarrativePlan />
          </div>
        );
      case 'comparative-media-analysis':
        return (
          <div>
            <button 
              onClick={handleBackToNavigator}
              className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
            >
              ← Back to Navigator
            </button>
            <ComparativeMediaAnalysis />
          </div>
        );
      case 'communications-plan':
        return (
          <div>
            <button 
              onClick={handleBackToNavigator}
              className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
            >
              ← Back to Navigator
            </button>
            <CommunicationsPlan />
          </div>
        );
      case 'regional-strategy-comparison':
        return (
          <div>
            <button 
              onClick={handleBackToNavigator}
              className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
            >
              ← Back to Navigator
            </button>
            <RegionalStrategyComparison />
          </div>
        );
      // case 'sudan-icj-messaging-rfi':
      //   return (
      //     <div>
      //       <button 
      //         onClick={handleBackToNavigator}
      //         className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center"
      //       >
      //         ← Back to Navigator
      //       </button>
      //       <SudanICJMessagingRFI />
      //     </div>
      //   );
      case 'navigator':
      default:
        return <IntelligencePackageNavigator onDocumentOpen={handleOpenDocument} />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section always shown */}
      <div className="mb-8">
        <HeroSection />
      </div>
      
      {renderContent()}
    </div>
  );
};

export default App;