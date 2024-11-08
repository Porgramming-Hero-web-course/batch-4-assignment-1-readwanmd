/**
 Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
Example:
Input: "I love typescript", "typescript"
Output: 1
Sample Input:
countWordOccurrences("I love typescript", "typescript");
Sample Output:
1;
 */

type CountWord = (sentence: string, word: string) => number;

const countWordOccurrences: CountWord = (sentence, word) => {
	const sentenceToWords = sentence.toLowerCase().split(' ');

	let count = 0;
	sentenceToWords.forEach((w) => {
		if (w.includes(word.toLocaleLowerCase())) {
			count++;
		}
	});

	return count;
};

console.log(
	countWordOccurrences(
		'I love typescript, typescript is essential for every dev now a days.',
		'typescript'
	)
);
