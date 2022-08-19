import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmailService, EmailTemplate, SendEmailDto } from 'src/common/email/email.service';
import { ContactusService } from './contactus.service';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateAnswerContactusDto } from './dto/update-answer-contactus';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { Contactus } from './entities/contactus.entity';

@Controller('contactus')
export class ContactusController {
  constructor(
    private readonly contactusService: ContactusService,
    private readonly mailService: EmailService
  ) { }

  @Post()
  create(@Body() createContactusDto: CreateContactusDto) {
    return this.contactusService.create(createContactusDto);
  }

  @Get()
  findAll(@Query('page') page: number) {
    return this.contactusService.findAll(page);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactusService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAnswerDto: UpdateAnswerContactusDto) {
    const contactus: Contactus = await this.contactusService.update(+id, updateAnswerDto)

    const sendEmailDto: SendEmailDto = new SendEmailDto()
    sendEmailDto.to = contactus.contactus_email
    sendEmailDto.subject = contactus.contactus_title
    sendEmailDto.template = EmailTemplate.CONTACT
    sendEmailDto.context = {
      answer: contactus.contactus_answer
    }

    await this.mailService.sendEmail(sendEmailDto)

    return ""
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactusService.remove(+id);
  }
}
