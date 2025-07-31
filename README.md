push = নতুন এলিমেন্ট শেষে যুক্ত করা
pop = শেষের এলিমেন্ট ডিলিট করা
shift = প্রথম এলিমেন্ট ডিলিট করা
unshift = প্রথমে নতুন এলিমেন্ট যুক্ত করা
includes = এলিমেন্ট সার্চ করা। বা আছে কিনা যাচাই করা। 
indexOf = এই এলিমেন্ট কত ইন্ডেক্সে আছে যানা
isArray = এটা কি একটি এরে, যাচাই করা
join = এরের উপাদানগুলো স্টিং এ কনভার্ট করে দেখতে। এখানে , + বা সিম্বল ডিভাইন করতে হবে। না করলে , হবে।
concat = দুইটি এ্যারেকে একটি এ্যারে করা।
            slice(2,5) এখানে ২ এর শুরু থেকে ৫ এর শুরু অর্থাৎ ৪ পর্যন্ত রাখবে।
slice = একটি এরের কিছু অংশ নিয়ে নতুন এরে তৈরি
        numbers.slice(3, 7) এখানে ইনডেক্স ৩ থেকে ৭ পর্যন্ত অর্থাৎ ৬ পর্যন্ত নেয়া হবে।
splice = কিছু অংশ নিয়ে কিছু বাদ দিয়ে নতুন  এরে তৈরি। 
        splice(5, 2) এখানে ৫নং  এলিমেন্ট থেকে শুরু করে ২টি এলিমেন্ট নেয়া হবে।
        splice(2) এখানে ২ থেকে সবগুলো রিমুভ করে দিবে।



js-array-tasks
1. Declare an array
Declare an array with 5 elements containing fruits
console log the 3rd index element
change the value of the 2nd index element to jambura
console log the final array
2. Add or remove elements
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
3. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.

4. Checking if it's an Array
Instructions:

Create different variables, each containing either an array or a non-array value.

Now use isArray to check if each variable is an array.

Print a message to the console indicating whether each variable is an array or not.

5. Combining Arrays
Instructions:

Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().