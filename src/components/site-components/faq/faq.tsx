import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    { question: 'Nasıl Ürün Satın Alacağım?', answer: '** Öncelikle sitemize üye olmanız gerekmektedir. Bunu sizlerin güvenliği ve ürünlerimizin insanlar tarafından nasıl görüntüleneceği hakkında bilgi ve deneyimlerinizi paylaşmanızı da istiyoruz.' },
    { question: 'İade Gerçekleştirmek için ne Yapmalıyım?', answer: '** Öncelikle aldığınız ürünün satın aldığınızda verilmiş kod ile bizlere gönderin ilgileneceğiz!' },
    { question: 'Kayıt Nasıl Olurum?', answer: '** Sitemizin Sağ üst köşesinde bulunan alana tıklayarak gerekli adımları takip ediniz.' },
];

export const FAQ = () => {
    return (
        <div className='container-fluid' style={{width:"100%", height:"85vh",display:"flex", alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <Typography variant="h5" component={"h3"}>Sıkça Sorulan Sorular</Typography>
            {faqItems.map((item, index) => (
                <Accordion key={index} sx={{width:"1200px"}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h6' component={"h6"}>{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};
