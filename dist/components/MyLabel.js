import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export const MyLabel = ({ label = 'Basic', size = 'normal', allCaps = false, color = 'primary', fontColor }) => (_jsx("span", { className: `label ${size} ${color && `text-${color}`}`, style: { textTransform: allCaps ? 'uppercase' : 'none',
        color: fontColor ? fontColor : ''
    }, children: label }));
