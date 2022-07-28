import{j as n}from"./jsx-runtime.80372e63.js";import"./iframe.19a7eb15.js";const e=({label:r="Basic",size:t="normal",allCaps:s=!1,color:l="primary",fontColor:a})=>n("span",{className:`label ${t} ${l&&`text-${l}`}`,style:{textTransform:s?"uppercase":"none",color:a||""},children:r});try{e.displayName="MyLabel",e.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"Basic"},description:"The text to display in the label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"The size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Whether the label should be all caps",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"The color of the label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"The color of the font",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:e.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const u={parameters:{storySource:{source:`import { MyLabel, MyLabelProps } from "../../components/MyLabel";\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
\r
\r
export default {\r
    title: 'Example/MyLabel',\r
    component: MyLabel,\r
    argTypes: {\r
        label: { control: 'text' },\r
        size: { control: {\r
                type: 'radio',\r
                options: ['normal', 'h1', 'h2', 'h3']\r
            } \r
        },\r
        allCaps: { control: 'boolean' },\r
        color: { control: {\r
            type: 'radio',	\r
            options: ['primary', 'secondary', 'tertiary']\r
        } },\r
        fontColor: { control: 'color' }\r
    }\r
}as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args: MyLabelProps) => <MyLabel {...args}/>;\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
    label: 'Basic',\r
    allCaps: false,\r
    size: 'normal',\r
    color: 'primary',\r
}\r
\r
export const AllCaps = Template.bind({});\r
AllCaps.args = {\r
    label: 'All Caps',\r
    allCaps: true\r
}\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
    label: 'Secondary',\r
    color: 'secondary'\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
    label: 'Tertiary',\r
    color: 'tertiary'\r
}\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
    label: 'Custom Font Color',\r
    fontColor: '#5517ac'\r
}\r
`,locationsMap:{basic:{startLoc:{col:49,line:24},endLoc:{col:93,line:24},startBody:{col:49,line:24},endBody:{col:93,line:24}},"all-caps":{startLoc:{col:49,line:24},endLoc:{col:93,line:24},startBody:{col:49,line:24},endBody:{col:93,line:24}},secondary:{startLoc:{col:49,line:24},endLoc:{col:93,line:24},startBody:{col:49,line:24},endBody:{col:93,line:24}},tertiary:{startLoc:{col:49,line:24},endLoc:{col:93,line:24},startBody:{col:49,line:24},endBody:{col:93,line:24}},"custom-font-color":{startLoc:{col:49,line:24},endLoc:{col:93,line:24},startBody:{col:49,line:24},endBody:{col:93,line:24}}}}},title:"Example/MyLabel",component:e,argTypes:{label:{control:"text"},size:{control:{type:"radio",options:["normal","h1","h2","h3"]}},allCaps:{control:"boolean"},color:{control:{type:"radio",options:["primary","secondary","tertiary"]}},fontColor:{control:"color"}}},o=r=>n(e,{...r}),c=o.bind({});c.args={label:"Basic",allCaps:!1,size:"normal",color:"primary"};const i=o.bind({});i.args={label:"All Caps",allCaps:!0};const p=o.bind({});p.args={label:"Secondary",color:"secondary"};const y=o.bind({});y.args={label:"Tertiary",color:"tertiary"};const d=o.bind({});d.args={label:"Custom Font Color",fontColor:"#5517ac"};const C=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{i as AllCaps,c as Basic,d as CustomFontColor,p as Secondary,y as Tertiary,C as __namedExportsOrder,u as default};
//# sourceMappingURL=MyLabel.stories.dcd5fe6d.js.map
