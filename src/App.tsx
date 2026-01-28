import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { LanguageLevels } from "./components/LanguageLevels";
import { PlacementTest } from "./components/PlacementTest";
import { AISpeakingTutor } from "./components/AISpeakingTutor";
import { Gamification } from "./components/Gamification";
import { LearningTools } from "./components/LearningTools";
import { RussianCulture } from "./components/RussianCulture";
import { MoviesAndMedia } from "./components/MoviesAndMedia";
import { TargetAudiences } from "./components/TargetAudiences";
import { ProfessionalSpecialization } from "./components/ProfessionalSpecialization";
import { FastTrackWork } from "./components/FastTrackWork";
import { UniversityPreparation } from "./components/UniversityPreparation";
import { PreArrivalProgram } from "./components/PreArrivalProgram";
import { QuickJobs } from "./components/QuickJobs";
import { OfficialCertification } from "./components/OfficialCertification";
import { TORFLPreparation } from "./components/TORFLPreparation";
import { MentorSystem } from "./components/MentorSystem";
import { CommunityForum } from "./components/CommunityForum";
import { TeacherMaterials } from "./components/TeacherMaterials";
import { CostOfLivingCalculator } from "./components/CostOfLivingCalculator";
import { OfficialPartnerships } from "./components/OfficialPartnerships";
import { PricingAndAccess } from "./components/PricingAndAccess";
import { SupportAndFAQ } from "./components/SupportAndFAQ";
import { Testimonials } from "./components/Testimonials";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { DarkModeProvider } from "./components/contexts/DarkModeContext";
import { StickyNavigation } from "./components/StickyNavigation";
import { StickyCTA } from "./components/StickyCTA";
import { SocialProof } from "./components/SocialProof";
import { DailyWord } from "./components/DailyWord";
import { ProgressCalculator } from "./components/ProgressCalculator";
import { CompetitorComparison } from "./components/CompetitorComparison";
import { KeyboardTrainer } from "./components/KeyboardTrainer";
import { SuccessStories } from "./components/SuccessStories";
import { CostComparisonCalculator } from "./components/CostComparisonCalculator";
import { LimitedTimeOffer } from "./components/LimitedTimeOffer";

export default function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />
        <StickyNavigation />
        <StickyCTA />
        <SocialProof />
        <DailyWord />
        <main>
          <Hero />
          <LimitedTimeOffer />
          <Features />
          <SuccessStories />
          <LanguageLevels />
          <PlacementTest />
          <ProgressCalculator />
          <AISpeakingTutor />
          <Gamification />
          <LearningTools />
          <KeyboardTrainer />
          <RussianCulture />
          <MoviesAndMedia />
          <TargetAudiences />
          <ProfessionalSpecialization />
          <FastTrackWork />
          <UniversityPreparation />
          <PreArrivalProgram />
          <QuickJobs />
          <OfficialCertification />
          <TORFLPreparation />
          <MentorSystem />
          <CommunityForum />
          <TeacherMaterials />
          <CostOfLivingCalculator />
          <CostComparisonCalculator />
          <OfficialPartnerships />
          <CompetitorComparison />
          <PricingAndAccess />
          <SupportAndFAQ />
          <Testimonials />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}