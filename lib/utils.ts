import winston from 'winston';
import { createLogger, transports, format } from 'winston';
import {
    CloudWatchLogsClient,
    CreateLogGroupCommand,
    CreateLogStreamCommand,
    DescribeLogGroupsCommand,
    PutLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';

const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];

const region = 'us-west-1';
const logGroupName = 'my-little-shop';
const logStreamName = formattedDate;
const cw = new CloudWatchLogsClient({ region });

export const logger = createLogger({
    level: 'info', // Default log level
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf((info) => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`),
    ),
    transports: [
        new transports.Console(), // Log to the console
        new transports.File({ filename: 'combined.log' }), // Log to a file
    ],
});

// You can also dynamically add a console transport if not in production
if (process.env.APP_ENV !== 'production') {
    logger.add(
        new transports.Console({
            format: format.combine(format.colorize({ all: true }), format.simple()),
            level: 'debug', // Show debug messages in development
        }),
    );
}

export function getFormattedDate(date: Date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
}

export async function LogToCloudWatch(message: string) {
    try {
        EnsureLogGroupAndStreamExist(logGroupName, logStreamName);

        const params = {
            logGroupName: logGroupName,
            logStreamName: logStreamName,
            logEvents: [
                {
                    message: message,
                    timestamp: Date.now(),
                },
            ],
        };
        await cw.send(new PutLogEventsCommand(params));
    } catch (err) {
        console.log('LogToCloudWatch:Error', err);
    }
}

async function EnsureLogGroupAndStreamExist(logGroupName: string, logStreamName: string) {
    try {
        // Create log group (ignore if exists)
        await cw.send(new CreateLogGroupCommand({ logGroupName }));
    } catch (error: any) {}

    try {
        // Create log stream (ignore if exists)
        await cw.send(
            new CreateLogStreamCommand({
                logGroupName,
                logStreamName,
            }),
        );
    } catch (error: any) {}
}

export function StripHtmlTags(html: string) {
    return html.replace(/(<([^>]+)>)/gi, '');
}

export function FormatPhone(phone: string) {
    // '+1 530 221 4545 is passed in'
    const clean = phone.replace(/\D/g, '').slice(1);
    const match = clean.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phone;
}
