import GlassCard from "../../components/ui/GlassCard";

interface WhyWorkCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

function WhyWorkCard({ id, title, description, icon: Icon }: WhyWorkCardProps) {
  return (
    <GlassCard
      className="
        group

        relative

        overflow-hidden

        rounded-[28px]

        border
        border-white/[0.06]

     

        p-6

        backdrop-blur-2xl

        smooth-transition

        hover:-translate-y-[5px]
        hover:border-purple-500/20
        hover:shadow-[0_0_45px_rgba(124,58,237,0.14)]

        light:border-black/10
        light:bg-white/80
      "
    >
      {/* FLOATING NUMBER */}
      <div
        className="
          pointer-events-none

          absolute

          right-5
          top-3

          text-[90px]
          font-black
          leading-none

          text-purple-500/[0.05]

          smooth-transition

          group-hover:scale-[1.05]

          light:text-black/[0.04]
        "
      >
        {id}
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* ICON */}
        <div
          className="
            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-[18px]

            border
            border-purple-500/20

           

            shadow-[0_0_30px_rgba(124,58,237,0.16)]

            smooth-transition

            group-hover:scale-[1.06]

            light:border-black/10
            light:bg-white
          "
        >
          <Icon size={22} className="text-white light:text-black" />
        </div>

        {/* TITLE */}
        <h3
          className="
            mt-6

            text-[22px]
            font-bold

            tracking-[-0.6px]

            text-white

            smooth-transition

            group-hover:text-purple-300

            light:text-black
            light:group-hover:text-purple-600
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4

            text-[15px]
            leading-7

            text-textSecondary

            smooth-transition

            group-hover:text-[#dbe3f7]

            light:text-black/65
          "
        >
          {description}
        </p>
      </div>
    </GlassCard>
  );
}

export default WhyWorkCard;
