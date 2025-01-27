import React, { useState } from "react";
import { MarketTicker } from "./components/MarketTicker";
import { Hero } from "./components/Hero";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { FreeTrialPage } from "./components/trial/FreeTrialPage";
import { CourseCatalog } from "./components/courses/CourseCatalog";
import { JoinNowPage } from "./pages/JoinNowPage";
import { SignInPage } from "./pages/SignInPage";
import { FloatingButtons } from "./components/FloatingButtons";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { useAuth } from "./store/auth";
import AboutPage from "./om_components/aboutPage/AboutPage";
import Header from "./om_components/header/Header";

type View = "home" | "freeTrial" | "courses" | "joinNow" | "signIn" | "about";

function App() {
  const [currentView, setCurrentView] = useState<View>("home");
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <DashboardLayout />
      </div>
    );
  }

  if (currentView === "joinNow") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header
        onHome={() => setCurrentView("home")}
        onAbout={() => setCurrentView("about")}
        onCourses={() => setCurrentView('courses')}
        onJoinNow={() => setCurrentView('joinNow')} 
        onSignIn={() => setCurrentView('signIn')}
      />
        <JoinNowPage onBack={() => setCurrentView("home")} />
      </div>
    );
  }

  if (currentView === "signIn") {
    return (
      
      <div className="min-h-screen bg-background text-foreground">
        <Header
        onHome={() => setCurrentView("home")}
        onAbout={() => setCurrentView("about")}
        onCourses={() => setCurrentView('courses')}
        onJoinNow={() => setCurrentView('joinNow')} 
        onSignIn={() => setCurrentView('signIn')}
      />
        <SignInPage onBack={() => setCurrentView("home")} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <FloatingButtons 
        onJoinNow={() => setCurrentView('joinNow')} 
        onSignIn={() => setCurrentView('signIn')}
      /> */}
      <MarketTicker />
      <Header
      onHome={() => setCurrentView("home")}
      onAbout={() => setCurrentView("about")}
      onCourses={() => setCurrentView('courses')}
        onJoinNow={() => setCurrentView('joinNow')} 
        onSignIn={() => setCurrentView('signIn')}
      />
      {currentView === "freeTrial" ? (
        <FreeTrialPage />
      ) : currentView === "courses" ? (
        <CourseCatalog />
      ) : currentView === "about" ? (
        <AboutPage />
      ) : (
        <Hero
          onStartFreeTrial={() => setCurrentView("freeTrial")}
          onViewCourses={() => setCurrentView("courses")}
          onViewAbout={() => setCurrentView("about")}
        />
      )}
      <WhatsAppButton />
    </div>
  );
}

export default App;
