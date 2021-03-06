import { screen } from '@testing-library/react';
import * as utilsModule from '../../utils';
import Chance from 'chance';

const random = new Chance();

export class CreateCouponModalTestkit {
  private _spies = {
    generateACouponSpy: jest.spyOn(utilsModule, 'generateACoupon'),
  }

  
  private resetSpies = () => {
    this._spies.generateACouponSpy.mockClear();
  }
  
  public beforeAndAfter = () => {
    afterEach(() => {
      this.resetSpies(); 
    });
  }
  
  private findSaveButton = async (): Promise<HTMLElement> => {
    return screen.findByTestId('save-coupon-primary-button');
  }

  public withSaveSuccess = (): { coupon: string } => {
    const coupon: string = random.guid();
    this._spies.generateACouponSpy.mockReturnValue({ coupon });
    return { coupon };
  }

  public clickSaveButton = async (): Promise<void> => {
    (await this.findSaveButton()).click();
  }
}
