function isPalindrome(str)
{
    let j = str.length - 1
    for (let i = 0; i < str.length/2; i++)
    {
        if (str[i] != str[j])
        {
            return false;
        }
        j--;
    }
    return true;
}
let str1 = "121";
let str2 = "1234";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

