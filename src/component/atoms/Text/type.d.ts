export interface Types {
    textType: 'title' | 'subTitle' | 'bodyText' | 'subBodyText' | 'explain';
    target: '_blank' | '_self' | '_parent' | '_top';
    position: 'left' | 'right';
}

export interface Props<T> {
    text: any;
    textType?: Types['textType'];
    href?: any;
    link?: boolean;
    css?: object;
    target?: Types['target'];
    position?: Types['position'];
    onClick?: () => void;
    children?: React.ReactNode;
}
