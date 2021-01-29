export function scoreHealth(health) {
    if (health <= 0) {
        return 'dead';
    } else if (health < 50) {
        return 'frail';
    }
    return 'fit ';
}