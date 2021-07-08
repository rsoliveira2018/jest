module.exports = {
    sum: notes => {
        if(Math.min(...notes)) {
            const result = notes.reduce((acc, note) => {
                if(note > 9) note *= 2;
                acc += note;
                return acc;
            }, 0)
            return (notes.length > 5) ? result * 2 : result;
        }
        return 0;        
    },

    avg: notes =>{
        if(Math.min(...notes) === 0) return 0;
        if(notes) {
            let total = 0;
            let count = 0;
            notes.forEach(element => {
                total += element;
                count++;
            });
            return (total / count);
        }
    }
}