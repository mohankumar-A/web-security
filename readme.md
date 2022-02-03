# Security Policy

- have to defend the external threats

## star of security

- Injections:
    - most comman attacks
    - most financial loss
    - sql injections:
        example:
            ```
                INSERT INTO sqlinjection (email) VALUES ('lol');
                INSERT INTO sqlinjection (email) VALUES (''; DROP Table sqlinjection; -- );
                above query will drop the query
                -- means comment everything
            ```
        to fix:
        - sanitize input
        - parametriz quieries
        - knex.js or other ORMS (Object Relational Mapping).

        ### Exercise: #1 - Injections
        To try your own SQL Injection, here is a great exercise you can do to see its power. You may need to login to perform the exercise, but it should be completely free for you to do this. The exercise can be found at this link:

        [SQL Injection](https://www.hacksplaining.com/exercises/sql-injection)

        ### Exercise: #2 - Security Files
        In the previous lecture, plus the upcoming ones, I will be using the security exercise files I have created. I recommend you clone these repositories and follow along the videos and play around yourself as well with the security techniques you learn.

        As always, you can discuss any experiments and questions in our Discord community and going into the #juniortosenior channel!

        [Front End Code](https://github.com/aneagoie/security-client-exercise)
        [Back End Code](https://github.com/aneagoie/security-server-exercise)

- 3rd party libraries:
    - npm audit

    If you have NPM version 6 or higher, npm has finally added security as a built-in feature when downloading packages (yey!). You will get notified of security vulnerabilities in the packages you install now. For more information, please read this: https://medium.com/npm-inc/announcing-npm-6-5d0b1799a905

    Now you can just simply use `npm audit fix` command.

- Logging:
    - should have good logging
    - how can we do this?
        - winston, morgan
        - npm install winston (recommended to use in production)
        - npm install morgan

- HTTPS Everywhere:
    - SSL/TLS certificate
    - https://letsencrypt.com
    - https://cloudflare.com

- XSS & CSRF:
    - cross site scripting (session hijacking)
    - cross site request forgery
        - santize the input
        - no eval()
        - no document.write()
        - content security policy
        - Secure + HTTPOnly cookie
        use csurf npm package

    Exercise: #3 - XSS + CSRF
    It's time to try your hand at doing some bad things... but luckily in a safe playground. Try the below two exercises to get a better idea of how XSS and CSRF are used by malicious hackers:

    1. [XSS](https://www.hacksplaining.com/exercises/xss-stored)
    2. [CSRF](https://www.hacksplaining.com/exercises/csrf)

    Resources: XSS + CSRF
    To learn a little bit more about some topics covered in the previous video, here are my recommended resources:

    [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
    [Cookies with HTTPOnly and Secure headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

- Code secrets
    Environmental variables
        dotenv npm package to secure passwords, api keys
    Commit history
        no secret file in commit history (git hub)
        remove password in git hub will show lot of repo committed with password

- Secure Headers
    use helmet npm lib

    resources:

    1. If you are new to HTTP: https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177
    2. To learn a little bit more about HTTP Headers: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    3. HTTP Header Fields: https://www.tutorialspoint.com/http/http_header_fields.htm
    4. Helmet package documentation: https://github.com/helmetjs/helmet

- Access control
    principal of least previlage

    cors (cross origin resource sharing)
    cors npm package
    white listing domain for access

- data management
    bcrypt, scrypt, aragon2
    pgcrypto - encrypts a few coloumn

    resource:
    [reading it here](https://rangle.io/blog/how-to-store-user-passwords-and-overcome-security-threats-in-2017/)

- dont trust anyone
    never trust anyone in any layer

- authentication
    traditional cookie based authentication
    mordern token based authentication

If this topic is interesting to you and you want to learn more about how hackers attack systems, I recommend you go through the free lessons and exercises provided here. It is a lot of fun!

https://www.hacksplaining.com/lessons

personal security:
Being secure in your day to day internet life is also important. I recommend this excellent resource for you to cover the basics: https://watchyourhack.com

[owasp](https://owasp.org/)