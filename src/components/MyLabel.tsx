import './mylabel.css';

export interface MyLabelProps {
    /**
     * The text to display in the label
     */
    label: string;
    /**
     * The size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Whether the label should be all caps
     */
    allCaps?: boolean;
    /**
     * The color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * The color of the font
     */
    fontColor?: string;
}

export const MyLabel = ( {label = 'Basic', size = 'normal', allCaps = false, color = 'primary', fontColor}: MyLabelProps) => (
    <span
        className={`label ${size} ${color && `text-${color}`}`}
        style={{textTransform: allCaps ? 'uppercase' : 'none',
            color: fontColor ? fontColor : ''
        }}
    >
        {label}
    </span>
)
