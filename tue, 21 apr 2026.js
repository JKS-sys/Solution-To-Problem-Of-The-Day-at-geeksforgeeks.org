class Solution {
  // Main method to find minimum steps
  minSteps(m, n, d) {
    // If target is larger than both jugs, impossible
    if (d > Math.max(m, n)) return -1;

    // If target is not a multiple of gcd(m, n), impossible
    if (d % this.gcd(m, n) !== 0) return -1;

    // Try both starting strategies: fill m first or fill n first
    const steps1 = this.simulate(m, n, d);
    const steps2 = this.simulate(n, m, d);

    return Math.min(steps1, steps2);
  }

  // Simulate the process by always filling the startJug first
  simulate(startCap, otherCap, target) {
    let jugA = 0; // jug we fill first (capacity startCap)
    let jugB = 0; // other jug (capacity otherCap)
    let steps = 0;

    // Upper bound to prevent infinite loops (safe for all valid inputs)
    const maxSteps = 2 * (startCap + otherCap) + 10;

    while (jugA !== target && jugB !== target) {
      if (steps > maxSteps) return Infinity;

      if (jugA === 0) {
        // Fill the first jug
        jugA = startCap;
        steps++;
      } else if (jugB === otherCap) {
        // Empty the second jug
        jugB = 0;
        steps++;
      } else {
        // Pour from first jug to second jug
        const pour = Math.min(jugA, otherCap - jugB);
        jugA -= pour;
        jugB += pour;
        steps++;
      }
    }

    return steps;
  }

  // Helper to compute greatest common divisor
  gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}
