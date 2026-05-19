interface ContactTabsProps {
  activeTab: "general" | "project";

  setActiveTab: (tab: "general" | "project") => void;
}

export default function ContactTabs({
  activeTab,

  setActiveTab,
}: ContactTabsProps) {
  return (
    <div
      className="
        inline-flex

        rounded-[18px]

        border
        border-purple-500/20

        bg-[rgba(15,23,42,0.6)]

        p-1.5

        backdrop-blur-xl

        light:border-black/10
        light:bg-white
      "
    >
      {/* GENERAL */}
      <button
        onClick={() => setActiveTab("general")}
        className={`
          rounded-[14px]

          px-5
          py-3

          text-[14px]
          font-semibold

          transition-all
          duration-300

          ${
            activeTab === "general"
              ? `
                bg-gradient-to-r
                from-purple-500
                to-blue-500

                text-white

                shadow-[0_0_25px_rgba(168,85,247,0.3)]
              `
              : `
                text-white/60

                hover:text-white

                light:text-black/50
                light:hover:text-black
              `
          }
        `}
      >
        General Query
      </button>

      {/* PROJECT */}
      <button
        onClick={() => setActiveTab("project")}
        className={`
          rounded-[14px]

          px-5
          py-3

          text-[14px]
          font-semibold

          transition-all
          duration-300

          ${
            activeTab === "project"
              ? `
                bg-gradient-to-r
                from-purple-500
                to-blue-500

                text-white

                shadow-[0_0_25px_rgba(168,85,247,0.3)]
              `
              : `
                text-white/60

                hover:text-white

                light:text-black/50
                light:hover:text-black
              `
          }
        `}
      >
        Project Inquiry
      </button>
    </div>
  );
}
