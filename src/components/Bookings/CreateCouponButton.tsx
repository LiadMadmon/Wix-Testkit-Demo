import { Modal } from "wix-style-react";
import { generateACoupon } from "./utils";

type CreateCouponModalProps = {
  onSuccess(coupon: string): void;
  isModalOpened: boolean;
};

export const CreateCouponModal = ({
  onSuccess,
  isModalOpened
}: CreateCouponModalProps) => {
  const handleRequestClose = () => {
    const coupon = generateACoupon();
    onSuccess(coupon);
  };

  return (
    <Modal isOpen={isModalOpened} onRequestClose={handleRequestClose}>
      {}
    </Modal>
  );
};
