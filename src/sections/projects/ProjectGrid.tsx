import { useEffect, useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectPreview from "./ProjectPreview";
import projects from "./ProjectShowcase";

function ProjectGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [showAll, setShowAll] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(3);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(2);
      } else {
        setVisibleItems(1);
      }
    };

    updateVisibleItems();

    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  /* CURRENT PROJECTS */
  const visibleProjects = showAll
    ? projects
    : projects.slice(currentIndex, currentIndex + visibleItems);

  /* NEXT */
  const handleNext = () => {
    if (currentIndex + visibleItems < projects.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  /* PREVIOUS */
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  /* TOUCH START */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  /* TOUCH END */
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const swipeDistance = touchStartX.current - touchEndX.current;

    /* SWIPE LEFT */
    if (swipeDistance > 50) {
      handleNext();
    }

    /* SWIPE RIGHT */
    if (swipeDistance < -50) {
      handlePrev();
    }
  };
  return (
    <div className="mb-10 mt-[-22px]">
      {/* TOP SMALL TEXT */}
      <span className="text-[13px] font-bold uppercase tracking-[4px] text-purple-400">
        FEATURED WORK
      </span>

      {/* SECOND ROW */}
      <div className="mt-3 flex items-center justify-between gap-4">
        {/* TITLE */}
        <h2 className="whitespace-nowrap text-[15px] font-black text-white md:text-2xl lg:text-4xl light:text-black">
          Featured Projects
        </h2>

        {/* RIGHT */}
        <div className="flex items-center gap-2 ">
          {/* VIEW ALL */}
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group relative inline-flex md:h-[50px] md:px-6 md:text-[14px] h-[36px] items-center justify-center overflow-hidden whitespace-nowrap rounded-[14px] border border-purple-500/30 bg-[#090f1d] px-2 text-[9px] font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.12)] backdrop-blur-xl smooth-transition hover:-translate-y-[2px] hover:border-purple-400/40 hover:shadow-[0_0_35px_rgba(124,58,237,0.20)] light:border-black/10 light:bg-white light:text-black min-[425px]:h-[37px] min-[425px]:rounded-[16px] min-[425px]:px-4 min-[425px]:text-[11px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_70%)] opacity-80" />

            <div className="absolute inset-0 rounded-[14px] border border-white/5 light:border-black/5 min-[425px]:rounded-[16px]" />

            <span className="relative z-10 tracking-[0.3px]">
              {showAll ? "Show Less" : "View All Projects"}
            </span>
          </button>
          {/* ARROWS */}
          {!showAll && (
            <>
              {/* PREV */}
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="
                  flex
                  h-7
                  w-7

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-[#0d1324]

                  text-white

                  smooth-transition

                  hover:border-purple-500/30
                  hover:bg-purple-500/10

                  disabled:cursor-not-allowed
                  disabled:opacity-40

                  light:border-black/10
                  light:bg-white
                  light:text-black
                "
              >
                <ChevronLeft size={20} />
              </button>

              {/* NEXT */}
              <button
                onClick={handleNext}
                disabled={currentIndex + visibleItems >= projects.length}
                className="
                  flex
                  h-12
                  w-12

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-[#0d1324]

                  text-white

                  smooth-transition

                  hover:border-purple-500/30
                  hover:bg-purple-500/10

                  disabled:cursor-not-allowed
                  disabled:opacity-40

                  light:border-black/10
                  light:bg-white
                  light:text-black
                "
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* GRID */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`
            mt-4
          grid
          gap-6

          transition-all
          duration-500

          ${
            showAll
              ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          }
        `}
      >
        {visibleProjects.map((project) => (
          <ProjectPreview
            key={project.id}
            project={project}
            index={project.id}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
