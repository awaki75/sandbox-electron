import { mount } from '@vue/test-utils';
import app from './app.vue';

describe('app.vue', () => {
  const wrapper = mount<app & { counter: number; message: string }>(app);

  it('shows "Hello, world."', () => {
    expect(wrapper.text()).toContain('Hello, world.');
  });

  it('increments when button is clicked', () => {
    expect(wrapper.text()).toContain('counter: 0');
    wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('counter: 1');
  });

  it('shows message when message is entered', () => {
    expect(wrapper.text()).toContain('message: ""');
    wrapper.find('input').setValue('abc');
    expect(wrapper.text()).toContain('message: "abc"');
  });
});
