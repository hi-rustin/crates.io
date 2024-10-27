import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Modal extends Component {
  @action
  onKeyDown(event) {
    if (event.key === 'Escape' && typeof this.args.close === 'function') {
      this.args.close();
    }
  }

  @action
  closeModal() {
    if (typeof this.args.close === 'function') {
      this.args.close();
    }
  }
}

