import { Routes, Route, Navigate } from "react-router-dom";

import BootPage from "./pages/BootPage";
import CountdownPage from "./pages/CountdownPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

import GiftChallengePage from "./pages/GiftChallengePage";

import Mission1IntroPage from "./pages/Mission1IntroPage";
import Mission1Page from "./pages/Mission1Page";
import Mission1QuestionsPage from "./pages/Mission1QuestionsPage";

import Mission2IntroPage from "./pages/Mission2IntroPage";
import Mission2Page from "./pages/Mission2Page";

import Mission3IntroPage from "./pages/Mission3IntroPage";
import Mission3Page from "./pages/Mission3Page";

import Mission4IntroPage from "./pages/Mission4IntroPage";
import Mission4Page from "./pages/Mission4Page";

import MissionCompletePage from "./pages/MissionCompletePage";

import GiftPage from "./pages/GiftPage";
import VaultPage from "./pages/VaultPage";
import GalleryPage from "./pages/GalleryPage";
import LetterPage from "./pages/LetterPage";
import BirthdayPage from "./pages/BirthdayPage";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Redirect */}
      <Route path="/" element={<Navigate to="/boot" replace />} />

      {/* Public Pages */}
      <Route path="/boot" element={<BootPage />} />
      <Route path="/gift-challenge" element={<GiftChallengePage />} />
      <Route path="/countdown" element={<CountdownPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Mission 1 */}
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

      {/* Mission 2 */}
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

      {/* Mission 3 */}
      <Route
        path="/mission-3"
        element={
          <ProtectedRoute>
            <Mission3IntroPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-3/play"
        element={
          <ProtectedRoute>
            <Mission3Page />
          </ProtectedRoute>
        }
      />

      {/* Mission 4 */}
      <Route
        path="/mission-4"
        element={
          <ProtectedRoute>
            <Mission4IntroPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mission-4/play"
        element={
          <ProtectedRoute>
            <Mission4Page />
          </ProtectedRoute>
        }
      />

      {/* Mission Complete */}
      <Route
        path="/mission-complete"
        element={
          <ProtectedRoute>
            <MissionCompletePage />
          </ProtectedRoute>
        }
      />

      {/* Extras */}
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

      {/* 404 */}
      <Route path="*" element={<Navigate to="/boot" replace />} />
    </Routes>
  );
}