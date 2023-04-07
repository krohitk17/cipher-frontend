import { Modal, ModalContent, ModalHeader } from "@chakra-ui/react";

export default function Overlay({
  children,
  show,
  onClose,
  className,
  title,
}: {
  children: any;
  show: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
}) {
  return (
    <Modal isOpen={show} onClose={onClose} isCentered>
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <div className={className}>{children}</div>
      </ModalContent>
    </Modal>
  );
}
