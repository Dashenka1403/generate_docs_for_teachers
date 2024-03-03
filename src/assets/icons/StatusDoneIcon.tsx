import {FC} from 'react'
import { IconProps } from '../../types/commonTypes';


export const StatusDoneIcon: FC<IconProps> = props => {

    const {width = 24, height = 24, color = 'green', className, onClick} = props;
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" className={className} onClick={onClick} fill={color} xmlns="http://www.w3.org/2000/svg">
<path d="M19.5479 7.26653L20.1812 6.49258L19.4072 5.85934L17.8593 4.59286L17.0853 3.95963L16.4521 4.73358L8.66618 14.2497L6.2 12.4001L5.4 11.8001L4.8 12.6001L3.6 14.2001L3 15.0001L3.8 15.6001L8.56691 19.1752L9.33382 19.7504L9.94087 19.0085L19.5479 7.26653Z" stroke="#222222" strokeWidth="2"/>
</svg>
    )

}

