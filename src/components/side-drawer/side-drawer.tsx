import { h, State, Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'drc-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @State() showContactInfo = false;
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  onCloseDrawer() {
    this.opened = false;
  }
  onContentChange(content: string) {
    this.showContactInfo = content === 'con';
  }
  @Method()
  open() {
    this.opened = true;
  }
  render() {
    let mainContent = <slot />;
    if (this.showContactInfo) {
      mainContent = (
        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>You can reach us via Phone & Email</p>
          <ul>
            <li>Phone: 8990878766</li>
            <li>
              Email <a href="mailto:xyz@something.com">xyz@something.com</a>
            </li>
          </ul>
        </div>
      );
    }

    return [
      <div id="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
      <button onClick={this.open.bind(this)}>Open Side Menu</button>,
      <aside>
        <header>
          <h1>{this.title}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button class={!this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'nav')}>
            Navigation
          </button>
          <button class={this.showContactInfo ? 'active' : ''} onClick={this.onContentChange.bind(this, 'con')}>
            Contact US
          </button>
        </section>
        <main>{mainContent}</main>
      </aside>,
    ];
  }
}
