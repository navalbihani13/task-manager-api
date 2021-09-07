const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'bihani.naval13@gmail.com',
		subject: 'Welcome to our Task App!!!',
		text: `Welcome to the app, ${name}. Fulfill your big goals by creating your small tasks!!!`,
	});
};

const sendCancelEmail = (email, name) => {
	sgMail.send({
		to: email,
		from: 'bihani.naval13@gmail.com',
		subject: `GoodBye, ${name}`,
		text: 'I hope you have Fulfill Your dreams through our task app!!!',
	});
};

module.exports = {
	sendWelcomeEmail,
	sendCancelEmail,
};
