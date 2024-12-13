interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-500 transition-all"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}