export function scoreGalleons(galleons) {
    if (galleons === 0) {
        return 'poor';
    } else if (galleons < 100) {
        return 'modest';
    }
    return 'rich';
}