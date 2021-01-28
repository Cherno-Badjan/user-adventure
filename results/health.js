export function scoreHealth(health) {
    if (health <= 0) {
        return 'Avada Kedavra! You are dead!';
    } else if (health < 50) {
        return 'Crucio! You are in a lot of pain';
    }
    return 'Proper fit!';
}