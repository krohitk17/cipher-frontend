import { Modal } from "react-overlays";

export default function Overlay({
  children,
  show,
  onHide,
  className,
}: {
  children: any;
  show: boolean;
  onHide: () => void;
  className?: string;
}) {
  return (
    <Modal
      className="bg-gray-200 rounded-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      show={show}
      onHide={onHide}
      renderBackdrop={(props) => (
        <div className="fixed inset-0 bg-black opacity-50" {...props} />
      )}
    >
      <div className={className}>{children}</div>
    </Modal>
  );
}
