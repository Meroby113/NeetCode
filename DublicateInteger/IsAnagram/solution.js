class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        var hash_s = {}
        var hash_t = {}
        for(let i of s) {
            hash_s.get(i) += 1 + (hash_s.get(i) || 0);
        }

        for(let i of t) {
            hash_t.get(i) += 1 + (hash_t.get(i) || 0);
        }

        if(hash_s.size == hash_t.size) return true;
        return false;
    }

    
}
