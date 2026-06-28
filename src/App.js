import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectDetail } from "./components/ProjectDetail";
import { Footer } from "./components/Footer";
import { Sertifikasi } from "./components/Sertifikasi";

function App() {
  // SPA routing sederhana tanpa React Router:
  // null  -> tampilkan home (semua section)
  // value -> tampilkan halaman detail proyek
  const [selectedProject, setSelectedProject] = useState(null);

  // Theme state: default "light". Akan di-override oleh localStorage saat mount.
  const [theme, setTheme] = useState("light");

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const handleBack = () => {
    setSelectedProject(null);
  };

  // Saat mount: muat preferensi tema dari localStorage bila ada, jika tidak default "light".
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  // Setiap kali theme berubah, terapkan ke <html> agar CSS variables aktif.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle antara light <-> dark dan simpan ke localStorage.
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  // Scroll otomatis ke atas saat berpindah halaman
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  return (
    <div className="App">
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      {selectedProject ? (
        <ProjectDetail projectId={selectedProject} onBack={handleBack} />
      ) : (
        <>
          <Banner />
          <Skills />
          <Projects onProjectClick={handleProjectClick} />
          <Sertifikasi />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
