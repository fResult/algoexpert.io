export function isValidSubsequence(array: number[], sequence: number[]) {
    return array.reduce(
        ({ seqIdx }, num) => ({
            seqIdx: num === sequence[seqIdx] ? seqIdx + 1 : seqIdx,
        }),
        { seqIdx: 0 }
    ).seqIdx === sequence.length;
}
