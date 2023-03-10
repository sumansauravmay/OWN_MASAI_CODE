import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'components/Navbar',
  component: Navbar,
  
  argTypes: {
    backgroundColor: { control: 'color' },
    color:{control:"color"},
  },
};


const Template = (args) => <Navbar {...args} />;

export const Gray = Template.bind({});

Gray.args = {
  links:["Home","About","Contact"],
  logo:"https://lh3.googleusercontent.com/ogw/AOh-ky2tScHzoVefBBzujx0dX5snq654dVrVawQyjwGD=s32-c-mo",
  color:"white",
  backgroundColor:"blue"
};

export const Red = Template.bind({});
Red.args = {
    links:["Home","About","Contact"],
    logo:"https://lh3.googleusercontent.com/ogw/AOh-ky2tScHzoVefBBzujx0dX5snq654dVrVawQyjwGD=s32-c-mo",
    color:"white",
    backgroundColor:"red"
};

export const Green = Template.bind({});
Green.args = {
    links:["Home","About","Contact"],
    logo:"https://lh3.googleusercontent.com/ogw/AOh-ky2tScHzoVefBBzujx0dX5snq654dVrVawQyjwGD=s32-c-mo",
    color:"white",
    backgroundColor:"green"
};


