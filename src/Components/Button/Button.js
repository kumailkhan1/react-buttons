
import classes from './Button.module.css';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
const Button = (
    {
        children,
        variant,
        disableShadow,
        disabled,
        startIcon,
        endIcon,
        size,
        color
    }
) => (
    <button className=
        {`
            ${classes.Button} 
            ${variant === 'outline' && classes.Outline}
            ${variant === 'text' && classes.Text}
            ${disableShadow && classes.DisableShadow}
            ${disabled && classes.TextDisabled}
            ${(startIcon || endIcon) && classes.Icon}
            ${size === 'sm' && classes.Small}
            ${size === 'md' && classes.Medium}
            ${size === 'lg' && classes.Large}
            ${color === 'default' ? classes.Default :
                color === 'primary' ? classes.Primary :
                    color === 'secondary' ? classes.Secondary :
                        color === 'danger' ? classes.Danger :''
            }
          
        `}
        disabled={disabled}

    >
        <span>
            {

                startIcon === 'local_grocery_store' ? <MdOutlineLocalGroceryStore color='white' /> : ''
            }
        </span>
        {children}
        <span>
            {

                endIcon === 'local_grocery_store' ? <MdOutlineLocalGroceryStore color='white' /> : ''
            }
        </span>

    </button>
);

export default Button;
