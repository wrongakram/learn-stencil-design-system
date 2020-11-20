import { newSpecPage } from '@stencil/core/testing';
import { ApolloButton } from '../apollo-button';

describe('apollo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApolloButton],
      html: `<apollo-button></apollo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <apollo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </apollo-button>
    `);
  });
});
