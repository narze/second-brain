---
title: "Amazon SES Setup"
---

- Create new domain identity to be able to *send* emails.
- Create new test email identity to be able to *receive* test emails.
- Add domain eg. `subdomain.example.com`
- Add **DomainKeys Identified Mail (DKIM)** DNS records
	eg. CNAME xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx._domainkey.xxxxx-staging.opn.dev -> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.dkim.amazonses.com 
- Create IAM for _AmazonSESFullAccess_ (development only)
- ![[Amazon-SES-request-production-access.png]] Request production mode to send actual emails (Sandbox mode cannot send emails)

## Node.js development
- `yarn add aws-sdk`

# References
- https://medium.com/@maciej.lisowski.elk/nodejs-and-amazon-ses-how-to-send-emails-from-your-application-5c24b1f9b67b
- https://attacomsian.com/blog/amazon-ses-integration-nodejs/
- https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html