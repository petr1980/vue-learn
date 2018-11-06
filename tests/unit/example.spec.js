import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent.vue'

describe('MyName test', () => {
  it('Displays my name when I write it', () => {
    let wrapper = mount(TestComponent, {
      propsData: {
        myName: 'Peter'
      }
    })
    expect(wrapper.props().myName).to.equal('Peter')
  })

  it('Displays my name when I write it', () => {
    let wrapper = mount(TestComponent)
    const input = wrapper.find('input')
    input.element.value = 'Stefan'
    input.trigger('input')
    expect(wrapper.vm.$data.newName).to.equal('Stefan')
  })
})
