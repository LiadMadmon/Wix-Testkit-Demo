import React from 'react';
import { render } from '@testing-library/react';
import { CreateCouponModalTestkit } from './CreateCouponModal.testkit';
import { CreateCouponModal } from './CreateCouponModal';

describe('CreateCouponModal', () => {
  const createCouponModalTestkit = new CreateCouponModalTestkit();
  createCouponModalTestkit.beforeAndAfter();
  
  it('should call coupon success callback when coupon generated successfully', async () => {    
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
