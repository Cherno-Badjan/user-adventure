export function scoreGalleons(galleons) {
    if (galleons === 0) {
        return 'Dobby Poor';
    } else if (galleons < 100) {
        return 'Weasley Poor';
    }
    return 'Malfoy Rich!';
}