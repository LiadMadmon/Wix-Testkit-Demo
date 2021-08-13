import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { displayCoupon } from '../../utils';
import { CreateCouponModal } from '../../../Coupons/components/CreateCouponModal/CreateCouponModal';

export const CreateNewCouponPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCouponGeneratedSuccess = (coupon: string) => {
    displayCoupon({ coupon });
    setIsModalOpen(false);
  }

  return (
    <>
      <Button 
        onClick={() => setIsModalOpen(true)} 
        color="primary"
        size="small"
        data-testid="open-modal-button"
      >
        Create a new coupon
      </Button>
      <CreateCouponModal 
        isModalOpen={isModalOpen} 
        handleCouponGeneratedSuccess={handleCouponGeneratedSuccess}
        handleClose={() => setIsModalOpen(false)}
      />
    </>
  ); 
}
