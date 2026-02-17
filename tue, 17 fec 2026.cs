using System;
using System.Collections.Generic;

class Solution {
    public int overlapInt(int[][] arr) {
        // Create a list of events: (position, isStart)
        var events = new List<(int pos, bool isStart)>();
        
        foreach (var interval in arr) {
            events.Add((interval[0], true));  // start event
            events.Add((interval[1], false)); // end event
        }
        
        // Sort events by position. If positions are equal, start events come before end events
        // to correctly handle inclusive intervals (two intervals overlapping at a point).
        events.Sort((a, b) => {
            if (a.pos != b.pos)
                return a.pos.CompareTo(b.pos);
            // If positions equal: start (true) should come before end (false)
            return a.isStart.CompareTo(b.isStart) * -1; // true => -1, false => 1
        });
        
        int count = 0;
        int maxOverlap = 0;
        
        // Sweep through events
        foreach (var e in events) {
            if (e.isStart)
                count++;
            else
                count--;
            
            if (count > maxOverlap)
                maxOverlap = count;
        }
        
        return maxOverlap;
    }
}