import { css, html, TemplateResult } from 'lit';
import { property } from 'lit/decorators';
import { RapidElement } from '../RapidElement';

export class ContactUrn extends RapidElement {
  @property({ type: String })
  urn: string;

  @property({ type: Number })
  size: number;

  static get styles() {
    return css`
      .urn {
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.04) inset;
        padding: 3px;
        border: 1px solid #ddd;
        border-radius: 18rem;
        background: #eee;
        margin-right: 0.2em;
      }
    `;
  }

  public render(): TemplateResult {
    const scheme = this.urn.split(':')[0];
    return html`
      <img
        class="urn"
        width="${this.size}em"
        height="${this.size}em"
        src="${this.prefix ||
        (window as any).static_url ||
        '/static/'}img/schemes/${scheme}.svg"
      />
    `;
  }
}
