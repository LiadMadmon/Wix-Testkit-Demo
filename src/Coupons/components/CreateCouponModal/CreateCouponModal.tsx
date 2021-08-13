import React from "react";
import { 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle 
} from "@material-ui/core";
import { generateACoupon } from "../../utils";

type CreateCouponModalProps = {
  handleCouponGeneratedSuccess: (coupon: string) => void;
  handleClose(): void;
  isModalOpen: boolean;
};

export const CreateCouponModal = ({
  handleCouponGeneratedSuccess,
  handleClose,
  isModalOpen,
}: CreateCouponModalProps) => {
  const handleSaveClicked = (): void => {
    const { coupon } = generateACoupon();
    handleCouponGeneratedSuccess(coupon);
  };
  
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleClose}
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
        <Button onClick={handleClose} color="primary">
          Cancel
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
