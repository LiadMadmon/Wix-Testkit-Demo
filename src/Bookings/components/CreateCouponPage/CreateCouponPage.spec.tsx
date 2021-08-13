import { CreateCouponModalTestkit } from '../../../Coupons/components/CreateCouponModal/CreateCouponModal.testkit';
import { render } from '@testing-library/react';
import { CreateNewCouponPage } from './CreateCouponPage';
import { CreateCouponPageTestkit } from './CreateCouponPage.testkit';

describe('CreateCouponPage', () => {
  const createCouponModalTestkit = new CreateCouponModalTestkit();
  createCouponModalTestkit.beforeAndAfter();
  const createCouponPageTestkit = new CreateCouponPageTestkit();
  createCouponPageTestkit.beforeAndAfter();

  it('should call displayCoupon when coupon was generated successfully', async () => {
    const { coupon } = createCouponModalTestkit.withSaveSuccess();

    render(<CreateNewCouponPage />);

    await createCouponPageTestkit.clickOpenModalButton();
    await createCouponModalTestkit.clickSaveButton();

    expect(createCouponPageTestkit.displayedCoupon).toEqual(coupon);
  });
});
