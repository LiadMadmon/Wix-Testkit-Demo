import React from 'react';
import { render } from '@testing-library/react';
import { CreateCouponModalTestkit } from './CreateCouponModal.testkit';
import { CreateCouponModal } from './CreateCouponModal';

describe('Create New Coupon Modal', () => {
  const createCouponModalTestkit = new CreateCouponModalTestkit();
  createCouponModalTestkit.beforeAndAfter();
  
  it('should call save coupon when save button clicked', async () => {    
    const handleCouponGeneratedSuccessMock = jest.fn();
    const { coupon } = createCouponModalTestkit.withSaveSuccess();
    
    render(
      <CreateCouponModal 
        handleClose={() => {}} 
        handleCouponGeneratedSuccess={handleCouponGeneratedSuccessMock} 
        isModalOpen={true} 
      />
    );
  
    await createCouponModalTestkit.clickSaveButton();
    
    expect(handleCouponGeneratedSuccessMock).toHaveBeenCalledWith(coupon);
  });
});
