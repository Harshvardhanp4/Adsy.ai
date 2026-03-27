// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from '@sentry/node'

Sentry.init({
    dsn: "https://84201b69b979534cf885349ab9d6c0bc@o4511109295767552.ingest.de.sentry.io/4511109303369808",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});