import { newE2EPage } from '@stencil/core/testing';

describe('apollo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<apollo-button></apollo-button>');

    const element = await page.find('apollo-button');
    expect(element).toHaveClass('hydrated');
  });
});
