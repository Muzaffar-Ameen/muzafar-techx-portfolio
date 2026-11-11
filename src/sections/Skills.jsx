import { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { skillsData } from "../data/portfolio";

const INITIAL_SKILLS = 8;

const categories = [
  { label: "All Skills", icon: "solar:widget-2-linear" },
  { label: "Frontend", icon: "solar:monitor-smartphone-linear" },
  { label: "Backend", icon: "solar:server-linear" },
  { label: "AI & Automation", icon: "solar:cpu-linear" },
  { label: "Databases", icon: "solar:database-linear" },
  { label: "Tools & Services", icon: "solar:code-square-linear" },
  { label: "Other", icon: "solar:layers-linear" },
];

const frontendSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Responsive UI",
  "Framer Motion",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "REST APIs",
  "API Integration",
  "React Query",
  "JWT Authentication",
  "Google OAuth",
  "Authentication",
  "CRUD Operations",
];

const aiSkills = [
  "n8n",
  "Python Selenium",
  "AI Chatbot",
  "AI Workflow Automation",
];

const databaseSkills = [
  "MongoDB",
  "MySQL",
  "Firebase",
  "Supabase",
  "Odoo ERP",
  "Enterprise ERP",
];

const toolSkills = ["Postman", "Git & GitHub"];

function getSkillCategory(skill) {
  const name = skill.name;

  if (frontendSkills.includes(name)) return "Frontend";
  if (backendSkills.includes(name)) return "Backend";
  if (aiSkills.includes(name)) return "AI & Automation";
  if (databaseSkills.includes(name)) return "Databases";
  if (toolSkills.includes(name)) return "Tools & Services";

  return "Other";
}

function SkillCard({ skill }) {
  return (
    <article className="group flex min-w-0 items-center gap-3 rounded-2xl border border-border bg-surface p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-border-primary hover:bg-primary-light/30 hover:shadow-[var(--shadow-card-hover)] sm:gap-4 sm:p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light transition-transform duration-300 group-hover:scale-105">
        <Icon
          icon={skill.icon}
          className="h-6 w-6 text-primary"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-bold tracking-[-0.02em] text-text-primary sm:text-base">
          {skill.name}
        </h3>

        <p className="mt-1 truncate text-xs text-text-secondary sm:text-sm">
          {skill.category}
        </p>
      </div>

      <Icon
        icon="solar:arrow-up-right-linear"
        className="h-4 w-4 shrink-0 text-text-secondary opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary group-hover:opacity-100"
        aria-hidden="true"
      />
    </article>
  );
}

function ToolItem({ tool }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-2.5 transition-all duration-300 hover:border-border-primary hover:bg-primary-light">
      <Icon icon={tool.icon} className="h-5 w-5 shrink-0" aria-hidden="true" />

      <span className="whitespace-nowrap text-xs font-semibold text-text-primary sm:text-sm">
        {tool.name}
      </span>
    </div>
  );
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const [showAll, setShowAll] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All Skills") {
      return skillsData.skills;
    }

    return skillsData.skills.filter(
      (skill) => getSkillCategory(skill) === activeCategory,
    );
  }, [activeCategory]);

  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_SKILLS);

  const remainingSkills = filteredSkills.length - INITIAL_SKILLS;

  const selectCategory = (category) => {
    setActiveCategory(category);
    setShowAll(false);
    setMobileFilterOpen(false);
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-8 hidden opacity-60 lg:block">
        <svg
          width="220"
          height="150"
          viewBox="0 0 220 150"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 45H55L82 18H180L205 0"
            stroke="var(--portfolio-border-primary)"
          />
          <path
            d="M0 72H72L98 46H210"
            stroke="var(--portfolio-border-primary)"
          />
          <path
            d="M0 100H48L77 72H165L195 42"
            stroke="var(--portfolio-border-primary)"
          />
          <circle cx="55" cy="45" r="3" fill="var(--portfolio-primary)" />
          <circle cx="82" cy="18" r="3" fill="var(--portfolio-primary)" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-0 top-8 hidden rotate-180 opacity-60 lg:block">
        <svg
          width="220"
          height="150"
          viewBox="0 0 220 150"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 45H55L82 18H180L205 0"
            stroke="var(--portfolio-border-primary)"
          />
          <path
            d="M0 72H72L98 46H210"
            stroke="var(--portfolio-border-primary)"
          />
          <path
            d="M0 100H48L77 72H165L195 42"
            stroke="var(--portfolio-border-primary)"
          />
          <circle cx="55" cy="45" r="3" fill="var(--portfolio-primary)" />
          <circle cx="82" cy="18" r="3" fill="var(--portfolio-primary)" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:gap-5 sm:text-sm">
            <span>{skillsData.number}</span>
            <span className="h-[2px] w-10 bg-primary sm:w-12" />
            <span>{skillsData.eyebrow}</span>
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-[-0.04em] text-text-primary sm:mt-7 sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            {skillsData.title}{" "}
            <span className="bg-gradient-to-r from-[#5525d9] via-[#6d35e8] to-[#2563eb] bg-clip-text text-transparent">
              {skillsData.highlightedTitle}
            </span>
          </h2>

          <div className="mx-auto mt-6 h-[4px] w-28 rounded-full bg-gradient-to-r from-[#5525d9] to-[#6d35e8] sm:mt-7 sm:w-32" />

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-text-secondary sm:mt-7 sm:text-lg sm:leading-8">
            {skillsData.description}
          </p>
        </div>

        {/* Skills explorer */}
        <div className="mt-10 sm:mt-14">
          {/* Filter bar */}
          <div className="mb-7 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-text-primary sm:text-xl">
                Explore My Expertise
              </h3>

              <p className="mt-1 text-xs text-text-secondary sm:text-sm">
                {filteredSkills.length} skills available
              </p>
            </div>

            {/* Mobile filter dropdown */}
            <div className="relative shrink-0 sm:hidden">
              <button
                type="button"
                onClick={() => setMobileFilterOpen((prev) => !prev)}
                aria-expanded={mobileFilterOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 rounded-xl border border-primary bg-primary-light px-3.5 py-2.5 text-xs font-bold text-primary transition-all hover:bg-primary-light/70"
              >
                <Icon icon="solar:filter-linear" className="h-4 w-4" />
                Filters
                <Icon
                  icon={
                    mobileFilterOpen
                      ? "solar:alt-arrow-up-linear"
                      : "solar:alt-arrow-down-linear"
                  }
                  className="h-4 w-4"
                />
              </button>

              {mobileFilterOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close filters"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setMobileFilterOpen(false)}
                  />

                  <div className="absolute right-0 top-full z-50 mt-2 w-[220px] overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-xl">
                    <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-text-secondary">
                      Filter Skills
                    </p>

                    <div className="space-y-1">
                      {categories.map((category) => {
                        const active = activeCategory === category.label;

                        return (
                          <button
                            key={category.label}
                            type="button"
                            onClick={() => selectCategory(category.label)}
                            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-semibold transition-colors ${
                              active
                                ? "bg-primary-light text-primary"
                                : "text-text-secondary hover:bg-background hover:text-text-primary"
                            }`}
                          >
                            <Icon
                              icon={category.icon}
                              className="h-4 w-4 shrink-0"
                            />

                            <span className="flex-1">{category.label}</span>

                            {active && (
                              <Icon
                                icon="solar:check-circle-bold"
                                className="h-4 w-4 text-primary"
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            <span className="hidden rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-text-secondary sm:inline-flex">
              {filteredSkills.length} Skills
            </span>
          </div>

          {/* Desktop filters */}
          <div className="mb-8 hidden flex-wrap gap-2 sm:flex">
            {categories.map((category) => {
              const active = activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => selectCategory(category.label)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                      : "border-border bg-surface text-text-secondary hover:border-border-primary hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  <Icon icon={category.icon} className="h-4 w-4" />

                  {category.label}

                  {active && (
                    <Icon icon="solar:check-circle-bold" className="h-4 w-4" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active category on mobile */}
          <div className="mb-5 flex items-center gap-2 sm:hidden">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-text-secondary">
              Showing: {activeCategory}
            </span>
          </div>

          {/* Skills grid */}
          {filteredSkills.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {visibleSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-surface px-5 py-12 text-center">
              <Icon
                icon="solar:folder-open-linear"
                className="mx-auto h-9 w-9 text-text-secondary"
              />
              <p className="mt-3 text-sm font-semibold text-text-primary">
                No skills found in this category.
              </p>
            </div>
          )}

          {/* Show more / less */}
          {filteredSkills.length > INITIAL_SKILLS && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="group inline-flex items-center gap-2 rounded-full border border-border-primary bg-surface px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:cursor-pointer"
              >
                {showAll ? "Show Less" : "Show All Skills"}

                {!showAll && remainingSkills > 0 && (
                  <span className="rounded-full bg-primary-light px-2 py-0.5 text-xs text-primary group-hover:bg-white/20 group-hover:text-white">
                    +{remainingSkills}
                  </span>
                )}

                <Icon
                  icon={
                    showAll
                      ? "solar:alt-arrow-up-linear"
                      : "solar:alt-arrow-down-linear"
                  }
                  className="h-4 w-4"
                />
              </button>
            </div>
          )}
        </div>

        {/* Tools & Technologies */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-center gap-4 sm:gap-5">
            <span className="hidden h-[2px] w-12 bg-primary sm:block" />

            <div className="flex items-center gap-3">
              <Icon
                icon="solar:code-square-linear"
                className="h-6 w-6 text-primary sm:h-7 sm:w-7"
              />

              <h3 className="text-xl font-bold tracking-[-0.02em] text-text-primary sm:text-2xl">
                {skillsData.toolsTitle}
              </h3>
            </div>

            <span className="hidden h-[2px] w-12 bg-primary sm:block" />
          </div>

          <p className="mx-auto mt-2 max-w-xl text-center text-xs leading-6 text-text-secondary sm:text-sm">
            Technologies and platforms used across my development workflow.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {skillsData.tools.map((tool) => (
              <ToolItem key={tool.name} tool={tool} />
            ))}
          </div>
        </div>

        {/* What I work with */}
        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-border-primary bg-primary-soft px-5 py-6 sm:px-7 sm:py-7 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light sm:h-14 sm:w-14">
                <Icon
                  icon={skillsData.workWith.icon}
                  className="h-7 w-7 text-primary"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-text-primary sm:text-xl">
                  {skillsData.workWith.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-secondary sm:text-base">
                  {skillsData.workWith.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-[10px] font-bold tracking-[0.2em] text-primary sm:mt-10 sm:gap-4 sm:text-sm">
          <span className="h-[2px] w-8 bg-primary sm:w-12" />

          {skillsData.footerText.map((item, index) => (
            <span key={item} className="flex items-center gap-3 sm:gap-4">
              <span>{item}</span>

              {index !== skillsData.footerText.length - 1 && (
                <span className="text-primary">•</span>
              )}
            </span>
          ))}

          <span className="h-[2px] w-8 bg-primary sm:w-12" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
