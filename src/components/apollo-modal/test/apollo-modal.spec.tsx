import { newSpecPage } from '@stencil/core/testing';
import { ApolloModal } from '../apollo-modal';

describe('apollo-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApolloModal],
      html: `<apollo-modal></apollo-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <apollo-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apollo-modal>
    `);
  });
});
