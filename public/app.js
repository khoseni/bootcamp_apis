document.addEventListener("alpine:init", () => {
    Alpine.data('wordGameWidget', () => ({
        sentence: '',
        longestWord: '',
        shortestWord: '',
        wordLengths: '',

        async checkSentence() {
            try {
                const response = await axios.get(`http://localhost:3007/api/wordgame/?sentence=${this.sentence}`);
                const data = response.data;

                this.longestWord = data.longestWord;
                this.shortestWord = data.shortestWord;
                this.wordLengths = data.sum;

                // Clear values after 7 seconds
                setTimeout(() => {
                    this.sentence = '';
                    this.longestWord = '';
                    this.shortestWord = '';
                    this.wordLengths = '';
                }, 7000);
            } catch (error) {
                alert('Error fetching data: ' + error.message);
            }
        }
    }));

    Alpine.data('phoneBillWidget', () => ({
        billStr: '',
        billMessage: '',
    
        async phoneBill() {
            try {
                const response = await axios.post('http://localhost:3007/api/phoneBill/total', { bill: this.billStr });
                const total = response.data.total;
    
                this.billMessage = `Total: R${total}`;
    
                // Clear values after 5 seconds
                setTimeout(() => {
                    this.billMessage = '';
                    this.billStr = '';
                }, 5000);
            } catch (error) {
                alert('Error fetching data: ' + error.message);
            }
        }
    }));
    

    Alpine.data('enoughAirtimeWidget', () => ({
        usage: '',
        available: '',
        billMessage: '',

        async enoughAirtimeBill() {
            try {
                const response = await axios.post('http://localhost:3007/api/enough', { usage: this.usage, available: this.available });
                const result = response.data.result;

                this.billMessage = `Total Bill: R${result}`;

                // Clear values after 5 seconds
                setTimeout(() => {
                    this.billMessage = '';
                    this.usage = '';
                    this.available = '';
                }, 5000);
            } catch (error) {
                alert('Error fetching data: ' + error.message);
            }
        }
    }));
});
