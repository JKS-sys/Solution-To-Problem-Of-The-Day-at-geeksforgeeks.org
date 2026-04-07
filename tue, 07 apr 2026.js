class Solution {
  stableMarriage(men, women) {
    const n = men.length;
    // womenRank[w][m] = rank of man m in woman w's preference list (0 = highest)
    const womenRank = Array.from({ length: n }, () => new Array(n));
    for (let w = 0; w < n; w++) {
      for (let rank = 0; rank < n; rank++) {
        const m = women[w][rank];
        womenRank[w][m] = rank;
      }
    }

    // current partner of each woman, -1 if free
    const womenPartner = new Array(n).fill(-1);
    // next woman index to propose for each man
    const nextProposal = new Array(n).fill(0);
    // current partner of each man, -1 if free (optional, can be derived later)
    const menPartner = new Array(n).fill(-1);

    // queue of free men (those not yet engaged)
    const queue = [];
    for (let i = 0; i < n; i++) queue.push(i);

    while (queue.length > 0) {
      const man = queue.shift();
      // get the next woman to propose to
      const woman = men[man][nextProposal[man]];
      nextProposal[man]++;

      if (womenPartner[woman] === -1) {
        // woman is free, engage
        womenPartner[woman] = man;
        menPartner[man] = woman;
      } else {
        const currentMan = womenPartner[woman];
        // check if this woman prefers the new man over her current partner
        if (womenRank[woman][man] < womenRank[woman][currentMan]) {
          // woman prefers new man, switch partners
          womenPartner[woman] = man;
          menPartner[man] = woman;
          menPartner[currentMan] = -1;
          queue.push(currentMan); // current man becomes free again
        } else {
          // woman rejects, man stays free
          queue.push(man);
        }
      }
    }

    // result[i] = woman matched to man i
    return menPartner;
  }
}
