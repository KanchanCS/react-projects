const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filternum = num.filter((num) => {
    return (
        // num % 2 === 0 && num % 3 === 0
        num>4
    )
})
console.log(filternum);
