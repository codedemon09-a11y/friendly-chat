import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import Scriptures from "./pages/Scriptures";
import ScriptureDetail from "./pages/ScriptureDetail";
import ChapterReader from "./pages/ChapterReader";
import SearchPage from "./pages/SearchPage";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scriptures" element={<Scriptures />} />
            <Route path="/scripture/:slug" element={<ScriptureDetail />} />
            <Route path="/scripture/:slug/chapter/:chapterNum" element={<ChapterReader />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
