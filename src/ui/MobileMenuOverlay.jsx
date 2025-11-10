import NavLinks from "./NavLinks";

function MobileMenuOverlay({ onClose }) {
  return (
    <div className="w-full h-full bg-secondary-900 flex justify-center pt-24 overflow-y-auto z-50">
      <NavLinks
        className="flex flex-col items-center gap-8 text-xl font-semibold"
        onClickLink={onClose}
      />
    </div>
  );
}

export default MobileMenuOverlay;
