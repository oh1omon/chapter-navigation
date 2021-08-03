# [Chapter Navigation](https://chapter-navigation.netlify.app)

---

### Hello there! To be short, I would like to describe the project in two words.

This project represents an interactive and hyperlinked rulebook for a card game. As a source, it takes [these rules](https://media.wizards.com/2021/downloads/MagicCompRules%2020210419.txt 'Magic: The Gathering rules'). Then the actual magic happens, and this rulebook is being presented to the user in an interactive form. Voila!

---

### Here comes a bit more technically descriptive part.

I have tried to implement here all the Front-End knowledge that I have got for now. Let's see what is inside!

-   React as a base library
-   TypeScript for strict typing
-   Redux as a state container
-   React-Router for routing inside the app
-   React Testing Library for testing App components

Also, I have used some 'hacks' for better performance and ease of use

For example,

-   Components that are getting rerendered to often with same props are wrapped into React.Memo
-   I have created a quite easy [server](https://cors-anywhere-oh1.herokuapp.com) ([GitHub](https://github.com/oh1omon/chapter-navigation-server)) for this app,
    that has
    only one functionality – to let Front-End fetch txt file. If we are fetching this file without this server, then we will get
    problems with CORS, and file fetching will get impossible

---

### To start:

-   Create .env file, where you put this string:

```
REACT_APP_BE_URL=*Link to your cors-anywhere server*
```

Remember, that your link should end with dash char (/)

-   npm start

---

### VCS

I am using Git Flow for organizing branches and VCS, and Standard Version for making changes to CHANGELOG.md and versions
