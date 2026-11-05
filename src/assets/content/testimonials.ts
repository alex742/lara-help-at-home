interface Testimonial {
    quote: string;
    name: string;
    jobTitle: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        quote:"I worked in-house with Lara as part of a Managing Editorial team, and found her to be an accurate and diligent copy-editor and proofreader with excellent digital mark-up skills. I’m looking forward to working with her again as she embarks on her freelance career, which I have no doubt she’ll be well suited to.",
        name:"Rebecca Needes",
        jobTitle:"Editorial Manager for Tor",
        company:"Pan Macmillan",
    },
    {
        quote:"I had a big piece of editorial work that was fairly urgent, and Lara turned it around very quickly, even returning it before our deadline. I know I can trust Lara to do a great job, so will definitely be sending her some other work soon!",
        name:"Olivia Robertshaw",
        jobTitle:"Assistant Editor for HarperFiction",
        company:"HarperCollins",
    },
    {
        quote:"Lara has a brilliant editorial eye. No detail eludes her, no grammatical nuance is missed. She’s my go to freelancer and I can thoroughly recommend her for any edit.",
        name:"Morgan Springett",
        jobTitle:"Commissioning Editor for HarperFiction",
        company:"HarperCollins",
    },
    {
        quote:"Lara is a literary superstar who supported me with editing and submitting the opening chapter of my first novel. I always knew she had a knack for prose, but she suggested some really insightful techniques and approaches to use to help make my writing punchy and impactful moving forward. It is quite a complex and convoluted project, but she really got stuck in and familiarised herself with the world I’m building. I feel very validated in my ideas and I’ll definitely be reaching out to Lara again!",
        name:"Gina Agnew",
        jobTitle:"",
        company:"Independent author",
    }
]

export default testimonials;