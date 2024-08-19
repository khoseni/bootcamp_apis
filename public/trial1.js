document.addEventListener('alpine:init', () => {
    Alpine.data('wordGame', () => ({
        sentence: '',
        longestWord: '',
        shortestWord: '',
        sum: 0,
        error: '',

        async fetchData() {
            if (this.sentence.trim() === '') {
                this.error = 'Please enter a sentence.';
                return;
            }
            
            this.error = ''; // Clear previous errors

            try {
                const { data } = await axios.get('http://localhost:3007/api/wordgame?sentence=', { params: { sentence: this.sentence } });
                
                // Use destructuring and provide default values
                const {
                    longestWord = '',
                    shortestWord = '',
                    sum = 0
                } = data || {}; // Default to empty object if data is null or undefined

                // Update Alpine.js component properties
                this.longestWord = longestWord;
                this.shortestWord = shortestWord;
                this.sum = sum;

            } catch (error) {
                console.error(error);
                this.error = 'An error occurred while fetching data.';
            }
        }
    }));
});
