import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const technologyToRemove = stack.find(
      (item) => item.id === id
    );

    const updatedStack = stack.filter(
      (item) => item.id !== id
    );

    setStack(updatedStack);

    if (technologyToRemove) {
      toast.info(
        `${technologyToRemove.name} removed from your stack.`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologySection
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
      />
    </>
  );
}

export default App;