import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resume from "@/pages/Resume";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Blog} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
