import { Component, h, Prop, Event, EventEmitter, Watch, State, getAssetPath } from '@stencil/core';

@Component({
  tag: 'apollo-modal',
  styleUrl: 'apollo-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ApolloModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop() isopen: boolean;
  @Prop() buttons: string;
  @Prop() closeIcon = 'x.svg';

  //State for our buttons array
  @State() _buttons: Array<any>;

  //Watch for data
  @Watch('buttons')
  objectDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._buttons = JSON.parse(newValue);
    } else {
      this._buttons = newValue;
    }
  }

  // Before the components loaded, we then convert the buttons string to an array
  componentWillLoad() {
    this.objectDataWatcher(this.buttons);
  }

  // Events
  @Event() private action: EventEmitter;

  // Functions
  private handleCancel = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel} />
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {this._buttons.map((button, index) => (
              <apollo-button onClick={index === 0 ? this.handleAction : this.handleCancel} text={button.text} appearance={index === 0 && this.appearance} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
