import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps } from './Card'

export default {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'Card',
      },
    },

  },
} as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});

DefaultCard.args = {
  name: 'Group Leader',
  nickname: 'Counselor',
  img: "https://vignette.wikia.nocookie.net/breakingbad/images/8/81/Group_Leader_Brown_Shirt_-_Kafkaesque.png/revision/latest?cb=20131025095333",
}
