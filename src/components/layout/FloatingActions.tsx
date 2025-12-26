import { useTranslation } from 'react-i18next';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
    const { t } = useTranslation();

    const whatsappNumber = "251974744444";
    const phoneNumber = "+251974744444";
    const encodedMessage = encodeURIComponent(t('whatsapp_message'));

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
            <a
                href={`tel:${phoneNumber}`}
                className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group relative"
                title={t('btn_call')}
            >
                <Phone className="w-6 h-6" />
                <span className="absolute right-full mr-4 bg-brand-dark px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {t('btn_call')}
                </span>
            </a>
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group relative"
                title={t('btn_whatsapp')}
            >
                <MessageCircle className="w-7 h-7" />
                <span className="absolute right-full mr-4 bg-brand-dark px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {t('btn_whatsapp')}
                </span>
            </a>
        </div>
    );
}
