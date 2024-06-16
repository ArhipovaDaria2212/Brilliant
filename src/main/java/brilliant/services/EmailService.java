package brilliant.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendConfirmationEmail(String to, String token) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("daria221220042017@gmail.com");
        message.setTo(to);
        message.setSubject("Подтверждение регистрации");
        message.setText("Для подтверждения регистрации перейдите по ссылке: http://localhost:8080/auth/confirm?token=" + token);
        javaMailSender.send(message);
    }
}
