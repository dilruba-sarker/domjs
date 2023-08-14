const quotes = [
    {
         person: "Albert Einstein",
          quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world." },
    { person: "Maya Angelou", 
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." },
    { person: "Nelson Mandela",
     quote: "Education is the most powerful weapon which you can use to change the world." },
    { person: "Mahatma Gandhi",
     quote: "The best way to find yourself is to lose yourself in the service of others." },
    { person: "Oprah Winfrey", 
    quote: "The biggest adventure you can take is to live the life of your dreams." },
    { person: "Walt Disney",
     quote: "The way to get started is to quit talking and begin doing." },
    { person: "Eleanor Roosevelt", 
    quote: "No one can make you feel inferior without your consent." },
    { person: "Steve Jobs", 
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work." },
    { person: "Martin Luther King Jr.", 
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." },
    { person: "J.K. Rowling",
     quote: "It is our choices that show what we truly are, far more than our abilities." }
  ];
  
document.querySelector("#quote").addEventListener("click",function(){
//    const p  = document.querySelector('quote-p')
//    const name = document.querySelector("#name")
   const p = document.getElementById("p-qote");
   const name = document.getElementById('name');
    const randomQuote=Math.floor(Math.random()*quotes.length);
    console.log( quotes [randomQuote].quote);
    console.log( quotes [randomQuote].person);

    p.innerText = quotes[randomQuote].quote;
    name.innerText = quotes[randomQuote].person;
 
})
  