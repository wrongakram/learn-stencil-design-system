import { newE2EPage } from '@stencil/core/testing';

describe('apollo-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apollo-modal></apollo-modal>');

    const element = await page.find('apollo-modal');
    expect(element).toHaveClass('hydrated');
  });
});
