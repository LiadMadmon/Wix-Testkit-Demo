import React, { useState } from "react";
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from "@material-ui/core";
import { generateACoupon } from "../../utils";
import { useEffect } from "react";

type CreateCouponModalProps = {
  onSuccess({ coupon }: { coupon: string }): void;
  isModalOpened: boolean;
};

export const CreateCouponModal = ({
  onSuccess,
  isModalOpened
}: CreateCouponModalProps) => {
  const handleSaveClicked = () => {
    const { coupon } = generateACoupon();
    onSuccess({ coupon });
  };

  const handleCloseModal = () => {};

  return (
    <Dialog
      open={isModalOpened}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Create New Coupon"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          A new 50% discount coupon will be saved and you'll be able to send it to customers.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} color="primary">
          disagree
        </Button>
        <Button 
          data-testid="save-coupon-primary-button" 
          onClick={handleSaveClicked} 
          color="primary" 
          autoFocus
        >
          Save
        </Button> 
      </DialogActions>
    </Dialog>
  );
};
