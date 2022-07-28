/// <reference types="react" />
import { MyLabelProps } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
export default _default;
export declare const Basic: ComponentStory<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
export declare const AllCaps: ComponentStory<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
export declare const Secondary: ComponentStory<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
export declare const Tertiary: ComponentStory<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
export declare const CustomFontColor: ComponentStory<({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element>;
