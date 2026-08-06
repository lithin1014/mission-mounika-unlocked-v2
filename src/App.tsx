import { Routes, Route, Navigate } from "react-router-dom";

import BootPage from "./pages/BootPage";
import CountdownPage from "./pages/CountdownPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Mission1Page from "./pages/Mission1Page";
import Mission1QuestionsPage from "./pages/Mission1QuestionsPage";
import GiftPage from "./pages/GiftPage";
import Mission1IntroPage from "./pages/Mission1IntroPage";
import MissionCompletePage from "./pages/MissionCompletePage";
import VaultPage from "./pages/VaultPage";
import GalleryPage from "./pages/GalleryPage";
import LetterPage from "./pages/LetterPage";
import BirthdayPage from "./pages/BirthdayPage";
import Mission2IntroPage from "./pages/Mission2IntroPage";
import Mission2Page from "./pages/Mission2Page";
import GiftChallengePage from "./pages/GiftChallengePage";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/boot" replace />} />

      {/* Public Pages */}
      <Route path="/boot" element={<BootPage />} />
      <Route path="/countdown" element={<CountdownPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected Pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-1/intro"
        element={
          <ProtectedRoute>
            <Mission1IntroPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-1"
        element={
          <ProtectedRoute>
            <Mission1Page />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-1/questions"
        element={
          <ProtectedRoute>
            <Mission1QuestionsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-2"
        element={
          <ProtectedRoute>
            <Mission2IntroPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-2/play"
        element={
          <ProtectedRoute>
            <Mission2Page />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-complete"
        element={
          <ProtectedRoute>
            <MissionCompletePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gift"
        element={
          <ProtectedRoute>
            <GiftPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vault"
        element={
          <ProtectedRoute>
            <VaultPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gallery"
        element={
          <ProtectedRoute>
            <GalleryPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/letter"
        element={
          <ProtectedRoute>
            <LetterPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/birthday"
        element={
          <ProtectedRoute>
            <BirthdayPage />
          </ProtectedRoute>
        }
      />

      <Route
  path="/gift-challenge"
  element={<GiftChallengePage />}
/>
    </Routes>
  );
}