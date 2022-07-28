import { MyLabel, MyLabelProps } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';


export default {
    title: 'Example/MyLabel',
    component: MyLabel,
    argTypes: {
        label: { control: 'text' },
        size: { control: {
                type: 'radio',
                options: ['normal', 'h1', 'h2', 'h3']
            } 
        },
        allCaps: { control: 'boolean' },
        color: { control: {
            type: 'radio',	
            options: ['primary', 'secondary', 'tertiary']
        } },
        fontColor: { control: 'color' }
    }
}as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args: MyLabelProps) => <MyLabel {...args}/>;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic',
    allCaps: false,
    size: 'normal',
    color: 'primary',
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    label: 'All Caps',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    label: 'Custom Font Color',
    fontColor: '#5517ac'
}
