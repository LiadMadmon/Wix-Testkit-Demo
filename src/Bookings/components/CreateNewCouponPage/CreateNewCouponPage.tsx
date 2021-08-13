import React, { useState } from 'react';
import { Button, Card, CardContent } from '@material-ui/core';
import { displayCoupon } from '../../utils';
import { CreateCouponModal } from '../../../Coupons/components/CreateCouponModal/CreateCouponModal';

export const CreateNewCouponPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCouponGeneratedSuccess = (coupon: string) => {
    displayCoupon({ coupon });
    setIsModalOpen(false);
  }

  return (
    <Card>
      <CardContent>
        <Button 
          onClick={() => setIsModalOpen(true)} 
          size="small"
        >
          Create a new coupon
        </Button>
        <CreateCouponModal 
          isModalOpen={isModalOpen} 
          handleCouponGeneratedSuccess={handleCouponGeneratedSuccess}
          handleClose={() => setIsModalOpen(false)}
        />
      </CardContent>
    </Card>
  ) 
}
