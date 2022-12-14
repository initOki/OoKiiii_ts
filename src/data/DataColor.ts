export const DataColorSwitch = (name: string) => {
    switch (name) {
        case 'TypeScript':
            return 'rgba(44, 109, 188, 0.6)';
        case 'JavaScript':
            return 'rgba(238, 219, 87, 0.6)';
        case 'SCSS':
            return 'rgba(192, 72, 129, 0.6)';
        case 'Shell':
            return 'rgba(122, 220, 78, 0.6)';
        case 'CSS':
            return 'rgba(77, 53, 111, 0.6)';
        case 'HTML':
            return 'rgba(225, 66, 40, 0.6)';
        default:
            return 'rgba(255, 255, 255, 0.6)';
    }
};
