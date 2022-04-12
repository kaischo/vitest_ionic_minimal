import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ExploreContainer from '@/components/ExploreContainer.vue';

describe('ExploreContainer.vue', () => {
  it('renders ExploreContainer', () => {
    const wrapper = mount(ExploreContainer);

    expect(wrapper.text()).toMatch('Explore UI Components');
  });
});
