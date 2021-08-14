# Coupon Coupon Modal Testkit

## Getting Started
```
git clone git@github.com:LiadMadmon/Wix-Testkit-Demo.git
cd Wix-Testkit-Demo
yarn
yarn start
```

## Source
[Testkit Source Code](src/Coupons/components/CreateCouponModal/CreateCouponModal.testkit.ts)

## API Notes
Create a new testkit instance for a relevant spec suite,
The single testkit can serve the complete suite. 
Mocks, spies, test setup is encapsulated and should be trigerred via the `beforeandafter` method, it's a mandatory phase, take a look at the exmaple below.

## Example
```typescript
import { CreateCouponModalTestkit } from 'coupons';
import { render } from '@testing-library/react';
import { MyComponent, openCouponModal } from './MyComponent';
import { CreateCouponPageTestkit } from './CreateCouponPage.testkit';

describe('CreateCouponPage', () => {
  const createCouponModalTestkit = new CreateCouponModalTestkit();
  createCouponModalTestkit.beforeAndAfter();

  it('should call displayCoupon when coupon was generated successfully', async () => {
    const { coupon } = createCouponModalTestkit.withSaveSuccess();

    render(<MyComponent />);

    await openCouponModal();
    await createCouponModalTestkit.clickSaveButton();

    expect(createCouponPageTestkit.displayedCoupon).toEqual(coupon);
  });
});
```
