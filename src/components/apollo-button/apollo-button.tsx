import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'apollo-button',
  styleUrl: 'apollo-button.css',
  shadow: true,
})
export class ApolloButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {/* Slot */}
        {this.text}
      </button>
    );
  }

}
