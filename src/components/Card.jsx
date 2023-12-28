const Card = ({ icon, title, content, isActive }) => {
  return (
    <>
      <div
        className={`p-[1px] rounded-[8px] flex justify-center items-center mb-16 sm:mb-20 lg:mb-24 transition-all ${
          isActive
            ? `bg-gradient-to-bl from-[#00D6C4] to-[#0E538C] translate-y-8 shadow-activeCardShadow`
            : "bg-cardBg shadow-cardShadow"
        }`}
      >
        <div className="w-full bg-cardBg px-4 py-4 sm:py-6 lg:py-9 rounded-[6px] gap-5 flex flex-col">
          <div
            className={`rounded-full w-[58px] h-[58px] p-[1px] transition-all ${
              isActive
                ? "bg-gradient-to-bl from-[#00D6C4] to-[#0E538C]"
                : "bg-gradient-to-bl from-[#F36380] to-[#57007B]"
            } `}
          >
            <div className="w-full h-full bg-cardBg rounded-full">
              {/* Your image goes here */}
            </div>
          </div>

          <span
            className={`bg-clip-text transition-all ${
              isActive
                ? `text-transparent bg-gradient-to-bl from-[#00D6C4] to-[#0E538C]`
                : "text-[#2D3748] line-clamp-1"
            }`}
          >
            <p className="font-semibold text-lg sm:text-xl">{title}</p>
          </span>

          <p className="font-normal text-xs sm:text-sm text-[#718096]">
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  icon: "",
  title: "Card Title",
  content: "Card Content",
  isActive: false,
};

export default Card;
