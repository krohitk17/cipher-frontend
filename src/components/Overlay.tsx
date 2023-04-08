import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function Overlay({
  children,
  isOpen,
  onClose,
  className,
  title,
}: {
  children: any;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  title?: string;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent className="px-5 pb-5">
        <ModalHeader>{title}</ModalHeader>
        <div className={className}>{children}</div>
      </ModalContent>
    </Modal>
  );
}
