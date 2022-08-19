import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SentMessageInfo } from 'nodemailer';

export enum EmailTemplate {
    CONTACT = "contact"
}

export class SendEmailDto {
    to: string
    subject: string
    template: EmailTemplate
    context: { [name: string]: any }
}

@Injectable()
export class EmailService {

    constructor(
        private readonly mailService: MailerService
    ) { }

    async sendEmail(sendEmailDto: SendEmailDto): Promise<SentMessageInfo> {
        return await this.mailService.sendMail({
            to: sendEmailDto.to,
            from: process.env.EMAIL,
            subject: sendEmailDto.subject,
            template: sendEmailDto.template,
            context: sendEmailDto.context
        })
    }
}
