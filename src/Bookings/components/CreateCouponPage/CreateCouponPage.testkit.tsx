import { screen } from '@testing-library/react';
import * as utilsModule from '../../utils';
import Chance from 'chance';

const random = new Chance();

export class CreateCouponPageTestkit {
  private _spies = {
    displayCouponSpy: jest.spyOn(utilsModule, 'displayCoupon'),
  }

  
  private resetSpies = () => {
    this._spies.displayCouponSpy.mockClear();
  }

  private findOpenModalButton = async (): Promise<HTMLElement> => {
    return screen.findByTestId('open-modal-button');
  }
  
  public beforeAndAfter = () => {
    afterEach(() => {
      this.resetSpies(); 
    });
  }
  
  public get displayedCoupon(): string  {
    const displayCouponFirstCallParams = this._spies.displayCouponSpy.mock.calls[0];
    const displayCouponFirstParam = displayCouponFirstCallParams[0];
    return displayCouponFirstParam.coupon;
  }

  public clickOpenModalButton = async (): Promise<void> => {
    (await this.findOpenModalButton()).click();
  }
}
