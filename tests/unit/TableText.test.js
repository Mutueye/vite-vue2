/**
 * @jest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils';
import TableText from '../../src/components/AttributeTable/TableText.vue';

describe('TableText.vue', () => {
  it('渲染props.value即通过测试', () => {
    const value = 'new value';
    const wrapper = shallowMount(TableText, {
      propsData: { value },
    });
    expect(wrapper.text()).toMatch(value);
  });
});
