import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class YankButton extends Component {
  @tracked isYankModalOpen = false;
  @tracked yankMessage = '';

  get tagName() {
    return '';
  }

  get localClass() {
    if (this.args.tan) {
      return 'tan-button';
    }

    return 'yellow-button';
  }

  @action
  openYankModal() {
    this.isYankModalOpen = true;
  }

  @action
  closeYankModal() {
    this.isYankModalOpen = false;
    this.yankMessage = '';
  }

  @action
  updateYankMessage(event) {
    this.yankMessage = event.target.value;
  }

  @action
  async submitYank(event) {
    event.preventDefault();
    await this.args.version.yankTask.perform(this.yankMessage);
    this.closeYankModal();
  }
}
