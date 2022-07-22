# A NodeJs Email-Sender Application (Zuri internship)

# Description

*This is a Zuri Internship Task for the backend track (NodeJs)*

A NodeJs application to send an automated email to a Gmail account from your NodeJs Server, using the NodeJs email sender package(Nodemailer), Nodemailer is a Node.js module that allows you to send emails from your NodeJs server with ease, in this case to send an email to my Gmail accouunt. 

# Instructions to use the app

1. Make sure you have *Node* and *npm* installed.
2. Create a directory and initialize the project with a *package.json* file
3. Install express, and create an index.js file to paste the index.js file code there
4. Run the server using the node index.js command.
5. Proceed to install the nodemailer package, the Nodemailer API requires us to create a *Transporter object* , a *MailOptions object* and a *Transporter.sendMail method*.
6. Create a transporter object and copy and paste the code there, apart from the user and pass keys which are your own credentials, all other credentials have to be retrieved after setting up OAuth.
7. If you dont have a Google Cloud Account, make sure you set one up as a prerequisite, CLICK ON THIS [LINK](https://www.freecodecamp.org/news/use-nodemailer-to-send-emails-from-your-node-js-server/) and navigate down to the Google Cloud Platform Configurations to complete your setup.
8. After completing all the configurations, return back to the application and fill in all the data into the transporter object, to keep all your credentials private, use the [dotenv package](https://www.npmjs.com/package/dotenv).
9. Next step is to create the mailOptions object and put your prefered sending and receiving gmail accounts, with a subject, and a content.
10. Last step is to use the sendMail object and run the application, then the mail inbox will get populated with new emails.

# Screenshot of the sent email.

![sc_zuri](https://user-images.githubusercontent.com/88833464/179644235-19afd48a-2a92-402c-a4c4-c05d1039d3dc.jpg)
