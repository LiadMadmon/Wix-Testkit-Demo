import React, { useState } from "react";
import { Modal, CustomModalLayout } from "wix-style-react";
import { generateACoupon } from "../../../utils";

type CreateCouponModalProps = {
  onSuccess({ coupon }: { coupon: string }): void;
  isModalOpened: boolean;
};

export const CreateCouponModal = ({
  onSuccess,
  isModalOpened
}: CreateCouponModalProps) => {
  const handleRequestClose = () => {
    const coupon = generateACoupon();
    onSuccess({ coupon });
  };

  const handleCloseButtonClick = () => {};

  return (
    <Modal isOpen={isModalOpened} onRequestClose={handleRequestClose}>
      <CustomModalLayout
        primaryButtonText="Create"
        secondaryButtonText="Cancel"
        onCloseButtonClick={handleCloseButtonClick}
        primaryButtonOnClick={handleRequestClose}
        secondaryButtonOnClick={handleCloseButtonClick}
        title="Create a coupon"
        width="600px"
      >
        hello world
      </CustomModalLayout>
    </Modal>
  );
};
