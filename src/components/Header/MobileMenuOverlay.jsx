import NavLinks from "../nav/NavLinks";

function MobileMenuOverlay({ onClose }) {
  return (
    <div className="w-full h-full flex justify-center pt-24  overflow-y-auto">
      <NavLinks
        className="flex flex-col items-center gap-8 text-xl font-semibold"
        onClickLink={onClose}
      />
    </div>
  );
}

export default MobileMenuOverlay;
