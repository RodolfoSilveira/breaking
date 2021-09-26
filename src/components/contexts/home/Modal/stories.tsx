import { Story, Meta } from '@storybook/react/types-6-0'
import Modal, { ModalProps } from './Modal'

export default {
  title: 'Design System/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Modal',
      },
    },

  },
} as Meta

const Template: Story<ModalProps> = (args) => <Modal {...args} />

export const DefaultModal = Template.bind({});

DefaultModal.args = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closedModal: () => { },
  character: {
    name: 'Walter White',
    nickname: 'Heisenberg',
    occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
    portrayed: 'Bryan Cranston',
    status: 'Presumed dead',
    img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
    char_id: 1,
    appearance: [1, 2, 3, 4, 5],
    better_call_saul_appearance: [],
    birthday: '09-07-1958',
    category: 'Breaking Bad'
  }
}
