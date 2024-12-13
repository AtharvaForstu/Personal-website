export default function DesktopMenu() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-center space-x-8">
        {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group"
          >
            <span className="text-white/90 hover:text-purple-500 transition-colors">
              {item}
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
          </a>
        ))}
      </div>
    </div>
  );
}