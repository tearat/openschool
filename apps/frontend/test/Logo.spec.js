import { mount } from '@vue/test-utils'
import Navigator from '@/components/Navigator.vue'

describe('Navigator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Navigator)
    expect(wrapper.vm).toBeTruthy()
  })
})
