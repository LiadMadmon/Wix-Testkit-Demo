# Coupon Modal Testkit

## Getting Started
```
git clone git@github.com:LiadMadmon/Wix-Testkit-Demo.git
cd Wix-Testkit-Demo
yarn
yarn start
```

## Source
[Testkit Source Code](src/Coupons/components/CreateCouponModal/CreateCouponModal.testkit.ts)

## API
Create a new testkit instance for a relevant spec suite, with the following API:

| Method   | Return Type | Trigger Instructions |  Description |
|----------|:------|:---:|---------------|
| beforeAndAfter |  void | (Mandatory) Trigger once between the describe and first it| Setup function for mocks spies and environmental preparations |
| withSaveSuccess |  { coupon: string } | In each test before you click the save button | Mocks a successful coupon generation |
| clickSaveButton |  Promise(void) | Whenever you want to click on Save button | Performs a save operation. |

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
